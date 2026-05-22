import React, { useState, useEffect, useRef } from 'react';

const COMMANDS = [
  {
    cmd: "git commit -m \"feat: optimize-3d-renderer-performance\"",
    output: [
      "❯ git commit -m \"feat: optimize-3d-renderer-performance\"",
      "[main 8a2f7c1] feat: optimize-3d-renderer-performance",
      " 3 files changed, 142 insertions(+), 32 deletions(-)",
      "❯ git push origin main",
      "Counting objects: 100% (8/8), done.",
      "Delta compression using up to 16 threads",
      "To github.com:tech18arun-stack/my-portfolio.git",
      "   9a2f3d2..8a2f7c1  main -> main"
    ]
  },
  {
    cmd: "npm run build",
    output: [
      "❯ npm run build",
      "> portfolio@0.0.0 build",
      "> vite build",
      "vite v8.0.8 building client environment for production...",
      "transforming...",
      "✓ 1992 modules transformed.",
      "rendering chunks...",
      "dist/index.html                  1.82 kB",
      "dist/assets/index-D6572KqA.css  47.09 kB",
      "dist/assets/index-lotuqLZc.js  896.20 kB",
      "✓ built in 3.82s"
    ]
  },
  {
    cmd: "./deploy.ps1",
    output: [
      "❯ ./deploy.ps1",
      ">>> Starting SSL-Focused Deployment...",
      "Compressing dist/ archive into portfolio_deploy.zip...",
      "Uploading bundle to 100.110.78.25:55222...",
      "portfolio_deploy.zip   100%  943KB   9.4MB/s   00:00",
      "Unpacking bundle on remote site...",
      "Updating Nginx configuration to arun.websitescorp.com...",
      "Running SSL certificate check via Certbot...",
      "Certbot: SSL certificate active and valid.",
      "Restarting Nginx reverse proxy service...",
      "✅ Deployment complete. Site live at: https://arun.websitescorp.com"
    ]
  },
  {
    cmd: "curl -I https://arun.websitescorp.com",
    output: [
      "❯ curl -I https://arun.websitescorp.com",
      "HTTP/2 200 OK",
      "server: nginx/1.18.0 (Ubuntu)",
      "date: Wed, 20 May 2026 12:21:05 GMT",
      "content-type: text/html; charset=UTF-8",
      "content-length: 1824",
      "strict-transport-security: max-age=31536000",
      "x-frame-options: DENY",
      "x-content-type-options: nosniff",
      "status: ACTIVE [All Nodes Operational]"
    ]
  }
];

const CodeTerminal = () => {
  const [logs, setLogs] = useState([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    let active = true;
    const runTerminal = async () => {
      if (logs.length === 0) {
        setLogs([
          "Session initialized: system node core v12.18.2",
          "Connecting to deployment target server: 100.110.78.25...",
          "Connection secure. Ready for inputs.",
          ""
        ]);
        await new Promise(r => setTimeout(r, 1000));
      }

      while (active) {
        const item = COMMANDS[currentCmdIndex];
        setIsTyping(true);
        setTypedText("");

        for (let i = 0; i <= item.cmd.length; i++) {
          if (!active) return;
          setTypedText(item.cmd.slice(0, i));
          await new Promise(r => setTimeout(r, 40 + Math.random() * 30));
        }

        setIsTyping(false);
        await new Promise(r => setTimeout(r, 600));

        for (const line of item.output) {
          if (!active) return;
          setLogs(prev => [...prev, line]);
          await new Promise(r => setTimeout(r, 150 + Math.random() * 200));
        }

        setLogs(prev => [...prev, ""]);
        await new Promise(r => setTimeout(r, 2000));

        if (active) {
          setCurrentCmdIndex((prev) => (prev + 1) % COMMANDS.length);
        }
      }
    };

    runTerminal();

    return () => {
      active = false;
    };
  }, [currentCmdIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, typedText]);

  const renderLine = (line, idx) => {
    if (!line) return <div key={idx} className="h-4" />;
    
    if (line.startsWith("❯")) {
      return (
        <div key={idx} className="text-blue-400 font-bold">
          <span className="text-green-500 mr-1.5">server@arun-dev:~$</span>
          {line.replace("❯ ", "")}
        </div>
      );
    }
    if (line.includes("✅") || line.includes("Online") || line.includes("Valid") || line.includes("100%")) {
      return <div key={idx} className="text-green-400 font-semibold">{line}</div>;
    }
    if (line.includes("error") || line.includes("failed")) {
      return <div key={idx} className="text-red-400 font-semibold">{line}</div>;
    }
    if (line.startsWith(">>>") || line.includes("building") || line.includes("Uploading")) {
      return <div key={idx} className="text-yellow-400">{line}</div>;
    }
    if (line.includes("insertions(+)") || line.includes("deletions(-)")) {
      const parts = line.split(/(insertions\(\+\)|deletions\(-\))/);
      return (
        <div key={idx} className="text-gray-400">
          {parts.map((p, i) => {
            if (p === "insertions(+)") return <span key={i} className="text-green-400">{p}</span>;
            if (p === "deletions(-)") return <span key={i} className="text-red-400">{p}</span>;
            return <span key={i}>{p}</span>;
          })}
        </div>
      );
    }
    return <div key={idx} className="text-gray-300 opacity-85">{line}</div>;
  };

  return (
    <div className="w-full bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col font-mono text-[11px] leading-relaxed">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 font-sans">Diagnostics Terminal</span>
        </div>
        <div className="text-[9px] text-gray-500">bash • utf-8</div>
      </div>
      
      {/* Logs container */}
      <div 
        ref={containerRef}
        className="p-5 h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent space-y-1.5 flex flex-col"
      >
        {logs.map((line, idx) => renderLine(line, idx))}
        
        {isTyping && (
          <div className="text-blue-400 font-bold">
            <span className="text-green-500 mr-1.5">server@arun-dev:~$</span>
            {typedText}
            <span className="inline-block w-1.5 h-3 bg-blue-400 ml-1 animate-ping" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeTerminal;
