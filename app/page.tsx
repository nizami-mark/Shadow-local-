'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  Loader2,
  Instagram,
  Linkedin
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
      className={`px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${variants[variant]} ${className}`}
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
  <div className={`mb-10 md:mb-16 ${centered ? 'text-center' : ''}`}>
    {badge && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4"
      >
        {badge}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient px-4 md:px-0"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto px-6 md:px-0"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass-panel p-6 md:p-8 rounded-2xl transition-all hover:border-brand-accent/30 ${className}`}
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
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary/80 border border-white/10 text-text-primary/60 text-[10px] md:text-sm mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="whitespace-nowrap">PKR 2M+ Monthly Brands Only</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight px-2">
            Scale from 2M to <span className="text-brand-accent">7M+</span> Monthly
            <span className="block md:inline"> In Exactly </span><span className="underline decoration-brand-accent/50 underline-offset-4 md:underline-offset-8">90 Days</span>.
          </h1>
          
          <p className="text-text-primary/70 text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 md:px-0">
            Install a high-performance <span className="text-white font-semibold">Scaling System</span> built for exponential growth. 
            We partner with high-potential brands to dominate Meta, Google, and Content.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Button onClick={() => window.open('https://form.jotform.com/260972545860061', '_blank')} className="w-full max-w-[280px] sm:w-auto text-sm md:text-lg">
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Button>
            <Button onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="w-full max-w-[280px] sm:w-auto text-sm md:text-lg">
              Free ROI Audit <BarChart3 className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VSL = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Spend 4.6 minutes to see how we help scale eCom founders"
          subtitle="Watch this breakdown of the Shadow System. If you don't like what you see, we aren't for you."
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-bg-primary group shadow-2xl"
          >
            {isPlaying ? (
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/sq8PtWsY1gw?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                <Image 
                  src="https://i.ytimg.com/vi/sq8PtWsY1gw/maxresdefault.jpg" 
                  alt="VSL Thumbnail" 
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-accent/20"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex justify-between items-center text-[10px] md:text-xs text-text-primary/40 font-mono">
                  <span>00:00 / 05:00</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">LIVE_DEMO</span>
                </div>
              </div>
            )}
          </motion.div>


          <div className="mt-8 md:mt-12 text-center">
            <Button onClick={() => window.open('https://calendly.com/nizami-shadowstudio/30min', '_blank')} className="mx-auto w-full max-w-[240px] sm:w-auto">
              Book a Call
            </Button>
          </div>
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
    <section id="case-studies" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Real Brands. Real Revenue."
          subtitle="What we achieve for eCommerce founders"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-[32px] md:rounded-[40px] overflow-hidden p-6 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left Content: The Story */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                Case Study: Footwear Brand
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight tracking-tighter">
                Scaled Men Footwear brand from <span className="text-brand-accent">43M to 75M</span> in 12 months
              </h3>
              
              <div className="relative">
                <div className="absolute -left-2 top-0 text-brand-accent text-5xl opacity-20 font-serif leading-none">&quot;</div>
                <p className="text-lg md:text-xl text-text-primary/70 italic leading-relaxed pl-4">
                  Before Shadow Studio, we had no real structure. They came in with a full plan and suddenly our revenue started hitting new heights. We passed 75M like it was nothing.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-xs md:text-base">M</div>
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">Founder, Men&apos;s Footwear Brand</div>
                  <div className="text-text-primary/40 text-xs md:text-sm">eCommerce Scale-Up</div>
                </div>
              </div>
            </div>

            {/* Right Content: Stats Screenshot & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all duration-500 hover:border-brand-accent/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none" />
                <Image 
                  src="https://drive.google.com/uc?export=download&id=1AgFj2PYNcWrpf7wxgBbhV3w7Tr-QqWFC" 
                  alt="Annual Revenue Growth Dashboard" 
                  width={1400}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <div className="mb-4 md:mb-6 flex justify-between items-center px-1">
                  <div className="text-brand-accent/60 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] whitespace-nowrap">
                    Verified Dashboard Data
                  </div>
                  <div className="h-px flex-grow bg-white/5 ml-4" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-1">
                  <div>
                    <div className="text-text-primary/40 text-[9px] md:text-[10px] uppercase tracking-widest mb-1">Revenue Growth</div>
                    <div className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">+74%</div>
                  </div>
                  <div>
                    <div className="text-text-primary/40 text-[9px] md:text-[10px] uppercase tracking-widest mb-1">Net Sales</div>
                    <div className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">+60%</div>
                  </div>
                  <div>
                    <div className="text-text-primary/40 text-[9px] md:text-[10px] uppercase tracking-widest mb-1">More Orders</div>
                    <div className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">+30%</div>
                  </div>
                  <div>
                    <div className="text-text-primary/40 text-[9px] md:text-[10px] uppercase tracking-widest mb-1">Repeat Rate</div>
                    <div className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">+6%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MonthlyPerformance = () => {
  const screenshots = [
    { 
      label: "Profitability Powerhouse", 
      title: "PKR 4.7M+ Net Sales", 
      mer: "21% MER",
      desc: "Exceptional efficiency achieved through tactical creative testing and audience refinement. This represents a period of hyper-optimized lead acquisition and conversion.",
      imgId: "1L_LvdtlhSqMnb5LZLR3MjzxR68TpM0Ru"
    },
    { 
      label: "Scale Dominance", 
      title: "PKR 14.8M+ Net Sales", 
      mer: "14.8% MER",
      desc: "Aggressive spend deployment while maintaining a solid profitability threshold. We scaled the advertising budget by 3x while keeping efficiency well above industry standards.",
      imgId: "1HffYdtg1vmiZct_DCZuzE0DkaGd1nxxC"
    },
    { 
      label: "Volume & Efficiency", 
      title: "PKR 10.5M+ Net Sales", 
      mer: "20.9% MER",
      desc: "Merging high volume with high efficiency to maximize net profit. A balanced approach between cold acquisition and aggressive retargeting cycles.",
      imgId: "15Zc00PZupT8dMYHK_-ss3lOJQwqdk8qD"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
          >
            Proven Performance
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Month-on-Month <span className="text-brand-accent">MER Dominance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-primary/60 text-base md:text-xl max-w-2xl mx-auto px-4 md:px-0"
          >
            Direct snapshots showing how we scale revenue while protecting your profit. No fluff, just real numbers.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12 md:space-y-32">
          {screenshots.map((ss, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative cursor-pointer outline-none"
              tabIndex={0}
            >
              <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-brand-accent/30 hover:shadow-brand-accent/5">
                <Image 
                  src={`https://drive.google.com/uc?export=download&id=${ss.imgId}`} 
                  alt={ss.title}
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Refined Overlay - Minimal (Net Sales & MER only) */}
                <div className="absolute inset-0 bg-black/90 md:bg-black/80 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 md:p-12 text-center backdrop-blur-sm md:backdrop-blur-md">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4 md:space-y-8"
                  >
                    <h3 className="text-xl md:text-3xl lg:text-5xl font-display font-bold text-white tracking-tighter leading-tight uppercase md:normal-case">
                      {ss.title}
                    </h3>
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                      <div className="h-px w-6 md:w-16 bg-brand-accent/30" />
                      <div className="text-3xl md:text-6xl lg:text-8xl font-black text-brand-accent tracking-tighter">
                        {ss.mer}
                      </div>
                      <div className="h-px w-6 md:w-16 bg-brand-accent/30" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const channels = [
    {
      title: "Paid Ads",
      subtitle: "Meta+Google ads that print orders",
      theme: "bg-[#7c77c9]",
      lightTheme: "bg-[#7c77c9]/10",
      icon: TrendingUp,
      features: [
        { title: "Full-funnel campaigns", desc: "TOF cold · MOF warm · BOF cart recovery" },
        { title: "Creative testing loops", desc: "Hook variants · Offer angles · CTA splits" },
        { title: "ROAS-first scaling", desc: "Kill losers fast · Stack on winning SKUs" }
      ],
      footer: "TARGET: 4x ROAS FLOOR"
    },
    {
      title: "Video Content",
      subtitle: "Scroll-stopping creative at volume",
      theme: "bg-[#8c6239]",
      lightTheme: "bg-[#8c6239]/10",
      icon: Play,
      features: [
        { title: "UGC-style ad creatives", desc: "Raw · Authentic · Built to convert" },
        { title: "Product demo reels", desc: "Feature → benefit → buy · Under 30 sec" },
        { title: "Monthly content sprints", desc: "20+ assets/month feeding every channel" }
      ],
      footer: "OUTPUT: 20+ ASSETS MONTHLY"
    },
    {
      title: "Influencer",
      subtitle: "Trust at scale through real voices",
      theme: "bg-[#bc4169]",
      lightTheme: "bg-[#bc4169]/10",
      icon: Users,
      features: [
        { title: "Micro + macro mix", desc: "Category-fit creators · High-intent audiences" },
        { title: "Seeding campaigns", desc: "Product gifting · Review generation · UGC rights" },
        { title: "Affiliate structure", desc: "Performance-based · Promo codes · Tracked LTV" }
      ],
      footer: "GOAL: SOCIAL PROOF AT SCALE"
    },
    {
      title: "OOH",
      subtitle: "Brand recall where your buyer lives",
      theme: "bg-[#008272]",
      lightTheme: "bg-[#008272]/10",
      icon: Target,
      features: [
        { title: "Billboards + transit", desc: "DHA · Gulberg · Clifton · high-footfall zones" },
        { title: "Geo-targeted placements", desc: "Match ICP neighbourhoods · Buying intent areas" },
        { title: "Brand authority lift", desc: "Lower CAC on paid when brand is recognised" }
      ],
      footer: "GOAL: BRAND RECALL + CAC DROP"
    }
  ];

  return (
    <section id="process" className="py-24 bg-bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Shadow Scaling System Blueprint
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto"
          >
            Built for eCommerce founders ready to move volume and dominate their category.
          </motion.p>
        </div>
        
        {/* Four Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {channels.map((channel, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[32px] overflow-hidden flex flex-col ${channel.lightTheme} border border-white/5`}
            >
              <div className="p-8 pb-0">
                <div className={`${channel.theme} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <channel.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 h-10">
                  {channel.subtitle}
                </p>
              </div>

              <div className="flex-grow space-y-4 px-4 pb-8">
                {channel.features.map((feature, fIdx) => (
                  <div key={fIdx} className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                    <h4 className="text-sm font-bold text-white/90 mb-1">{feature.title}</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed font-medium uppercase tracking-tight">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/5 border-t border-white/5 mt-auto">
                <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest text-center">
                  {channel.footer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Offer Engine Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-4 border border-brand-accent/20 rounded-[40px] p-8 md:p-12 overflow-hidden group bg-brand-accent/[0.03]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                <Zap className="w-7 h-7" />
              </div>
            </div>
            
            <div className="md:col-span-11 space-y-6">
              <div>
                <p className="text-brand-accent font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-3">Offer Engine</p>
                <h3 className="text-2xl md:text-4xl font-display font-medium text-white mb-4">
                  Engineered offers that move volume and protect margin
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-4xl">
                  Bundle builds · Flash sale architecture · Liquidation pricing · Free-gift triggers · Upsell stacks designed to lift AOV while clearing slow-moving inventory at speed.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  "Bundle & save", 
                  "Flash drops", 
                  "Inventory liquidation", 
                  "AOV upsell", 
                  "Free gift threshold", 
                  "BOGO structures"
                ].map((tag, tIdx) => (
                  <span key={tIdx} className="bg-brand-accent/10 text-brand-accent border border-brand-accent/20 rounded-full px-4 py-2 text-[10px] md:text-xs font-bold whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flow Visualization */}
        <div className="mt-24 flex flex-col items-center gap-6 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-12 w-px border-l-2 border-dashed border-brand-accent/20" />
          
          <div className="space-y-6 w-full max-w-md">
             {[
               { eyebrow: "ALL CHANNELS FIRING TOGETHER", title: "Unified demand engine" },
               { eyebrow: "QUALIFIED BUYERS + REPEAT PURCHASERS", title: "Revenue pipeline + retention" },
               { eyebrow: "90-DAY OUTCOME", title: "PKR 2M → 7M+ monthly", highlight: true, href: "https://form.jotform.com/260972545860061" }
             ].map((step, sIdx) => (
               <React.Fragment key={sIdx}>
                 <motion.div 
                   onClick={() => step.href && window.open(step.href, '_blank')}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: sIdx * 0.1 }}
                   className={`${step.highlight ? 'bg-brand-accent cursor-pointer hover:scale-[1.02] transition-transform' : 'bg-white/5'} border border-white/10 rounded-2xl p-6 md:p-8 text-center shadow-xl backdrop-blur-sm relative group overflow-hidden`}
                 >
                   {step.highlight && (
                     <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
                   )}
                   <p className={`${step.highlight ? 'text-white/60' : 'text-white/40'} font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-3`}>
                     {step.eyebrow}
                   </p>
                   <h4 className={`text-xl md:text-3xl font-bold ${step.highlight ? 'text-white' : 'text-white/90'} tracking-tight`}>
                     {step.title}
                   </h4>
                 </motion.div>
                 {sIdx < 2 && (
                   <div className="h-10 md:h-12 w-0.5 bg-brand-accent/20 mx-auto" />
                 )}
               </React.Fragment>
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
                "Brands with less than PKR 2M monthly revenue",
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
                "Established brands doing PKR 2M - 10M monthly",
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


const LeadMagnet = ( ) => {
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
          <Card className="p-6 md:p-16 border-brand-accent/20 bg-bg-secondary/50 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
                >
                  <BarChart3 className="w-3 h-3" />
                  Free Resource
                </motion.div>
                <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  A Complete Ecommerce <span className="text-brand-accent">ROI Audit Framework</span>, worth $399 for free
                </h2>
                <p className="text-text-primary/60 text-sm md:text-lg mb-8 leading-relaxed">
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
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                      <span className="leading-relaxed text-sm md:text-base">{item}</span>
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
                      className="w-full max-w-[280px] mx-auto py-2.5 md:py-4 text-xs md:text-base" 
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
    <section className="py-16 md:py-24 relative overflow-hidden" id="booking">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2 md:px-0">
                Initialize Your <span className="text-brand-accent">Scaling System</span>
              </h2>
              <p className="text-text-primary/70 text-base md:text-lg mb-8 px-4 md:px-0">
                The manual agency model is dead. We install a self-optimizing engine that turns your ad spend into predictable revenue.
              </p>
              <div className="space-y-6 max-w-md mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-4 px-4 md:px-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-secondary flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">System Compatibility Check</div>
                    <div className="text-text-primary/40 text-xs md:text-sm">We verify if your brand is ready for 7M+ scale</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-4 md:px-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-secondary flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Zap className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">Bottleneck Identification</div>
                    <div className="text-text-primary/40 text-xs md:text-sm">Pinpoint exactly what is stalling your growth</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-4 md:px-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-secondary flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Layers className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base">Activation Roadmap</div>
                    <div className="text-text-primary/40 text-xs md:text-sm">A clear, step-by-step plan to hit your targets</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative px-2 md:px-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group"
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
                    className="w-full max-w-[280px] mx-auto py-3 md:py-6 text-base md:text-xl group font-black"
                  >
                    START NOW <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
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
                src="https://drive.google.com/uc?export=download&id=1p78NgIMJDO-CY1s-ZWb-OyvdKcxdSHxM" 
                alt="Shadow Studio Logo" 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-text-primary/40 text-xs md:text-sm text-center px-4">
            <a href="#case-studies" onClick={(e) => { e.preventDefault(); document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Case Studies</a>
            <a href="#lead-magnet" onClick={(e) => { e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Free Audit</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/shadowstudioglobal?igsh=MXRmNWxqb21zNGN5NA==" target="_blank" rel="noopener noreferrer" className="text-text-primary/40 hover:text-brand-accent transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/shadowstudio-comapny/" target="_blank" rel="noopener noreferrer" className="text-text-primary/40 hover:text-brand-accent transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.behance.net/shadowstudioglobal" target="_blank" rel="noopener noreferrer" className="text-text-primary/40 hover:text-brand-accent transition-all duration-300 transform hover:scale-110" aria-label="Behance">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                <path d="M22 7h-7v-2h7v2zm.5 5c0 3.037-2.463 5.5-5.5 5.5s-5.5-2.463-5.5-5.5 2.463-5.5 5.5-5.5 5.5 2.463 5.5 5.5zm-5.5-3.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm-8.5 7.5h-5.5v-13h5.5c2.317 0 4.167 1.6 4.167 3.833 0 1.258-.617 2.37-1.583 3.033 1.25 0.584 2.083 1.805 2.083 3.235 0 2.233-1.85 3.899-4.167 3.899zm-3.5-5.5h2.5c0.917 0 1.667-0.75 1.667-1.667s-0.75-1.667-1.667-1.667h-2.5v3.334zm0 4h3c0.917 0 1.667-0.75 1.667-1.667s-0.75-1.667-1.667-1.667h-3v3.334z"/>
              </svg>
            </a>
          </div>
          <div className="text-text-primary/20 text-xs font-mono text-center md:text-right">
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

  const navLinks = [
    { name: 'Services', id: 'system', icon: Zap },
    { name: 'Cases', id: 'case-studies', icon: BarChart3 },
    { name: 'Audit', id: 'lead-magnet', icon: Target },
    { name: 'Process', id: 'process', icon: Layers },
  ];

  return (
    <main className="relative pb-20 md:pb-0">
      {/* WhatsApp Link */}
      <motion.a
        href="https://wa.me/923451694215"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 md:bottom-8 right-6 z-[60] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute -top-12 right-0 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Quick Chat
          <div className="absolute bottom-[-4px] right-5 w-2 h-2 bg-white rotate-45" />
        </div>
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
      {/* Top Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="relative w-32 md:w-40 h-8 md:h-10 cursor-pointer"
            >
              <Image 
                src="https://drive.google.com/uc?export=download&id=1p78NgIMJDO-CY1s-ZWb-OyvdKcxdSHxM" 
                alt="Shadow Studio Logo" 
                fill 
                className="object-contain object-left"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={scrollTo(link.id)} 
                className="text-text-primary/60 hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button onClick={() => window.open('https://calendly.com/nizami-shadowstudio/30min', '_blank')} variant="outline" className="px-6 py-2 text-sm">
              Book Call
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button onClick={() => window.open('https://calendly.com/nizami-shadowstudio/30min', '_blank')} variant="primary" className="px-4 py-2 text-[10px] uppercase tracking-wider">
              Book Call
            </Button>
          </div>
        </div>
      </nav>

      {/* Bottom Mobile Menu */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg-primary/90 backdrop-blur-xl border-t border-white/10 px-6 py-3">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={scrollTo(link.id)}
                className="flex flex-col items-center gap-1 text-text-primary/40 hover:text-brand-accent transition-colors py-1"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      <Hero />
      <VSL />
      <HowItWorks />
      <CaseStudies />
      <MonthlyPerformance />
      <LeadMagnet />
      <Qualification />
      <Booking />
      <Footer />
    </main>
  );
}
