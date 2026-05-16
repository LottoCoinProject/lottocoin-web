"use client";

import { motion } from "framer-motion";
import { PieChart, TrendingUp, Clock, Award } from "lucide-react";

export default function TokenomicsPage() {
  const distribution = [
    { label: "Mining Rewards", value: 85.7, amount: "18,000,000", color: "from-purple-500 to-purple-600" },
    { label: "Streak Bonuses", value: 4.3, amount: "900,000", color: "from-pink-500 to-pink-600" },
    { label: "Liquidity", value: 3.0, amount: "630,000", color: "from-blue-500 to-blue-600" },
    { label: "Airdrop", value: 2.0, amount: "420,000", color: "from-cyan-500 to-cyan-600" },
    { label: "Team", value: 2.0, amount: "420,000", color: "from-indigo-500 to-indigo-600" },
    { label: "Treasury", value: 3.0, amount: "630,000", color: "from-violet-500 to-violet-600" },
  ];

  const phases = [
    { phase: 1, blocks: "0-10,000", reward: 480, total: "4,800,000", days: 35 },
    { phase: 2, blocks: "10,001-20,000", reward: 380, total: "3,800,000", days: 35 },
    { phase: 3, blocks: "20,001-30,000", reward: 290, total: "2,900,000", days: 35 },
    { phase: 4, blocks: "30,001-40,000", reward: 240, total: "2,400,000", days: 35 },
    { phase: 5, blocks: "40,001-50,000", reward: 190, total: "1,900,000", days: 35 },
    { phase: 6, blocks: "50,001-54,000", reward: 330, total: "1,320,000", days: 14 },
    { phase: 7, blocks: "54,001-63,800", reward: 95, total: "880,000", days: 34 },
  ];

  const streakBonuses = [
    { streak: "1-9 blocks", bonus: "0%", example: "48 LOTTO" },
    { streak: "10-49 blocks", bonus: "+10%", example: "52.8 LOTTO" },
    { streak: "50-99 blocks", bonus: "+25%", example: "60 LOTTO" },
    { streak: "100+ blocks", bonus: "+50%", example: "72 LOTTO" },
  ];

  return (
    <div className="relative pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fair distribution, sustainable emission, and community-first allocation. 
            21M total supply, 90% to miners.
          </p>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Supply", value: "21,000,000", suffix: "LOTTO" },
            { label: "To Miners", value: "90%", suffix: "18.9M LOTTO" },
            { label: "Mining Duration", value: "~7.4", suffix: "months" },
            { label: "Block Time", value: "5", suffix: "minutes" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="text-xs text-purple-400 mt-1">{stat.suffix}</div>
            </motion.div>
          ))}
        </div>

        {/* Distribution */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <PieChart className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Token Distribution</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart (visual representation) */}
            <div className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
              <div className="space-y-4">
                {distribution.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-gray-400">{item.value}%</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-sm text-gray-400">{item.amount} LOTTO</div>
                    </div>
                    <div className="text-2xl font-bold gradient-text">{item.value}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Emission Schedule */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Emission Schedule</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Phase</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Blocks</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Base Reward</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Total Minted</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Duration</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((phase, index) => (
                  <motion.tr
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                        Phase {phase.phase}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-300">{phase.blocks}</td>
                    <td className="px-4 py-4 font-semibold">{phase.reward} LOTTO</td>
                    <td className="px-4 py-4 text-gray-300">{phase.total} LOTTO</td>
                    <td className="px-4 py-4 text-gray-400">{phase.days} days</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <p className="text-sm text-gray-300">
              <strong className="text-purple-400">Note:</strong> Base rewards shown above. 
              With streak bonuses, effective rewards are ~500-100 LOTTO per block. 
              Total distributed: ~18,900,000 LOTTO over 7.4 months.
            </p>
          </div>
        </motion.section>

        {/* Streak Bonuses */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Streak Bonuses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streakBonuses.map((item, index) => (
              <motion.div
                key={item.streak}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="text-sm text-gray-400 mb-2">{item.streak}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{item.bonus}</div>
                <div className="text-sm text-gray-300">Example: {item.example}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-xl">
            <h3 className="text-xl font-bold mb-3">How Streak Bonuses Work</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Submit every block to maintain your streak</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Win or lose doesn't matter - only submission counts</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Bonuses paid from block rewards (no separate pool)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Encourages long-term participation and consistency</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Clock className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Circulating Supply Timeline</h2>
          </div>

          <div className="space-y-4">
            {[
              { time: "Launch", supply: "1,050,000", percent: 5 },
              { time: "Month 1", supply: "9,690,000", percent: 46 },
              { time: "Month 3", supply: "14,690,000", percent: 70 },
              { time: "Month 6", supply: "18,690,000", percent: 89 },
              { time: "Month 8", supply: "21,000,000", percent: 100 },
            ].map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{item.time}</span>
                  <span className="text-gray-400">{item.supply} LOTTO ({item.percent}%)</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
