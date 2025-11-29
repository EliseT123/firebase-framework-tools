"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingDown, Link2Off } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Spending hours on repetitive tasks",
    description:
      "You're spending hours on repetitive work instead of growing your business. Data entry, invoicing, follow-ups—it never ends.",
  },
  {
    icon: TrendingDown,
    title: "Missing leads because you can't keep up",
    description:
      "Leads slip through the cracks. Follow-ups get forgotten. You know you're leaving money on the table but can't keep up.",
  },
  {
    icon: Link2Off,
    title: "Paying too much for tools that don't talk to each other",
    description:
      "Your CRM, accounting software, and other tools are islands. You're manually copying data between systems daily.",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            You're Too Busy to Be <span className="text-accent">This Busy</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Sound familiar? You're not alone. Most SMB owners waste 20+ hours a
            week on tasks AI could handle.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="glass glass-hover rounded-2xl p-8 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-secondary leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
