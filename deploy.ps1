# Arun's Premium Portfolio Deployment Script
# Targets: server@100.110.78.25 : Port 55222

$SERVER_IP = "100.110.78.25"
$SERVER_PORT = "55222"
$USER = "server"
$REMOTE_PATH = "/home/server/arun"

Write-Host ">>> Starting Deployment Process..." -ForegroundColor Cyan

# 1. Build the production bundle
Write-Host ">>> Building production bundle..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "[!] Build failed! Deployment aborted." -ForegroundColor Red
    exit
}

# 2. Package the build
Write-Host ">>> Zipping dist folder..." -ForegroundColor Yellow
if (Test-Path "portfolio_deploy.zip") { Remove-Item "portfolio_deploy.zip" }
Compress-Archive -Path dist\* -DestinationPath portfolio_deploy.zip

# 3. Upload to server
Write-Host ">>> Uploading files to server ($SERVER_IP)..." -ForegroundColor Yellow
$DESTINATION = "$USER@$SERVER_IP`:$REMOTE_PATH"
scp -P $SERVER_PORT portfolio_deploy.zip nginx_template.conf $DESTINATION

if ($LASTEXITCODE -ne 0) {
    Write-Host "[!] Upload failed! Check your connection or password." -ForegroundColor Red
    exit
}

# 4. Remote Extraction and Setup
Write-Host ">>> Running Server Commands..." -ForegroundColor Yellow
$SSH_TARGET = "$USER@$SERVER_IP"
$REMOTE_CMD = @"
cd $REMOTE_PATH
unzip -o portfolio_deploy.zip -d .
rm portfolio_deploy.zip
echo 'Files extracted. Configuring Nginx...'
sudo cp nginx_template.conf /etc/nginx/sites-available/arun
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/arun /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
echo '✅ Server environment synchronized successfully!'
"@

ssh -t -p $SERVER_PORT $SSH_TARGET $REMOTE_CMD

Write-Host ">>> Deployment Successful!" -ForegroundColor Green
Write-Host ">>> Access your site at: http://api.edizo.in" -ForegroundColor Cyan
