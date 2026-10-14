import React from 'react';
import { ArrowRight, Quote, GraduationCap, MapPin, Users } from 'lucide-react';
import { FOUNDERS, FounderProfile } from '../data/founders';

interface FounderDirectoryProps {
  onNavigate: (path: string) => void;
}

export const FounderDirectory: React.FC<FounderDirectoryProps> = ({ onNavigate }) => {
  const handleFounderClick = (e: React.MouseEvent<HTMLAnchorElement>, startupSlug: string) => {
    e.preventDefault();
    onNavigate(`/startup-stories/${startupSlug}`);
  };

  return (
    <section aria-labelledby="founders-main-heading" className="py-14 bg-white border-b border-[#0B1F3A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead Bar with Question-Answer Format for AEO */}
        <div className="mb-10 pb-4 border-b border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-2">
            <Users className="w-4 h-4 text-[#FF7A00]" />
            <span>LEADERSHIP ARCHIVE & FOUNDER PROFILES</span>
          </div>

          <h2 id="founders-main-heading" className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A]">
            Who Are the Visionary Founders Shaping India's Tech Ecosystem?
          </h2>

          <div className="mt-3 p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed font-body max-w-4xl">
            <strong>Direct Answer:</strong> India's startup ecosystem is built by entrepreneurs spanning diverse educational backgrounds, ages, and hometowns—from college dropouts (Alakh Pandey, Ritesh Agarwal) and seasoned investment bankers (Falguni Nayar at age 50) to bootstrapped traders (Nithin Kamath) and IIT/IIM engineers (Deepinder Goyal, Vidit Aatrey).
          </div>
        </div>

        {/* Founder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOUNDERS.map((founder: FounderProfile) => {
            const founderStoryUrl = `/startup-stories/${founder.startupSlug}`;
            return (
              <div
                key={founder.id}
                className="bg-[#F7F5F0] rounded-xl border border-[#0B1F3A]/10 hover:border-[#0B1F3A] hover:shadow-md transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Header: Monogram Avatar & Startup Association */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-white text-base shadow-xs shrink-0"
                        style={{ backgroundColor: founder.accentColor }}
                        aria-label={`Initials ${founder.initials} for ${founder.name}`}
                        role="img"
                      >
                        {founder.initials}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                          <a
                            href={founderStoryUrl}
                            onClick={(e) => handleFounderClick(e, founder.startupSlug)}
                            title={`Read ${founder.name}'s entrepreneurial journey at ${founder.startup}`}
                          >
                            {founder.name}
                          </a>
                        </h3>
                        <div className="text-xs font-semibold text-[#171717]/60">
                          {founder.startup} · {founder.role}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#0B1F3A]/60 bg-white px-2 py-0.5 rounded border border-[#0B1F3A]/10">
                      {founder.industry}
                    </span>
                  </div>

                  {/* Key Quote Box */}
                  <div className="p-3 bg-white rounded-lg border border-[#0B1F3A]/10 my-3 text-xs italic text-[#171717]/85 font-body relative">
                    <Quote className="w-3.5 h-3.5 text-[#FF7A00] mb-1 inline mr-1" />
                    "{founder.notableQuote}"
                  </div>

                  {/* Short Bio Summary */}
                  <p className="text-xs text-[#171717]/80 leading-relaxed font-body mt-2">
                    {founder.bioSummary}
                  </p>

                  {/* Academic & Geographic Roots */}
                  <div className="mt-4 pt-3 border-t border-[#0B1F3A]/10 space-y-1.5 text-[11px] text-[#171717]/70">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0B1F3A] shrink-0" />
                      <span className="line-clamp-1">{founder.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#138A4B] shrink-0" />
                      <span>Hometown Roots: {founder.originCity}</span>
                    </div>
                  </div>

                </div>

                {/* Founder Card Footer with Semantic Anchor Text (Requirement 6) */}
                <div className="mt-5 pt-3 border-t border-[#0B1F3A]/10 flex items-center justify-between">
                  <a
                    href={founderStoryUrl}
                    onClick={(e) => handleFounderClick(e, founder.startupSlug)}
                    title={`Read ${founder.startup} Case Study & ${founder.name}'s Strategy`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors"
                  >
                    <span>View {founder.startup} Story</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <span className="text-[11px] font-mono text-[#171717]/50">
                    Est. {founder.foundedYear}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
