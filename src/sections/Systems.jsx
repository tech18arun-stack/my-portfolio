import React from 'react';
import { motion } from 'framer-motion';
import { Server, ShieldCheck, Globe, Activity, Terminal, Database } from 'lucide-react';

const Systems = () => {
  const infraDetails = [
    { icon: <Server size={24} />, title: "Linux Nginx", desc: "Expert root management, reverse proxy, and SSL hardening." },
    { icon: <ShieldCheck size={24} />, title: "Self-Hosted", desc: "Deploying Appwrite & custom backends on independent nodes." },
    { icon: <Activity size={24} />, title: "Zero Downtime", desc: "CI/CD pipelines for seamless updates without service interruption." },
    { icon: <Globe size={24} />, title: "Edge Control", desc: "Configuring subdomains and globally distributed system logic." }
  ];

  return (
    <section className="py-32 px-4 relative bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs mb-6 uppercase italic">Infrastructure Layer</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10">
              DEPLOYMENT <br /> <span className="text-gradient">ARCHITECTURE.</span>
            </h3>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl mb-12">
              Beyond the code, I architect the environments where it lives. From bare-metal Linux servers to high-availability Nginx configurations, I ensure your product is resilient, secure, and always online.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {infraDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group"
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-black text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative glass rounded-[3rem] p-8 md:p-12 border border-white/10 overflow-hidden group">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Live Server Status</span>
            </div>

            <div className="space-y-10">
              {/* Fake System Node */}
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/20 flex items-center justify-center text-blue-500">
                    <Database size={32} />
                 </div>
                 <div className="flex-grow space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                       <span>Appwrite Production</span>
                       <span className="text-green-500">Online</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        className="h-full bg-blue-500"
                        transition={{ duration: 1.5 }}
                       ></motion.div>
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-[1.5rem] bg-purple-600/20 flex items-center justify-center text-purple-500">
                    <Terminal size={32} />
                 </div>
                 <div className="flex-grow space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                       <span>Nginx Node Traffic</span>
                       <span>8.4k req/s</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        className="h-full bg-purple-500"
                        transition={{ duration: 1.5, delay: 0.3 }}
                       ></motion.div>
                    </div>
                 </div>
              </div>

              <div className="p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] space-y-2">
                 <p className="text-gray-500"># System Diagnostics</p>
                 <p className="text-green-500">❯ Running health check for agriflow.websitescorp.com...</p>
                 <p className="text-blue-400">❯ SSL Status: Valid (Auto-renew enabled via Certbot)</p>
                 <p className="text-yellow-400">❯ Reverse Proxy: Active [Nginx]</p>
                 <p className="animate-pulse">❯ All systems operational.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Systems;
