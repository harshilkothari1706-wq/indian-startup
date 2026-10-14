import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { INDUSTRIES, Industry } from '../data/industries';

interface ExploreIndustriesProps {
  onSelectIndustry: (industryId: string) => void;
}

export const ExploreIndustries: React.FC<ExploreIndustriesProps> = ({ onSelectIndustry }) => {
  return (
    <section className="py-14 bg-[#F7F5F0] border-b border-[#0B1F3A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#0B1F3A]/10 gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-1">
              <Layers className="w-4 h-4 text-[#FF7A00]" />
              <span>SECTORAL HUBS</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              Explore Industries
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#171717]/70 font-body max-w-md">
            Click on any sector to filter startup stories, founder analyses, and business model deep dives.
          </p>
        </div>

        {/* 8 Visual Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind: Industry) => (
            <div
              key={ind.id}
              onClick={() => onSelectIndustry(ind.id)}
              className="group bg-white rounded-xl border border-[#0B1F3A]/10 p-5 hover:border-[#0B1F3A] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header: Emoji & Name */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl select-none" role="img" aria-label={ind.name}>
                    {ind.emoji}
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#0B1F3A]/60 bg-[#F7F5F0] px-2 py-0.5 rounded">
                    SECTOR
                  </span>
                </div>

                {/* Industry Title */}
                <h3 className="font-display font-bold text-lg text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                  {ind.name}
                </h3>

                {/* Key Startups List as specified in Section 9 */}
                <p className="text-xs font-medium text-[#171717]/70 mt-1.5 font-body">
                  {ind.startups.join(', ')}
                </p>

                {/* Short Sector Summary */}
                <p className="mt-3 text-xs text-[#171717]/80 line-clamp-2 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              {/* Card Footer with Arrow */}
              <div className="mt-5 pt-3 border-t border-[#0B1F3A]/10 flex items-center justify-between text-xs font-semibold text-[#0B1F3A] group-hover:text-[#FF7A00]">
                <span>View {ind.name} Stories</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
