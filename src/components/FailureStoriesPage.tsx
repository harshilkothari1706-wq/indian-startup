import React, { useState } from 'react';
import { AlertTriangle, BookOpen, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { FAILURE_STORIES, FailureCaseStudy } from '../data/failureStories';

export const FailureStoriesPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(FAILURE_STORIES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section aria-labelledby="failures-heading" className="py-12 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Question-Answer Format for AEO */}
        <div className="mb-8 pb-4 border-b border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E23744] mb-2">
            <AlertTriangle className="w-4 h-4 text-[#E23744]" />
            <span>CRITICAL RETROSPECTIVES & UNIT ECONOMICS</span>
          </div>

          <h1 id="failures-heading" className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] tracking-tight">
            Why Do Tech Startups Fail in India and What Are the Core Lessons?
          </h1>

          <div className="mt-4 p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed font-body max-w-4xl">
            <strong>Direct Answer:</strong> The primary causes of startup failure in India are negative contribution margins (losing money on every order subsidized by VC cash), premature geographic expansion ahead of customer retention, high inventory write-downs in seasonal fashion, and taking high-interest debt loans without timely financial audits.
          </div>
        </div>

        {/* Respectful Editorial Standard Notice */}
        <div className="mb-10 p-4 bg-white border border-[#0B1F3A]/15 rounded-xl shadow-xs flex items-start gap-3 text-xs text-[#171717]/80 font-body">
          <ShieldCheck className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0B1F3A]">Editorial Ethics & Respectful Tone:</strong> Every entrepreneur documented here showed extraordinary bravery in building for India. We dissect structural operational breakdowns and market forces with intellectual honesty, avoiding schadenfreude or personal blame.
          </div>
        </div>

        {/* Failure Case Studies Accordion */}
        <div className="space-y-6">
          {FAILURE_STORIES.map((study: FailureCaseStudy) => {
            const isExpanded = expandedId === study.id;
            return (
              <div
                key={study.id}
                className="bg-white rounded-xl border border-[#0B1F3A]/15 overflow-hidden shadow-xs hover:border-[#0B1F3A]/40 transition-all"
              >
                {/* Header Strip */}
                <div
                  onClick={() => toggleExpand(study.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-[#F7F5F0]/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs mb-1.5">
                      <span className="font-mono font-bold text-[#E23744] uppercase">
                        {study.industry}
                      </span>
                      <span className="text-[#171717]/40" aria-hidden="true">·</span>
                      <span className="font-mono text-[#171717]/60">
                        {study.founded} – {study.shutDownOrPivotedYear}
                      </span>
                      <span className="text-[#171717]/40" aria-hidden="true">·</span>
                      <span className="font-mono text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-200">
                        Flaw: {study.criticalMistakeCategory}
                      </span>
                    </div>

                    <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1F3A]">
                      {study.startup}: Why Did It Struggle?
                    </h2>

                    <p className="mt-1 text-xs sm:text-sm text-[#171717]/75 font-body">
                      {study.coreThesis}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right hidden sm:block">
                      <span className="text-[10px] font-mono text-[#171717]/50 block">EST. FUNDING</span>
                      <span className="font-mono font-semibold text-xs text-[#0B1F3A]">
                        {study.totalFundingRaisedEstimate}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-[#F7F5F0] border border-[#0B1F3A]/10 flex items-center justify-center text-[#0B1F3A]"
                      aria-label={isExpanded ? `Collapse ${study.startup} case study` : `Expand ${study.startup} case study`}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Analysis */}
                {isExpanded && (
                  <div className="p-6 pt-0 border-t border-[#0B1F3A]/10 bg-[#F7F5F0]/30 space-y-6">
                    
                    {/* What Happened Section */}
                    <div className="pt-4">
                      <h3 className="font-display font-bold text-sm text-[#0B1F3A] uppercase tracking-wider mb-2">
                        Chronological Breakdown
                      </h3>
                      <ul className="space-y-2 pl-1 text-xs sm:text-sm text-[#171717]/85 font-body">
                        {study.whatHappened.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="font-mono text-[#E23744] font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Root Causes Grid */}
                    <div>
                      <h3 className="font-display font-bold text-sm text-[#0B1F3A] uppercase tracking-wider mb-3">
                        Structural Failure Root Causes
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        {study.rootCauses.map((rc, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-white rounded-lg border border-[#0B1F3A]/10 shadow-xs"
                          >
                            <span className="font-mono text-[10px] font-bold text-[#E23744] block mb-1">
                              ROOT CAUSE 0{idx + 1}
                            </span>
                            <h4 className="font-display font-bold text-xs text-[#0B1F3A] mb-1">
                              {rc.title}
                            </h4>
                            <p className="text-[#171717]/80 leading-relaxed font-body">
                              {rc.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actionable Lessons for Students & Entrepreneurs */}
                    <div className="p-5 bg-white rounded-xl border border-[#0B1F3A]/10">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-[#FF7A00]" />
                        <h3 className="font-display font-bold text-sm text-[#0B1F3A] uppercase tracking-wider">
                          Key Lessons for Business Students & Founders
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {study.lessonsForStudents.map((lesson, idx) => (
                          <div key={idx} className="text-xs sm:text-sm">
                            <strong className="text-[#0B1F3A] block">
                              {idx + 1}. {lesson.rule}
                            </strong>
                            <p className="text-[#171717]/80 mt-0.5 font-body">
                              {lesson.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Historical Reflection & Editorial Note */}
                    <div className="p-3 bg-slate-100 rounded-lg text-xs italic text-[#171717]/70 font-body">
                      📝 {study.editorialToneNote}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
