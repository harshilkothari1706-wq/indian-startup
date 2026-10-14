import React from 'react';
import { ArrowRight, Clock, Award, CheckCircle2 } from 'lucide-react';
import { STARTUP_STORIES } from '../data/startups';

interface FeaturedStoryProps {
  onSelectStory: (slug: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ onSelectStory }) => {
  const story = STARTUP_STORIES.find((s) => s.id === 'zerodha') || STARTUP_STORIES[0];

  return (
    <section className="py-12 bg-white border-b border-[#0B1F3A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead Bar */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#0B1F3A]/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0B1F3A]">
              FEATURED STORY
            </h2>
          </div>
          <span className="text-xs text-[#171717]/60 font-mono">
            VOL. I · CASE STUDY 01
          </span>
        </div>

        {/* Featured Story Showcase Card */}
        <div className="bg-[#F7F5F0] rounded-xl border border-[#0B1F3A]/15 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Hero Panel (Styled Fallback Container according to Zero-Broken-Image Policy) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1F3A] via-[#1E3A8A] to-[#0A1128] text-white p-8 flex flex-col justify-between relative overflow-hidden min-h-[320px]">
              
              {/* Abstract decorative chart graph lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <path
                    d="M0 250 Q 80 200, 150 220 T 300 120 T 400 60"
                    fill="none"
                    stroke="#FF7A00"
                    strokeWidth="4"
                  />
                  <path
                    d="M0 280 Q 90 240, 180 230 T 290 160 T 400 110"
                    fill="none"
                    stroke="#138A4B"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* Top Tag & Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase bg-[#FF7A00] text-[#0B1F3A] font-bold px-2.5 py-1 rounded">
                  BOOTSTRAPPED
                </span>
                <span className="text-xs text-white/70 font-mono">FOUNDED 2010</span>
              </div>

              {/* Graphic Centerpiece */}
              <div className="relative z-10 my-8">
                <div className="text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
                  ZERODHA
                </div>
                <div className="text-xs font-mono text-[#FF7A00] mt-1 tracking-wider">
                  "ZERO RODHA" · REMOVING BARRIERS
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#138A4B]" />
                  <span>Kite Platform · Varsity Financial Education</span>
                </div>
              </div>

              {/* Bottom Credit Caption */}
              <div className="relative z-10 pt-4 border-t border-white/10 text-[11px] text-white/60">
                <p>Image credit: Zerodha Corporate Media Room / SEBI Filings</p>
              </div>

            </div>

            {/* Right Editorial Text Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                
                {/* Meta Bar */}
                <div className="flex items-center gap-2 text-xs text-[#171717]/70 font-medium mb-3">
                  <span className="text-[#0B1F3A] font-bold">{story.category}</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#171717]/60" />
                    <span>{story.readingTime}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span>{story.author}</span>
                </div>

                {/* Big Headline */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl text-[#0B1F3A] leading-tight">
                  How Zerodha Changed Stock Broking in India
                </h3>

                {/* Editorial Excerpt */}
                <p className="mt-4 text-sm sm:text-base text-[#171717]/85 leading-relaxed font-body">
                  From a small idea around reducing barriers in stock trading to becoming one of India's most recognizable financial technology companies, Zerodha's journey demonstrates the power of simplicity, technology and customer education.
                </p>

                {/* Highlights Strip */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#0B1F3A]/10 text-xs">
                  <div>
                    <span className="text-[#171717]/60 block font-mono text-[11px]">FOUNDERS</span>
                    <span className="font-semibold text-[#0B1F3A]">Nithin & Nikhil Kamath</span>
                  </div>
                  <div>
                    <span className="text-[#171717]/60 block font-mono text-[11px]">BUSINESS MODEL</span>
                    <span className="font-semibold text-[#0B1F3A]">Flat ₹20 / Free Delivery</span>
                  </div>
                  <div>
                    <span className="text-[#171717]/60 block font-mono text-[11px]">MARKETING SECRET</span>
                    <span className="font-semibold text-[#FF7A00]">Varsity (Zero Paid Ads)</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#0B1F3A]/10">
                <button
                  onClick={() => onSelectStory(story.slug)}
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#0B1F3A] hover:bg-[#1E3A8A] rounded-lg transition-all shadow-xs"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4 text-[#FF7A00] transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-1.5 text-xs text-[#138A4B] font-medium">
                  <Award className="w-4 h-4" />
                  <span className="hidden sm:inline">Audited MCA & SEBI Verified</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
