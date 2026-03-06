import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "About", path: "/about" },
    { label: "Accessibility", path: "/accessibility" },
    { label: "Help Center", path: "/help" },
    { label: "Privacy & Terms", path: "/privacy" },
    { label: "Ad Choices", path: "/ad-choices" },
    { label: "Advertising", path: "/advertising" },
    { label: "Business Services", path: "/business" },
    { label: "Get the LinkedIn app", path: "/app" },
    { label: "More", path: "/more" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-600 mb-4">
          {footerLinks.map((link, index) => (
            <React.Fragment key={link.path}>
              <Link
                to={link.path}
                className="hover:text-primary-600 hover:underline transition-colors"
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="text-gray-400">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-primary-600 rounded flex items-center justify-center text-white font-bold text-[10px]">
              in
            </div>
            <span className="font-semibold">LinkedIn Corporation</span>
          </div>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;