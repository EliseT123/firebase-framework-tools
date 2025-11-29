"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Settings, Smile } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Take Your Free AI Audit",
    description:
      "Jump on a 30-minute call. We'll map your current workflows, identify bottlenecks, and show you exactly where AI can save you time and money.",
    highlight: "No sales pitch. Just value.",
  },
  {
    icon: Settings,
    number: "02",
    title: "We Build Your AI System",
    description:
      "Our team designs and builds your custom automation. We integrate with your existing tools, test everything, and train your team.",
    highlight: "Typically live in 2-4 weeks.",
  },
  {
    icon: Smile,
    number: "03",
    title: "You Get Your Life Back",
    description:
      "Watch as tasks that took hours happen automatically. Focus on strategy, growth, and the parts of your business you actually enjoy.",
    highlight: "Ongoing support included.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From overwhelmed to automated in three simple steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - hidden on mobile, shown on desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <motion.div
              className="h-full bg-gradient-to-r from-accent/20 via-accent to-accent/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                {/* Step number badge */}
                <motion.div
                  className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center shadow-lg shadow-accent/30"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <span className="text-2xl font-bold">{step.number}</span>
                </motion.div>

                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl glass flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                    <span className="text-sm font-semibold text-accent">
                      {step.highlight}
                    </span>
                  </div>
                </div>

                {/* Mobile connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-accent to-accent/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:scale-105">
            Start Your Free AI Audit
          </button>
          <p className="text-sm text-white/60 mt-4">
            Takes 30 minutes. Worth months of your time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
