import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  ArrowRight,
  Search,
  Users,
  Repeat,
  CheckCircle2,
  Clock,
  Layers,
  Globe,
  FileText,
  MailWarning,
  UserCheck,
  Video,
  Heart,
  Target,
  Sparkles,
  TrendingUp,
  BarChart3,
  Percent,
  Timer,
  ShieldCheck,
  UserPlus,
  Coins,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Plus
} from 'lucide-react';
import './App.css';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const Navbar = () => (
  <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000, padding: '16px 0', borderBottom: '1px solid #E2E8F0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: '#3B82F6', padding: '6px', borderRadius: '8px', display: 'flex' }}>
          <Zap color="white" size={24} fill="white" />
        </div>
        <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Outfit', color: '#1E293B', letterSpacing: '-0.02em' }}>RecruiterAI</span>
      </div>

      <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
        <div className="desktop-only" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Features', 'Impact', 'Testimonials', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontWeight: 600, color: '#475569', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s', fontFamily: 'Inter' }} className="nav-link-hover">
              {item}
            </a>
          ))}
        </div>

        <button className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '10px', fontWeight: 700, fontFamily: 'Outfit' }}>
          Start Free Trial
        </button>
      </div>
    </div>
  </nav>
);

const LogoSlider = () => {
  const logos = ["LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre", "Wellfound", "IIMJobs", "Glassdoor", "Monster India", "Cutshort"];
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="logo-item" style={{ fontSize: '1.2rem', color: '#94A3B8', fontFamily: 'Outfit' }}>{logo}</div>
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ quote, name, title, company, avatar, delay }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={() => setIsClicked(!isClicked)}
      style={{
        flex: 1,
        minWidth: '340px',
        background: 'white',
        padding: '48px',
        borderRadius: '32px',
        border: '1px solid #F1F5F9',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: isClicked ? '0 30px 60px rgba(59, 130, 246, 0.15)' : '0 10px 40px rgba(0,0,0,0.02)',
        transform: isClicked ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '1.2rem', color: '#1E293B', fontFamily: 'Inter', lineHeight: 1.7, fontWeight: 500, fontStyle: 'italic' }}>
          "{quote}"
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #F1F5F9' }}>
          <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <div style={{ fontWeight: 800, color: '#1E293B', fontFamily: 'Outfit', fontSize: '1.1rem' }}>{name}</div>
          <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600, fontFamily: 'Inter' }}>
            {title}, <span style={{ color: '#3B82F6' }}>{company}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: '#3B82F6',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '100px',
              fontSize: '0.7rem',
              fontWeight: 800,
              fontFamily: 'Outfit'
            }}
          >
            VERIFIED HIRER
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AccordionItem = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        background: 'white',
        borderRadius: '24px',
        marginBottom: '16px',
        overflow: 'hidden',
        border: '1px solid #F1F5F9',
        boxShadow: isOpen ? '0 15px 35px rgba(59, 130, 246, 0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', fontFamily: 'Outfit' }}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          style={{
            color: isOpen ? '#3B82F6' : '#64748B',
            background: isOpen ? '#EFF6FF' : '#F8FAFC',
            padding: '8px',
            borderRadius: '12px'
          }}
        >
          <Plus size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div style={{ padding: '0 32px 32px', color: '#64748B', fontFamily: 'Inter', fontSize: '1.1rem', lineHeight: 1.7 }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AdvantagePillar = ({ title, metric, metricLabel, description, subMetrics, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(59, 130, 246, 0.08)' }}
    style={{
      flex: 1,
      minWidth: '340px',
      background: 'white',
      padding: '48px',
      borderRadius: '32px',
      border: '1px solid #F1F5F9',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}
  >
    <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ background: '#3B82F610', color: '#3B82F6', padding: '16px', borderRadius: '16px' }}>
        <Icon size={32} />
      </div>
      <div style={{ textAlign: 'right' }}>
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ fontSize: '3.5rem', fontWeight: 800, color: '#3B82F6', fontFamily: 'Outfit', lineHeight: 1 }}
        >
          <Counter value={metric} />
        </motion.div>
        <div style={{
          fontSize: '0.75rem',
          color: '#3B82F6',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginTop: '12px',
          background: '#DBEAFE',
          padding: '4px 10px',
          borderRadius: '6px',
          display: 'inline-block',
          fontFamily: 'Outfit'
        }}>
          {metricLabel}
        </div>
      </div>
    </div>

    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B', fontFamily: 'Outfit', marginBottom: '16px' }}>{title}</h3>
    <p style={{ fontSize: '1.1rem', color: '#64748B', fontFamily: 'Inter', lineHeight: 1.6, marginBottom: '40px' }}>{description}</p>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {subMetrics.map((sm, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: '#F8FAFF', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
            <TrendingUp size={18} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, color: '#1E293B', fontFamily: 'Outfit', fontSize: '1.1rem' }}>{sm.val}</div>
            <div style={{ color: '#94A3B8', fontFamily: 'Inter', fontSize: '0.85rem', fontWeight: 600 }}>{sm.label}</div>
          </div>
        </div>
      ))}
    </div>

    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(59,130,246,0.03) 0%, transparent 60%)', pointerEvents: 'none' }} />
  </motion.div>
);

const AdvantageSection = () => (
  <section id="impact" style={{ padding: '80px 0', background: '#FFFFFF' }}>
    <div className="container" style={{ padding: '0 40px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3.8rem', color: '#1E293B', fontFamily: 'Outfit', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.04em' }}>
          The RecruiterAI Advantage
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Inter', fontWeight: 500 }}>
          Simple numbers that show how much faster and better your hiring becomes
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <AdvantagePillar
          icon={Zap}
          title="Speed Analysis"
          metric="10x"
          metricLabel="Screening Velocity"
          description="Transform slow manual cycles into instant hiring pipelines."
          subMetrics={[
            { val: "10x Faster", label: "250+ apps/day vs 25 manually" },
            { val: "70% Drop", label: "Timeline: 42 days down to 12" }
          ]}
          delay={0.1}
        />
        <AdvantagePillar
          icon={ShieldCheck}
          title="Quality Analysis"
          metric="89%"
          metricLabel="Retention Boost"
          description="AI accuracy that matches the right talent to the right role, every time."
          subMetrics={[
            { val: "89% More", label: "Qualified candidate pipeline" },
            { val: "50% Fewer", label: "Bad hires via AI assessments" },
            { val: "95% Rate", label: "Application completion success" }
          ]}
          delay={0.2}
        />
        <AdvantagePillar
          icon={BarChart3}
          title="Economic Impact"
          metric="80%"
          metricLabel="Budget Optimization"
          description="Slash overheads while exponentially increasing your team's output."
          subMetrics={[
            { val: "80% Lower", label: "Direct recruitment costs" },
            { val: "25x Higher", label: "Automated interview capacity" }
          ]}
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const FlowchartSection = ({ title, description, steps, benefit }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="glass"
    style={{ padding: '48px 40px', borderRadius: '32px', flex: 1, minWidth: '320px', border: '1px solid #F1F5F9', background: 'white', overflow: 'hidden' }}
  >
    <div style={{ marginBottom: '16px' }}>
      <motion.div initial={{ width: 0 }} whileInView={{ width: '40px' }} transition={{ delay: 0.5, duration: 0.8 }} style={{ height: '4px', background: '#3B82F6', borderRadius: '2px', marginBottom: '12px' }} />
      <h3 style={{ fontSize: '1.6rem', color: '#1E293B', fontFamily: 'Outfit', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}>
        {title}
        <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Sparkles size={18} color="#3B82F6" opacity={0.6} /></motion.span>
      </h3>
    </div>
    <p style={{ color: '#64748B', fontSize: '1rem', fontFamily: 'Inter', lineHeight: 1.6, marginBottom: '40px' }}>{description}</p>
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '2px', background: 'linear-gradient(to bottom, #DBEAFE 0%, #3B82F6 100%)', opacity: 0.4 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 + 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9' }}>
              <step.icon size={20} />
            </div>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1E293B', fontFamily: 'Outfit' }}>{step.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
    <div style={{ marginTop: '48px', background: '#F0F9FF', padding: '24px', borderRadius: '20px', borderLeft: '4px solid #3B82F6' }}>
      <p style={{ fontSize: '1rem', fontWeight: 800, color: '#1E40AF', fontFamily: 'Inter' }}><Zap size={16} fill="#F59E0B" color="#F59E0B" style={{ display: 'inline', marginRight: '8px' }} />{benefit}</p>
    </div>
  </motion.div>
);

const ConversationBubble = ({ profile, company, quote, position, delay, avatar }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.08)' }}
    style={{ position: 'absolute', background: 'white', padding: '20px', borderRadius: '24px', maxWidth: '280px', zIndex: 120, boxShadow: '0 15px 35px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', ...position }}
  >
    <p style={{ fontSize: '0.95rem', color: '#1E293B', fontWeight: 500, lineHeight: 1.5, marginBottom: '16px', fontFamily: 'Inter' }}>"{quote}"</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src={avatar} alt={profile} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
      <div>
        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1E293B', fontFamily: 'Outfit' }}>{profile}</div>
        <div style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'Inter' }}>{company}</div>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => (
  <section style={{ padding: '140px 0 80px', position: 'relative', overflow: 'hidden', background: '#F8FAFF' }}>
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
      <motion.path d="M -100 450 Q 200 350 500 500 Q 800 650 1100 500 Q 1400 350 1600 500" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3 }} />
    </svg>

    <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>

      <div className="desktop-only">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ position: 'absolute', left: '-15%', top: '5%', width: '380px', height: '500px', borderRadius: '48px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)', zIndex: 5 }}
        >
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Recruiter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ position: 'absolute', right: '-15%', top: '15%', width: '350px', height: '480px', borderRadius: '48px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)', zIndex: 5 }}
        >
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" alt="Manager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
      </div>

      <div className="desktop-only">
        <ConversationBubble profile="Sarah K." company="TechStart" quote="Candidates wait 3 weeks. We're losing great talent." position={{ top: '-100px', left: '2%' }} delay={0.4} avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
        <ConversationBubble profile="Rahul M." company="GrowthCo" quote="200 apps. Skimmed 20. Hired on gut feeling." position={{ top: '-40px', right: '2%' }} delay={0.6} avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" />
        <ConversationBubble profile="Priya S." company="InnovateLabs" quote="CEO AND doing HR? Zero time to read resumes." position={{ bottom: '-40px', left: '5%' }} delay={0.8} avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" />
        <ConversationBubble profile="Amit T." company="ScaleUp" quote="Best candidate accepted another offer while we were scheduling." position={{ bottom: '20px', right: '0%' }} delay={1.0} avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 100 }}>
        <motion.div style={{ display: 'inline-flex', background: 'white', padding: '12px 24px', borderRadius: '100px', marginBottom: '32px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#3B82F6', fontFamily: 'Outfit' }}>NEW: AI Interviewer 2.0 Is Live</span>
        </motion.div>
        <motion.h1 style={{ fontSize: 'calc(2.5rem + 2.5vw)', fontWeight: 800, marginBottom: '24px', color: '#1E293B', fontFamily: 'Outfit', letterSpacing: '-0.04em', lineHeight: 1.1 }}>Every Hire, <br /><span style={{ color: '#0F172A' }}>Faster and Better</span></motion.h1>
        <p style={{ fontSize: '1.25rem', color: '#64748B', maxWidth: '640px', margin: '0 auto 48px', fontFamily: 'Inter', lineHeight: 1.6 }}>Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button className="btn-primary" style={{ padding: '20px 48px', borderRadius: '14px', fontSize: '1.2rem', fontWeight: 800, background: '#3B82F6', color: 'white', fontFamily: 'Outfit', cursor: 'pointer', border: 'none' }}>Start Hiring Smarter</button>
          <button style={{ padding: '20px 48px', borderRadius: '14px', fontSize: '1.2rem', fontWeight: 800, background: 'white', border: '2px solid #E2E8F0', fontFamily: 'Outfit', cursor: 'pointer' }}>See How It Works</button>
        </div>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section style={{ padding: '60px 0', background: 'white', borderBottom: '1px solid #F1F5F9' }}>
    <div className="container" style={{ padding: '0 40px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <p style={{ color: '#3B82F6', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '12px', fontFamily: 'Outfit' }}>
          MULTI-CHANNEL SOURCING
        </p>
        <h2 style={{ fontSize: '2.5rem', color: '#1E293B', fontFamily: 'Outfit', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Post Once, Reach Everywhere
        </h2>
      </motion.div>
      <LogoSlider />
    </div>
  </section>
);

const App = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Navbar />
      <HeroSection />

      <section id="features" style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ padding: '0 40px', textAlign: 'center' }}>
          <div style={{ marginBottom: '60px' }}>
            <div style={{ display: 'inline-flex', background: 'white', padding: '8px 20px', borderRadius: '100px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#3B82F6', fontFamily: 'Outfit' }}>CORE AUTOMATION ENGINE</span>
            </div>
            <h2 style={{ fontSize: '3.8rem', color: '#1E293B', fontFamily: 'Outfit', fontWeight: 800, marginBottom: '24px' }}>AI Recruiting Software That Works <br /><span style={{ color: '#3B82F6' }}>Like Your Own HR Team</span></h2>
            <p style={{ color: '#64748B', fontSize: '1.3rem', fontFamily: 'Inter' }}>Build custom hiring workflows in minutes. No coding required.</p>
          </div>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FlowchartSection title="Screening & Scheduling" description="Turn inbound applications into objective evaluations." steps={[{ icon: FileText, label: "New application submitted" }, { icon: Search, label: "AI resume screening (Top 20%)" }, { icon: MailWarning, label: "Auto-send screening questions" }, { icon: Target, label: "Score > 75% & Auto-schedule" }, { icon: Clock, label: "Interview reminder (24h)" }]} benefit="Screen 250+ applications in minutes vs 8 hours manually" />
            <FlowchartSection title="Interview Automation" description="Let AI run structured, multi-stage interviews." steps={[{ icon: UserCheck, label: "Candidate accepts invite" }, { icon: Video, label: "AI video interview" }, { icon: CheckCircle2, label: "AI scoring using rubric" }, { icon: Users, label: "Score > 80% & Manager round" }, { icon: Heart, label: "Offer or personalized rejection" }]} benefit="Reduce time-to-hire from 42 days to just 12 days" />
            <FlowchartSection title="Passive Re-engagement" description="Never lose touch with good future fits." steps={[{ icon: MailWarning, label: "Candidate rejected (60-74%)" }, { icon: Layers, label: "Added to future talent pool" }, { icon: Globe, label: "New role opens" }, { icon: Mail, label: "Personalized re-engagement" }, { icon: Zap, label: "Fast-track interview" }]} benefit="Build a qualified talent pipeline automatically" />
          </div>
        </div>
      </section>

      <AdvantageSection />

      <TrustSection />

      <section id="testimonials" style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ padding: '0 40px', textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3.5rem', color: '#1E293B', fontFamily: 'Outfit', fontWeight: 800 }}>Trusted by Talent Leaders</h2>
          <p style={{ color: '#94A3B8', fontSize: '1.4rem', fontFamily: 'Inter', fontWeight: 500 }}>The secret weapon of high-growth modern teams.</p>
        </div>
        <div className="container" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', padding: '0 40px', justifyContent: 'center' }}>
          <TestimonialCard
            quote="We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup."
            name="Rahul Mehta"
            title="Founder"
            company="TechStart Solutions"
            avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            delay={0.1}
          />
          <TestimonialCard
            quote="RecruiterAI handles all the scheduling chaos. I just show up to interviews with the best candidates already vetted. Surprisingly accurate filtering."
            name="Mark D."
            title="Head of Eng"
            company="DevFlow"
            avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
            delay={0.2}
          />
          <TestimonialCard
            quote="The passive candidate re-engagement is a game changer. We hired two people from our existing pool last month automatically without any effort."
            name="Sarah L."
            title="Recruiting Lead"
            company="SpaceX"
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            delay={0.3}
          />
        </div>
      </section>

      <section id="faq" style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '900px', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3.5rem', color: '#1E293B', fontFamily: 'Outfit', fontWeight: 800, marginBottom: '24px' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#94A3B8', fontSize: '1.2rem', fontFamily: 'Inter', fontWeight: 500 }}>Everything you need to know about RecruiterAI.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AccordionItem
              question="How does AI screening work?"
              answer="Our AI analyzes resumes against custom rubrics, ranking candidates based on skills, experience, and cultural fit with 95% accuracy. It eliminates bias and ensures you only see top-tier talent."
              delay={0.1}
            />
            <AccordionItem
              question="Does RecruiterAI integrate with our existing ATS?"
              answer="Yes! We offer native, deep integrations with Greenhouse, Lever, Ashby, and Workday. You can sync candidates, jobs, and feedback instantly with a single click."
              delay={0.2}
            />
            <AccordionItem
              question="What's the pricing structure?"
              answer="We offer transparent monthly job-slot based pricing. You can scale up or down as your hiring needs change. No hidden fees or long-term contracts required."
              delay={0.3}
            />
            <AccordionItem
              question="How long does setup take?"
              answer="You can be up and running in less than 15 minutes. Simple dashboard configuration and ATS sync mean you start screening and ranking candidates today."
              delay={0.4}
            />
            <AccordionItem
              question="Is candidate data secure?"
              answer="Absolutely. We are SOC2 Type II and GDPR compliant. All data is encrypted at rest and in transit using industry-standard protocols. Your data privacy is our top priority."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#F0F7FF', textAlign: 'center' }}>
        <div className="container" style={{ padding: '0 40px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '4.5rem', fontWeight: 800, fontFamily: 'Outfit', color: '#1E293B', marginBottom: '24px', letterSpacing: '-0.02em' }}
          >
            Ready to Hire Better, Faster?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.4rem', color: '#64748B', marginBottom: '56px', fontFamily: 'Inter', fontWeight: 500 }}
          >
            Join 500+ companies hiring smarter with AI
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
          >
            <button className="btn-primary" style={{ padding: '20px 48px', borderRadius: '14px', fontSize: '1.2rem', fontWeight: 800, background: '#3B82F6', color: 'white', fontFamily: 'Outfit', cursor: 'pointer', border: 'none' }}>
              Start Free Trial
            </button>
            <button style={{ padding: '20px 48px', borderRadius: '14px', fontSize: '1.2rem', fontWeight: 800, background: 'white', border: '2px solid #E2E8F0', fontFamily: 'Outfit', cursor: 'pointer', color: '#1E293B' }}>
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      <footer style={{ background: 'white', padding: '120px 0 60px', borderTop: '1px solid #F1F5F9' }}>
        <div className="container" style={{ padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '80px', marginBottom: '80px' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ background: '#3B82F6', padding: '6px', borderRadius: '6px' }}>
                  <Zap color="white" size={20} fill="white" />
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Outfit', color: '#1E293B' }}>RecruiterAI</span>
              </div>
              <p style={{ color: '#64748B', fontSize: '1.1rem', fontWeight: 500, fontFamily: 'Inter', marginBottom: '16px' }}>
                Automating the future of hiring.
              </p>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '380px', fontFamily: 'Inter' }}>
                Built for founders, HR, and hiring managers who need to move fast without breaking the candidate experience.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', fontFamily: 'Outfit', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Features', 'Results', 'Testimonials'].map(item => (
                    <li key={item}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontFamily: 'Inter', fontWeight: 500, transition: 'color 0.2s' }} className="footer-link">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', fontFamily: 'Outfit', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['About', 'Careers'].map(item => (
                    <li key={item}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontFamily: 'Inter', fontWeight: 500, transition: 'color 0.2s' }} className="footer-link">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', fontFamily: 'Outfit', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Privacy', 'Terms'].map(item => (
                    <li key={item}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontFamily: 'Inter', fontWeight: 500, transition: 'color 0.2s' }} className="footer-link">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid #F1F5F9', color: '#94A3B8', fontSize: '0.95rem', fontFamily: 'Inter' }}>
            <div>© 2026 RecruiterAI. All rights reserved.</div>
            <div style={{ fontStyle: 'italic' }}>Made for high-velocity hiring teams.</div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 992px) { .desktop-only { display: none; } }
        .nav-link-hover:hover { color: #3B82F6 !important; }
        .footer-link:hover { color: #3B82F6 !important; }
        .testimonial-premium:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.04); }
        .logo-item { transition: all 0.3s ease; cursor: pointer; user-select: none; }
        .logo-item:hover { color: #3B82F6 !important; transform: scale(1.1); text-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
      `}} />
    </div>
  );
};

export default App;
