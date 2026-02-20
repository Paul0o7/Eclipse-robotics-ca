import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Zap,
  Trophy,
  Instagram,
  Camera,
  Heart,
  MessageCircle,
  CheckCircle2,
  Download,
  Copy,
  Check,
  Play,
  BarChart3,
  MapPin,
  Phone,
  Shirt,
  Monitor,
  Flag,
  FileText,
  Users,
  Target
} from 'lucide-react';

/**
 * Eclipse Robotics VEX U Website
 * High-performance landing page for a collegiate robotics team.
 * Optimized for GitHub/Vercel with functional PDF downloads.
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Instagram Feed State
  const [igPosts, setIgPosts] = useState([]);
  const [loadingIg, setLoadingIg] = useState(true);

  // Constants & Configuration
  const BEHOLD_URL = "https://feeds.behold.so/t2cK9m9tg80BDruckAjN"; 
  const TEAM_EMAIL = "eclipseroboticsca@gmail.com";
  const CONTACT_PERSON = "Paul Corisuelo Valencia";
  const CONTACT_PHONE = "(209) 689-6655";
  
  // IMPORTANT: Place your PDF file inside the "public" folder of your GitHub repository.
  // The filename must match exactly what is written below.
  const PACKET_PDF_URL = "/Eclipse_Robotics_Sponsorship_Packet.pdf";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const fetchInstagram = async () => {
      try {
        const response = await fetch(BEHOLD_URL);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const posts = Array.isArray(data) ? data : (data.posts || []);
        setIgPosts(posts.slice(0, 4));
      } catch (error) {
        console.error("IG Feed Error:", error);
      } finally {
        setLoadingIg(false);
      }
    };

    fetchInstagram();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = TEAM_EMAIL;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const EclipseLogo = ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 400 200" className={className} fill="currentColor">
      <path d="M115,75 C115,30 160,10 230,10 C185,25 155,50 155,75 L115,75 Z" />
      <path d="M115,125 C115,170 160,190 230,190 C185,175 155,150 155,125 L115,125 Z" />
      <circle cx="130" cy="45" r="1.5" fill="white" />
      <circle cx="140" cy="30" r="1.2" fill="white" />
      <circle cx="125" cy="60" r="1" fill="white" />
      <circle cx="135" cy="140" r="1.5" fill="white" />
      <circle cx="148" cy="160" r="1.2" fill="white" />
      <circle cx="128" cy="130" r="1" fill="white" />
      <text x="60" y="112" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="56" letterSpacing="-3" style={{ fontStyle: 'italic' }}>ECLIPSE</text>
    </svg>
  );

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => { setActiveTab('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <EclipseLogo className="h-10 w-auto text-white group-hover:text-blue-400 transition-colors" />
          <span className="hidden sm:block text-xl font-black tracking-tighter ml-2 italic text-white uppercase">VEX <span className="text-blue-500">U</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase">
          {['home', 'team', 'sponsorship', 'contact'].map((item) => (
            <button key={item} onClick={() => { setActiveTab(item); window.scrollTo({top: 0, behavior: 'smooth'}); }} className={`transition-colors ${activeTab === item ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
            <Instagram size={20} />
          </a>
          <button onClick={() => { setActiveTab('sponsorship'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-blue-900/20">
            Sponsor
          </button>
        </div>
      </div>
    </nav>
  );

  const InstagramFeed = () => (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3 italic uppercase text-white">
              <Instagram className="text-pink-500" /> Live Feed
            </h2>
            <p className="text-gray-500 mt-2">Latest from @eclipse_robotics</p>
          </div>
          <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center gap-1 font-bold text-sm hover:underline">
            View All <ExternalLink size={14} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loadingIg ? (
            [1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-white/5 rounded-xl animate-pulse flex items-center justify-center">
                <Camera className="text-white/10" size={32} />
              </div>
            ))
          ) : igPosts.length > 0 ? (
            igPosts.map((post) => {
              const isVideo = post.mediaType === 'VIDEO' || post.media_type === 'VIDEO';
              const imageUrl = isVideo 
                ? (post.thumbnailUrl || post.thumbnail_url || post.mediaUrl)
                : (post.mediaUrl || post.media_url);
              
              return (
                <div 
                  key={post.id} 
                  className="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group cursor-pointer"
                  onClick={() => window.open(post.permalink || `https://www.instagram.com/p/${post.id}`, '_blank')}
                >
                  <img 
                    src={imageUrl} 
                    alt="VEX U robotics" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  {isVideo && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-lg z-10 border border-white/10">
                      <Play size={14} fill="white" className="text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex items-center gap-4 text-sm font-bold text-white">
                      <span className="flex items-center gap-1"><Heart size={16} fill="currentColor" /> {post.likeCount || ''}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center text-zinc-600 border border-dashed border-zinc-800 rounded-2xl">
              Feed temporarily unavailable
            </div>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      <Navigation />
      
      <main>
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center pt-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.25),transparent_70%)]"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase italic">Collegiate VEX U Collective // California</span>
                </div>
                <div className="flex justify-center mb-8">
                  <EclipseLogo className="w-72 md:w-96 h-auto text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
                </div>
                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-tight text-white">
                  Total <span className="text-blue-500">Engineering</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
                  Building the future through VEX U competition and collegiate engineering excellence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => { setActiveTab('team'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-white text-black font-black px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-xl w-full sm:w-auto justify-center">
                    The Team <ChevronRight size={20} />
                  </button>
                  <button onClick={() => { setActiveTab('sponsorship'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-white/5 border border-white/10 text-white font-bold px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto justify-center">
                    Sponsorship Packet
                  </button>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <section className="py-24 bg-black">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tight text-white">VEX U Performance</h2>
                    <p className="text-gray-400 text-lg leading-relaxed italic">Challenge ourselves as future engineers. Our record of success speaks for itself.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    {[
                      { val: "2+", label: "Years" },
                      { val: "10+", label: "Awards" },
                      { val: "2X", label: "State Qual." },
                      { val: "U.S.", label: "Open Qual. (IA)" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-black text-blue-400 uppercase">{stat.val}</div>
                        <div className="text-[9px] text-gray-500 uppercase tracking-widest font-black">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: <Cpu />, title: "Custom Fab", desc: "Utilizing CNC milling and industrial 3D printing to move beyond the limitations of standard VEX components." },
                    { icon: <Zap />, title: "Precision Control", desc: "Advanced motion profiling and PID control loops developed in C++ for maximum autonomous reliability." },
                    { icon: <Trophy />, title: "Outreach Mission", desc: "Promoting STEM literacy in local schools to inspire the next generation of robotics innovators." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all group">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 italic uppercase text-white">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            <InstagramFeed />
          </>
        )}
        
        {activeTab === 'team' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <h2 className="text-6xl font-black mb-12 uppercase italic tracking-tighter text-white">The <span className="text-blue-500">Collective</span></h2>
            <p className="text-gray-400 text-xl max-w-3xl mb-16 leading-relaxed font-medium italic">
              Founded as a high school team, we transitioned to the collegiate VEX U division to continue 
              challenging our technical skills as future engineers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-900/20"><Cpu size={120} /></div>
                <h3 className="text-4xl font-bold mb-4 flex items-center gap-4 text-blue-400 uppercase italic">Mechanical</h3>
                <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                  Precision-focused design cycle. We leverage CAD conceptualization to build final 
                  machined VEX U robots that exceed industrial standards.
                </p>
              </div>
              <div className="p-12 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-purple-900/20"><Zap size={120} /></div>
                <h3 className="text-4xl font-bold mb-4 flex items-center gap-4 text-purple-400 uppercase italic">Programming</h3>
                <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                  Driving intelligence through C++. Robust autonomous routines and sensor-driven 
                  assist systems using the PROS environment.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sponsorship' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 text-center md:text-left">
              <div>
                <h2 className="text-6xl font-black uppercase italic mb-4 text-white tracking-tighter">Sponsorship <span className="text-blue-500">Packet</span></h2>
                <p className="text-gray-400 max-w-xl font-medium italic text-lg leading-relaxed">
                  Partner with us to empower students driven by curiosity and engineering passion.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="bg-blue-600/10 border border-blue-500/20 px-6 py-3 rounded-full">
                  <span className="text-blue-400 font-black tracking-widest text-sm uppercase italic">Seasonal Goal: $10,000</span>
                </div>
                {/* FUNCTIONAL DOWNLOAD LINK FOR VERCEL */}
                <a 
                  href={PACKET_PDF_URL} 
                  download="Eclipse_Robotics_Sponsorship_Packet.pdf"
                  className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black hover:bg-gray-200 transition-all text-xs uppercase tracking-widest shadow-xl active:scale-95 no-underline"
                >
                  <Download size={18} /> Download Full PDF
                </a>
              </div>
            </div>

            {/* Packet Preview Section */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="text-blue-500" size={24} />
                <h3 className="text-2xl font-black uppercase italic text-white tracking-tight">Packet Quick View</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Page 1 Summary */}
                <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 relative group overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-blue-500/10 transition-colors font-black text-6xl italic">01</div>
                  <h4 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4 italic">Overview</h4>
                  <ul className="space-y-3 text-xs text-zinc-400 font-medium leading-relaxed">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> STEM Partnership 2025-26</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Collegiate VEX U Status</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> contact@eclipserobotics.org</li>
                  </ul>
                </div>

                {/* Page 2 Summary */}
                <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 relative group overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-blue-500/10 transition-colors font-black text-6xl italic">02</div>
                  <h4 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4 italic">Who We Are</h4>
                  <ul className="space-y-3 text-xs text-zinc-400 font-medium leading-relaxed">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Promoting STEM Literacy</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Local High School Outreach</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Supporting Future Engineers</li>
                  </ul>
                </div>

                {/* Page 3 Summary */}
                <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 relative group overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-blue-500/10 transition-colors font-black text-6xl italic">03</div>
                  <h4 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4 italic">Programs</h4>
                  <ul className="space-y-3 text-xs text-zinc-400 font-medium leading-relaxed">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Student-Led Competition</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Hosting STEM Workshops</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Regional Workshop Support</li>
                  </ul>
                </div>

                {/* Page 4 Summary */}
                <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 relative group overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-blue-500/10 transition-colors font-black text-6xl italic">04</div>
                  <h4 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4 italic">Recognition</h4>
                  <ul className="space-y-3 text-xs text-zinc-400 font-medium leading-relaxed">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Team Apparel Visibility</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Robot Logo Placement</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Regional Event Banners</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial Breakdown */}
            <div className="mb-24 grid grid-cols-1 md:grid-cols-4 gap-4">
               {[
                 { label: "Robot Parts & Materials", val: "40%", icon: <Cpu size={16} /> },
                 { label: "Travel & Logistics", val: "25%", icon: <MapPin size={16} /> },
                 { label: "Tournament Entry Fees", val: "25%", icon: <Trophy size={16} /> },
                 { label: "Outreach Materials", val: "10%", icon: <BarChart3 size={16} /> }
               ].map((item, i) => (
                 <div key={i} className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-zinc-900/60 transition-colors">
                    <div className="text-blue-500 mb-2">{item.icon}</div>
                    <div className="text-3xl font-black text-white">{item.val}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">{item.label}</div>
                 </div>
               ))}
            </div>

            {/* Sponsor Recognition Channels */}
            <section className="mb-24">
              <h3 className="text-2xl font-black mb-8 uppercase italic text-white flex items-center gap-3 tracking-tight">
                <ShieldCheck className="text-blue-500" /> Visibility Channels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Shirt />, title: "Team Apparel", desc: "Logos worn at every tournament and community event by our team collective." },
                  { icon: <Cpu />, title: "The Robot", desc: "Direct placement on competition machines for high-stakes matches." },
                  { icon: <Monitor />, title: "Digital Presence", desc: "Logo featured on website and collegiate reveal video features." },
                  { icon: <Flag />, title: "Event Banners", desc: "Displayed at our hosted regional competitions and STEM literacy workshops." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-blue-500/20 transition-all group">
                    <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="font-bold text-white uppercase italic mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-zinc-900/40 rounded-[2rem] border border-white/5 group hover:border-blue-500/20 transition-colors">
                <h3 className="text-2xl font-black mb-4 uppercase italic text-white flex items-center gap-3">
                  <Target className="text-blue-500" /> In-Kind Donations
                </h3>
                <p className="text-gray-400 mb-6 font-medium leading-relaxed italic">
                  We welcome contributions of materials and tools that directly impact our build process.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Aluminum", "Lexan", "Tools", "Team Meals"].map(item => (
                    <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 italic">{item}</span>
                  ))}
                </div>
              </div>
              <div className="p-10 bg-blue-600/10 rounded-[2rem] border border-blue-500/20 group hover:bg-blue-600/15 transition-all">
                <h3 className="text-2xl font-black mb-4 uppercase italic text-white flex items-center gap-3">
                  <Mail className="text-blue-500" /> How to Support
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 flex-shrink-0" size={20} />
                    <p className="text-sm text-zinc-400 font-medium italic">Checks to <span className="text-white font-bold">Eclipse Robotics</span> or via our secure website portal.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 flex-shrink-0" size={20} />
                    <p className="text-sm text-zinc-400 font-medium italic">Contributions of any amount directly support collegiate innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-black mb-6 uppercase italic tracking-tighter text-white">Get In <span className="text-blue-500">Touch</span></h2>
            <p className="text-gray-500 mb-16 max-w-xl mx-auto font-medium text-lg leading-relaxed italic">
              Reach out to discuss partnerships, workshops, or general collegiate inquiries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-12 bg-zinc-900/40 rounded-[2rem] border border-white/5 text-left hover:border-blue-500/40 transition-all group">
                <Mail className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
                <div className="font-black text-3xl mb-2 italic text-white uppercase tracking-tighter">Inquiries</div>
                <div className="text-gray-400 text-lg font-medium">{TEAM_EMAIL}</div>
                <div className="mt-4 flex flex-col gap-1 text-zinc-500 text-sm italic font-medium">
                  <div className="flex items-center gap-2"><Users size={14}/> {CONTACT_PERSON}</div>
                  <div className="flex items-center gap-2"><Phone size={14}/> {CONTACT_PHONE}</div>
                </div>
                
                <div className="flex gap-3 mt-8">
                  <a href={`mailto:${TEAM_EMAIL}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                    Send Email
                  </a>
                  <button 
                    onClick={copyToClipboard}
                    className="bg-white/5 text-white border border-white/10 px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy Email'}
                  </button>
                </div>
              </div>

              <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="p-12 bg-zinc-900/40 rounded-[2rem] border border-white/5 text-left hover:border-pink-500/40 transition-all group relative overflow-hidden">
                <Instagram className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={48} />
                <div className="font-black text-3xl mb-2 italic text-white uppercase tracking-tighter">Social Feed</div>
                <div className="text-gray-400 text-xl font-medium italic">@eclipse_robotics</div>
                <div className="mt-8 text-pink-500 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  Follow the progress <ChevronRight size={16} />
                </div>
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="py-20 bg-zinc-950 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <EclipseLogo className="h-10 w-auto text-white" />
            <p className="text-zinc-600 text-[9px] font-black tracking-[0.5em] uppercase text-center md:text-left italic">
              California Collegiate VEX U Collective // © 2026
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest italic">
             <button onClick={() => setActiveTab('home')} className="hover:text-blue-500 transition-colors">Home</button>
             <button onClick={() => setActiveTab('team')} className="hover:text-blue-500 transition-colors">The Team</button>
             <button onClick={() => setActiveTab('sponsorship')} className="hover:text-blue-500 transition-colors">Sponsorship</button>
             <button onClick={() => setActiveTab('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
          </div>
          <div className="flex gap-6 text-zinc-400">
             <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
             <button onClick={() => setActiveTab('team')} className="hover:text-white transition-colors"><Trophy size={24} /></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
