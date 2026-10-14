import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Bookmark } from 'lucide-react';
import { StartupArticle } from '../data/startups';

interface StoryCardProps {
  story: StartupArticle;
  onSelectStory: (slug: string) => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (slug: string) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  onSelectStory,
  isBookmarked = false,
  onToggleBookmark,
}) => {
  return (
    <article className="group bg-white rounded-xl border border-[#0B1F3A]/10 hover:border-[#0B1F3A] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
      
      {/* Top Visual Header with Fallback Art and zero-broken-image resilience */}
      <div
        onClick={() => onSelectStory(story.slug)}
        className={`h-44 bg-gradient-to-br ${story.images.hero.fallbackGradient} p-5 flex flex-col justify-between cursor-pointer relative overflow-hidden`}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Top Meta Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-widest text-white/80 font-bold uppercase">
            {story.category}
          </span>
          <span className="text-[10px] font-mono text-[#FF7A00] font-semibold bg-black/30 px-2 py-0.5 rounded">
            EST. {story.quickFacts.founded}
          </span>
        </div>

        {/* Startup Monogram & Title Graphic */}
        <div className="relative z-10">
          <div className="font-display font-extrabold text-2xl text-white tracking-tight group-hover:text-[#FF7A00] transition-colors">
            {story.id.toUpperCase()}
          </div>
          <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5 font-body">
            {story.quickFacts.founders}
          </p>
        </div>

        {/* Bottom Image Credit Caption (Mandatory per Section 12) */}
        <div className="relative z-10 text-[9px] text-white/50 font-mono line-clamp-1 border-t border-white/10 pt-1">
          Credit: {story.images.hero.credit}
        </div>
      </div>

      {/* Main Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          
          {/* Zero-Pill Unboxed Metadata with · separator (Anti-Slop rule compliant) */}
          <div className="flex items-center gap-2 text-xs text-[#171717]/60 mb-2">
            <span className="font-semibold text-[#0B1F3A]">{story.category}</span>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#171717]/50" />
              <span>{story.readingTime}</span>
            </div>
            <span aria-hidden="true">·</span>
            <span>{story.publishedDate.split(' ')[1]} {story.publishedDate.split(' ')[2]}</span>
          </div>

          {/* Big Blog Headline */}
          <h3
            onClick={() => onSelectStory(story.slug)}
            className="font-display font-bold text-lg text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {story.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-[#171717]/75 line-clamp-2 leading-relaxed font-body">
            {story.subtitle}
          </p>

          {/* Quick Facts Preview */}
          <div className="mt-4 pt-3 border-t border-[#0B1F3A]/5 grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-[#171717]/50 block font-mono">MODEL</span>
              <span className="text-[#0B1F3A] font-medium line-clamp-1">{story.quickFacts.businessModel.split('(')[0]}</span>
            </div>
            <div>
              <span className="text-[#171717]/50 block font-mono">STATUS</span>
              <span className="text-[#0B1F3A] font-medium line-clamp-1">{story.quickFacts.valuationStatus.split('/')[0]}</span>
            </div>
          </div>

        </div>

        {/* Card Footer Actions */}
        <div className="mt-5 pt-3 border-t border-[#0B1F3A]/10 flex items-center justify-between">
          <button
            onClick={() => onSelectStory(story.slug)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors"
          >
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] text-[#138A4B] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified</span>
            </span>

            {onToggleBookmark && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(story.slug);
                }}
                className="p-1 text-[#171717]/40 hover:text-[#FF7A00] transition-colors focus:outline-none"
                title={isBookmarked ? 'Remove bookmark' : 'Bookmark story'}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? 'fill-[#FF7A00] text-[#FF7A00]' : ''}`}
                />
              </button>
            )}
          </div>
        </div>

      </div>

    </article>
  );
};
