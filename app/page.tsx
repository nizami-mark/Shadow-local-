'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Play, 
  BarChart3, 
  Users, 
  Layers, 
  Calendar,
  ChevronRight,
  Quote,
  ExternalLink,
  Mail,
  Send,
  Loader2
} from 'lucide-react';

// --- Components ---

const Button = ({ 
  children, 
  className = "", 
  variant = "primary", 
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const variants = {
    primary: "bg-brand-accent text-white hover:opacity-90 neon-glow",
    secondary: "bg-white text-[#3a3d44] hover:bg-[#f0ece4]",
    outline: "border border-white/20 text-white hover:bg-brand-accent hover:border-brand-accent",
    ghost: "text-white/60 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ 
  badge, 
  title, 
  subtitle, 
  centered = true 
}: { 
  badge?: string; 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {badge && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4"
      >
        {badge}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass-panel p-8 rounded-2xl transition-all hover:border-brand-accent/30 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary/80 border border-white/10 text-text-primary/60 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            Exclusive for Brands doing PKR 3M+ Monthly
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Scale from <span className="text-brand-accent">3M</span> to <span className="text-white">7M+</span> <br className="hidden md:block" />
            In Exactly <span className="underline decoration-brand-accent/50 underline-offset-8">90 Days</span>.
          </h1>
          
          <p className="text-text-primary/70 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Stop hiring agencies. Start installing a <span className="text-white font-semibold">Scaling System</span>. 
            We partner with high-potential brands to dominate Meta, Google, and the Content Engine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button onClick={scrollToBooking} className="w-full sm:w-auto text-lg py-5 px-10">
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Button>
            <Button onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full sm:w-auto text-lg py-5 px-10">
              Free ROI Audit <BarChart3 className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VSL = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="How We Scale Brands Without The Agency Fluff"
          subtitle="Watch this 5-minute breakdown of the Shadow System. If you don&apos;t like what you see, we aren&apos;t for you."
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 bg-bg-primary group cursor-pointer"
          >
            <Image 
              src="https://picsum.photos/seed/vsl/1280/720?blur=10" 
              alt="VSL Thumbnail" 
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-accent/20"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs text-text-primary/40 font-mono">
              <span>00:00 / 05:00</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">LIVE_DEMO</span>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "The 'Content Engine' Framework",
              "Omnichannel Ad Dominance",
              "Unit Economics Optimization"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-text-primary/70">
                <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={scrollToBooking} className="mx-auto">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const pains = [
    { title: "Plateaued Revenue", desc: "Stuck at 3M for months? Your current 'tactics' have hit a ceiling." },
    { title: "Rising Ad Costs", desc: "CPMs are up. If your creative isn't converting, you're just burning cash." },
    { title: "Inconsistent ROAS", desc: "One good day, three bad ones. You can't scale on a roller coaster." },
    { title: "Broken Creatives", desc: "Using the same static images from 2022? The market has moved on." },
  ];

  return (
    <section className="py-24 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              centered={false}
              title="Scaling is hard because your agency is lazy."
              subtitle="Most agencies focus on &apos;management fees&apos; and &apos;vanity metrics&apos;. They don&apos;t understand unit economics or the psychology of a high-ticket buyer."
            />
            <div className="space-y-6">
              {pains.map((pain, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-bg-secondary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{pain.title}</h4>
                    <p className="text-text-primary/50 text-sm">{pain.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/5 blur-3xl rounded-full" />
            <Card className="relative border-red-500/20">
              <div className="text-red-500 font-mono text-xs mb-4 uppercase tracking-widest">Warning: Inefficiency Detected</div>
              <h3 className="text-2xl font-bold mb-6">The &quot;Agency Trap&quot;</h3>
              <div className="space-y-4">
                {[
                  { label: "Ad Spend Waste", val: "42%", color: "bg-red-500" },
                  { label: "Creative Fatigue", val: "88%", color: "bg-orange-500" },
                  { label: "Manual Labor", val: "75%", color: "bg-yellow-500" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-text-primary/40 mb-2">
                      <span>{item.label}</span>
                      <span>{item.val}</span>
                    </div>
                    <div className="h-2 w-full bg-bg-primary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.val }}
                        viewport={{ once: true }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-text-primary/60 text-sm italic">&quot;If you keep doing what you&apos;ve always done, you&apos;ll keep getting what you&apos;ve always got.&quot;</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mechanism = () => {
  const pillars = [
    {
      title: "Meta Ads",
      icon: Target,
      desc: "We don't just 'run ads'. We build psychological funnels that capture attention and force conversion.",
      features: ["Advantage+ Optimization", "Dynamic Creative Testing", "Retention Retargeting"]
    },
    {
      title: "Google Ads",
      icon: Zap,
      desc: "Capture high-intent buyers exactly when they are looking for your product. Zero waste.",
      features: ["Performance Max Scaling", "Keyword Dominance", "Shopping Feed Optimization"]
    },
    {
      title: "Content Engine",
      icon: Layers,
      desc: "The fuel for the machine. High-converting UGC and cinematic brand assets that scale.",
      features: ["UC Creator Network", "Hook-Based Editing", "Viral Loop Strategy"]
    }
  ];

  return (
    <section id="system" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Our 3-Pillar Scaling Engine"
          subtitle="We don't offer 'services'. We install a proprietary system that works in synergy to drive revenue."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <Card key={i} className="flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-8">
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-text-primary/70 mb-8 flex-grow">{pillar.desc}</p>
              <ul className="space-y-3">
                {pillar.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-text-primary/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Real Brands. Real Revenue."
          subtitle="We don't hide behind percentages. We show the actual numbers."
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-[40px] overflow-hidden p-8 md:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Scaled Men Footwear brand from <span className="text-brand-accent">43.3 M to 75.3M</span> in 12 months
              </h3>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 text-brand-accent text-6xl opacity-20 font-serif">&quot;</div>
                <p className="text-xl text-text-primary/70 italic leading-relaxed pl-4">
                  Before Shadow Studio, we had no real structure, and nothing was hitting. They came in with a full plan and suddenly our revenue started hitting new heights. We passed 75M like it was nothing.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">M</div>
                </div>
                <div>
                  <div className="font-bold">Founder, Men&apos;s Footwear Brand</div>
                  <div className="text-text-primary/40 text-sm">eCommerce Scale-Up</div>
                </div>
              </div>
            </div>

            {/* Right Content: Video & Stats */}
            <div className="lg:col-span-6 space-y-8">
              {/* Video Player Placeholder */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-bg-secondary group cursor-pointer">
                <Image 
                  src="https://picsum.photos/seed/footwear-case/1200/800" 
                  alt="Case Study Video" 
                  fill 
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-2xl shadow-brand-accent/40 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                
                {/* Badges like in the image */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-tighter">Before</div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-green-600 text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-tighter">After</div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="text-white font-display font-black text-4xl md:text-5xl tracking-tighter drop-shadow-2xl">12 MONTHS</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-text-primary/40 text-xs uppercase tracking-widest mb-2">Revenue Growth</div>
                  <div className="text-4xl font-display font-bold text-white tracking-tighter">+74%</div>
                </div>
                <div>
                  <div className="text-text-primary/40 text-xs uppercase tracking-widest mb-2">Net Sales Up</div>
                  <div className="text-4xl font-display font-bold text-white tracking-tighter">+60%</div>
                </div>
                <div>
                  <div className="text-text-primary/40 text-xs uppercase tracking-widest mb-2">More Orders</div>
                  <div className="text-4xl font-display font-bold text-white tracking-tighter">+30%</div>
                </div>
                <div>
                  <div className="text-text-primary/40 text-xs uppercase tracking-widest mb-2">Repeat Customers</div>
                  <div className="text-4xl font-display font-bold text-white tracking-tighter">+6%</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { 
      title: "Free Scale Session (30 min)", 
      desc: "We audit your current ad accounts, revenue data, and content. You leave with a clear picture of exactly what's holding you back and what it would take to hit PKR 7M." 
    },
    { 
      title: "Custom Scale Roadmap", 
      desc: "We build your 90-day growth plan — channel by channel, week by week. Meta strategy, Google architecture, content calendar, and KPIs tied to revenue milestones." 
    },
    { 
      title: "Full System Launch", 
      desc: "Our team deploys. Campaigns go live. Content sprint begins. Everything is running within 14 days of signing — no 6-week onboarding." 
    },
  ];

  return (
    <section id="process" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Simple 3-Step Scaling System"
          subtitle="A streamlined, outcome-focused approach to growth. No fluff, just execution."
        />
        
        <div className="relative">
          {/* Connector Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-accent/20 hidden md:block -translate-y-1/2 origin-left" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-bg-primary border-2 border-brand-accent text-brand-accent flex items-center justify-center text-2xl font-black mx-auto relative z-10 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 shadow-xl shadow-brand-accent/10"
                  >
                    {i + 1}
                  </motion.div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-brand-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-text-primary/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Qualification = () => {
  return (
    <section className="py-24 border-y border-white/5 relative overflow-hidden">
      {/* Background Scanning Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: ['-100%', '200%'],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent skew-x-12"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-3xl bg-red-500/5 border border-red-500/10 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20 rounded-t-3xl" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Who This Is NOT For</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Beginners looking for a 'magic bullet'",
                "Brands with less than PKR 3M monthly revenue",
                "Businesses without a proven product-market fit",
                "Founders unwilling to invest in high-quality creative",
                "People looking for a 'cheap agency' price"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-3 text-text-primary/50 group-hover:text-text-primary/70 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <span className="text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-3xl bg-brand-accent/5 border border-brand-accent/10 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent/20 rounded-t-3xl" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Who This IS For</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Established brands doing PKR 3M - 10M monthly",
                "Founders ready to scale to 8 figures and beyond",
                "Brands with a high LTV and solid margins",
                "Decision makers who value speed and results",
                "Partners who want a system, not just a service"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-3 text-text-primary/50 group-hover:text-text-primary/70 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(244,112,58,0.5)]" />
                  <span className="text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OfferStack = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-panel p-12 rounded-3xl border-brand-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="text-center mb-12">
            <SectionHeading 
              title="The Shadow Scaling System"
              subtitle="Everything you need to dominate your niche. No hidden costs."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Full Ad Management", desc: "Meta + Google + TikTok" },
              { title: "Creative Strategy", desc: "Hooks, Scripts, and Direction" },
              { title: "Funnel Optimization", desc: "CRO and Landing Page Design" },
              { title: "Data Infrastructure", desc: "Advanced Tracking & Attribution" },
              { title: "Weekly Strategy Calls", desc: "Direct access to our growth leads" },
              { title: "Scaling Framework", desc: "The exact math to hit 7M+" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-text-primary/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 text-center">
            <div className="text-text-primary/40 text-sm mb-4">Limited to 3 New Partners per Month</div>
            <Button onClick={scrollToBooking} className="mx-auto text-xl py-6 px-12">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server.');
    }
  };

  return (
    <motion.section 
      id="lead-magnet"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-bg-primary relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-16 border-brand-accent/20 bg-bg-secondary/50 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6"
                >
                  <BarChart3 className="w-3 h-3" />
                  Free Resource
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  A Complete Ecommerce <span className="text-brand-accent">ROI Audit Framework</span>, worth $399 for free
                </h2>
                <p className="text-text-primary/60 text-lg mb-8 leading-relaxed">
                  This is our secret sauce for auditing a brand&apos;s last 90 days of ROI—so you can make clear, data-backed decisions on what to scale next.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Identify profit leaks and stop wasting budget on underperforming ads",
                    "Gain clarity on your true margins",
                    "Know exactly when and how to scale safely",
                    "Spot the bottlenecks holding back your revenue"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-text-primary/80">
                      <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-orange-500/20 blur-xl rounded-3xl opacity-50" />
                <div className="relative bg-bg-primary/80 border border-white/10 p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mx-auto mb-4">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Send to my inbox</h3>
                    <p className="text-text-primary/40 text-sm">Enter your email to receive the guide instantly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="founder@brand.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full bg-bg-secondary border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-text-primary/20 focus:outline-none focus:border-brand-accent/50 transition-colors disabled:opacity-50"
                      />
                    </div>
                    
                    <Button 
                      className="w-full py-4" 
                      onClick={() => {}} // Form handles submission
                      variant={status === 'success' ? 'secondary' : 'primary'}
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : status === 'success' ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          Sent Successfully
                        </>
                      ) : (
                        <>
                          Send me framework
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs text-center mt-2">{errorMessage}</p>
                    )}
                    
                    {status === 'success' && (
                      <p className="text-green-500 text-xs text-center mt-2">Check your inbox (and spam folder) for the guide!</p>
                    )}

                    <p className="text-[10px] text-text-primary/20 text-center uppercase tracking-widest mt-4">
                      No spam. Just pure value for founders.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

const Booking = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="booking">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Initialize Your <span className="text-brand-accent">Scaling System</span>
              </h2>
              <p className="text-text-primary/70 text-lg mb-8">
                The manual agency model is dead. We install a self-optimizing engine that turns your ad spend into predictable revenue. Your discovery call is the final step to system activation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-brand-accent">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">System Compatibility Check</div>
                    <div className="text-text-primary/40 text-sm">We verify if your brand is ready for 7M+ scale</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-brand-accent">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Bottleneck Identification</div>
                    <div className="text-text-primary/40 text-sm">Pinpoint exactly what is stalling your growth</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-brand-accent">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Activation Roadmap</div>
                    <div className="text-text-primary/40 text-sm">A clear, step-by-step plan to hit your targets</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden group"
              >
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full group-hover:bg-brand-accent/20 transition-colors duration-700" />
                
                <div className="relative z-10">
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-24 h-24 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-accent/20"
                  >
                    <Zap className="w-12 h-12 text-brand-accent" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-4">System Activation</h3>
                  <p className="text-text-primary/60 mb-10 max-w-xs mx-auto">
                    Complete the 40 second intake to see if your brand qualifies for our scaling system.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {[
                      "Instant Bottleneck Analysis",
                      "7M+ Revenue Roadmap",
                      "Direct Access to Founders"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-center gap-3 text-sm text-text-primary/40">
                        <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => window.open('https://form.jotform.com/260972545860061', '_blank')}
                    className="w-full py-6 text-xl group"
                  >
                    Start Now <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-brand-accent/60">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    System Access Open
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative side elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-brand-accent/20 rounded-bl-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-brand-accent/20 rounded-tr-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="relative w-40 h-10 cursor-pointer"
            >
              <Image 
                src="https://drive.google.com/uc?export=download&id=11q0Tq7UxhHXsvFFBUo3KeEpFZJumQ1LM" 
                alt="Shadow Studio Logo" 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-text-primary/40 text-sm">
            <a href="#case-studies" onClick={(e) => { e.preventDefault(); document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Case Studies</a>
            <a href="#lead-magnet" onClick={(e) => { e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Free Audit</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-text-primary/20 text-xs font-mono">
            © 2026 SHADOW STUDIO // ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function FunnelPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: any) => {
    e?.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="relative w-40 h-10 cursor-pointer"
            >
              <Image 
                src="https://drive.google.com/uc?export=download&id=11q0Tq7UxhHXsvFFBUo3KeEpFZJumQ1LM" 
                alt="Shadow Studio Logo" 
                fill 
                className="object-contain object-left"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#system" onClick={scrollTo('system')} className="text-text-primary/60 hover:text-white text-sm font-medium transition-colors">Services</a>
            <a href="#case-studies" onClick={scrollTo('case-studies')} className="text-text-primary/60 hover:text-white text-sm font-medium transition-colors">Case Studies</a>
            <a href="#lead-magnet" onClick={scrollTo('lead-magnet')} className="text-text-primary/60 hover:text-white text-sm font-medium transition-colors">Free Audit</a>
            <a href="#process" onClick={scrollTo('process')} className="text-text-primary/60 hover:text-white text-sm font-medium transition-colors">Process</a>
            <Button onClick={scrollTo('booking')} variant="outline" className="px-6 py-2 text-sm">
              Book Call
            </Button>
          </div>
          <Button onClick={scrollTo('booking')} variant="outline" className="md:hidden px-4 py-2 text-xs">
            Book Call
          </Button>
        </div>
      </nav>

      <Hero />
      <VSL />
      <Problem />
      <Mechanism />
      <CaseStudies />
      <LeadMagnet />
      <HowItWorks />
      <Qualification />
      <OfferStack />
      <Booking />
      <Footer />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <Button onClick={scrollTo('booking')} className="w-full py-5 shadow-2xl shadow-brand-accent/20">
          Book Strategy Call <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </main>
  );
}
