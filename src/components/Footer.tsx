import React from 'react';
import { ActiveTab } from './Header';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: ActiveTab) => void;
  onSelectStory: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onSelectStory }) => {
  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-white/10 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#FF7A00] flex items-center justify-center font-display font-bold text-[#0B1F3A] text-base">
                IS
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                INDIAN STARTUP STORIES
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-body max-w-sm">
              Real Founders. Real Journeys. Real Stories. An independent editorial publication dedicated to documenting the business models, marketing flywheels, and lessons behind India's startup ecosystem.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#138A4B] font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Grounded in MCA statutory returns & SEBI disclosures</span>
            </div>
          </div>

          {/* Nav: Sections */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-3">
              Editorial Sections
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-body">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('stories')}
                  className="hover:text-white transition-colors"
                >
                  Startup Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('founders')}
                  className="hover:text-white transition-colors"
                >
                  Meet the Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('industries')}
                  className="hover:text-white transition-colors"
                >
                  Explore Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('marketing')}
                  className="hover:text-white transition-colors"
                >
                  Marketing Playbooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('funding')}
                  className="hover:text-white transition-colors"
                >
                  Funding Tracker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('failures')}
                  className="hover:text-white transition-colors"
                >
                  Lessons From Failure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-white transition-colors"
                >
                  About & Mission
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-3">
              Essential Reads
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-body">
              <li>
                <button
                  onClick={() => onSelectStory('zerodha')}
                  className="hover:text-white transition-colors text-left"
                >
                  Zerodha: The Bootstrapped Broking Giant
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectStory('zomato')}
                  className="hover:text-white transition-colors text-left"
                >
                  Zomato: From Foodiebay to Blinkit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectStory('nykaa')}
                  className="hover:text-white transition-colors text-left"
                >
                  Nykaa: Content-to-Commerce Beauty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectStory('physics-wallah')}
                  className="hover:text-white transition-colors text-left"
                >
                  Physics Wallah: Affordable EdTech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectStory('cred')}
                  className="hover:text-white transition-colors text-left"
                >
                  CRED: Branding as the Product
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels per Section 23 */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-3">
              Community & Media
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-body">
              <li>
                <span className="text-white/60">LinkedIn:</span>{' '}
                <span className="hover:text-[#FF7A00] cursor-pointer">@IndianStartupStories</span>
              </li>
              <li>
                <span className="text-white/60">YouTube:</span>{' '}
                <span className="hover:text-[#FF7A00] cursor-pointer">/c/IndianStartupStories</span>
              </li>
              <li>
                <span className="text-white/60">Instagram:</span>{' '}
                <span className="hover:text-[#FF7A00] cursor-pointer">@indianstartupstories.in</span>
              </li>
              <li>
                <span className="text-white/60">Academic Inquiries:</span>{' '}
                <span className="text-white">editor@indianstartupstories.com</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-white/60 font-body">
              Designed for BBA, MBA, and undergraduate entrepreneurship cells across India.
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} Indian Startup Stories. All editorial rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onSelectTab('about')} className="hover:text-white">
              Editorial Policy
            </button>
            <span>·</span>
            <button onClick={() => onSelectTab('funding')} className="hover:text-white">
              Sourcing Methodology
            </button>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built for Indian Founders <Heart className="w-3 h-3 text-[#FF7A00] fill-[#FF7A00]" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
