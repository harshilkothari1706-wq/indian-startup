import React from 'react';
import { ArrowLeft, ArrowRight, Layers, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Industry, INDUSTRIES } from '../data/industries';
import { STARTUP_STORIES, StartupArticle } from '../data/startups';
import { StoryCard } from './StoryCard';

interface IndustryDetailViewProps {
  industry: Industry;
  onNavigate: (path: string) => void;
  savedSlugs?: string[];
  onToggleBookmark?: (slug: string) => void;
}

export const IndustryDetailView: React.FC<IndustryDetailViewProps> = ({
  industry,
  onNavigate,
  savedSlugs = [],
  onToggleBookmark,
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  // Find all stories in this industry
  const matchingStories = STARTUP_STORIES.filter(
    (s: StartupArticle) =>
      s.category.toLowerCase().replace(/[^a-z]/g, '') ===
      industry.name.toLowerCase().replace(/[^a-z]/g, '')
  );

  return (
    <article className="min-h-screen bg-[#F7F5F0] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Back Link */}
        <nav aria-label="Breadcrumbs" className="mb-6">
          <a
            href="/industries"
            onClick={(e) => handleLinkClick(e, '/industries')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Industries Overview</span>
          </a>
        </nav>

        {/* Industry Hero Banner */}
        <div className="bg-white rounded-xl border border-[#0B1F3A]/15 p-6 sm:p-10 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#0B1F3A]/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl" role="img" aria-label={`${industry.name} emoji icon`}>
                  {industry.emoji}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A00]">
                  INDIAN STARTUP SECTOR DOSSIER
                </span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-[#0B1F3A]">
                {industry.name} Startup Ecosystem in India
              </h1>
              <p className="mt-2 text-sm sm:text-base text-[#171717]/80 max-w-2xl font-body">
                {industry.description}
              </p>
            </div>

            <div className="p-4 bg-[#0B1F3A] text-white rounded-xl shrink-0 text-center sm:text-right">
              <span className="text-[10px] font-mono tracking-widest text-[#FF7A00] uppercase block">
                PROJECTED MARKET VALUE
              </span>
              <span className="font-display font-extrabold text-xl sm:text-2xl text-white">
                {industry.marketSizeEstimate}
              </span>
            </div>
          </div>

          {/* AEO Subheading & Direct Answer */}
          <div className="my-8">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0B1F3A] mb-2">
              What Are the Core Growth Drivers for {industry.name} Startups in India?
            </h2>

            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed font-body mb-6">
              <strong>Direct Answer:</strong> The Indian {industry.name} industry is powered by expanding smartphone penetration, government digital public infrastructure (DPI), and rising consumer readiness to transact digitally. Prominent leaders include {industry.startups.join(', ')}.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body">
              {industry.growthDrivers.map((driver, idx) => (
                <div key={idx} className="p-4 bg-[#F7F5F0] rounded-lg border border-[#0B1F3A]/10">
                  <div className="flex items-center gap-2 font-semibold text-[#0B1F3A] mb-1">
                    <TrendingUp className="w-4 h-4 text-[#138A4B]" />
                    <span>Growth Driver 0{idx + 1}</span>
                  </div>
                  <p className="text-[#171717]/80 leading-relaxed font-body">
                    {driver}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Challenges */}
          <div className="pt-6 border-t border-[#0B1F3A]/10">
            <h2 className="font-display font-bold text-lg text-[#0B1F3A] mb-2">
              What Is the Defining Operational Challenge in {industry.name}?
            </h2>
            <div className="flex items-start gap-3 p-4 bg-red-50/80 rounded-lg border border-red-200 text-xs sm:text-sm text-red-950 font-body">
              <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
              <span>{industry.primaryChallenge}</span>
            </div>
          </div>

        </div>

        {/* Matching Startup Case Studies Grid */}
        <section aria-labelledby="industry-stories-heading">
          <div className="mb-6 flex items-center justify-between pb-2 border-b border-[#0B1F3A]/10">
            <h2 id="industry-stories-heading" className="font-display font-bold text-2xl text-[#0B1F3A]">
              Verified {industry.name} Startup Case Studies ({matchingStories.length})
            </h2>
            <a
              href="/startup-stories"
              onClick={(e) => handleLinkClick(e, '/startup-stories')}
              className="text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00]"
            >
              View All 10 Stories
            </a>
          </div>

          {matchingStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onNavigate={onNavigate}
                  isBookmarked={savedSlugs.includes(story.slug)}
                  onToggleBookmark={onToggleBookmark}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 bg-white rounded-xl text-center text-xs text-[#171717]/60">
              <p className="font-bold text-[#0B1F3A]">Research Dossier in Preparation</p>
              <p className="mt-1">Additional {industry.name} verified case studies are scheduled for upcoming editorial dispatches.</p>
            </div>
          )}
        </section>

      </div>
    </article>
  );
};
