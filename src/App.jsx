import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  ChevronLeft,
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
  User,
  Plane,
  History,
  Medal,
  Star,
  Settings,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

/**
 * Eclipse Robotics VEX U Website
 * Final Build: Worlds Bound // 2026 Edition
 * Hidden Team Tab // Responsive Mobile Menu Added
 */

// --- SHARED DATA ---

const ZEFFY_DONATE_URL = "https://www.zeffy.com/en-US/donation-form/helps-us-compete-at-the-vex-worlds-competition";
const ZEFFY_EMBED_URL = "https://www.zeffy.com/embed/donation-form/helps-us-compete-at-the-vex-worlds-competition";
const ZEFFY_THERMOMETER_URL = "https://www.zeffy.com/embed/thermometer/helps-us-compete-at-the-vex-worlds-competition";

const TEAM_EMAIL = "eclipseroboticsca@gmail.com";
const CONTACT_PERSON = "Paul Corisuelo Valencia";
const CONTACT_PHONE = "(209) 689-6655";
const PACKET_PDF_URL = "/Eclipse_Robotics_Sponsorship_Packet.pdf";

const teamMembers = [
  {
    name: "Elijah Macatuno",
    role: "Team Lead, CAD, Builder",
    desc: "Directing technical strategy and system architecture while spearheading hardware fabrication.",
    img: "/5559.jpg"
  },
  {
    name: "Paul Consuelo-Valencia",
    role: "CAD and Build",
    desc: "Specializing in high-tolerance mechanical design and custom aluminum part fabrication.",
    img: "/5558.jpg"
  },
  {
    name: "Gabriel Salazar-Dinh",
    role: "Programming and Build",
    desc: "Hi! My name is Gabriel, and I'm the programmer for Eclipse Robotics. I've been programming for VEX since junior year of high school, and am continuing that throughout college. I'm attending the University of the Pacific and majoring in Computer Science as well as minoring in Data Science. The team is currently using PROS with LemLib, so if you have any programming questions, feel free to email me at gsalazardinh@gmail.com.",
    img: "/5556.jpg"
  },
  {
    name: "Aleksei Macatuno",
    role: "CAD and Build",
    desc: "Contributing to drivetrain optimization and structural modeling for competition endurance.",
    img: "/5521.jpg"
  },
  {
    name: "Emily Gomez-Valle",
    role: "Notebooker",
    desc: "Maintaining the rigorous engineering design process and documentation for judges evaluation.",
    img: "/5520.jpg"
  },
  {
    name: "Janna Tang",
    role: "Media Lead",
    desc: "Managing team branding, social outreach, and digital documentation of our engineering progress.",
    img: "/5519.jpg"
  }
];

const currentSponsors = [
  { name: "Onshape", logo: "https://www.onshape.com/cdn-images/2db2486ec4e220b607223acf5f79cfe5e02d7859-216x49.svg?w=1600" },
  { name: "MESA at UOP", logo: "https://mesa.ucop.edu/wp-content/uploads/2019/09/MESA-logo_no-tag-60px.png" },
  { name: "Open Innovation Centers", logo: "https://www.openinnovationcenters.com/img/mark.png" }
];

const individualSponsors = [
  { name: "Rose Cureton", role: "Individual Sponsor" },
  { name: "Jonathan Ceja", role: "Individual Sponsor" },
  { name: "Peter Gallegos", role: "Individual Sponsor" },
  { name: "David Jimenez", role: "Individual Sponsor" }
];

const carouselImages = [
  { url: "/1130148309479722128.png", title: "Worlds Bound", subtitle: "World Championship Prep" },
  { url: "/5843480688071423325.png", title: "Innovation Excellence", subtitle: "Ez Robotics VEX U Qualifier" },
  { url: "/5843480688071423325.jpg", title: "Innovation Excellence", subtitle: "Ez Robotics VEX U Qualifier" },
  { url: "/5543.jpg", title: "72-Hour Sprint", subtitle: "Turning digital designs into reality" },
  { url: "/5524.jpg", title: "Garage HQ", subtitle: "Independent VEX U Operations" }
];

// --- SUB-COMPONENTS ---

const EclipseLogo = ({ className = "w-12 h-12" }) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" className={className}>
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

const ImageCarousel = ({ inline = false }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl ${inline ? 'aspect-square' : 'aspect-video'}`}>
      {carouselImages.map((img, idx) => (
        <div key={idx} className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${idx === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <img src={img.url} className="w-full h-full object-cover" alt={img.title} onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left">
            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-1 leading-none">{img.title}</h3>
            <p className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">{img.subtitle}</p>
          </div>
        </div>
      ))}
      <button onClick={() => setActive((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100"><ChevronLeft size={20} /></button>
      <button onClick={() => setActive((prev) => (prev + 1) % carouselImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100"><ChevronRight size={20} /></button>
    </div>
  );
};

const SponsorsSection = ({ onContact }) => (
  <div className="space-y-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {currentSponsors.map((sponsor, i) => (
        <div key={i} className="group p-8 bg-zinc-900/30 border border-white/5 rounded-3xl flex flex-col items-center justify-center hover:bg-zinc-900/50 hover:border-blue-500/20 transition-all cursor-default shadow-xl text-center">
          <div className="h-10 flex items-center justify-center mb-4">
             <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all" />
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-blue-500 transition-colors leading-tight">{sponsor.name}</div>
        </div>
      ))}
      <button onClick={() => window.open(ZEFFY_DONATE_URL, '_blank')} className="p-8 border border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-zinc-600 hover:text-blue-400 hover:border-blue-500/40 transition-all group">
        <Sparkles size={24} className="mb-2 group-hover:scale-110 transition-transform" />
        <div className="text-[10px] font-black uppercase tracking-widest text-center">Support Our Journey</div>
      </button>
    </div>

    <div className="pt-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
        <Heart className="text-pink-500" size={20} />
        <h3 className="text-xl font-black uppercase italic tracking-tight">Special Thanks to</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {individualSponsors.map((person, i) => (
          <div key={i} className="p-4 bg-zinc-900/20 border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-pink-500/20 transition-all">
            <User size={18} className="text-zinc-600 group-hover:text-pink-500 transition-colors shrink-0" />
            <div>
              <div className="text-sm font-bold text-white uppercase italic leading-tight">{person.name}</div>
              <div className="text-[9px] text-zinc-600 font-black uppercase tracking-widest mt-1">{person.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InstagramFeed = ({ loading, posts }) => (
  <section className="py-24 bg-zinc-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12 text-center md:text-left">
        <div className="w-full md:w-auto">
          <h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3 italic uppercase">
            <Instagram className="text-pink-500" /> Live Feed
          </h2>
          <p className="text-gray-500 mt-2 text-sm italic">Latest from @eclipse_robotics</p>
        </div>
        <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="hidden md:flex text-blue-400 items-center gap-1 font-bold text-sm hover:underline">
          View All <ExternalLink size={14} />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading ? (
          [1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-white/5 rounded-xl animate-pulse flex items-center justify-center border border-white/5" />)
        ) : posts.length > 0 ? (
          posts.map((post) => {
            const imageUrl = post.mediaType === 'VIDEO' || post.media_type === 'VIDEO'
              ? (post.thumbnailUrl || post.thumbnail_url || post.mediaUrl)
              : (post.mediaUrl || post.media_url);
            return (
              <div key={post.id} className="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group cursor-pointer" onClick={() => window.open(post.permalink || `https://www.instagram.com/p/${post.id}`, '_blank')}>
                <img src={imageUrl} alt="VEX U robotics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-4 text-sm font-bold"><span className="flex items-center gap-1"><Heart size={16} fill="currentColor" /> {post.likeCount || ''}</span></div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 text-center text-zinc-600 border border-dashed border-zinc-800 rounded-2xl italic">Feed temporarily offline</div>
        )}
      </div>
    </div>
  </section>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [igPosts, setIgPosts] = useState([]);
  const [loadingIg, setLoadingIg] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const fetchInstagram = async () => {
      try {
        const response = await fetch("https://feeds.behold.so/t2cK9m9tg80BDruckAjN");
        const data = await response.json();
        setIgPosts((data.posts || data).slice(0, 4));
      } catch (e) { console.error(e); } 
      finally { setLoadingIg(false); }
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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => { setActiveTab('home'); setIsMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <EclipseLogo className="h-10 w-auto text-white group-hover:text-blue-400 transition-colors" />
          <span className="hidden sm:block text-xl font-black tracking-tighter ml-2 italic text-white uppercase">VEX <span className="text-blue-500">U</span></span>
        </div>
        
        {/* Desktop Tabs - HIDDEN TEAM TAB */}
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase">
          {['home', 'sponsorship', 'contact'].map((item) => (
            <button key={item} onClick={() => { setActiveTab(item); window.scrollTo({top: 0, behavior: 'smooth'}); }} className={`transition-colors ${activeTab === item ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
          <button onClick={() => window.open(ZEFFY_DONATE_URL, '_blank')} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-blue-900/20">Donate via Zeffy</button>
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white hover:text-blue-400 transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - HIDDEN TEAM TAB */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/5 py-8">
          <div className="flex flex-col items-center space-y-6 text-sm font-bold tracking-[0.3em] uppercase">
            {['home', 'sponsorship', 'contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => { setActiveTab(item); setIsMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                className={`transition-colors ${activeTab === item ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
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
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm justify-center">
                  <Sparkles size={14} className="text-blue-400 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-blue-400">2026 VEX U Worlds Bound</span>
                </div>
                <div className="flex justify-center mb-8"><EclipseLogo className="w-72 md:w-96 h-auto text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" /></div>
                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-tight">Total <span className="text-blue-500">Engineering</span></h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed italic">Building the future through VEX U Competitions. We're headed to the World Championship and we want you with us.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => window.open(ZEFFY_DONATE_URL, '_blank')} className="bg-blue-600 border border-blue-500/20 text-white font-black px-10 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition-all active:scale-95 w-full sm:w-auto justify-center shadow-lg shadow-blue-900/40 uppercase tracking-widest text-[10px]">Fund Our Missions</button>
                </div>
              </div>
            </div>

            {/* Hall of Fame Awards Section */}
            <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden text-center md:text-left">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at(20%_30%),_rgba(30,58,138,0.1),transparent_50%)]"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                   <div className="flex-1 text-center md:text-left">
                     <div className="inline-flex items-center gap-2 text-blue-500 mb-4 uppercase font-black tracking-[0.4em] text-xs italic"><Award size={20} /> Global Excellence</div>
                     <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none">Representing <span className="text-blue-500">Northern California</span></h2>
                     <p className="text-zinc-400 text-xl font-medium leading-relaxed italic max-w-2xl mx-auto md:mx-0">Eclipse Robotics is honored to be one of only 150 teams globally invited to join the World Championship. We represent the collective engineering efforts of Northern California collegiate innovators.</p>
                   </div>
                   <div className="p-12 bg-blue-600/10 border border-blue-500/20 rounded-[3rem] text-center shadow-[0_0_50px_rgba(30,58,138,0.3)] min-w-[280px]">
                      <div className="text-7xl font-black italic text-white mb-2 leading-none">1/150</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 italic">Total Global Invitations</div>
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                   {[
                     { icon: <Medal size={32} />, title: "Nationals Gold", desc: "Winners of the High Stakes National Championship during our senior year." },
                     { icon: <Medal size={32} />, title: "Innovation Award", desc: "Recognized for custom mechanical design at Southern California's Ez Robotics VEX U Qualifier @ Rolling Robots." },
                     { icon: <Star size={32} />, title: "10+ Seasonal Awards", desc: "Consistently recognized for design and performance during our high school years under a different plate number." },
                     { icon: <Star size={32} />, title: "Worlds Qualifier", desc: "Qualifier for the VEX U World Championship." }
                   ].map((award, i) => (
                     <div key={i} className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group">
                        <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{award.icon}</div>
                        <h4 className="text-xl font-black uppercase italic text-white mb-2 tracking-tight leading-tight">{award.title}</h4>
                        <p className="text-zinc-500 text-xs italic font-medium leading-relaxed">{award.desc}</p>
                     </div>
                   ))}
                </div>
              </div>
            </section>

            {/* Our Story & Carousel Combined Section */}
            <section className="py-24 bg-zinc-950 relative overflow-hidden border-b border-white/5">
               <div className="max-w-7xl mx-auto px-6 relative z-10">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                   <div className="text-center md:text-left">
                     <div className="inline-flex items-center gap-3 text-blue-500 mb-6 justify-center md:justify-start">
                        <History size={24} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Origin Record</span>
                     </div>
                     <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white mb-8 leading-none">Our <span className="text-blue-500">Story</span></h2>
                     <div className="space-y-6 text-zinc-400 text-lg leading-relaxed italic">
                       <p>Eclipse Robotics began as seniors in high school deciding that graduation wouldn't be the end of our journey. Despite heading to different colleges, we committed to competing together by creating our own separate garage-based team.</p>
                       <p>We proved the dream was real by winning <span className="text-white font-bold">Nationals Gold</span> during the High Stakes season. Transitioning to VEX U, we refined the designs of both our competition robots for this season in CAD for months until just 3 days before our competition.</p>
                       <p>In a final sprint, we acquired a field from a middle school team and turned our digital models into a physical reality in just 72 hours. We drove to LA for Southern California's Ez Robotics VEX U Qualifier @ Rolling Robots, brought home the Innovation Award, and officially qualified for the World Championships.</p>
                     </div>
                   </div>
                   <div className="relative flex items-center justify-center h-full"><ImageCarousel inline={true} /></div>
                 </div>
               </div>
            </section>

            {/* Homepage Sponsors Section */}
            <section className="py-20 border-t border-white/5 bg-zinc-950/50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
                  <Award className="text-blue-500" size={24} />
                  <h3 className="text-2xl font-black uppercase italic tracking-tight leading-none">Our 2026 Partners</h3>
                </div>
                <SponsorsSection onContact={() => setActiveTab('contact')} />
              </div>
            </section>

            <InstagramFeed loading={loadingIg} posts={igPosts} />
          </>
        )}

        {activeTab === 'team' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center sm:text-left">
            <h2 className="text-6xl font-black mb-12 uppercase italic tracking-tighter text-white text-center leading-none">The <span className="text-blue-500">Collective</span></h2>
            <p className="text-gray-400 text-xl max-w-3xl mb-16 leading-relaxed font-medium italic text-center mx-auto">Meet the specialists driving Eclipse Robotics toward global excellence.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="group p-6 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-zinc-800 flex items-center justify-center">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/18181b/3f3f46?text=Photo+Pending'; }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 uppercase italic leading-tight">{member.name}</h3>
                  <div className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4 italic">{member.role}</div>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sponsorship' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-1 rounded-full mb-4">
                  <Globe size={14} className="text-blue-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Official 2026 Worlds Expedition</span>
                </div>
                <h2 className="text-6xl font-black uppercase italic mb-4 text-white tracking-tighter leading-tight text-left">Worlds <span className="text-blue-500">Fundraising</span></h2>
                <p className="text-gray-400 max-w-xl font-medium italic text-lg leading-relaxed text-left">Eclipse Robotics is one of only 150 teams globally selected to compete at the World Championships. Funds offset registration, team flights, and hardware logistics.</p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="bg-blue-600/10 border border-blue-500/20 px-6 py-3 rounded-full text-center">
                  <span className="text-blue-400 font-black tracking-widest text-sm uppercase italic">Budget: $10,000</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={PACKET_PDF_URL} 
                    download 
                    className="px-8 py-4 bg-white text-black font-black uppercase italic text-[10px] tracking-widest flex items-center gap-3 hover:bg-zinc-200 transition-all shadow-xl active:scale-95 no-underline"
                  >
                    <Download size={18} /> Download Packet
                  </a>
                  <button onClick={() => window.open(ZEFFY_DONATE_URL, '_blank')} className="bg-blue-600 border border-blue-500/20 text-white font-black px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/40 uppercase tracking-widest text-[10px]">Donate via Zeffy</button>
                </div>
              </div>
            </div>

            {/* Zeffy Thermometer Embed */}
            <div className="mb-12 relative overflow-hidden w-full h-[140px] rounded-2xl bg-white p-4 shadow-xl">
              <iframe 
                title='Donation form powered by Zeffy' 
                style={{ border: 0, width:'100%', height:'120px' }} 
                src={ZEFFY_THERMOMETER_URL} 
                allowtransparency="true"
              ></iframe>
            </div>

            {/* Zeffy Campaign Embed */}
            <div className="mb-24 rounded-3xl overflow-hidden border border-white/10 bg-white min-h-[600px] shadow-[0_0_50px_rgba(255,255,255,0.05)]">
               <iframe 
                title='Donation form powered by Zeffy' 
                style={{ border: 0, width:'100%', height:'800px' }} 
                src={ZEFFY_EMBED_URL} 
                allowpaymentrequest="true"
                allowtransparency="true"
               ></iframe>
            </div>

            <div className="mb-24 py-16 border-y border-white/5 text-left">
              <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
                 <Award className="text-blue-500" size={24} />
                 <h3 className="text-2xl font-black uppercase italic tracking-tight text-left">Current Partners</h3>
              </div>
              <SponsorsSection onContact={() => setActiveTab('contact')} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 text-center sm:text-left">
              {[
                { title: "Team Flights", val: "$3,500", desc: "Air travel for 6 members to the World Championships." },
                { title: "Registration", val: "$1,500", desc: "Official World Championship entry fees." },
                { title: "Hotel & Logistics", val: "$2,500", desc: "Accommodation and transit during competition." },
                { title: "Hardware/Build", val: "$2,500", desc: "Custom CNC parts and advanced sensors." }
              ].map((card, i) => (
                <div key={i} className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 relative group overflow-hidden text-left">
                  <div className="absolute -top-4 -right-4 text-white/5 font-black text-6xl italic leading-none">0{i+1}</div>
                  <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-2 italic leading-none">{card.title}</h4>
                  <div className="text-3xl font-black text-white mb-2 italic leading-none">{card.val}</div>
                  <p className="text-[10px] text-zinc-500 font-medium italic leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-black mb-6 uppercase italic tracking-tighter text-white leading-none text-center">Get In <span className="text-blue-500">Touch</span></h2>
            <p className="text-gray-400 mb-16 max-w-xl mx-auto font-medium text-lg leading-relaxed italic text-center"> Reach out for sponsorship, workshops, or inquiries.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              <div className="p-12 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
                <Mail className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
                <div className="font-black text-3xl mb-2 italic uppercase tracking-tighter leading-tight text-left">Inquiries</div>
                <div className="text-gray-400 text-lg font-medium mb-8 leading-none text-blue-500 font-bold text-left">{TEAM_EMAIL}</div>
                <div className="space-y-2 text-zinc-500 text-sm italic font-medium">
                  <div className="flex items-center gap-2"><Users size={14}/> {CONTACT_PERSON}</div>
                  <div className="flex items-center gap-2"><Phone size={14}/> {CONTACT_PHONE}</div>
                </div>
                <div className="flex gap-3 mt-8">
                  <a href={`mailto:${TEAM_EMAIL}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/20 no-underline text-center">Send Email</a>
                  <button onClick={copyToClipboard} className="bg-white/5 text-white border border-white/10 px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                    {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy Email'}
                  </button>
                </div>
              </div>
              <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="p-12 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-pink-500/40 transition-all group relative overflow-hidden flex flex-col justify-center no-underline">
                <Instagram className="text-pink-500 mb-6 group-hover:scale-110 transition-transform" size={48} />
                <div className="font-black text-3xl mb-2 italic uppercase tracking-tighter leading-tight text-left text-white">Social Feed</div>
                <div className="text-gray-400 text-xl font-medium italic mb-2 leading-none text-left">@eclipse_robotics</div>
                <div className="mt-4 text-pink-500 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">Follow progress <ChevronRight size={16} /></div>
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="py-20 bg-zinc-950 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <EclipseLogo className="h-10 w-auto text-white" />
            <p className="text-zinc-600 text-[9px] font-black tracking-[0.4em] uppercase italic leading-none">California Collegiate Collective // © 2026</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest italic">
             <button onClick={() => setActiveTab('home')} className="hover:text-blue-500 transition-colors uppercase">Home</button>
             <button onClick={() => setActiveTab('sponsorship')} className="hover:text-blue-500 transition-colors uppercase">Sponsorship</button>
             <button onClick={() => setActiveTab('contact')} className="hover:text-blue-500 transition-colors uppercase">Contact</button>
          </div>
          <div className="flex gap-8 text-zinc-400 text-center">
             <a href="https://www.instagram.com/eclipse_robotics/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
