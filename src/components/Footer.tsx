import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer aria-label="Site Footer" className="bg-[#0B1F3A] text-white border-t border-white/10 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#FF7A00] flex items-center justify-center font-display font-bold text-[#0B1F3A] text-base">
                IS
              </div>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                title="Indian Startup Stories Homepage"
                className="font-display font-extrabold text-xl text-white tracking-tight hover:text-[#FF7A00] transition-colors"
              >
                INDIAN STARTUP STORIES
              </a>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-body max-w-sm">
              Real Founders. Real Journeys. Real Stories. An independent editorial publication dedicated to documenting the business models, marketing flywheels, and lessons behind India's startup ecosystem.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#138A4B] font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Grounded in MCA statutory returns & SEBI disclosures</span>
            </div>
          </div>

          {/* Nav: Sections with Rich Anchor Text (Requirement 6) */}
          <nav aria-label="Footer Section Directory">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-3">
              Editorial Sections
            </h3>
            <ul className="space-y-2 text-xs text-white/80 font-body">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="hover:text-white transition-colors"
                  title="Return to Indian Startup Stories Homepage"
                >
                  Home Overview
                </a>
              </li>
              <li>
                <a
                  href="/startup-stories"
                  onClick={(e) => handleLinkClick(e, '/startup-stories')}
                  className="hover:text-white transition-colors"
                  title="Browse All 10 Startup Case Studies"
                >
                  Startup Stories Directory
                </a>
              </li>
              <li>
                <a
                  href="/founders"
                  onClick={(e) => handleLinkClick(e, '/founders')}
                  className="hover:text-white transition-colors"
                  title="Meet Indian Startup Founders and Leadership"
                >
                  Meet the Founders
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  onClick={(e) => handleLinkClick(e, '/industries')}
                  className="hover:text-white transition-colors"
                  title="Explore 8 Booming Startup Industries"
                >
                  Explore Industries
                </a>
              </li>
              <li>
                <a
                  href="/marketing"
                  onClick={(e) => handleLinkClick(e, '/marketing')}
                  className="hover:text-white transition-colors"
                  title="Study Startup Marketing Strategies & Playbooks"
                >
                  Marketing Playbooks
                </a>
              </li>
              <li>
                <a
                  href="/funding"
                  onClick={(e) => handleLinkClick(e, '/funding')}
                  className="hover:text-white transition-colors"
                  title="View Verified Indian Startup Funding Tracker"
                >
                  Startup Funding Tracker
                </a>
              </li>
              <li>
                <a
                  href="/failure-stories"
                  onClick={(e) => handleLinkClick(e, '/failure-stories')}
                  className="hover:text-white transition-colors"
                  title="Read Critical Lessons from Failed Startups"
                >
                  Lessons From Failure
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="hover:text-white transition-colors"
                  title="Read Our Mission and Editorial Verification Policy"
                >
                  About & Editorial Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* Featured Case Studies with Rich Anchor Text (Requirement 6) */}
          <nav aria-label="Footer Case Studies">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-3">
              Essential Case Studies
            </h3>
            <ul className="space-y-2 text-xs text-white/80 font-body">
              <li>
                <a
                  href="/startup-stories/zerodha"
                  onClick={(e) => handleLinkClick(e, '/startup-stories/zerodha')}
                  className="hover:text-white transition-colors block"
                  title="Read Zerodha Bootstrapped FinTech Story"
                >
                  Zerodha: Bootstrapped Broking Giant
                </a>
              </li>
              <li>
                <a
                  href="/startup-stories/zomato"
                  onClick={(e) => handleLinkClick(e, '/startup-stories/zomato')}
                  className="hover:text-white transition-colors block"
                  title="Read Zomato Food Delivery Story"
                >
                  Zomato: From Foodiebay to Blinkit
                </a>
              </li>
              <li>
                <a
                  href="/startup-stories/nykaa"
                  onClick={(e) => handleLinkClick(e, '/startup-stories/nykaa')}
                  className="hover:text-white transition-colors block"
                  title="Read Nykaa Omnichannel Beauty Story"
                >
                  Nykaa: Content-to-Commerce Beauty
                </a>
              </li>
              <li>
                <a
                  href="/startup-stories/physics-wallah"
                  onClick={(e) => handleLinkClick(e, '/startup-stories/physics-wallah')}
                  className="hover:text-white transition-colors block"
                  title="Read Physics Wallah Affordable EdTech Story"
                >
                  Physics Wallah: Affordable EdTech
                </a>
              </li>
              <li>
                <a
                  href="/startup-stories/cred"
                  onClick={(e) => handleLinkClick(e, '/startup-stories/cred')}
                  className="hover:text-white transition-colors block"
                  title="Read CRED High-Trust Fintech Story"
                >
                  CRED: Branding as the Product
                </a>
              </li>
            </ul>
          </nav>

          {/* Community & Media Channels */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-3">
              Community & Academic Media
            </h3>
            <ul className="space-y-2 text-xs text-white/80 font-body">
              <li>
                <span className="text-white/60">LinkedIn:</span>{' '}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7A00] transition-colors">
                  @IndianStartupStories
                </a>
              </li>
              <li>
                <span className="text-white/60">YouTube:</span>{' '}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7A00] transition-colors">
                  /c/IndianStartupStories
                </a>
              </li>
              <li>
                <span className="text-white/60">Instagram:</span>{' '}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7A00] transition-colors">
                  @indianstartupstories.in
                </a>
              </li>
              <li>
                <span className="text-white/60">Academic Inquiries:</span>{' '}
                <span className="text-white font-mono text-[11px]">editor@indianstartupstories.com</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-white/60 font-body">
              Curated for BBA, MBA, and undergraduate entrepreneurship cells across India.
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} Indian Startup Stories. All editorial rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="hover:text-white transition-colors"
              title="Review Our Editorial Verification Policy"
            >
              Editorial Policy
            </a>
            <span>·</span>
            <a
              href="/funding"
              onClick={(e) => handleLinkClick(e, '/funding')}
              className="hover:text-white transition-colors"
              title="Review Sourcing Methodology for Funding"
            >
              Sourcing Methodology
            </a>
            <span>·</span>
            <a
              href="/sitemap.xml"
              className="hover:text-white transition-colors font-mono text-[11px]"
              title="XML Sitemap for Google Search Console and crawlers"
              target="_blank"
              rel="noopener noreferrer"
            >
              sitemap.xml
            </a>
            <span>·</span>
            <span className="flex items-center gap-1">
              Documenting Indian Founders <Heart className="w-3 h-3 text-[#FF7A00] fill-[#FF7A00]" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
