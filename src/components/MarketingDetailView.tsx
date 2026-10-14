import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Award, Target, CheckCircle2 } from 'lucide-react';
import { MarketingCaseStudy, MARKETING_STORIES } from '../data/marketingStories';

interface MarketingDetailViewProps {
  caseStudy: MarketingCaseStudy;
  onNavigate: (path: string) => void;
}

export const MarketingDetailView: React.FC<MarketingDetailViewProps> = ({ caseStudy, onNavigate }) => {
  const storyUrl = `/startup-stories/${caseStudy.startupSlug}`;

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
            href="/marketing"
            onClick={(e) => handleLinkClick(e, '/marketing')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Marketing Playbooks</span>
          </a>
        </nav>

        {/* Marketing Case Card */}
        <div className="bg-white rounded-xl border border-[#0B1F3A]/15 p-6 sm:p-10 shadow-xs">
          
          <div className="pb-6 border-b border-[#0B1F3A]/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase mb-2">
              <Target className="w-4 h-4 text-[#FF7A00]" />
              <span>{caseStudy.startup} · DIGITAL MARKETING CASE STUDY</span>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-4xl text-[#0B1F3A] leading-tight">
              {caseStudy.title}
            </h1>

            <p className="mt-2 text-base font-semibold text-[#FF7A00]">
              {caseStudy.heroHeadline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#171717]/85 font-body leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Target Audience & Concept */}
          <div className="my-6 p-4 bg-[#F7F5F0] rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
            <div>
              <span className="font-mono text-[11px] text-[#171717]/60 block mb-0.5">TARGET AUDIENCE</span>
              <span className="font-semibold text-[#0B1F3A] text-sm">{caseStudy.targetAudience}</span>
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#171717]/60 block mb-0.5">CORE MARKETING CONCEPT</span>
              <span className="font-semibold text-[#0B1F3A] text-sm">{caseStudy.coreMarketingConcept}</span>
            </div>
          </div>

          {/* AEO Subheading: Direct Answer & Framework */}
          <section className="my-8">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0B1F3A] mb-3">
              How Does {caseStudy.startup}'s Marketing Framework Function Step-by-Step?
            </h2>

            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed font-body mb-6">
              <strong>Direct Answer:</strong> The strategy operates through "{caseStudy.framework.name}", systematically moving target consumers through awareness, cultural empathy, organic virality, and immediate conversion.
            </div>

            <div className="space-y-3">
              {caseStudy.framework.stages.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F7F5F0] rounded-lg border border-[#0B1F3A]/5 flex items-start gap-3.5"
                >
                  <span className="w-7 h-7 rounded bg-[#0B1F3A] text-[#FF7A00] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#0B1F3A]">
                      {stage.step}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#171717]/80 mt-1 leading-relaxed font-body">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tactics & Measurable Impact */}
          <section className="pt-6 border-t border-[#0B1F3A]/10">
            <h2 className="font-display font-bold text-lg sm:text-xl text-[#0B1F3A] mb-4">
              Tactical Execution & Real-World Impact
            </h2>

            <div className="space-y-4">
              {caseStudy.keyTactics.map((tactic, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-[#0B1F3A]/15 text-xs sm:text-sm">
                  <div className="font-semibold text-[#0B1F3A] text-sm sm:text-base mb-1">
                    {tactic.title}
                  </div>
                  <p className="text-[#171717]/80 font-body mb-2 leading-relaxed">
                    {tactic.tactic}
                  </p>
                  <div className="p-2.5 bg-emerald-50 rounded text-[#138A4B] font-medium text-xs">
                    📈 <strong>Measurable Metric:</strong> {tactic.metricOrOutcome}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Student Takeaway */}
          <div className="mt-8 p-6 bg-[#0B1F3A] text-white rounded-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Executive Academic Takeaway for Business Students</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body">
              {caseStudy.studentTakeaway}
            </p>
          </div>

          {/* Direct Link to Company Story */}
          <div className="mt-8 pt-6 border-t border-[#0B1F3A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#171717]/70 font-mono">
              Academic Focus: {caseStudy.academicTags.join(' · ')}
            </div>

            <a
              href={storyUrl}
              onClick={(e) => handleLinkClick(e, storyUrl)}
              title={`Read full ${caseStudy.startup} business case study`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0B1F3A] hover:bg-[#1E3A8A] rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Read Full {caseStudy.startup} Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </article>
  );
};
