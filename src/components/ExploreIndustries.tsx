import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { INDUSTRIES, Industry } from '../data/industries';

interface ExploreIndustriesProps {
  onNavigate: (path: string) => void;
}

export const ExploreIndustries: React.FC<ExploreIndustriesProps> = ({ onNavigate }) => {
  const handleIndustryClick = (e: React.MouseEvent<HTMLAnchorElement>, industryId: string) => {
    e.preventDefault();
    onNavigate(`/startup-stories?industry=${industryId}`);
  };

  return (
    <section aria-labelledby="industries-main-heading" className="py-14 bg-[#F7F5F0] border-b border-[#0B1F3A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead Bar with Question-Answer Format for AEO */}
        <div className="mb-8 pb-4 border-b border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-2">
            <Layers className="w-4 h-4 text-[#FF7A00]" />
            <span>SECTORAL HUBS & ECOSYSTEM ANALYSIS</span>
          </div>

          <h2 id="industries-main-heading" className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A]">
            Which Key Industries Are Driving India's Startup Innovation?
          </h2>

          <div className="mt-3 p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed font-body max-w-4xl">
            <strong>Direct Answer:</strong> Eight primary sectors drive India's venture ecosystem: FinTech (digital payments & broking), FoodTech (hyperlocal delivery & quick commerce), E-commerce (social selling & D2C), EdTech (affordable test-prep), Consumer Tech (wearables & audio), Hospitality (standardized budget lodging), HealthTech (e-pharmacy), and SaaS (global enterprise software).
          </div>
        </div>

        {/* 8 Visual Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind: Industry) => {
            const industryUrl = `/startup-stories?industry=${ind.id}`;
            return (
              <div
                key={ind.id}
                className="group bg-white rounded-xl border border-[#0B1F3A]/10 p-5 hover:border-[#0B1F3A] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Header: Emoji & Name */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl select-none" role="img" aria-label={`${ind.name} sector icon`}>
                      {ind.emoji}
                    </span>
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-[#0B1F3A]/60 bg-[#F7F5F0] px-2 py-0.5 rounded">
                      SECTOR HUB
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 className="font-display font-bold text-lg text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                    <a
                      href={industryUrl}
                      onClick={(e) => handleIndustryClick(e, ind.id)}
                      title={`Explore verified case studies in the Indian ${ind.name} industry`}
                    >
                      {ind.name}
                    </a>
                  </h3>

                  {/* Key Startups List */}
                  <p className="text-xs font-medium text-[#171717]/70 mt-1.5 font-body">
                    {ind.startups.join(', ')}
                  </p>

                  {/* Short Sector Summary */}
                  <p className="mt-3 text-xs text-[#171717]/80 line-clamp-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                {/* Card Footer with Semantic Anchor Text (Requirement 6) */}
                <div className="mt-5 pt-3 border-t border-[#0B1F3A]/10 flex items-center justify-between text-xs font-semibold text-[#0B1F3A] group-hover:text-[#FF7A00]">
                  <a
                    href={industryUrl}
                    onClick={(e) => handleIndustryClick(e, ind.id)}
                    title={`View all verified Indian ${ind.name} startup stories`}
                    className="flex items-center gap-1.5"
                  >
                    <span>View {ind.name} Stories</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
