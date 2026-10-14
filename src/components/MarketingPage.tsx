import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, ChevronRight, Award, Target } from 'lucide-react';
import { MARKETING_STORIES, MarketingCaseStudy } from '../data/marketingStories';

interface MarketingPageProps {
  onSelectStory: (slug: string) => void;
}

export const MarketingPage: React.FC<MarketingPageProps> = ({ onSelectStory }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(MARKETING_STORIES[0].id);

  const activeCase = MARKETING_STORIES.find((c) => c.id === selectedCaseId) || MARKETING_STORIES[0];

  return (
    <section className="py-12 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-2">
            <Target className="w-4 h-4 text-[#FF7A00]" />
            <span>DIGITAL BUSINESS & MARKETING STRATEGY</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] tracking-tight">
            Marketing Playbooks
          </h1>
          <p className="mt-3 text-base text-[#171717]/80 max-w-3xl font-body">
            Deep-dive strategic breakdowns curated specifically for BBA, MBA, and Digital Marketing students. How India's top consumer brands cracked organic virality, community tribes, and customer acquisition moats.
          </p>
        </div>

        {/* Master-Detail Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Rail: 5 Featured Case Studies List (Section 17 requirement) */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]/70 mb-2">
              Featured Case Studies
            </h2>

            {MARKETING_STORIES.map((study: MarketingCaseStudy) => {
              const isSelected = study.id === selectedCaseId;
              return (
                <div
                  key={study.id}
                  onClick={() => setSelectedCaseId(study.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                      : 'bg-white text-[#171717] border-[#0B1F3A]/10 hover:border-[#0B1F3A]/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span
                      className={`font-mono font-bold ${
                        isSelected ? 'text-[#FF7A00]' : 'text-[#0B1F3A]'
                      }`}
                    >
                      {study.startup.toUpperCase()} · {study.category}
                    </span>
                    <span className={isSelected ? 'text-white/60' : 'text-[#171717]/50'}>
                      Case Breakdown
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base leading-snug">
                    {study.title}
                  </h3>

                  <p
                    className={`text-xs mt-1.5 line-clamp-2 ${
                      isSelected ? 'text-white/80' : 'text-[#171717]/70'
                    }`}
                  >
                    {study.heroHeadline}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-current/10 font-semibold">
                    <span>{study.coreMarketingConcept}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Rail: Selected Deep Dive Analysis */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#0B1F3A]/15 p-6 sm:p-8 shadow-xs">
            
            {/* Case Study Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#0B1F3A]/10 mb-4">
              <span className="text-xs font-mono font-bold text-[#FF7A00] tracking-wider uppercase">
                {activeCase.startup} · STRATEGY DOSSIER
              </span>
              <button
                onClick={() => onSelectStory(activeCase.startupSlug)}
                className="text-xs font-bold text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1"
              >
                <span>Read Full Startup Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A] leading-tight">
              {activeCase.title}
            </h2>

            <p className="mt-1 text-sm font-semibold text-[#FF7A00]">
              {activeCase.heroHeadline}
            </p>

            <p className="mt-4 text-sm text-[#171717]/85 leading-relaxed font-body">
              {activeCase.summary}
            </p>

            {/* Target Audience & Concept */}
            <div className="mt-6 p-4 bg-[#F7F5F0] rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-mono text-[11px] text-[#171717]/60 block">TARGET AUDIENCE</span>
                <span className="font-semibold text-[#0B1F3A]">{activeCase.targetAudience}</span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#171717]/60 block">CORE CONCEPT</span>
                <span className="font-semibold text-[#0B1F3A]">{activeCase.coreMarketingConcept}</span>
              </div>
            </div>

            {/* Step-by-Step Strategic Framework */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#0B1F3A]" />
                <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                  {activeCase.framework.name}
                </h3>
              </div>

              <div className="space-y-3">
                {activeCase.framework.stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#F7F5F0] rounded-lg border border-[#0B1F3A]/5 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded bg-[#0B1F3A] text-[#FF7A00] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-xs text-[#0B1F3A]">
                        {stage.step}
                      </h4>
                      <p className="text-xs text-[#171717]/80 mt-0.5 leading-relaxed font-body">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Tactics & Metrics */}
            <div className="mt-8">
              <h3 className="font-display font-bold text-base text-[#0B1F3A] mb-3">
                Tactical Execution & Measurable Impact
              </h3>

              <div className="space-y-3">
                {activeCase.keyTactics.map((tactic, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg border border-[#0B1F3A]/10 text-xs">
                    <div className="font-semibold text-[#0B1F3A] text-sm mb-1">
                      {tactic.title}
                    </div>
                    <p className="text-[#171717]/80 font-body mb-2">
                      {tactic.tactic}
                    </p>
                    <div className="p-2 bg-emerald-50 rounded text-[#138A4B] font-medium text-[11px]">
                      📈 <strong>Outcome:</strong> {tactic.metricOrOutcome}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Takeaway Box for BBA/MBA students */}
            <div className="mt-8 p-5 bg-[#0B1F3A] text-white rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase mb-1">
                <Award className="w-4 h-4" />
                <span>Executive Student Takeaway</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body">
                {activeCase.studentTakeaway}
              </p>
            </div>

            {/* Academic Tags */}
            <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#171717]/60">Academic Focus:</span>
              {activeCase.academicTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium text-[#0B1F3A] bg-[#F7F5F0] px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
