# Code Update Examples - Before & After

## 1. HERO SECTION - Trust Badges

### CURRENT CODE:
```tsx
{/* Trust Badges */}
<motion.div
  className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/60"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-accent" />
    <span>100% Australian Owned</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-accent" />
    <span>30-Day Money Back</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-accent" />
    <span>No Credit Card Required</span>
  </div>
</motion.div>
```

### UPDATED CODE:
```tsx
{/* Trust Badges */}
<motion.div
  className="flex flex-wrap justify-center items-center gap-8 text-sm text-secondary"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-accent" />
    <span>Australian-Based</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-accent" />
    <span>Data Secure</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-accent" />
    <span>100+ SMBs Automated</span>
  </div>
</motion.div>
```

**Changes:**
- ✏️ Text color: `text-white/60` → `text-secondary`
- ✏️ Badge 1: "100% Australian Owned" → "Australian-Based"
- ✏️ Badge 2: "30-Day Money Back" → "Data Secure"
- ✏️ Badge 3: "No Credit Card Required" → "100+ SMBs Automated"

---

## 2. HERO SECTION - Subheadline

### CURRENT CODE:
```tsx
<motion.p
  className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  Australian-made AI automation that saves time, cuts costs,
  and scales your business.
</motion.p>
```

### UPDATED CODE:
```tsx
<motion.p
  className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  Australian-made AI automation that saves time, cuts costs,
  and scales your business—without the tech headaches.
</motion.p>
```

**Changes:**
- ✏️ Text color: `text-white/80` → `text-secondary`
- ✏️ Added: "—without the tech headaches."

---

## 3. RESULTS SECTION - Benefits List

### CURRENT CODE:
```tsx
const benefits = [
  "Eliminate repetitive manual tasks",
  "Never miss a follow-up or deadline",
  "Reduce human error to near-zero",
  "Scale without hiring more staff",
  "Get real-time insights into your business",
  "Free up time for strategic growth",
  "Improve customer response times",
  "Increase revenue per employee",
];
```

### UPDATED CODE:
```tsx
const benefits = [
  "AI that works 24/7 (no coffee breaks)",
  "Done-for-you setup (we handle the tech)",
  "Australian-based support (same timezone, mate)",
  "Data privacy guaranteed (self-hosted options)",
  "Pay for itself in 3 months or less",
];
```

**Changes:**
- ✏️ Reduced from 8 to 5 benefits
- ✏️ Used exact Australian-tone copy from spec
- ✏️ More personality and specificity

---

## 4. TESTIMONIALS SECTION

### CURRENT CODE:
```tsx
const testimonials = [
  {
    name: "Michael Chen",
    role: "Owner, Chen & Co Accounting",
    location: "Melbourne, VIC",
    quote:
      "We were spending 15 hours a week on data entry and client follow-ups. BIZY BOTZ automated it all. Now my team focuses on high-value advisory work. ROI paid for itself in 6 weeks.",
    rating: 5,
  },
  // ... other testimonials
];
```

### UPDATED CODE:
```tsx
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Digital Marketing Agency",
    location: "Melbourne, VIC",
    quote:
      "I got 15 hours back every week. It's like hiring a whole team for the price of a gym membership.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Founder, Tech Startup",
    location: "Sydney, NSW",
    quote:
      "Finally, AI that doesn't feel like I need a computer science degree to use it.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "CEO, E-commerce Business",
    location: "Brisbane, QLD",
    quote:
      "We were skeptical. Then we automated our lead follow-up and revenue jumped 34% in 2 months.",
    rating: 5,
  },
];
```

**Changes:**
- ✏️ Used exact quotes from specification
- ✏️ Shorter, punchier testimonials
- ✏️ More casual Australian tone

---

## 5. TAILWIND CONFIG - Secondary Color

### CURRENT CODE:
```typescript
colors: {
  primary: {
    DEFAULT: "#2D1B4E",
    dark: "#1a0f2e",
    light: "#3d2b5e",
  },
  accent: {
    DEFAULT: "#FF6B35",
    light: "#ff8559",
    dark: "#e55520",
  },
}
```

### UPDATED CODE:
```typescript
colors: {
  primary: {
    DEFAULT: "#2D1B4E",
    dark: "#1a0f2e",
    light: "#3d2b5e",
  },
  secondary: "#E0D4F7", // Light purple for body text
  accent: {
    DEFAULT: "#FF6B35",
    light: "#ff8559",
    dark: "#e55520",
  },
}
```

**Changes:**
- ✏️ Added secondary color: `#E0D4F7`
- ✏️ This allows using `text-secondary` throughout components

---

## 6. HOW IT WORKS SECTION - Title

### CURRENT CODE:
```tsx
<h2 className="text-4xl md:text-5xl font-bold mb-4">
  How It <span className="text-accent">Works</span>
</h2>
```

### UPDATED CODE:
```tsx
<h2 className="text-4xl md:text-5xl font-bold mb-4">
  Three Steps to a Business That <span className="text-accent">Runs Itself</span>
</h2>
```

**Changes:**
- ✏️ More compelling, specific headline
- ✏️ Moved accent to "Runs Itself" for emphasis

---

## 7. HOW IT WORKS - Step 1

### CURRENT CODE:
```tsx
{
  icon: ClipboardList,
  number: "01",
  title: "Take Your Free AI Audit",
  description:
    "Jump on a 30-minute call. We'll map your current workflows, identify bottlenecks, and show you exactly where AI can save you time and money.",
  highlight: "No sales pitch. Just value.",
}
```

### UPDATED CODE:
```tsx
{
  icon: ClipboardList,
  number: "01",
  title: "Take the Free AI Audit",
  description:
    "5-minute quiz reveals where you're wasting time. Get instant insights into which tasks AI can handle for you.",
  highlight: "No sales pitch. Just value.",
}
```

**Changes:**
- ✏️ "Your" → "the"
- ✏️ "30-minute call" → "5-minute quiz"
- ✏️ Lower commitment threshold

---

## 8. FOOTER - Tagline & Copyright

### CURRENT CODE:
```tsx
<p className="text-white/60 text-sm mb-6">
  AI automation that gives Australian business owners their time back.
</p>

// ... later in footer ...

<p>© 2025 BIZY BOTZ. All rights reserved. Australian Business Number: XXX XXX XXX</p>
```

### UPDATED CODE:
```tsx
<p className="text-secondary text-sm mb-4">
  AI automation that gives Australian business owners their time back.
</p>
<p className="text-accent text-xs font-semibold mb-6">
  Cheeky, Brainy, No-BS Aussie AI
</p>

// ... later in footer ...

<p>© 2025 BIZY BOTZ. Australian-made AI automation.</p>
```

**Changes:**
- ✏️ Added brand tagline in orange
- ✏️ Simplified copyright text
- ✏️ Changed `text-white/60` → `text-secondary`

---

## 9. FINAL CTA SECTION

### CURRENT CODE:
```tsx
<h2 className="text-5xl md:text-6xl font-bold mb-6">
  Ready to Work <span className="text-accent">Smarter?</span>
</h2>

<p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
  Stop trading time for money. Let AI handle the busy work while you
  focus on growth.
</p>
```

### UPDATED CODE:
```tsx
<h2 className="text-5xl md:text-6xl font-bold mb-6">
  Ready to Work Smarter, <span className="text-accent">Not Harder?</span>
</h2>

<p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl mx-auto">
  Take the free 5-minute AI Audit and see exactly where automation can
  save you time and money.
</p>
```

**Changes:**
- ✏️ Added "Not Harder?" to headline
- ✏️ More specific CTA-focused subheadline
- ✏️ `text-white/80` → `text-secondary`

---

## GLOBAL SEARCH & REPLACE

To update all secondary text colors across all files:

**Find:**
```
text-white/80
text-white/70
text-white/60
text-white/50
```

**Replace with:**
```
text-secondary (for primary body text)
text-secondary/80 (for de-emphasized text)
text-secondary/60 (for very subtle text)
```

---

## FILES TO UPDATE

1. ✏️ `tailwind.config.ts` - Add secondary color
2. ✏️ `src/components/HeroSection.tsx`
3. ✏️ `src/components/ProblemSection.tsx`
4. ✏️ `src/components/CapabilitiesSection.tsx`
5. ✏️ `src/components/HowItWorksSection.tsx`
6. ✏️ `src/components/ResultsSection.tsx`
7. ✏️ `src/components/TestimonialsSection.tsx`
8. ✏️ `src/components/FinalCTASection.tsx`
9. ✏️ `src/components/Footer.tsx`

---

## NEXT STEPS

Would you like me to:

1. ✅ **Apply ALL changes** automatically (recommended)
2. 🎯 **Apply Priority 1 only** (high-impact changes)
3. 🔧 **Let you pick specific changes** to apply
4. 📝 **Create a branch** for you to review before merging

Let me know and I'll proceed!
