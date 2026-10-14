import React from 'react';
import { ShieldCheck, CheckCircle2, BookOpen, Award, Users, Compass } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <section className="py-14 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Kicker */}
        <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF7A00] mb-2">
          MANIFESTO & INSTITUTIONAL STANDARDS
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] leading-tight tracking-tight">
          About Indian Startup Stories
        </h1>

        <p className="mt-3 text-lg font-semibold text-[#FF7A00]">
          Real Founders. Real Journeys. Real Stories.
        </p>

        {/* Section 19: Our Mission (Faithfully implemented word for word) */}
        <div className="mt-10 bg-white rounded-xl border border-[#0B1F3A]/15 p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-[#0B1F3A]/10 mb-6">
            <Compass className="w-5 h-5 text-[#0B1F3A]" />
            <h2 className="font-display font-bold text-xl text-[#0B1F3A]">
              Our Mission
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#171717]/85 font-body leading-relaxed">
            <p>
              Indian Startup Stories exists to document the people, ideas and decisions behind India's startup ecosystem.
            </p>
            <p>
              We believe that startup stories should be more than success headlines.
            </p>
            <div className="py-4 my-2 border-y border-[#0B1F3A]/10">
              <p className="font-display font-bold text-lg text-[#0B1F3A] mb-3">
                Behind every company are:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-sm font-semibold text-[#0B1F3A]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                  <span>Ideas.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                  <span>Experiments.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                  <span>Failures.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#138A4B]" />
                  <span>Pivots.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#138A4B]" />
                  <span>People.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#138A4B]" />
                  <span>Decisions.</span>
                </div>
              </div>
            </div>
            <p>
              Our goal is to make those journeys accessible to students, entrepreneurs and anyone curious about business.
            </p>
          </div>
        </div>

        {/* Section 20: Editorial Policy (Faithfully implemented word for word) */}
        <div className="mt-10 bg-white rounded-xl border border-[#0B1F3A]/15 p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-[#0B1F3A]/10 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#138A4B]" />
            <h2 className="font-display font-bold text-xl text-[#0B1F3A]">
              Editorial Policy
            </h2>
          </div>

          <p className="font-display font-bold text-base text-[#0B1F3A] mb-6">
            What We Believe
          </p>

          <div className="space-y-6">
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#138A4B] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                  We verify.
                </h3>
                <p className="text-sm text-[#171717]/80 font-body mt-0.5">
                  Important claims should be checked against reliable sources, audited financial statements, and regulatory filings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#138A4B] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                  We cite.
                </h3>
                <p className="text-sm text-[#171717]/80 font-body mt-0.5">
                  Readers should be able to understand where information came from, with primary and independent sources disclosed on every article.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#138A4B] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                  We update.
                </h3>
                <p className="text-sm text-[#171717]/80 font-body mt-0.5">
                  Time-sensitive information should have an updated date to ensure metrics and legal statuses remain accurate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#138A4B] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                  We distinguish fact from analysis.
                </h3>
                <p className="text-sm text-[#171717]/80 font-body mt-0.5">
                  Company claims and editorial interpretation should not be presented as the same thing. Promotional spin is rejected in favor of verified ground reality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#138A4B] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                  We correct.
                </h3>
                <p className="text-sm text-[#171717]/80 font-body mt-0.5">
                  If a factual error is discovered, the article should be corrected transparently with an updated editorial timestamp.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Target Audience Alignment */}
        <div className="mt-10 bg-[#0B1F3A] text-white rounded-xl p-6 sm:p-10 shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase mb-2">
            <Users className="w-4 h-4" />
            <span>Target Audience</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl text-white mb-4">
            Curated for the Next Generation of Indian Builders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-body">
            <div>
              <h3 className="font-display font-bold text-[#FF7A00] text-sm uppercase tracking-wider mb-2">
                Primary Audience: College Students
              </h3>
              <p className="text-white/80 leading-relaxed mb-3">
                Students studying BBA, MBA, Digital Business, Marketing, Entrepreneurship, and Finance looking for real-world Indian business case studies beyond Western textbooks.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-2">
                Secondary Audience: Practitioners
              </h3>
              <p className="text-white/80 leading-relaxed">
                Aspiring entrepreneurs, startup enthusiasts, digital marketers, researchers, and venture investors seeking unhyped ground reality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
