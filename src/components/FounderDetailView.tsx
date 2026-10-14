import React from 'react';
import { ArrowLeft, ArrowRight, Quote, GraduationCap, MapPin, Building, Calendar, CheckCircle2, Award } from 'lucide-react';
import { FounderProfile, FOUNDERS } from '../data/founders';
import { STARTUP_STORIES } from '../data/startups';

interface FounderDetailViewProps {
  founder: FounderProfile;
  onNavigate: (path: string) => void;
}

export const FounderDetailView: React.FC<FounderDetailViewProps> = ({ founder, onNavigate }) => {
  const startupStory = STARTUP_STORIES.find((s) => s.slug === founder.startupSlug);
  const storyUrl = `/startup-stories/${founder.startupSlug}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <article className="min-h-screen bg-[#F7F5F0] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Back Link */}
        <nav aria-label="Breadcrumbs" className="mb-6">
          <a
            href="/founders"
            onClick={(e) => handleLinkClick(e, '/founders')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Founders Directory</span>
          </a>
        </nav>

        {/* Founder Hero Card */}
        <div className="bg-white rounded-xl border border-[#0B1F3A]/15 p-6 sm:p-10 shadow-xs">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#0B1F3A]/10">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center font-display font-black text-white text-2xl sm:text-3xl shadow-sm shrink-0"
                style={{ backgroundColor: founder.accentColor }}
                role="img"
                aria-label={`Initials ${founder.initials} for founder ${founder.name}`}
              >
                {founder.initials}
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A00]">
                  {founder.startup} · {founder.role}
                </span>
                <h1 className="font-display font-black text-2xl sm:text-4xl text-[#0B1F3A] mt-0.5">
                  {founder.name}
                </h1>
                <div className="flex items-center gap-2 mt-1 text-xs text-[#171717]/70 font-mono">
                  <span>Sector: {founder.industry}</span>
                  <span aria-hidden="true">·</span>
                  <span>Founded: {founder.foundedYear}</span>
                </div>
              </div>
            </div>

            {startupStory && (
              <a
                href={storyUrl}
                onClick={(e) => handleLinkClick(e, storyUrl)}
                title={`Read ${founder.startup} Startup Case Study`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#0B1F3A] hover:bg-[#1E3A8A] rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Read {founder.startup} Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Key Quote in Question-Answer / AEO Focus */}
          <div className="my-8 p-5 bg-[#F7F5F0] border-l-4 border-[#FF7A00] rounded-r-lg">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
              Core Leadership Philosophy
            </h2>
            <p className="text-sm sm:text-base italic text-[#0B1F3A] font-body leading-relaxed">
              "{founder.philosophy}"
            </p>
            <div className="mt-2 text-xs font-semibold text-[#171717]/60">
              — {founder.name}, {founder.role} at {founder.startup}
            </div>
          </div>

          {/* Biography Breakdown (AEO Q&A H2) */}
          <div className="space-y-6 text-[#171717] font-body text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-[#0B1F3A] mb-2">
                What Is {founder.name}'s Entrepreneurial Background?
              </h2>
              <div className="p-3 bg-amber-50/80 rounded border-l-2 border-[#FF7A00] text-xs sm:text-sm text-[#0B1F3A] font-medium mb-3">
                <strong>Direct Summary:</strong> {founder.bioSummary}
              </div>
              <p>
                From humble beginnings in {founder.originCity}, {founder.name} pursued academic education at {founder.education} before spotting critical market inefficiencies in India's {founder.industry} landscape.
              </p>
            </section>

            {/* Career Milestones */}
            <section className="pt-4 border-t border-[#0B1F3A]/10">
              <h2 className="font-display font-bold text-lg text-[#0B1F3A] mb-3">
                Key Strategic Milestones & Achievements
              </h2>
              <div className="space-y-2.5">
                {founder.keyMilestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#F7F5F0] rounded-lg text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#138A4B] shrink-0 mt-0.5" />
                    <span>{milestone}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Academic & Geographic Roots */}
            <section className="pt-4 border-t border-[#0B1F3A]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
              <div className="p-3.5 bg-white rounded-lg border border-[#0B1F3A]/10">
                <span className="font-mono text-[#171717]/60 block mb-1">ALMA MATER & EDUCATION</span>
                <div className="flex items-center gap-2 font-semibold text-[#0B1F3A]">
                  <GraduationCap className="w-4 h-4 text-[#0B1F3A] shrink-0" />
                  <span>{founder.education}</span>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#0B1F3A]/10">
                <span className="font-mono text-[#171717]/60 block mb-1">HOMETOWN ORIGIN</span>
                <div className="flex items-center gap-2 font-semibold text-[#0B1F3A]">
                  <MapPin className="w-4 h-4 text-[#138A4B] shrink-0" />
                  <span>{founder.originCity}</span>
                </div>
              </div>
            </section>

          </div>

          {/* Direct Link to Company Case Study */}
          {startupStory && (
            <div className="mt-8 pt-6 border-t border-[#0B1F3A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0B1F3A] text-white p-6 rounded-xl">
              <div>
                <span className="text-xs font-mono text-[#FF7A00] uppercase font-bold">
                  VERIFIED CASE STUDY AVAILABLE
                </span>
                <h3 className="font-display font-bold text-lg text-white mt-0.5">
                  {startupStory.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-1 mt-1">
                  {startupStory.subtitle}
                </p>
              </div>

              <a
                href={storyUrl}
                onClick={(e) => handleLinkClick(e, storyUrl)}
                title={`Explore ${founder.startup} Full Business Model Breakdown`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0B1F3A] bg-[#FF7A00] hover:bg-[#e06c00] text-white rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>

      </div>
    </article>
  );
};
