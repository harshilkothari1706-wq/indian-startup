import React from 'react';
import { ArrowLeft, AlertTriangle, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FailureCaseStudy } from '../data/failureStories';

interface FailureDetailViewProps {
  study: FailureCaseStudy;
  onNavigate: (path: string) => void;
}

export const FailureDetailView: React.FC<FailureDetailViewProps> = ({ study, onNavigate }) => {
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
            href="/failure-stories"
            onClick={(e) => handleLinkClick(e, '/failure-stories')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Failure Postmortems</span>
          </a>
        </nav>

        {/* Main Postmortem Card */}
        <div className="bg-white rounded-xl border border-[#0B1F3A]/15 p-6 sm:p-10 shadow-xs">
          
          <div className="pb-6 border-b border-[#0B1F3A]/10">
            <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
              <span className="font-mono font-bold text-[#E23744] uppercase">
                {study.industry}
              </span>
              <span className="text-[#171717]/40" aria-hidden="true">·</span>
              <span className="font-mono text-[#171717]/60">
                Active: {study.founded} – {study.shutDownOrPivotedYear}
              </span>
              <span className="text-[#171717]/40" aria-hidden="true">·</span>
              <span className="font-mono text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-200">
                Primary Root Flaw: {study.criticalMistakeCategory}
              </span>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-4xl text-[#0B1F3A] leading-tight">
              {study.startup}: Lessons From Failure
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#171717]/80 font-body leading-relaxed">
              {study.coreThesis}
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-[#171717]/70">
              <span>Estimated Capital Raised: <strong>{study.totalFundingRaisedEstimate}</strong></span>
            </div>
          </div>

          {/* Respectful Editorial Standard Notice */}
          <div className="my-6 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3 text-xs text-[#171717]/80 font-body">
            <ShieldCheck className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
            <div>
              <strong>Editorial Respect:</strong> This postmortem is intended as an objective, educational case study for aspiring founders and business students, analyzing unit economics and market dynamics with intellectual honesty.
            </div>
          </div>

          {/* Chronological Breakdown with AEO Question-Answer H2 */}
          <section className="my-8">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0B1F3A] mb-3">
              What Happened in the Operational Lifecycle of {study.startup}?
            </h2>

            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed font-body mb-6">
              <strong>Direct Summary:</strong> {study.startup} demonstrated initial consumer traction, but structural defects in its {study.criticalMistakeCategory.toLowerCase()} model outstripped operational cash flows, making continued solvency impossible without unending venture subsidies.
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#171717]/85 font-body">
              {study.whatHappened.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3.5 bg-[#F7F5F0] rounded-lg">
                  <span className="font-mono text-[#E23744] font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Root Causes Grid */}
          <section className="pt-6 border-t border-[#0B1F3A]/10">
            <h2 className="font-display font-bold text-lg sm:text-xl text-[#0B1F3A] mb-4">
              Detailed Structural Root Causes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body">
              {study.rootCauses.map((rc, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-[#0B1F3A]/15 shadow-xs">
                  <span className="font-mono text-[10px] font-bold text-[#E23744] block mb-1">
                    ROOT CAUSE 0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-xs text-[#0B1F3A] mb-1">
                    {rc.title}
                  </h3>
                  <p className="text-[#171717]/80 leading-relaxed font-body">
                    {rc.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Lessons for Business Students */}
          <section className="mt-8 p-6 bg-[#0B1F3A] text-white rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#FF7A00]" />
              <h2 className="font-display font-bold text-lg text-white">
                Essential Takeaways for Entrepreneurs & Business Students
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-body">
              {study.lessonsForStudents.map((lesson, idx) => (
                <div key={idx} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <strong className="text-[#FF7A00] block text-sm mb-1">
                    Rule 0{idx + 1}: {lesson.rule}
                  </strong>
                  <p className="text-white/80 leading-relaxed">
                    {lesson.explanation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Historical Note */}
          <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10 text-xs italic text-[#171717]/70 font-body">
            📝 {study.editorialToneNote}
          </div>

        </div>

      </div>
    </article>
  );
};
