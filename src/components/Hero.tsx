import React from 'react';
import { ArrowRight, Users, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onExploreStories: () => void;
  onMeetFounders: () => void;
  onSelectStory: (slug: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreStories,
  onMeetFounders,
  onSelectStory,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 border-b border-[#0B1F3A]/10 bg-gradient-to-b from-[#F7F5F0] via-[#F2ECE1] to-[#F7F5F0]">
      {/* Subtle background ambient line grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B1F3A_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust Kicker / Subtitle */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF7A00] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
              <span>Real Founders · Real Journeys · Real Sources</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#0B1F3A] leading-[1.12] tracking-tight text-balance">
              The Stories Behind India's Boldest Startups
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-[#171717]/80 leading-relaxed max-w-2xl font-body">
              Discover the founders, ideas, challenges and strategies behind the companies shaping India's startup ecosystem. Deeply researched, transparently sourced, and written for students and entrepreneurs.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreStories}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#1E3A8A] rounded-lg transition-all shadow-sm hover:shadow-md active:translate-y-0.5"
              >
                <span>Explore Stories</span>
                <ArrowRight className="w-4 h-4 text-[#FF7A00] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onMeetFounders}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#0B1F3A] bg-white border border-[#0B1F3A]/20 hover:border-[#0B1F3A] hover:bg-[#F7F5F0] rounded-lg transition-all shadow-xs"
              >
                <Users className="w-4 h-4 text-[#138A4B]" />
                <span>Meet the Founders</span>
              </button>
            </div>

            {/* Editorial Credibility Markers */}
            <div className="mt-8 pt-6 border-t border-[#0B1F3A]/10 flex flex-wrap items-center gap-6 text-xs text-[#171717]/70 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#138A4B]" />
                <span>Primary Regulatory & MCA Sources</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF7A00]" />
                <span>Zero Paid Promotional Rumors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#0B1F3A]" />
                <span>BBA & MBA Curriculum Relevant</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Editorial Visual Collage */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#0B1F3A] text-white rounded-xl p-6 shadow-xl border border-[#0B1F3A]/30 relative overflow-hidden group">
              
              {/* Decorative Indian Tricolor Ambient glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF7A00]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#138A4B]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Collage Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
                  <span className="text-[11px] font-mono tracking-wider text-white/70 uppercase">
                    EDITORIAL ARCHIVE · VOL. 2026
                  </span>
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-wider bg-white/10 text-[#FF7A00] px-2 py-0.5 rounded">
                  10 FULL CASE STUDIES
                </span>
              </div>

              {/* Curated Startup Collage Items */}
              <div className="mt-5 space-y-3">
                
                {/* Zerodha Mini Banner */}
                <div
                  onClick={() => onSelectStory('zerodha')}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg cursor-pointer transition-all hover:border-[#FF7A00]/50 group/card"
                >
                  <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                    <span className="font-mono text-[#FF7A00]">01 · FINTECH</span>
                    <span>8 min read</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white group-hover/card:text-[#FF7A00] transition-colors">
                    Zerodha: The Bootstrapped Broking Giant
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-1 mt-0.5">
                    Nithin & Nikhil Kamath · ₹0 on Equity Delivery · Zero Ad Spend
                  </p>
                </div>

                {/* Zomato Mini Banner */}
                <div
                  onClick={() => onSelectStory('zomato')}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg cursor-pointer transition-all hover:border-[#E23744]/50 group/card"
                >
                  <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                    <span className="font-mono text-[#E23744]">02 · FOODTECH</span>
                    <span>8 min read</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white group-hover/card:text-[#FF7A00] transition-colors">
                    Zomato: From Foodiebay to Blinkit & NSE
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-1 mt-0.5">
                    Deepinder Goyal · Quick Commerce & Hyperlocal Logistics
                  </p>
                </div>

                {/* Nykaa Mini Banner */}
                <div
                  onClick={() => onSelectStory('nykaa')}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg cursor-pointer transition-all hover:border-[#BE185D]/50 group/card"
                >
                  <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                    <span className="font-mono text-[#BE185D]">03 · E-COMMERCE</span>
                    <span>7 min read</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white group-hover/card:text-[#FF7A00] transition-colors">
                    Nykaa: Falguni Nayar's Omnichannel Beauty
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-1 mt-0.5">
                    Founded at Age 50 · 175+ Retail Stores · Content-to-Commerce
                  </p>
                </div>

              </div>

              {/* Collage Bottom Metric Bar */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-white/60">Featured Category:</span>{' '}
                  <span className="text-[#FF7A00] font-semibold">FinTech, FoodTech, D2C</span>
                </div>
                <button
                  onClick={onExploreStories}
                  className="text-white font-medium hover:text-[#FF7A00] flex items-center gap-1 transition-colors"
                >
                  <span>View All 10</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
