"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: 23, suffix: "hrs", label: "Saved per week on average" },
  { value: 89, suffix: "%", label: "Less manual work" },
  { value: 50, prefix: "$", suffix: "K", label: "Average annual savings" },
];

const benefits = [
  "AI that works 24/7 (no coffee breaks)",
  "Done-for-you setup (we handle the tech)",
  "Australian-based support (same timezone, mate)",
  "Data privacy guaranteed (self-hosted options)",
  "Pay for itself in 3 months or less",
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function ResultsSection() {
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
            What You'll Actually <span className="text-accent">Get</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Australian SMBs using BIZY BOTZ are saving time and money every single day
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-lg text-secondary">{stat.label}</div>
              </motion.div>
            ))}

            <motion.div
              className="glass rounded-2xl p-6 border-accent/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-secondary italic">
                "BIZY BOTZ gave me back 3 days a week. I'm finally working{" "}
                <span className="text-accent font-semibold">on</span> my business,
                not <span className="text-accent font-semibold">in</span> it."
              </p>
              <p className="text-sm text-secondary/70 mt-2">
                — Sarah K., Digital Marketing Agency Owner
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Benefits Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-8">
                What You'll Actually Get
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-secondary group-hover:text-white transition-colors">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <button className="w-full px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:scale-105">
                  See If AI Is Right for Your Business
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
