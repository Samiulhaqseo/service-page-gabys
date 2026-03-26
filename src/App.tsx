import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Award,
  HardHat,
  Check,
  Info,
  Handshake,
  Scissors,
  Trees,
  Settings,
  Shovel,
  Home,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-black text-brand-green leading-none tracking-tighter">GABBY'S</span>
              <span className="text-xs font-bold text-brand-yellow tracking-[0.2em] uppercase">Tree Service</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-brand-green font-medium">COMMERCIAL</a>
            <a href="#" className="text-gray-700 hover:text-brand-green font-medium">RESIDENTIAL</a>
            <a href="#" className="text-gray-700 hover:text-brand-green font-medium">SERVICE AREA</a>
            <a href="#" className="text-gray-700 hover:text-brand-green font-medium">GALLERY</a>
            <div className="flex items-center text-brand-green font-bold ml-4">
              <Phone size={18} className="mr-2" />
              <span>(832) 731-6338</span>
            </div>
            <button className="bg-brand-green text-white px-6 py-2 rounded-full font-bold hover:bg-brand-green-dark transition-colors">
              GET A QUOTE
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700">COMMERCIAL</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700">RESIDENTIAL</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700">SERVICE AREA</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700">GALLERY</a>
              <div className="pt-4 flex flex-col space-y-4">
                <div className="flex items-center text-brand-green font-bold">
                  <Phone size={18} className="mr-2" />
                  <span>(832) 731-6338</span>
                </div>
                <button className="bg-brand-green text-white px-6 py-3 rounded-full font-bold w-full">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-bold text-gray-800 pr-4">{question}</h4>
        <div className="flex-shrink-0 text-brand-yellow">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ReviewCard = ({ name, date, text, rating }: { name: string, date: string, text: string, rating: number }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-brand-light-green rounded-full flex items-center justify-center text-brand-green font-bold mr-3">
        {name.charAt(0)}
      </div>
      <div>
        <h5 className="font-bold text-sm">{name}</h5>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
      <div className="ml-auto flex text-brand-yellow">
        {[...Array(rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
    </div>
    <p className="text-gray-600 text-sm italic leading-relaxed flex-grow">"{text}"</p>
    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center text-xs text-gray-400">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-3 mr-2" />
      <span>Verified Review</span>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-brand-yellow pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex flex-col mb-6">
            <span className="text-3xl font-serif font-black text-brand-green leading-none tracking-tighter">GABBY'S</span>
            <span className="text-sm font-bold text-brand-green/80 tracking-[0.2em] uppercase">Tree Service</span>
          </div>
          <p className="text-brand-green/80 text-sm leading-relaxed mb-6">
            Gabby's Tree Service is a family-owned tree service in Deer Park, Texas, providing expert tree trimming, tree removal, stump grinding, and emergency tree service with 22+ years of experience.
          </p>
          <div className="flex space-x-4">
            <div className="bg-white p-2 rounded shadow-sm">
              <img src="https://picsum.photos/seed/bbb/100/40" alt="BBB Accredited" className="h-8 grayscale opacity-70" />
            </div>
            <div className="bg-white p-2 rounded shadow-sm">
              <img src="https://picsum.photos/seed/chamber/100/40" alt="Chamber of Commerce" className="h-8 grayscale opacity-70" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-brand-green font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
          <div className="grid grid-cols-1 gap-4 text-sm text-brand-green/80">
            <div>
              <p className="font-bold text-brand-green mb-2">COMMERCIAL</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Commercial Tree Trimming</a></li>
                <li><a href="#" className="hover:underline">Commercial Tree Removal</a></li>
                <li><a href="#" className="hover:underline">Storm Clean Up</a></li>
                <li><a href="#" className="hover:underline">Land Clearing</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-brand-green mb-2">RESIDENTIAL</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Stump Grind</a></li>
                <li><a href="#" className="hover:underline">Tree Trimming</a></li>
                <li><a href="#" className="hover:underline">Tree Removal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-brand-green font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-brand-green/80">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
          <h4 className="text-brand-green font-bold text-lg mt-8 mb-6 uppercase tracking-wider">Service Areas</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-brand-green/80">
            <ul className="space-y-1">
              <li>Deer Park</li>
              <li>La Porte</li>
              <li>Clear Lake</li>
            </ul>
            <ul className="space-y-1">
              <li>Pasadena</li>
              <li>Baytown</li>
              <li>Houston</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-brand-green font-bold text-lg mb-6 uppercase tracking-wider">Business Hours</h4>
          <p className="text-sm text-brand-green/80 mb-8">Monday - Sunday: <span className="font-bold">Open 24 Hours</span></p>
          <h4 className="text-brand-green font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4 text-sm text-brand-green/80">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" />
              <span>Deer Park, TX 77536</span>
            </li>
            <li className="flex items-start">
              <Mail size={18} className="mr-3 mt-0.5 flex-shrink-0" />
              <span>info@gabbystreeservice.net</span>
            </li>
            <li className="flex items-start">
              <Phone size={18} className="mr-3 mt-0.5 flex-shrink-0" />
              <span>(832) 731-6338</span>
            </li>
          </ul>
          <button className="mt-8 border-2 border-brand-green text-brand-green px-8 py-2 rounded-full font-bold hover:bg-brand-green hover:text-white transition-all">
            Get a Quote
          </button>
        </div>
      </div>
      
      <div className="border-t border-brand-green/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-green/60">
        <p>© 2026 Gabby's Tree Service. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-green">Facebook</a>
          <a href="#" className="hover:text-brand-green">Instagram</a>
          <a href="#" className="hover:text-brand-green">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Master Template ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
              alt="Tree Service Background" 
              className="w-full h-full object-cover opacity-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-1 bg-brand-light-green text-brand-green text-sm font-bold rounded-full mb-6 uppercase tracking-widest">
                    Professional Services
                  </span>
                  <h1 className="text-5xl lg:text-7xl font-serif font-black text-brand-green mb-6 leading-tight">
                    Land Clearing <br />
                    <span className="text-brand-yellow">Services</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                    Commercial Tree Removal Services For The Houston Area. With over 20 years of experience, we've removed trees of all sizes and types.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green-dark transition-all flex items-center justify-center">
                      Start Your Quote <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="border-2 border-brand-green text-brand-green px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green hover:text-white transition-all flex items-center justify-center">
                      (832) 731-6338
                    </button>
                  </div>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-[#006400] rounded-[2rem] p-6 lg:p-10 text-white shadow-2xl border border-white/10"
                >
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white rounded-md py-2 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-1">Address</label>
                      <input 
                        type="text" 
                        className="w-full bg-white rounded-md py-2 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                        placeholder="Street Address" 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full bg-white rounded-md py-2 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                          placeholder="000-000-0000" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-1">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-white rounded-md py-2 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                          placeholder="email@example.com" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-1">Work Description</label>
                      <textarea 
                        rows={3} 
                        className="w-full bg-white rounded-md py-2 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all resize-none" 
                        placeholder="Describe the job and any obstacles (fences, power lines, etc.)"
                      ></textarea>
                    </div>

                    <button className="w-full bg-[#f9a825] text-[#006400] font-bold py-3 rounded-xl hover:bg-white transition-all shadow-lg uppercase tracking-wider">
                      Request Free Quote
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="bg-brand-yellow py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl text-center text-brand-green mb-12">Why Work with Gabby's Tree Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck size={40} />,
                  title: "No Clean-up Fees",
                  desc: "We don't charge for clean up. Debris disposal is included in every service."
                },
                {
                  icon: <Award size={40} />,
                  title: "20+ Years Experience",
                  desc: "Over 20 years of experience serving the Houston area – we've seen and done it all."
                },
                {
                  icon: <HardHat size={40} />,
                  title: "Professional Gear",
                  desc: "Professional equipment that makes quick work of the stump removal job safely."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30 text-center flex flex-col items-center">
                  <div className="text-brand-green mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-brand-green mb-4">{item.title}</h3>
                  <p className="text-brand-green/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Landscape Transformation CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=2000" 
              alt="Tree worker" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your landscape?</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Get an expert consultation and a transparent, no-obligation quote today. Our team is standing by to help.
            </p>
            <button className="bg-brand-yellow text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-brand-green transition-all shadow-xl">
              (832) 731-6338
            </button>
          </div>
        </section>

        {/* Local Tree Care Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Gabby's Tree Service: Local Tree Care for Deer Park and <span className="text-brand-yellow">Greater Houston</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
                  <p>
                    Gabby's Tree Service is a family-owned tree service company based in Deer Park, Texas, serving homeowners and businesses across the greater Houston area. Founded in 2002, we help people preserve, maintain, and protect their trees while also protecting what matters most: your home, your property, and your peace of mind.
                  </p>
                  <p>
                    Our work is simple in purpose and professional in execution: tree trimming, tree removal, and stump grinding done with a safety-first mindset, high-quality equipment, and a commitment to treat every customer like family.
                  </p>
                </div>
                <button className="bg-brand-yellow text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-brand-green transition-all shadow-lg">
                  (832) 731-6338
                </button>
              </div>
              
              <div className="relative">
                <div className="bg-brand-light-green/20 p-8 rounded-[2rem] relative overflow-hidden">
                  {/* Skewed background shapes */}
                  <div className="absolute top-0 left-1/4 w-1/2 h-full bg-blue-400/40 -skew-x-12 transform"></div>
                  
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1590133325985-2c64ec7ffbb7?auto=format&fit=crop&q=80&w=1000" 
                      alt="Tree worker climbing" 
                      className="w-full h-[500px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description 1 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif text-brand-green mb-8 leading-tight">Clear Land & Ready It for Building</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Preparing land for commercial development starts with a clean slate—and that means professional land clearing done right. Our expert team specializes in fast, thorough land clearing services that get your project off the ground with confidence.
                </p>
                <div className="space-y-4">
                  <p className="font-bold text-gray-800">Industries we serve:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Commercial Developers",
                      "General Contractors",
                      "Utility Providers",
                      "Municipalities",
                      "Industrial Parks",
                      "Warehouses"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle2 size={18} className="text-brand-yellow mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000" 
                  alt="Construction Site" 
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description 2 */}
        <section className="py-24 bg-brand-light-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Excavator at work" 
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-serif text-brand-green mb-8 leading-tight">Gabby’s Land Clearing Services</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We provide a full spectrum of services around tree removal:
                </p>
                <ul className="space-y-6">
                  {[
                    { title: "Complete Site Clearing", desc: "From trees and brush to stumps and debris, we clear everything standing in the way of your development." },
                    { title: "Grubbing and Grading", desc: "We remove all roots and organic material to ensure a stable, build-ready surface." },
                    { title: "Forestry Mulching", desc: "Minimize erosion and re-use natural materials with our eco-friendly mulching options." },
                    { title: "Erosion Control", desc: "We implement proper sediment controls to meet environmental regulations." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-brand-yellow p-1 rounded-full mr-4 mt-1">
                        <CheckCircle2 size={16} className="text-brand-green" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reputation Section */}
        <section className="py-24 bg-brand-light-green/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              A Deer Park Tree Company Built on Reputation (Since 2002)
            </h2>
            
            <p className="text-brand-yellow font-bold text-lg mb-8 italic">
              "Since 2002, earning trust one job at a time."
            </p>
            
            <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-sm md:text-base leading-relaxed mb-12">
              <p>
                Gabby's Tree Service started the way real local businesses start: through hard work, word-of-mouth, and results that neighbors talk about.
              </p>
              <p>
                Our founder, Gabriel "Gabby", began doing tree work on the side after working in construction. A neighbor needed help. Gabby handled it. Then another neighbor called. Then the next. Before long, he was running a tree service by himself, doing everything hands-on, earning trust one job at a time.
              </p>
              <p>
                More than two decades later, we're still here for the same reason: We treat people right, we do quality work, and we respect the property we're working on.
              </p>
              <p>
                Today, we're a family-owned, hands-on operation with Gabby as the owner and me as the manager. When you reach out, you're dealing directly with the people responsible for the work, not a middleman or a sales team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-brand-yellow text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-brand-green transition-all shadow-lg">
                Get A Quote
              </button>
              <button className="bg-brand-green text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-brand-yellow transition-all shadow-lg">
                (832) 731-6338
              </button>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-brand-light-green/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                We focus on the tree services homeowners and businesses in the Houston region need most especially after storms, seasonal growth, or when trees become unsafe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Safe Tree Removal",
                  desc: "We specialize in safe, controlled removal of hazardous trees while protecting your property every step of the way.",
                  icon: <Trees size={24} />,
                  img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Nearby Tree Trimming",
                  desc: "Expert trimming to enhance health, safety, and structural growth across Deer Park.",
                  icon: <Scissors size={24} />,
                  img: "https://images.unsplash.com/photo-1592150621344-c90ef61793ba?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Tree Topping",
                  desc: "We provide controlled tree topping to manage height and improve clearance where needed.",
                  icon: <Trees size={24} />,
                  img: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Efficient Stump Removal",
                  desc: "Professional stump grinding to eliminate hazards and reclaim your landscape for a clean, finished look.",
                  icon: <Settings size={24} />,
                  img: "https://images.unsplash.com/photo-1590133325985-2c64ec7ffbb7?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Fast Stump Removal",
                  desc: "We completely remove the entire stump, eliminating roots and restoring your landscape cleanly and safely.",
                  icon: <Shovel size={24} />,
                  img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Fast Tree Cutting",
                  desc: "We safely cut and remove trees with precision, protecting your property and surrounding landscape.",
                  icon: <Scissors size={24} />,
                  img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Land & Lot Clearing",
                  desc: "Rapid response storm cleanup and debris removal to safely restore and protect your property.",
                  icon: <Home size={24} />,
                  img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000"
                },
                {
                  title: "Rapid Storm Cleanup",
                  desc: "We quickly remove storm-damaged trees and debris to restore safety and protect your property.",
                  icon: <Globe size={24} />,
                  img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
                }
              ].map((item, i) => (
                <div key={i} className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="mb-4 text-brand-yellow">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tree Service Process Section */}
        <section className="py-24 bg-brand-light-green/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Tree Service Process — <span className="text-brand-yellow">Simple, Honest, and Done Right</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                From your first call to final cleanup, we keep things straightforward. No confusion, no surprises — just clear communication, expert work, and a yard that's left clean like we were never there.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone size={32} />,
                  title: "Free Consultation",
                  desc: "Call or fill out the form and we'll talk through your situation, give honest advice, and schedule your estimate."
                },
                {
                  icon: <MapPin size={32} />,
                  title: "On-Site Assessment",
                  desc: "We come out, evaluate the tree, identify any risks, and give you a clear, upfront price with no surprises."
                },
                {
                  icon: <Handshake size={32} />,
                  title: "Safe Tree Service",
                  desc: "Our crew handles the job safely and efficiently, then cleans everything up so your yard looks better and clean."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                  <div className="text-brand-yellow mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Areas Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">Local Areas We Cover</h2>
                <p className="text-gray-600 text-lg mb-10">
                  Gabby's Tree Services are available in the following communities:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-8">
                  {[
                    "Baytown", "Channelview", "Cloverleaf", "Deer Park", "Friendswood",
                    "Galena Park", "Houston", "Jacinto City", "La Porte", "League City",
                    "Pasadena", "Baytown", "Houston", "Jacinto City", "La Porte", "League City",
                    "Pasadena", "Pearland", "Seabrook", "South Houston", "Webster"
                  ].map((city, i) => (
                    <div key={i} className="flex items-center text-gray-700 font-medium">
                      <Check size={18} className="text-brand-yellow mr-3 flex-shrink-0" />
                      {city}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-brand-light-green/20 p-4 rounded-[2rem] shadow-inner">
                  <div className="rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square relative">
                    {/* Mock Map Background */}
                    <img 
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                      alt="Map area" 
                      className="w-full h-full object-cover opacity-50 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-green/5"></div>
                    
                    {/* Mock Map Card */}
                    <div className="absolute top-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">Gabby's Tree Service</h4>
                          <p className="text-[10px] text-gray-500">1915 Center St, Deer Park, TX 77536, USA</p>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <MapPin size={16} className="text-blue-500" />
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="font-bold text-gray-700">4.9</span>
                        <div className="flex text-brand-yellow">
                          <Star size={10} fill="currentColor" />
                        </div>
                        <span className="text-blue-500">(129)</span>
                        <div className="ml-auto text-gray-400">
                          <Info size={10} />
                        </div>
                      </div>
                    </div>

                    {/* Map Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <MapPin size={40} className="text-red-600 fill-red-600/20" />
                        <div className="absolute top-0 left-12 bg-white px-3 py-1 rounded-full shadow-lg border border-gray-100 whitespace-nowrap">
                          <span className="text-xs font-bold text-gray-800">Gabby's Tree Service</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-brand-green mb-4">What Our Clients Say</h2>
              <div className="flex items-center justify-center text-brand-yellow mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Excellent - Based on 127 reviews</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ReviewCard 
                name="M YBarbo" 
                date="3 weeks ago" 
                rating={5}
                text="They are prompt, good communication, and do good work! Thanks!"
              />
              <ReviewCard 
                name="D Crow" 
                date="4 months ago" 
                rating={5}
                text="Gabby & crew were a pleasure dealing with. Thx!"
              />
              <ReviewCard 
                name="C Willis" 
                date="5 months ago" 
                rating={5}
                text="I have used Gabby's Tree Service multiple times for tree trimming and smaller pruning services. Gabby and crew are always on time and professional."
              />
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section className="bg-brand-green py-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-[#006400] rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl border border-white/10">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white rounded-md py-3 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Address</label>
                    <input 
                      type="text" 
                      className="w-full bg-white rounded-md py-3 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                      placeholder="Street Address" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-white rounded-md py-3 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                        placeholder="000-000-0000" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-white rounded-md py-3 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all" 
                        placeholder="email@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Work Description</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-white rounded-md py-3 px-4 text-gray-900 outline-none focus:ring-2 focus:ring-brand-yellow transition-all resize-none" 
                      placeholder="Describe the job and any obstacles (fences, power lines, etc.)"
                    ></textarea>
                  </div>

                  <button className="w-full bg-[#f9a825] text-[#006400] font-bold py-4 rounded-xl hover:bg-white transition-all shadow-lg uppercase tracking-wider">
                    Request Free Quote
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-serif mb-6">Servicing the Houston Area</h2>
                <p className="text-emerald-100/80 mb-12 text-lg leading-relaxed">
                  Based in Deer Park, we proudly serve the entire Greater Houston area with reliable, professional tree care and land clearing services.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-6">
                      <MapPin className="text-brand-yellow" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Our Location</h4>
                      <p className="text-emerald-100/60">1915 Center St, Deer Park, TX 77536</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-6">
                      <Phone className="text-brand-yellow" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Call or Text</h4>
                      <p className="text-emerald-100/60">(832) 731-6338</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-6">
                      <Phone className="text-brand-yellow" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Call or Text</h4>
                      <p className="text-emerald-100/60">(832) 731-6338</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-6">
                      <Clock className="text-brand-yellow" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Business Hours</h4>
                      <p className="text-emerald-100/60">Open 24 Hours, 7 Days a Week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency FAQ Subsection */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-brand-green text-center mb-10">Emergency Service FAQ</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">How fast can you respond to an emergency?</h4>
                <p className="text-gray-600 text-sm">We prioritize emergency calls. In most cases, we can have a crew on-site in Deer Park within 1-2 hours of your call to assess the situation and begin work.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Do you work with insurance for storm damage?</h4>
                <p className="text-gray-600 text-sm">Yes. We have years of experience working with insurance companies. We'll provide the photos and detailed documentation you need to make your claim process as smooth as possible.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Is there an extra fee for after-hours calls?</h4>
                <p className="text-gray-600 text-sm">Emergency rates may apply for work performed outside of standard business hours, but we always provide a clear, upfront quote before any work begins so there are no surprises.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl text-brand-green mb-8">
              Call for <span className="font-black">Emergency Tree Services</span> in Deer Park, TX
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-brand-yellow text-brand-green px-10 py-4 rounded-full font-black text-lg shadow-lg hover:scale-105 transition-transform">
                Get A Quote
              </button>
              <button className="bg-brand-green text-white px-10 py-4 rounded-full font-black text-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                <Phone size={20} className="mr-2" /> (832) 731-6338
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
