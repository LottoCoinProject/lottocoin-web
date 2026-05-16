"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Coins, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award,
  ArrowRight,
  Download,
  Sparkles
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Fair for Everyone",
      description: "Lottery-based mining where CPU miners compete equally with GPUs. Everyone has a chance to win."
    },
    {
      icon: Coins,
      title: "Predictable Rewards",
      description: "Fixed block rewards split among random winners. No winner-takes-all, sustainable distribution."
    },
    {
      icon: TrendingUp,
      title: "Streak Bonuses",
      description: "Consistent miners earn up to 50% bonus rewards. Long-term participation pays off."
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Chainlink VRF for provably fair randomness. Open-source smart contracts, audited."
    },
    {
      icon: Zap,
      title: "Low Barrier to Entry",
      description: "Only $0.01 per submission. Mine with any CPU, no expensive hardware required."
    },
    {
      icon: Award,
      title: "Community Driven",
      description: "90% to miners, DAO governance, no pre-mine. Built by the community, for the community."
    }
  ];

  const stats = [
    { label: "Total Supply", value: "21M", suffix: "LOTTO" },
    { label: "To Miners", value: "90%", suffix: "" },
    { label: "Block Time", value: "5", suffix: "min" },
    { label: "Submission Fee", value: "$0.01", suffix: "" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Fair Launch • No Pre-mine • Community First</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Fair Mining</span>
              <br />
              <span className="text-white">for Everyone</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Lottery-based cryptocurrency mining where <span className="text-purple-400 font-semibold">everyone has a chance to win</span>. 
              CPU-friendly, sustainable, and built for the community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Link
                href="/mining"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold transition-all duration-300 glow flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Start Mining</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/tokenomics"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold transition-all duration-300"
              >
                View Tokenomics
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  {stat.suffix && (
                    <div className="text-xs text-purple-400 mt-1">{stat.suffix}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="gradient-text">LottoCoin</span> Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple, fair, and transparent. Mine with any CPU and have a real chance to win.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Submit Proof",
                description: "Solve a light PoW puzzle and submit your proof with a $0.01 fee. No expensive hardware needed."
              },
              {
                step: "02",
                title: "Random Selection",
                description: "Every 5 minutes, 5-30% of valid submissions are randomly selected as winners using Chainlink VRF."
              },
              {
                step: "03",
                title: "Get Rewards",
                description: "Block reward is split equally among winners. Build streaks for up to 50% bonus rewards!"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="text-6xl font-bold text-purple-500/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">LottoCoin</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built different. Designed for fairness, sustainability, and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl glow"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start <span className="gradient-text">Mining</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of miners earning fair rewards. No expensive hardware, no unfair advantages.
            </p>
            <Link
              href="/mining"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold transition-all duration-300 text-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download Miner</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
