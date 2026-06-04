'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Script from 'next/script';
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
  ChevronDown,
  Quote,
  ExternalLink,
  Mail,
  Send,
  Loader2,
  Instagram,
  Linkedin,
  User,
  Globe,
  Phone,
  DollarSign,
  MessageSquare
} from 'lucide-react';

// --- Components ---

const Button = ({ 
  children, 
  className = "", 
  variant = "primary", 
  onClick,
  type = "button"
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}) => {
  const variants = {
    primary: "bg-brand-accent text-white hover:opacity-90 neon-glow",
    secondary: "bg-white text-[#3a3d44] hover:bg-[#f0ece4]",
    outline: "border border-white/20 text-white hover:bg-brand-accent hover:border-brand-accent",
    ghost: "text-white/60 hover:text-white"
  };

  return (
    <motion.button
      type={type}
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

const UnifiedHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-12 overflow-hidden bg-bg-primary text-white">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-square bg-brand-accent/20 blur-[160px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[28px] sm:text-3xl md:text-5xl lg:text-[62px] font-bold text-center leading-[1.1] tracking-tight mb-12 md:mb-16 px-4"
          >
            Scale from 2M to <span className="text-brand-accent">7M+</span> Monthly In Exactly <span className="text-brand-accent">90 Days</span> or you don&apos;t pay.
          </motion.h1>
          
          {/* VSL Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-3xl aspect-video relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-black/40 group shadow-[0_0_100px_rgba(0,0,0,0.5)] mb-6"
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
                  className="object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-24 md:h-24 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-accent/20"
                  >
                    <Play className="w-6 h-6 md:w-10 md:h-10 fill-current ml-1" />
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button 
              onClick={scrollToBooking} 
              className="bg-brand-accent text-black hover:bg-white hover:text-black px-8 py-3.5 md:px-12 md:py-6 text-lg md:text-2xl font-bold rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              Book a Call
            </Button>
          </motion.div>
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
    <section id="case-studies" className="pt-8 pb-16 md:pt-12 md:pb-24">
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
        <div className="mt-0 flex flex-col items-center gap-0 relative">
          {/* Multi-line Converging SVG */}
          <div className="w-full h-24 md:h-32 -mt-1 relative overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              {/* Outer Converging paths */}
              <motion.path 
                d="M 100 0 L 600 120" 
                stroke="white" 
                strokeOpacity="0.05" 
                strokeWidth="1" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <motion.path 
                d="M 1100 0 L 600 120" 
                stroke="white" 
                strokeOpacity="0.05" 
                strokeWidth="1" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              
              {/* Inner Converging paths */}
              <motion.path 
                d="M 350 0 L 600 120" 
                stroke="white" 
                strokeOpacity="0.1" 
                strokeWidth="1.5" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
              <motion.path 
                d="M 850 0 L 600 120" 
                stroke="white" 
                strokeOpacity="0.1" 
                strokeWidth="1.5" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
              
              {/* Central Dash Line */}
              <motion.path 
                d="M 600 0 L 600 120" 
                stroke="#FF5C35" 
                strokeOpacity="0.6" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "linear" }}
              />
              
              {/* Convergence Point Dot */}
              <motion.circle 
                cx="600" cy="120" r="3.5" 
                fill="#FF5C35" 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.3 }}
              />
            </svg>
          </div>
          
          <div className="space-y-6 w-full max-w-md pb-12 relative">
              {[
                { eyebrow: "ALL CHANNELS FIRING TOGETHER", title: "Unified demand engine", isDark: true },
                { eyebrow: "QUALIFIED BUYERS + REPEAT PURCHASERS", title: "Revenue pipeline + retention" },
                { eyebrow: "90-DAY OUTCOME", title: "PKR 2M → 7M+ monthly", highlight: true }
              ].map((step, sIdx) => (
                <React.Fragment key={sIdx}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: sIdx * 0.1 }}
                    className={`
                      ${step.highlight ? 'bg-brand-accent' : step.isDark ? 'bg-black/40 border-white/20' : 'bg-white/5 border-white/10'} 
                      border rounded-2xl md:rounded-[24px] p-6 md:p-8 text-center shadow-2xl backdrop-blur-md relative group overflow-hidden transition-all duration-300
                    `}
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
                   <div className="h-10 md:h-12 w-px bg-gradient-to-b from-brand-accent/30 to-transparent mx-auto relative">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent/10 blur-md rounded-full" />
                   </div>
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
  const [name, setName] = useState('');
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
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setName('');
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
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mx-auto mb-4 overflow-hidden border-2 border-brand-accent/20 relative shadow-[0_0_20px_rgba(244,112,58,0.2)]">
                      {status === 'success' ? (
                        <div className="relative w-full h-full">
                          <Image 
                            src="https://drive.google.com/uc?id=1V5uJ2GvVmJtuUMy9EKsfMpo1sUK2s5jY" 
                            alt="Nizami Shadow Studio" 
                            fill 
                            className="object-cover scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <Mail className="w-8 h-8" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-4">
                      {status === 'success' ? "Audit Sent!" : "Send to my inbox"}
                    </h3>
                    <p className="text-text-primary/40 text-sm">
                      {status === 'success' ? "Check your inbox for the blueprint." : "Enter your email to receive the guide instantly."}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full bg-bg-secondary border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-text-primary/20 focus:outline-none focus:border-brand-accent/50 transition-colors disabled:opacity-50"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="write your work email"
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


const FAQ = () => {
  const faqs = [
    {
      question: "What is shadow studio pricing?",
      answer: "We operate on a performance-driven structure. For our core performance marketing engine, our model involves an agreed-upon commission on net revenue, ensuring our incentives are strictly aligned with your scale. Other creative and strategic services like high-end content production, OOH, and social media management are handled through separate project arrangements tailored to your brand's specific roadmap."
    },
    {
      question: "What exactly is the \"Shadow Scaling System\"?",
      answer: "It's a multi-channel demand engine. Most agencies just 'run ads'. We build a full ecosystem: a high-volume content machine (20+ assets/month), a YouTube-to-Paid-Funnel, influencer seeding, and strategic OOH placements. It's a unified approach to dominate your category."
    },
    {
      question: "Do you work with new eCommerce stores?",
      answer: "No. We specifically partner with established brands already doing PKR 2M+ monthly. Our systems are designed for high-performance scaling. We don't 'test' if your product works; we fuel products that are already selling but have stalled in growth."
    },
    {
      question: "Which advertising channels do you specialize in?",
      answer: "Our 'Unified Demand Engine' focuses on YouTube + Paid Ads, Meta (Instagram/Facebook), and TikTok. We also integrate OOH billboards in major cities (DHA/Gulberg/Clifton) to build brand authority and lower your digital CAC."
    },
    {
      question: "How involved do I need to be as a founder?",
      answer: "We handle the heavy lifting—from content production to ad management. However, we need a close feedback loop during the first 30 days to align on inventory, brand voice, and offer architecture. After that, we operate as your dedicated growth arm."
    },
    {
      question: "What is the typical investment required?",
      answer: "Beyond our performance fee, you must have an ad budget ready to scale. For the 90-day roadmap to 7M+, we typically recommend starting with a minimum ad spend that allows for statistically significant creative testing."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-primary relative" id="faq">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about scaling with Shadow Studio."
          />
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl overflow-hidden border-white/5"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <span className="font-bold text-base md:text-lg text-white/90">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ 
                    height: openIndex === i ? 'auto' : 0,
                    opacity: openIndex === i ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-text-primary/60 text-sm md:text-base leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const BuiltInContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [aov, setAov] = useState('');
  const [adSpend, setAdSpend] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim() || !phone.trim() || !aov.trim() || !adSpend.trim()) {
      setStatus('error');
      setFeedbackMessage('Please enter your Name, Best Email, Brand/Website Name, Phone Number, Average Order Value (AOV), and Monthly Ad Spend.');
      return;
    }

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          aov,
          adSpend,
          message: message || 'N/A',
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message);
        
        // Direct Facebook Pixel call if loaded
        if (typeof (window as any).fbq === 'function') {
          (window as any).fbq('track', 'Lead');
        }
        
        // Google Tag Manager Data Layer push
        const dataLayer = (window as any).dataLayer || [];
        dataLayer.push({
          'event': 'form_submission_completed',
          'conversion_type': 'lead'
        });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Something went wrong. Please check details and try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setFeedbackMessage(err?.message || 'A transmission failure occurred. Try again.');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden" id="booking">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading 
            badge="direct inquiry"
            title="Just submit the form, rest we'll handle"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Ambient Backlight - Highly Vibrant & Pulsing Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-accent/50 via-orange-500/30 to-brand-accent/45 blur-2xl rounded-3xl opacity-50 animate-pulse duration-3000 pointer-events-none" />
            
            <div className="relative bg-[#080808]/95 border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-md">
              
              {/* Subtle Animated Progress / Loading Bar */}
              {status === 'loading' && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden z-50">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "easeInOut" 
                    }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-brand-accent to-transparent"
                  />
                </div>
              )}
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative text-center py-12 md:py-16 space-y-8 overflow-hidden"
                >
                  {/* Floating Background Confetti */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(24)].map((_, i) => {
                      const colors = ["#f4703a", "#fb923c", "#f97316", "#ffedd5", "#ffffff"];
                      const size = (i % 5) + 6;
                      const startX = (i * 27) % 100; // %
                      const driftX = startX + ((i % 3 === 0) ? 12 : (i % 3 === 1) ? -12 : 6);
                      const duration = ((i % 4) * 0.5) + 2.0;
                      const delay = (i % 6) * 0.3;
                      const rotate = (i * 45) % 360;
                      const scale = 0.5 + 0.1 * (i % 6);
                      
                      return (
                        <motion.div
                          key={i}
                          initial={{ 
                            opacity: 0, 
                            y: -20, 
                            x: `${startX}%`, 
                            rotate: 0,
                            scale: scale
                          }}
                          animate={{ 
                            opacity: [0, 1, 1, 0], 
                            y: ['0%', '120%'], 
                            x: [`${startX}%`, `${driftX}%`],
                            rotate: [0, rotate * 2]
                          }}
                          transition={{ 
                            duration: duration,
                            repeat: Infinity,
                            delay: delay,
                            ease: "linear"
                          }}
                          style={{
                            backgroundColor: colors[i % colors.length],
                            width: size,
                            height: size,
                            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '2px 8px'
                          }}
                          className="absolute top-0"
                        />
                      );
                    })}
                  </div>

                  <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                    {/* Concentric Pulsing Halo Rings */}
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ 
                        scale: [1, 2, 2.4], 
                        opacity: [0.6, 0.2, 0] 
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeOut" 
                      }}
                      className="absolute inset-0 rounded-full bg-brand-accent/25 border border-brand-accent/30"
                    />
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.6, 2], 
                        opacity: [0.8, 0.3, 0] 
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        delay: 1,
                        ease: "easeOut" 
                      }}
                      className="absolute inset-0 rounded-full bg-orange-500/15 border border-orange-500/20"
                    />
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.25, 1.5], 
                        opacity: [0.9, 0.4, 0] 
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        delay: 2,
                        ease: "easeOut" 
                      }}
                      className="absolute inset-0 rounded-full bg-brand-accent/10 border border-brand-accent/15"
                    />

                    {/* Concentric Sparkle Radial Particles */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 360) / 12;
                      const distance = 90;
                      const radian = (angle * Math.PI) / 180;
                      const x = Math.cos(radian) * distance;
                      const y = Math.sin(radian) * distance;
                      const colors = ["#f4703a", "#ffedd5", "#f97316", "#fb923c", "#fca5a5"];
                      const color = colors[i % colors.length];
                      
                      return (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                          animate={{ 
                            scale: [0, 1.4, 1, 0],
                            x: [0, x],
                            y: [0, y],
                            opacity: [1, 1, 0]
                          }}
                          transition={{ 
                            duration: 2.2, 
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            delay: (i % 4) * 0.15,
                            ease: "easeOut"
                          }}
                          style={{ backgroundColor: color }}
                          className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_rgba(244,112,58,0.5)]"
                        />
                      );
                    })}

                    {/* Central Success Container */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        delay: 0.1
                      }}
                      className="relative z-10 w-24 h-24 bg-gradient-to-br from-brand-accent to-orange-600 rounded-full flex items-center justify-center text-white border border-white/20 shadow-[0_0_40px_rgba(244,112,58,0.6)]"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.15, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          ease: "easeInOut"
                        }}
                      >
                        <CheckCircle2 className="w-12 h-12 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]" strokeWidth={2.5} />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3 relative z-10">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl md:text-4.5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-brand-accent tracking-tight"
                    >
                      Gotcha!
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-text-primary/75 text-sm md:text-base max-w-lg mx-auto"
                    >
                      {feedbackMessage}
                    </motion.p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6 relative z-10"
                  >
                    <button 
                      onClick={() => {
                        setName('');
                        setEmail('');
                        setCompany('');
                        setPhone('');
                        setAov('');
                        setAdSpend('');
                        setMessage('');
                        setStatus('idle');
                        setFeedbackMessage('');
                      }}
                      className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-sm transition-all cursor-pointer shadow-md hover:shadow-lg"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  
                  {/* Two-Column Inputs (Name, Email) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/50 group-focus-within:text-brand-accent transition-colors duration-300 flex items-center gap-1.5 matches-focus">
                        <span>Your Full Name</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nizam Khan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/[0.01] hover:bg-white/[0.02] focus:bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-brand-accent rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 transition-all duration-300 disabled:opacity-50 text-sm focus:shadow-[0_0_30px_rgba(244,112,58,0.12)]"
                      />
                    </div>
                    
                    <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/50 group-focus-within:text-brand-accent transition-colors duration-300 flex items-center gap-1.5">
                        <span>Your Best Email</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. nizam@brand.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/[0.01] hover:bg-white/[0.02] focus:bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-brand-accent rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 transition-all duration-300 disabled:opacity-50 text-sm focus:shadow-[0_0_30px_rgba(244,112,58,0.12)]"
                      />
                    </div>
                  </div>

                  {/* Two-Column Inputs (Company & Phone) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/50 group-focus-within:text-brand-accent transition-colors duration-300 flex items-center gap-1.5">
                        <span>Brand / Website Name</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Luxury Apparels (or apparel.pk)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/[0.01] hover:bg-white/[0.02] focus:bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-brand-accent rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 transition-all duration-300 disabled:opacity-50 text-sm focus:shadow-[0_0_30px_rgba(244,112,58,0.12)]"
                      />
                    </div>
                    
                    <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/50 group-focus-within:text-brand-accent transition-colors duration-300 flex items-center gap-1.5">
                        <span>Your Phone / WhatsApp</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +92 300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/[0.01] hover:bg-white/[0.02] focus:bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-brand-accent rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 transition-all duration-300 disabled:opacity-50 text-sm focus:shadow-[0_0_30px_rgba(244,112,58,0.12)]"
                      />
                    </div>
                  </div>

                  {/* Two-Column Inputs (AOV & Ad Spend) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/50 group-focus-within:text-brand-accent transition-colors duration-300 flex items-center gap-1.5">
                        <span>Your Average Order Value (AOV)</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. PKR 3,500"
                        value={aov}
                        onChange={(e) => setAov(e.target.value)}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/[0.01] hover:bg-white/[0.02] focus:bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-brand-accent rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 transition-all duration-300 disabled:opacity-50 text-sm focus:shadow-[0_0_30px_rgba(244,112,58,0.12)]"
                      />
                    </div>
                    
                    <div className="space-y-2 group">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/50 group-focus-within:text-brand-accent transition-colors duration-300 flex items-center gap-1.5">
                        <span>Your Monthly Ad Spend</span>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      </label>
                      <select
                        value={adSpend}
                        onChange={(e) => setAdSpend(e.target.value)}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/[0.01] hover:bg-[#0d0d0d] focus:bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-brand-accent rounded-xl px-5 py-[15px] text-white focus:outline-none focus:ring-4 focus:ring-brand-accent/5 transition-all duration-300 disabled:opacity-50 text-sm focus:shadow-[0_0_30px_rgba(244,112,58,0.12)] cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0c0c0c] text-white/40">Select Monthly Ad Spend</option>
                        <option value="0-500k" className="bg-[#0c0c0c] text-white">0-500k</option>
                        <option value="1M-2M" className="bg-[#0c0c0c] text-white">1M-2M</option>
                        <option value="2M-5M" className="bg-[#0c0c0c] text-white">2M-5M</option>
                        <option value="5M+" className="bg-[#0c0c0c] text-white">5M+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Goals (Optional) */}
                  <div className="space-y-2 group">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50 group-focus-within:text-brand-accent transition-colors duration-300 flex justify-between">
                      <span>Core Scaling Bottleneck & Growth Goals</span>
                      <span className="text-white/30 text-[10px]">Optional</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What are your core bottlenecks? Describe your margin setup, budget capabilities, and what you need to achieve..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={status === 'loading'}
                      className="w-full bg-white/[0.01] hover:bg-white/[0.02] focus:bg-[#0c0c0c] border border-white/10 hover:border-white/20 focus:border-brand-accent rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 transition-all duration-300 disabled:opacity-50 text-sm resize-none focus:shadow-[0_0_30px_rgba(244,112,58,0.12)]"
                    />
                  </div>

                  {/* Status Notices */}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-500 text-sm flex items-start gap-3"
                    >
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Transmission Error:</span> {feedbackMessage}
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col items-center">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto md:min-w-[280px] py-4 shadow-lg hover:shadow-[0_0_30px_rgba(244,112,58,0.4)] transition-all duration-300"
                      variant="primary"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing Application...
                        </>
                      ) : (
                        <>
                          Submit
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </div>

                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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

// --- Qualification Gate Component ---

const QualificationGate = ({ onQualified }: { onQualified: () => void }) => {
  const [step, setStep] = useState<'question' | 'playbook' | 'verifying' | 'success'>('question');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleYes = () => {
    setStep('verifying');
    setTimeout(() => {
      onQualified();
    }, 1500);
  };

  const handleNo = () => {
    setStep('playbook');
  };

  const handlePlaybookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setStep('success');
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMsg('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-bg-primary overflow-y-auto flex items-center justify-center p-4 md:p-6 select-none">
      {/* Glow background */}
      <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-brand-accent/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-xl my-auto py-12">
        {/* Brand Header */}
        <div className="relative w-44 md:w-52 h-12 mx-auto mb-10 md:mb-12">
          <Image 
            src="https://drive.google.com/uc?export=download&id=1p78NgIMJDO-CY1s-ZWb-OyvdKcxdSHxM" 
            alt="Shadow Studio Logo" 
            fill 
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Container */}
        <div className="glass-panel border-white/10 rounded-3xl p-6 md:p-10 shadow-3xl relative overflow-hidden">
          {step === 'question' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="inline-block text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-brand-accent uppercase mb-4">
                AUTHENTICATION PORTAL
              </span>
              <h2 className="text-xl md:text-3xl font-bold font-display text-white mb-8 tracking-tight px-2 leading-tight">
                Are you an Ecommerce founder doing 2M+ sales already?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {/* YES Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleYes}
                  className="glass-panel border-brand-accent/20 hover:border-brand-accent hover:shadow-[0_0_20px_rgba(244,112,58,0.15)] rounded-2xl p-6 cursor-pointer text-left transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-accent/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-brand-accent/10" />
                  <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-2">
                    Yes, we do 2M+
                  </h3>
                  <p className="text-xs text-text-primary/50 leading-relaxed group-hover:text-text-primary/70 transition-colors">
                    Access the complete multi-channel 7M+ scale blueprints, case studies, and book premium strategy audits.
                  </p>
                </motion.button>

                {/* NO Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNo}
                  className="glass-panel border-white/5 hover:border-white/20 hover:shadow-xl rounded-2xl p-6 cursor-pointer text-left transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 mb-4 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-2">
                    No, we are below 2M
                  </h3>
                  <p className="text-xs text-text-primary/50 leading-relaxed group-hover:text-text-primary/70 transition-colors">
                    Get an instant copy of our private scale playbook containing our systems to hit your first 2M+ monthly.
                  </p>
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 'playbook' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <span className="inline-block text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-brand-accent uppercase mb-4">
                FOUNDER STATS RESTRICTED
              </span>
              <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-3 tracking-tight">
                Unlock The $2M Scale Playbook
              </h2>
              <p className="text-xs md:text-sm text-text-primary/60 mb-6 max-w-md mx-auto leading-relaxed">
                Our main frameworks are custom-assembled for large scales. However, we packed our complete early-stage growth blueprints into a free Starter Playbook. Enter your work email below to receive it.
              </p>

              <form onSubmit={handlePlaybookSubmit} className="space-y-4 max-w-sm mx-auto text-left">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full bg-bg-secondary/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-primary/20 focus:outline-none focus:border-brand-accent/50 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full bg-bg-secondary/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-primary/20 focus:outline-none focus:border-brand-accent/50 transition-colors disabled:opacity-50"
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-xs text-center">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-accent text-white hover:opacity-90 transition-all font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 neon-glow"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Get Playbook & Proceed
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('question')}
                  className="w-full text-center text-xs text-text-primary/40 hover:text-white transition-colors py-2 block"
                >
                  ← Go back to qualification question
                </button>
              </form>
            </motion.div>
          )}

          {step === 'verifying' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <Loader2 className="w-12 h-12 animate-spin text-brand-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Verifying Scale Credentials
              </h3>
              <p className="text-xs text-text-primary/40 tracking-widest font-mono">
                INITIALIZING 7M+ scaling systems...
              </p>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Playbook Sent Successfully!
              </h3>
              <p className="text-sm text-text-primary/60 mb-6 max-w-xs mx-auto leading-relaxed">
                Check your inbox (and spam folders) for the $2M scaling framework. You can now browse the full website!
              </p>
              <button
                onClick={onQualified}
                className="w-full max-w-[240px] bg-white text-bg-primary hover:bg-neutral-200 transition-all font-bold text-sm h-12 rounded-xl mx-auto flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                Proceed to Website
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function FunnelPage() {
  const [gatedStatus, setGatedStatus] = useState<'loading' | 'pending' | 'qualified'>('loading');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkQualification = () => {
      const saved = localStorage.getItem('shadow_studio_qualification');
      setGatedStatus(saved === 'qualified' ? 'qualified' : 'pending');
    };
    Promise.resolve().then(checkQualification);
  }, []);

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
    { name: 'Case Study', id: 'case-studies', icon: BarChart3 },
    { name: 'Free Audit', id: 'lead-magnet', icon: Target },
    { name: 'How We Do It', id: 'process', icon: Layers },
    { name: 'FAQ', id: 'faq', icon: Calendar },
  ];

  if (gatedStatus === 'loading') {
    return (
      <div className="fixed inset-0 bg-bg-primary z-[100] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-accent mb-4" />
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">LOADING EXPERIENCE...</p>
      </div>
    );
  }

  if (gatedStatus === 'pending') {
    return (
      <QualificationGate 
        onQualified={() => {
          localStorage.setItem('shadow_studio_qualification', 'qualified');
          setGatedStatus('qualified');
        }} 
      />
    );
  }

  return (
    <main className="relative pb-20 md:pb-0">
      {/* WhatsApp Link */}
      <motion.a
        href="https://wa.me/923451694215"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          const win = window as any;
          if (typeof win.fbq === 'function') {
            win.fbq('track', 'Contact');
          }
          win.dataLayer = win.dataLayer || [];
          win.dataLayer.push({
            'event': 'whatsapp_contact_click',
            'conversion_type': 'contact'
          });
          console.log('WhatsApp Contact Tracked (Meta + GTM)');
        }}
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
            <Button onClick={scrollTo('booking')} variant="outline" className="px-6 py-2 text-sm">
              Book Call
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button onClick={scrollTo('booking')} variant="primary" className="px-4 py-2 text-[10px] uppercase tracking-wider">
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

      <UnifiedHero />
      <CaseStudies />
      <MonthlyPerformance />
      <HowItWorks />
      <LeadMagnet />
      <Qualification />
      <BuiltInContactForm />
      <FAQ />
      <Footer />
    </main>
  );
}
