"use client";

import { motion } from "framer-motion";
import { Book, HelpCircle, FileText, Code } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of LottoCoin mining",
      links: [
        { label: "What is LottoCoin?", href: "#what-is" },
        { label: "How Mining Works", href: "#how-mining-works" },
        { label: "Installation Guide", href: "#installation" },
        { label: "First Steps", href: "#first-steps" },
      ]
    },
    {
      icon: Code,
      title: "Technical Docs",
      description: "Smart contracts and API reference",
      links: [
        { label: "Smart Contract", href: "#contract" },
        { label: "Lottery Mechanism", href: "#lottery" },
        { label: "Streak Bonuses", href: "#streaks" },
        { label: "API Reference", href: "#api" },
      ]
    },
    {
      icon: FileText,
      title: "Resources",
      description: "Whitepapers and additional materials",
      links: [
        { label: "Whitepaper", href: "/whitepaper.pdf" },
        { label: "Tokenomics", href: "/tokenomics" },
        { label: "GitHub", href: "https://github.com/lottocoin" },
        { label: "Audit Report", href: "#audit" },
      ]
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Frequently asked questions",
      links: [
        { label: "How do I start mining?", href: "#faq-mining" },
        { label: "What are streak bonuses?", href: "#faq-streaks" },
        { label: "How are winners selected?", href: "#faq-lottery" },
        { label: "Is it profitable?", href: "#faq-profit" },
      ]
    },
  ];

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
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about LottoCoin mining, tokenomics, and technical details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <p className="text-gray-400 mb-6">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
                    >
                      <span>→</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Full Documentation Coming Soon</h2>
          <p className="text-gray-300 mb-6">
            We're working on comprehensive documentation. In the meantime, join our Discord for support.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold transition-all duration-300"
          >
            Join Discord
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
