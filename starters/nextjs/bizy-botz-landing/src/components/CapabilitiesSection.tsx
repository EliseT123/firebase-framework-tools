"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  DollarSign,
  Zap,
  BarChart3,
  Users,
  Brain,
  Scale,
  FileText,
  Heart,
} from "lucide-react";

const capabilities = [
  {
    icon: DollarSign,
    title: "Finance Intelligence",
    description:
      "Automated invoicing, expense tracking, and financial forecasting that keeps your books perfect.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Connect your tools and automate repetitive tasks. From lead capture to follow-up, it just happens.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Real-time insights into your business performance. Know what's working without digging through spreadsheets.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "AI that finds, qualifies, and nurtures leads 24/7. Never miss an opportunity again.",
  },
  {
    icon: Brain,
    title: "Knowledge Management",
    description:
      "Your AI assistant that knows your business inside out. Instant answers to customer and team questions.",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description:
      "Stay compliant with Australian regulations. Automated contract generation and policy management.",
  },
  {
    icon: FileText,
    title: "Content Creation",
    description:
      "Generate marketing copy, social posts, and emails that sound like you. Save hours of writing time.",
  },
  {
    icon: Heart,
    title: "Client Experience",
    description:
      "Personalized customer journeys that delight. Automated onboarding, support, and retention.",
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI That Actually <span className="text-accent">Does the Work</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Not just another chatbot. BIZY BOTZ builds custom AI systems that
            integrate with your existing tools and workflows.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="group glass rounded-2xl p-6 hover:bg-white/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <capability.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                {capability.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {capability.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/0 transition-all duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white/60 mb-4">
            Not sure what you need? We'll help you figure it out.
          </p>
          <button className="px-6 py-3 glass glass-hover rounded-lg font-semibold hover:text-accent transition-colors">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
