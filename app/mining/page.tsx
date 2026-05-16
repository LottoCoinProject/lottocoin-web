"use client";

import { motion } from "framer-motion";
import { Download, Terminal, Zap, Award, TrendingUp, Users } from "lucide-react";

export default function MiningPage() {
  return (
    <div className="relative pt-24 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Start Mining</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Download the miner, run it on any CPU, and start earning LOTTO. 
            Fair lottery system means everyone has a chance to win.
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl glow">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Download Miner</h2>
              <p className="text-gray-300">Choose your platform and start mining in minutes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { os: "Windows", version: "v1.0.0", size: "12 MB" },
                { os: "macOS", version: "v1.0.0", size: "11 MB" },
                { os: "Linux", version: "v1.0.0", size: "10 MB" },
              ].map((platform) => (
                <button
                  key={platform.os}
                  className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-xl transition-all duration-300 group"
                >
                  <Download className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xl font-bold mb-2">{platform.os}</div>
                  <div className="text-sm text-gray-400">{platform.version} • {platform.size}</div>
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/lottocoin/miner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                View source code on GitHub →
              </a>
            </div>
          </div>
        </motion.section>

        {/* Quick Start */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Terminal className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Quick Start Guide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Install & Configure",
                description: "Download miner, extract, and edit config.json with your wallet address"
              },
              {
                step: "2",
                title: "Run Miner",
                description: "Execute start_mining.sh (Linux/Mac) or start_mining.bat (Windows)"
              },
              {
                step: "3",
                title: "Earn Rewards",
                description: "Miner submits proofs every 5 minutes. Check dashboard for wins!"
              }
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Mining Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Mining Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Active Miners", value: "1,234", change: "+12%" },
              { icon: Zap, label: "Current Block", value: "5,678", change: "Live" },
              { icon: Award, label: "Block Reward", value: "480", suffix: "LOTTO" },
              { icon: TrendingUp, label: "Win Rate", value: "17.5%", change: "Avg" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                {stat.change && (
                  <div className="text-xs text-green-400 mt-1">{stat.change}</div>
                )}
                {stat.suffix && (
                  <div className="text-xs text-purple-400 mt-1">{stat.suffix}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Requirements */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">System Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-green-400">✓ Minimum</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CPU: Any modern processor (2+ cores)</li>
                <li>• RAM: 2 GB</li>
                <li>• Storage: 100 MB</li>
                <li>• Internet: Stable connection</li>
                <li>• OS: Windows 10+, macOS 10.15+, Linux</li>
              </ul>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-400">★ Recommended</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CPU: 4+ cores for better performance</li>
                <li>• RAM: 4 GB</li>
                <li>• Storage: 500 MB (for logs)</li>
                <li>• Internet: Low latency (&lt;100ms)</li>
                <li>• Wallet: MetaMask or hardware wallet</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl">
            <h3 className="text-xl font-bold mb-3">💡 Pro Tips</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Run 24/7 to build streak bonuses (up to 50% extra rewards)</li>
              <li>• Use dedicated machine or VPS for consistent uptime</li>
              <li>• Monitor logs for any errors or missed submissions</li>
              <li>• Join Discord for mining tips and community support</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
