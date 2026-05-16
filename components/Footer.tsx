import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Mining", href: "/mining" },
      { label: "Tokenomics", href: "/tokenomics" },
      { label: "Docs", href: "/docs" },
      { label: "Whitepaper", href: "/whitepaper.pdf" },
    ],
    community: [
      { label: "Twitter", href: "#", icon: MessageSquare },
      { label: "Discord", href: "#", icon: MessageSquare },
      { label: "Telegram", href: "#", icon: MessageSquare },
    ],
    legal: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">LottoCoin</h3>
            <p className="text-gray-400 text-sm">
              Fair mining for everyone. Lottery-based rewards, CPU-friendly, and sustainable tokenomics.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} LottoCoin. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with ❤️ for fair mining
          </p>
        </div>
      </div>
    </footer>
  );
}
