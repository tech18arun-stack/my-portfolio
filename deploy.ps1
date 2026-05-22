# Arun's Premium Portfolio Deployment Script (V4 - SSL Fix Focus)
$SERVER_IP = "100.110.78.25"
$SERVER_PORT = "55222"
$USER = "server"
$REMOTE_PATH = "/home/server/My_Sites/arun"
$DOMAIN = "arun.websitescorp.com"

Write-Host ">>> Starting SSL-Focused Deployment..." -ForegroundColor Cyan

# 1. Build
npm run build

# 2. Zip
if (Test-Path "portfolio_deploy.zip") { Remove-Item "portfolio_deploy.zip" }
Compress-Archive -Path dist\* -DestinationPath portfolio_deploy.zip

# 3. Upload
scp -P $SERVER_PORT portfolio_deploy.zip nginx_template.conf "$USER@$SERVER_IP`:$REMOTE_PATH"

# 4. Remote Setup
$REMOTE_CMD = @"
cd $REMOTE_PATH
unzip -o portfolio_deploy.zip -d .
rm portfolio_deploy.zip

# Update Nginx config
sudo cp nginx_template.conf /etc/nginx/sites-available/arun
sudo ln -sf /etc/nginx/sites-available/arun /etc/nginx/sites-enabled/arun
sudo chmod -R 755 $REMOTE_PATH

# --- SSL CERTIFICATE CHECK & INSTALL ---
echo 'Checking SSL status for $DOMAIN...'
if command -v certbot &> /dev/null; then
    # This command checks if a cert exists, and if not, it installs one.
    # It also automatically updates the Nginx config to use the new cert.
    sudo certbot --nginx --non-interactive --agree-tos --register-unsafely-without-email -d $DOMAIN
fi

sudo nginx -t
sudo systemctl restart nginx
echo '✅ Deployment complete. SSL should now be active for $DOMAIN.'
"@

ssh -t -p $SERVER_PORT "$USER@$SERVER_IP" $REMOTE_CMD
Write-Host ">>> Site live at: https://$DOMAIN" -ForegroundColor Green
