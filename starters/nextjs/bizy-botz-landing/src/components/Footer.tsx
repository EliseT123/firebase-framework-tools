"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl font-bold">B</span>
              </div>
              <span className="text-2xl font-bold">BIZY BOTZ</span>
            </div>
            <p className="text-secondary text-sm mb-4">
              AI automation that gives Australian business owners their time back.
            </p>
            <p className="text-accent text-xs font-semibold mb-6">
              Cheeky, Brainy, No-BS Aussie AI
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Finance Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Analytics & Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/80">
          <p>© 2025 BIZY BOTZ. Australian-made AI automation.</p>
          <p className="flex items-center gap-2">
            Made with <span className="text-accent">♥</span> in Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
