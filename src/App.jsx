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
  Target,
  Globe,
  Award,
  Sparkles,
  BookOpen,
  User
} from 'lucide-react';

/**
 * Eclipse Robotics VEX U Website
 * High-performance landing page for a collegiate robotics team.
 * Optimized for Vercel with functional PDF downloads.
 */

// --- SHARED DATA ---

const TEAM_EMAIL = "eclipseroboticsca@gmail.com";
const CONTACT_PERSON = "Paul Corisuelo Valencia";
const CONTACT_PHONE = "(209) 689-6655";
const PACKET_PDF_URL = "/Eclipse_Robotics_Sponsorship_Packet.pdf";

// Team Data - Ordered: Elijah, Paul, Gabriel, Aleksei, Emily, Janna.
const teamMembers = [
  {
    name: "Elijah Macatuno",
    role: "Team Lead, CAD, Builder",
    desc: "Directing technical strategy and system architecture while spearheading hardware fabrication.",
    img: "https://via.placeholder.com/400x500/18181b/3f3f46?text=Photo+Pending"
  },
  {
    name: "Paul Consuelo-Valencia",
    role: "CAD and Build",
    desc: "Specializing in high-tolerance mechanical design and custom aluminum part fabrication.",
    img: "https://via.placeholder.com/400x500/18181b/3f3f46?text=Photo+Pending"
  },
  {
    name: "Gabriel Salazar-Dinh",
    role: "Programming and Build",
    desc: "Developing autonomous logic and motion profiling algorithms while assisting in mechanical assembly.",
    img: "https://via.placeholder.com/400x500/18181b/3f3f46?text=Photo+Pending"
  },
  {
    name: "Aleksei Macatuno",
    role: "CAD and Build",
    desc: "Contributing to drivetrain optimization and structural modeling for competition endurance.",
    img: "https://via.placeholder.com/400x500/18181b/3f3f46?text=Photo+Pending"
  },
  {
    name: "Emily Gomez-Valle",
    role: "Notebooker",
    desc: "Maintaining the rigorous engineering design process and documentation for judges evaluation.",
    img: "https://via.placeholder.com/400x500/18181b/3f3f46?text=Photo+Pending"
  },
  {
    name: "Janna Tang",
    role: "Media Lead",
    desc: "Managing team branding, social outreach, and digital documentation of our engineering progress.",
    img: "https://via.placeholder.com/400x500/18181b/3f3f46?text=Photo+Pending"
  }
];

// Current Sponsors
const currentSponsors = [
  { name: "Onshape", logo: "https://via.placeholder.com/200x80/111/444?text=Onshape" },
  { name: "MESA at UOP", logo: "https://via.placeholder.com/200x80/111/444?text=MESA+at+UOP" }
];

// Individual Sponsors / Special Thanks
const individualSponsors = [
  { name: "Rose Cureton", role: "Individual Sponsor" },
  { name: "Jonathan Ceja", role: "Individual Sponsor" },
  { name: "Peter Gallegos", role: "Individual Sponsor" },
  { name: "David Jimenez", role: "Individual Sponsor" }
];

// --- SUB-COMPONENTS ---

const EclipseLogo = ({ className = "w-12 h-12" }) => (
  <svg 
    version="1.0" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 600 600" 
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g transform="translate(0.000000,600.000000) scale(0.050000,-0.050000)" fill="currentColor" stroke="none">
      <path d="M5640 8078 c-710 -86 -1363 -534 -1674 -1148 -28 -55 -54 -104 -58-108 -4 -4 -172 -42 -373 -83 l-365 -75 770 -2 770 -2 86 168 c341 668 976 1058 1719 1057 146 -1 265 2 265 5 0 4 -75 34 -168 67 -301 109 -683 157 -972 121z m-244 -235 c5 -32 -4 -43 -33 -43 -53 0 -73 34 -42 72 33 39 67 26 75-29z m-1035 -694 c21 -26 20 -37 -6 -62 -36 -37 -75 -21 -75 31 0 65 40 81 81 31z"/>
      <path d="M6230 7826 c-519 -116 -1026 -509 -1256 -974 -89 -180 -90 -192 -18 -192 49 0 62 15 110 126 206 472 662 869 1164 1011 120 34 120 56 0 29z"/>
      <path d="M3219 6433 c-406 -110 -599 -667 -294 -853 57 -35 101 -40 378 -40l312 0 11 55 c6 30 17 70 24 89 12 30 -16 34 -290 40 -291 6 -305 8 -342 53 -93 116 -74 123 322 123 401 0 363 -13 409 135 l14 45 -362 0 c-382 0 -392 3 -306 85 86 82 148 95 454 95 l286 0 12 55 c7 30 18 75 25 100 l13 45 -288 -1c-159 -1 -327 -13 -378 -26z"/>
      <path d="M4335 6438 c-281 -66 -488 -324 -472 -586 18 -281 167 -338 812 -313 24 1 41 32 73 135 14 43 12 43 -289 50 l-303 6 -48 56 c-92 107 -48 285 99 403 l77 61 317 6 318 7 20 73 c36 129 46 124 -254 122 -151 -1 -309 -10 -350 -20z"/>
      <path d="M5112 6443 c-4 -7 -44 -136 -90 -287 -161 -535 -106 -616 418 -616 333 0 303 -12 349 135 l14 45 -277 0 c-427 1 -439 18 -308 449 44 143 78 261 76 263 -16 11 -176 21 -182 11z"/>
      <path d="M6108 6282 c-29 -95 -91 -298 -138 -452 l-86 -280 90 -6 c114 -8 89 -54 237 439 153 510 149 468 39 470 l-90 1 -52 -172z"/>
      <path d="M6512 6366 c-18 -51 -32 -96 -32 -100 0 -3 161 -6 359 -6 438 0 509 -35 363 -182 -58 -57 -63 -58 -278 -58 l-219 0 -23 -89 c-12 -49 -22 -95 -22 -102 0 -35 470 4 550 46 282 147 320 505 60 566 -44 10 -225 18 -403 19 l-323 0 -32 -94z"/>
      <path d="M7851 6438 c-246 -58 -371 -350 -209 -487 58 -48 74 -51 288 -51 278 0 350 -40 250 -140 -37 -37 -67 -40 -389 -40 l-349 0 -21 -75 c-36 -129 -54 -123 344 -119 453 5 577 60 637 280 54 203 -41 274 -367 274 -274 0 -337 38 -235 140 37 37 67 40 388 40 l348 0 13 71 c7 40 18 85 24 100 13 34 -582 39 -722 7z"/>
      <path d="M9035 6438 c-339 -79 -569 -473 -431 -737 78 -151 147 -171 559 -165 l233 4 22 63 c42 119 47 117 -260 117 l-281 0 -59 58 c-115 116 -99 122 309 122 l367 0 23 77 c13 43 23 83 23 90 0 7 -163 13 -362 13 -396 0 -402 2 -270 109 l76 61 316 6 316 7 22 87 c12 48 22 93 22 99 0 18 -543 9 -625 -11z"/>
      <path d="M6344 5795 c-79 -276 -82 -255 25 -255 l90 0 52 175 c28 96 60 201 70 233 11 32 19 61 19 65 0 4 -43 7 -96 7 l-96 0 -64 -225z"/>
      <path d="M3420 5229 c237 -48 432 -87 434 -88 2 0 39 -76 83 -168 510 -1090 1791 -1551 2858 -1029 191 93 196 100 45 72 -821 -152 -1738 359 -2078 1157 l-59 137 -856 3 -857 3 430 -87z m876 -294 c5 -24 -6 -35 -33 -35 -46 0 -72 30 -52 61 19 32 78 14 85 -26z"/>
      <path d="M4880 5298 c0 -47 164 -368 248 -486 263 -369 786 -700 1202 -761 44 -7 4 11 -90 40 -493 150 -907 506 -1141 979 -55 110 -99 211 -99 225 0 14 -25 25 -60 25 -33 0 -60 -10 -60 -22z"/>
    </g>
  </svg>
);

const InstagramFeed = ({ loading, posts }) => (
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
        {loading ? (
          [1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-white/5 rounded-xl animate-pulse flex items-center justify-center">
              <Camera className="text-white/10" size={32} />
            </div>
          ))
        ) : posts.length > 0 ? (
          posts.map((post) => {
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

const SponsorsSection = ({ onContact }) => (
  <div className="space-y-16">
    {/* Corporate Sponsors */}
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {currentSponsors.map((sponsor, i) => (
          <div key={i} className="group p-8 bg-zinc-900/30 border border-white/5 rounded-3xl flex flex-col items-center justify-center hover:bg-zinc-900/50 hover:border-blue-500/20 transition-all cursor-default shadow-xl text-center">
            <img src={sponsor.logo} alt={sponsor.name} className="h-10 md:h-12 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all mb-4" />
            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-blue-500 transition-colors leading-tight">{sponsor.name}</div>
          </div>
        ))}
        <button 
          onClick={onContact}
          className="p-8 border border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-zinc-600 hover:text-blue-400 hover:border-blue-500/40 transition-all group"
        >
          <Sparkles size={24} className="mb-2 group-hover:scale-110 transition-transform" />
          <div className="text-[10px] font-black uppercase tracking-widest text-center">Support Our Journey</div>
        </button>
      </div>
    </div>

    {/* Individual Sponsors / Thanks To Section */}
    <div className="pt-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="text-pink-500" size={20} />
        <h3 className="text-xl font-black uppercase italic text-white tracking-tight">Special Thanks to</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {individualSponsors.map((person, i) => (
          <div key={i} className="p-4 bg-zinc-900/20 border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-pink-500/20 transition-all">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-600 group-hover:text-pink-500 transition-colors">
              <User size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase italic">{person.name}</div>
              <div className="text-[9px] text-zinc-600 font-black uppercase tracking-widest leading-none mt-1">{person.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- MAIN APP ---

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [igPosts, setIgPosts] = useState([]);
  const [loadingIg, setLoadingIg] = useState(true);

  const BEHOLD_URL = "https://feeds.behold.so/t2cK9m9tg80BDruckAjN"; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
              {item === 'team' ? 'Personnel' : item.charAt(0).toUpperCase() + item.slice(1)}
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

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      <Navigation />
      
      <main>
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center pt-20 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at(50%_50%),_rgba(30,58,138,0.25),transparent_70%)]"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase italic flex items-center gap-2">
                    <Sparkles size={14} /> 2026 VEX Worlds Qualified
                  </span>
                </div>
                <div className="flex justify-center mb-8">
                  <EclipseLogo className="w-72 md:w-96 h-auto text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
                </div>
                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-tight text-white">
                  Total <span className="text-blue-500">Engineering</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed italic text-center">
                  Building the future through VEX U competition. We're headed to the Global Championship and we want you with us.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => { setActiveTab('team'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-white text-black font-black px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-xl w-full sm:w-auto justify-center uppercase tracking-widest text-xs">
                    Meet the Team <ChevronRight size={20} />
                  </button>
                  <button onClick={() => { setActiveTab('sponsorship'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="bg-blue-600 border border-blue-500/20 text-white font-black px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition-all active:scale-95 w-full sm:w-auto justify-center shadow-lg shadow-blue-900/40 uppercase tracking-widest text-xs">
                    Sponsor Our Journey
                  </button>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <section className="py-24 bg-black">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tight text-white">Championship Performance</h2>
                    <p className="text-gray-400 text-lg leading-relaxed italic">Our team has officially secured a spot at the VEX Robotics World Championship in Dallas, Texas.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    {[
                      { val: "2026", label: "Worlds Qual." },
                      { val: "10+", label: "Awards" },
                      { val: "2X", label: "State Qual." },
                      { val: "U.S.", label: "Open Qual." }
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
                    { icon: <Cpu />, title: "Machined Precision", desc: "Building VEX U robots with custom aluminum fabrication and precision CNC parts to outperform standard components." },
                    { icon: <Zap />, title: "Intelligent Drive", desc: "Proprietary PID loops and motion profiling tuned for high-stakes competition environments." },
                    { icon: <Trophy />, title: "Global Stage", desc: "Representing California collegiate engineering at the world's largest robotics competition." }
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

            {/* Homepage Sponsors Section */}
            <section className="py-24 border-t border-white/5 bg-zinc-950/50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
                   <Award className="text-blue-500" size={24} />
                   <h3 className="text-2xl font-black uppercase italic text-white tracking-tight">Our 2026 Partners</h3>
                </div>
                <SponsorsSection onContact={() => setActiveTab('contact')} />
              </div>
            </section>
            
            <InstagramFeed loading={loadingIg} posts={igPosts} />
          </>
        )}
        
        {activeTab === 'team' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <h2 className="text-6xl font-black mb-12 uppercase italic tracking-tighter text-white">The <span className="text-blue-500">Collective</span></h2>
            <p className="text-gray-400 text-xl max-w-3xl mb-16 leading-relaxed font-medium italic">
              Founded as a high school team, we transitioned to the collegiate VEX U division to continue 
              challenging our technical skills as future engineers.
            </p>
            
            {/* Team Grid 3x2 with temporary blank images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="group p-6 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-zinc-800 flex items-center justify-center">
                    <User className="text-zinc-700 group-hover:text-blue-500 transition-colors" size={64} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 uppercase italic">{member.name}</h3>
                  <div className="text-blue-500 text-xs font-black uppercase tracking-widest mb-4 italic">{member.role}</div>
                  <p className="text-gray-500 text-sm leading-relaxed italic">{member.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-900/20"><Cpu size={120} /></div>
                <h3 className="text-4xl font-bold mb-4 flex items-center gap-4 text-blue-400 uppercase italic">Mechanical</h3>
                <p className="text-gray-400 text-lg leading-relaxed relative z-10 italic">
                  Precision-focused design cycle. We leverage CAD conceptualization to build final 
                  machined VEX U robots that exceed industrial standards.
                </p>
              </div>
              <div className="p-12 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-purple-900/20"><Zap size={120} /></div>
                <h3 className="text-4xl font-bold mb-4 flex items-center gap-4 text-purple-400 uppercase italic">Programming</h3>
                <p className="text-gray-400 text-lg leading-relaxed relative z-10 italic">
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
                <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-1 rounded-full mb-4">
                  <Globe size={14} className="text-blue-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 italic">2026 VEX Worlds Qualifier</span>
                </div>
                <h2 className="text-6xl font-black uppercase italic mb-4 text-white tracking-tighter leading-tight">Worlds <span className="text-blue-500">Fundraising</span></h2>
                <p className="text-gray-400 max-w-xl font-medium italic text-lg leading-relaxed">
                  Help empower student innovators as we prepare to compete on the global stage in Dallas. 
                  We have officially qualified and are raising funds to cover logistics and technical development.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="bg-blue-600/10 border border-blue-500/20 px-6 py-3 rounded-full">
                  <span className="text-blue-400 font-black tracking-widest text-sm uppercase italic">Target: $10,000</span>
                </div>
                <a 
                  href={PACKET_PDF_URL} 
                  download="Eclipse_Robotics_Sponsorship_Packet.pdf"
                  className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black hover:bg-gray-200 transition-all text-xs uppercase tracking-widest shadow-xl active:scale-95 no-underline"
                >
                  <Download size={18} /> Download Packet
                </a>
              </div>
            </div>

            {/* Current Sponsors Section */}
            <div className="mb-24 py-16 border-y border-white/5">
              <div className="flex items-center gap-3 mb-12">
                 <Award className="text-blue-500" size={24} />
                 <h3 className="text-2xl font-black uppercase italic text-white tracking-tight">Our Current Partners</h3>
              </div>
              <SponsorsSection onContact={() => setActiveTab('contact')} />
            </div>

            {/* Benefits Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {[
                { title: "Visibility", items: ["Tournament Presence", "Team Apparel Logos", "Social Media Outreach"] },
                { title: "Impact", items: ["Technical R&D", "Youth STEM Workshops", "Regional Leadership"] },
                { title: "Allocation", items: ["40% Robot Systems", "25% Logistics", "25% Entry Fees", "10% Outreach"] },
                { title: "Recognition", items: ["Robot Labeling", "Event Banners", "Reveal Features"] }
              ].map((card, i) => (
                <div key={i} className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 relative group overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-blue-500/10 transition-colors font-black text-6xl italic leading-none">0{i+1}</div>
                  <h4 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-6 italic">{card.title}</h4>
                  <ul className="space-y-3 text-xs text-zinc-400 font-medium leading-relaxed italic">
                    {card.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> {it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

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
                    <p className="text-sm text-zinc-400 font-medium italic">Checks to <span className="text-white font-bold">Eclipse Robotics</span> or via our secure portal.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 flex-shrink-0" size={20} />
                    <p className="text-sm text-zinc-400 font-medium italic">Every contribution directly supports our trip to the World Championship.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-black mb-6 uppercase italic tracking-tighter text-white">Get In <span className="text-blue-500">Touch</span></h2>
            <p className="text-gray-500 mb-16 max-w-xl mx-auto font-medium text-lg leading-relaxed italic text-center">
              Reach out to discuss partnerships, workshops, or general collegiate inquiries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              <div className="p-12 bg-zinc-900/40 rounded-[2rem] border border-white/5 group hover:border-blue-500/40 transition-all relative overflow-hidden">
                <Mail className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
                <div className="font-black text-3xl mb-2 italic text-white uppercase tracking-tighter">Inquiries</div>
                <div className="text-gray-400 text-lg font-medium mb-8">{TEAM_EMAIL}</div>
                <div className="space-y-2 text-zinc-500 text-sm italic font-medium">
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

              <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="p-12 bg-zinc-900/40 rounded-[2rem] border border-white/5 hover:border-pink-500/40 transition-all group relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <EclipseLogo className="h-10 w-auto text-white" />
            <p className="text-zinc-600 text-[9px] font-black tracking-[0.5em] uppercase italic leading-none">
              California Collegiate VEX U Collective // © 2026
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest italic">
             <button onClick={() => setActiveTab('home')} className="hover:text-blue-500 transition-colors">Home</button>
             <button onClick={() => setActiveTab('team')} className="hover:text-blue-500 transition-colors">Personnel</button>
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
