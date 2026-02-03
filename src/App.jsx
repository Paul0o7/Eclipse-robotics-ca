import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Users, 
  Award, 
  Cpu, 
  ShieldCheck, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Globe,
  Zap,
  Target,
  Trophy,
  BookOpen,
  Instagram,
  Camera,
  Heart,
  MessageCircle,
  CheckCircle2,
  Download,
  Loader2,
  Copy,
  Check
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Instagram Feed State
  const [igPosts, setIgPosts] = useState([]);
  const [loadingIg, setLoadingIg] = useState(true);

  // YOUR LIVE BEHOLD URL
  const BEHOLD_URL = "https://feeds.behold.so/t2cK9m9tg80BDruckAjN"; 
  const TEAM_EMAIL = "eclipseroboticsca@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Fetch Instagram Feed
    const fetchInstagram = async () => {
      try {
        const response = await fetch(BEHOLD_URL);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        // Behold JSON can sometimes be an array or an object containing an array
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

  const handleTierSelect = (tierName) => {
    setSelectedTier(tierName);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setActiveTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const copyToClipboard = () => {
    // navigator.clipboard.writeText may not work in all iframe environments, 
    // using document.execCommand fallback logic
    const textArea = document.createElement("textarea");
    textArea.value = TEAM_EMAIL;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
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

  const sponsorshipTiers = [
    {
      name: "Lunar Partner",
      price: "$500",
      color: "border-slate-400",
      benefits: ["Logo on website", "IG Story shoutout", "Team shirt mention", "Quarterly updates"]
    },
    {
      name: "Solar Champion",
      price: "$1,500",
      color: "border-blue-500",
      featured: true,
      benefits: ["Logo on V5 Robot", "Team jerseys", "CV book access", "IG Grid spotlight"]
    },
    {
      name: "Eclipse Elite",
      price: "$3,500+",
      color: "border-purple-500",
      benefits: ["Large Prime Logo", "Title sponsorship", "Product feedback", "VIP Pit access", "Worlds Recognition"]
    }
  ];

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => { setActiveTab('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <EclipseLogo className="h-10 w-auto text-white group-hover:text-blue-400 transition-colors" />
          <span className="hidden sm:block text-xl font-black tracking-tighter ml-2 italic">VEX <span className="text-blue-500">U</span></span>
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
            <h2 className="text-3xl font-bold flex items-center gap-3 italic uppercase"><Instagram className="text-pink-500" /> Live Feed</h2>
            <p className="text-gray-500 mt-2">Latest from @eclipse_robotics via Behold.</p>
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
              // Enhanced Image Logic: Check for media_url, mediaUrl, or thumbnail_url (for Reels)
              const imageUrl = post.mediaUrl || post.media_url || post.thumbnail_url || post.thumbnailUrl;
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
                      // Final fallback if link is expired or broken
                      e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex items-center gap-4 text-sm font-bold">
                      <span className="flex items-center gap-1"><Heart size={16} fill="currentColor" /> {post.likeCount || post.likes || ''}</span>
                      <span className="flex items-center gap-1"><MessageCircle size={16} fill="currentColor" /></span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            [1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-700 border border-white/5">
                <Instagram size={32} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      <Navigation />
      
      {showConfirmation && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] w-full max-sm px-6 animate-in slide-in-from-top-4 duration-300">
          <div className="bg-blue-600 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-blue-400">
            <CheckCircle2 size={24} className="flex-shrink-0" />
            <div>
              <p className="font-bold text-sm">Selection Saved</p>
              <p className="text-xs text-blue-100">Contacting for {selectedTier} status...</p>
            </div>
          </div>
        </div>
      )}

      <main>
        {activeTab === 'home' && (
          <>
            <div className="relative min-h-screen flex items-center justify-center pt-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.2),transparent_70%)]"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase italic">Collegiate VEX U Collective</span>
                </div>
                <div className="flex justify-center mb-8"><EclipseLogo className="w-72 md:w-96 h-auto text-white" /></div>
                <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic leading-tight">Total <span className="text-blue-500">Engineering</span></h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">Building the next generation of robotics innovators through VEX U competition.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => { setActiveTab('team'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-white text-black font-black px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-xl">
                    Our Team <ChevronRight size={20} />
                  </button>
                  <button onClick={() => { setActiveTab('sponsorship'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-white/5 border border-white/10 text-white font-bold px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95">
                    Sponsorship Packet
                  </button>
                </div>
              </div>
            </div>

            <section className="py-24 bg-black">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl font-bold mb-4 uppercase italic tracking-tight">VEX U Standards</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">Pushing the limits with custom fabrication, precision coding, and advanced sensor fusion.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center p-5 rounded-2xl bg-white/5 border border-white/10 w-32">
                      <div className="text-3xl font-bold text-blue-400">2</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Bots</div>
                    </div>
                    <div className="text-center p-5 rounded-2xl bg-white/5 border border-white/10 w-32">
                      <div className="text-3xl font-bold text-purple-400">15"</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Limit</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: <Cpu />, title: "Custom Fabrication", desc: "Implementing CNC milling and industrial 3D printing to move beyond standard part limitations." },
                    { icon: <Zap />, title: "High-Level Control", desc: "Motion profiling, PID control loops, and sensor-driven autonomous routines built in C++." },
                    { icon: <Trophy />, title: "Championship DNA", desc: "A competitive spirit focused on technical innovation and podium success at Worlds." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all group">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 italic uppercase">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
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
            <h2 className="text-5xl font-black mb-12 uppercase italic tracking-tighter">The Collective</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-colors group">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-2 text-blue-400 group-hover:translate-x-1 transition-transform uppercase italic"><Cpu /> Mechanical</h3>
                <p className="text-gray-400 text-lg">Leading the design cycle from CAD conceptualization to the final machined VEX U build.</p>
              </div>
              <div className="p-10 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-colors group">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-2 text-purple-400 group-hover:translate-x-1 transition-transform uppercase italic"><Zap /> Programming</h3>
                <p className="text-gray-400 text-lg">Creating robust autonomous routines and driver-assist systems using PROS and C++.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sponsorship' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-black uppercase italic mb-4">Partner <span className="text-blue-500">With Us</span></h2>
                <p className="text-gray-400 max-w-xl font-medium italic">Empower collegiate robotics and gain visibility within the STEM community.</p>
              </div>
              <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-xs uppercase tracking-widest">
                <Download size={18} /> Packet PDF
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier, idx) => (
                <div key={idx} className={`relative flex flex-col p-8 rounded-[2rem] border-2 bg-black transition-all hover:-translate-y-2 duration-300 ${tier.color} ${tier.featured ? 'scale-105 shadow-2xl shadow-blue-500/10' : 'opacity-80'}`}>
                  {tier.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Elite Status</div>}
                  <h3 className="text-2xl font-bold mb-2 uppercase">{tier.name}</h3>
                  <div className="text-4xl font-black mb-6">{tier.price}</div>
                  <div className="flex-grow space-y-4 mb-8">
                    {tier.benefits.map((b, i) => <div key={i} className="flex items-center gap-3 text-sm text-gray-400 font-medium"><ShieldCheck size={18} className="text-blue-500 flex-shrink-0" /> {b}</div>)}
                  </div>
                  <button 
                    onClick={() => handleTierSelect(tier.name)}
                    className={`w-full py-4 rounded font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 ${tier.featured ? 'bg-blue-600 hover:bg-blue-500' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    Select Partnership
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-4 uppercase italic tracking-tighter">Get In <span className="text-blue-500">Touch</span></h2>
            <p className="text-gray-500 mb-12 max-w-xl mx-auto font-medium">
              Reach out for collaboration, sponsorship, or general inquiries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Email Block with Copy Functionality */}
              <div className="p-10 bg-zinc-900/40 rounded-3xl border border-white/5 text-left hover:border-blue-500/40 transition-all group relative">
                <Mail className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <div className="font-bold text-2xl mb-2 italic">Inquiries</div>
                <div className="text-gray-500 truncate mb-1">{TEAM_EMAIL}</div>
                
                <div className="flex gap-2 mt-6">
                  <a href={`mailto:${TEAM_EMAIL}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-colors">
                    Send Email
                  </a>
                  <button 
                    onClick={copyToClipboard}
                    className="bg-white/5 text-white border border-white/10 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="p-10 bg-zinc-900/40 rounded-3xl border border-white/5 text-left hover:border-pink-500/40 transition-all group">
                <Instagram className="text-pink-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <div className="font-bold text-2xl mb-2 italic">Instagram</div>
                <div className="text-gray-500 text-lg">@eclipse_robotics</div>
                <div className="mt-6 text-pink-500 text-[10px] font-black uppercase tracking-widest">DM Us →</div>
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="py-16 bg-zinc-950 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <EclipseLogo className="h-8 w-auto text-white" />
          </div>
          <div className="text-gray-600 text-[10px] font-black tracking-[0.4em] uppercase">Collegiate VEX U Collective // 2026</div>
          <div className="flex gap-8 text-gray-500">
             <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={22} /></a>
             <button onClick={() => setActiveTab('team')} className="hover:text-white transition-colors"><Trophy size={22} /></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
