"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Owner, Chen & Co Accounting",
    location: "Melbourne, VIC",
    quote:
      "We were spending 15 hours a week on data entry and client follow-ups. BIZY BOTZ automated it all. Now my team focuses on high-value advisory work. ROI paid for itself in 6 weeks.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Managing Director, Thompson Legal",
    location: "Sydney, NSW",
    quote:
      "The compliance automation alone is worth it. Document generation, client intake, billing—all handled. My practice runs smoother, clients are happier, and I actually sleep at night.",
    rating: 5,
  },
  {
    name: "James Murphy",
    role: "Founder, Murphy's Building Supplies",
    location: "Brisbane, QLD",
    quote:
      "I was skeptical about AI, but these guys made it simple. Lead follow-up is instant, inventory tracking is automatic, and our sales are up 40%. Should've done this years ago.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-accent">Aussie Business Owners</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real stories from real businesses that made the switch
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Card */}
              <div className="h-full rounded-2xl p-8 bg-gradient-to-br from-primary to-primary-light border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-accent/30" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-white/10">
                  <div className="font-bold text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-accent mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-white/50">
                    {testimonial.location}
                  </div>
                </div>

                {/* Gradient border glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-purple-500/10 transition-all duration-300 -z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-white/60">Businesses Automated</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-sm text-white/60">Customer Rating</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-white/60">Would Recommend</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-white/60">Australian Made</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
