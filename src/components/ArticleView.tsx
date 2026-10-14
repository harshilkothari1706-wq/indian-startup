import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  ShieldCheck,
  Bookmark,
  Share2,
  Check,
  Building,
  MapPin,
  TrendingUp,
  FileText,
  ExternalLink,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { StartupArticle, STARTUP_STORIES } from '../data/startups';

interface ArticleViewProps {
  story: StartupArticle;
  onBack: () => void;
  onSelectStory: (slug: string) => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  story,
  onBack,
  onSelectStory,
  isBookmarked = false,
  onToggleBookmark,
}) => {
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyCitation = () => {
    const citation = `${story.author}. (${story.publishedDate.split(' ').pop()}). "${story.title}." Indian Startup Stories. Retrieved from https://indianstartupstories.com/startup-stories/${story.slug}`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const relatedStories = STARTUP_STORIES.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#F7F5F0] pb-20">
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#0B1F3A]/10">
        <div
          className="h-full bg-[#FF7A00] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Reading Utility Bar on Mobile/Desktop */}
      <div className="sticky top-18 z-30 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#0B1F3A]/10 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00] transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Startup Stories</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Font Size Toggle */}
            <div className="flex items-center bg-white border border-[#0B1F3A]/10 rounded-md p-0.5 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded font-mono ${
                  fontSize === 'normal' ? 'bg-[#0B1F3A] text-white font-bold' : 'text-[#171717]/60'
                }`}
                title="Normal text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded font-mono text-sm ${
                  fontSize === 'large' ? 'bg-[#0B1F3A] text-white font-bold' : 'text-[#171717]/60'
                }`}
                title="Larger text size"
              >
                A+
              </button>
            </div>

            {/* Citation Copy Button */}
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#0B1F3A] bg-white border border-[#0B1F3A]/15 hover:border-[#0B1F3A] rounded-md transition-colors"
              title="Copy academic citation"
            >
              {copiedCitation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#138A4B]" />
                  <span className="text-[#138A4B]">Copied!</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-[#0B1F3A]/70" />
                  <span className="hidden sm:inline">Cite Article</span>
                </>
              )}
            </button>

            {/* Bookmark button */}
            {onToggleBookmark && (
              <button
                onClick={() => onToggleBookmark(story.slug)}
                className={`p-1.5 rounded-md border transition-colors ${
                  isBookmarked
                    ? 'bg-[#FF7A00]/10 border-[#FF7A00] text-[#FF7A00]'
                    : 'bg-white border-[#0B1F3A]/15 text-[#171717]/70 hover:text-[#0B1F3A]'
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark this story'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#FF7A00]' : ''}`} />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Main Editorial Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header Section per Section 11 Specification */}
        <header className="mb-8">
          
          {/* CATEGORY (Unboxed uppercase kicker) */}
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase mb-3">
            {story.category} · EDITORIAL ESSAY
          </div>

          {/* BIG BLOG HEADLINE */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] leading-[1.15] tracking-tight text-balance">
            {story.title}
          </h1>

          {/* Short description */}
          <p className="mt-4 text-base sm:text-lg text-[#171717]/80 leading-relaxed font-body">
            {story.subtitle}
          </p>

          {/* Byline: Author • Published Date • Updated Date • Reading Time */}
          <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#171717]/70 font-medium">
            <div className="flex items-center gap-1.5 text-[#0B1F3A] font-semibold">
              <User className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>{story.author}</span>
              <span className="text-[#171717]/40 font-normal">({story.authorRole})</span>
            </div>

            <span aria-hidden="true">·</span>

            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#171717]/50" />
              <span>Published {story.publishedDate}</span>
            </div>

            <span aria-hidden="true">·</span>

            <div className="text-[#138A4B]">
              <span>Updated {story.updatedDate}</span>
            </div>

            <span aria-hidden="true">·</span>

            <div className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#171717]/50" />
              <span>{story.readingTime}</span>
            </div>
          </div>

        </header>

        {/* IMAGE 1 — HERO: Company/Founder (Section 12) */}
        <div className="mb-8 rounded-xl overflow-hidden border border-[#0B1F3A]/15 shadow-sm bg-white">
          <div
            className={`w-full min-h-[340px] sm:min-h-[420px] bg-gradient-to-br ${story.images.hero.fallbackGradient} p-8 flex flex-col justify-between text-white relative`}
          >
            {/* Subtle background tech matrix */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest bg-black/40 text-[#FF7A00] font-bold px-3 py-1 rounded">
                FIG. 1 · {story.images.hero.badgeText}
              </span>
              <span className="text-xs font-mono text-white/80">
                {story.quickFacts.headquarters}
              </span>
            </div>

            <div className="relative z-10 my-auto text-center py-8">
              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                {story.id.toUpperCase()}
              </div>
              <p className="font-display font-medium text-base sm:text-lg text-white/90 mt-2 max-w-lg mx-auto">
                {story.images.hero.title}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs text-white/70 border-t border-white/10 pt-3">
              <span>{story.category} Case Study</span>
              <span className="font-mono">Est. {story.quickFacts.founded}</span>
            </div>
          </div>

          {/* Mandatory Image Caption & Credit (Section 12 requirement) */}
          <div className="p-3 bg-[#F2ECE1] border-t border-[#0B1F3A]/10 text-xs text-[#171717]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span>{story.images.hero.caption}</span>
            <span className="font-mono text-[11px] text-[#0B1F3A] font-semibold shrink-0">
              Image credit: {story.images.hero.credit}
            </span>
          </div>
        </div>

        {/* QUICK FACTS BAR (Section 11 requirement) */}
        <section className="bg-white rounded-xl border border-[#0B1F3A]/15 p-6 mb-10 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#0B1F3A]/10">
            <Building className="w-4 h-4 text-[#FF7A00]" />
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0B1F3A]">
              QUICK FACTS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-xs font-body">
            <div>
              <span className="text-[#171717]/60 block font-mono text-[11px]">FOUNDED</span>
              <span className="font-semibold text-[#0B1F3A] text-sm tabular-nums">
                {story.quickFacts.founded}
              </span>
            </div>

            <div>
              <span className="text-[#171717]/60 block font-mono text-[11px]">FOUNDERS</span>
              <span className="font-semibold text-[#0B1F3A] text-sm">
                {story.quickFacts.founders}
              </span>
            </div>

            <div>
              <span className="text-[#171717]/60 block font-mono text-[11px]">HEADQUARTERS</span>
              <span className="font-semibold text-[#0B1F3A] text-sm">
                {story.quickFacts.headquarters}
              </span>
            </div>

            <div>
              <span className="text-[#171717]/60 block font-mono text-[11px]">INDUSTRY</span>
              <span className="font-semibold text-[#0B1F3A] text-sm">
                {story.quickFacts.industry}
              </span>
            </div>

            <div>
              <span className="text-[#171717]/60 block font-mono text-[11px]">BUSINESS MODEL</span>
              <span className="font-semibold text-[#0B1F3A] text-sm">
                {story.quickFacts.businessModel}
              </span>
            </div>

            <div>
              <span className="text-[#171717]/60 block font-mono text-[11px]">VALUATION / STATUS</span>
              <span className="font-semibold text-[#0B1F3A] text-sm">
                {story.quickFacts.valuationStatus}
              </span>
            </div>
          </div>
        </section>

        {/* TRUST & VERIFICATION SYSTEM BOX (Section 13 requirement) */}
        <div className="mb-10 bg-emerald-50/60 border border-[#138A4B]/30 rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-[#138A4B] animate-pulse" />
            <h3 className="font-display font-bold text-sm text-[#138A4B] uppercase tracking-wider">
              🟢 Editorial Research
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#171717]/85 leading-relaxed font-body">
            {story.editorial.note}
          </p>
          <div className="mt-2 text-[11px] font-mono text-[#138A4B]">
            Status: Fully Verified as of {story.editorial.lastVerifiedDate}
          </div>
        </div>

        {/* ARTICLE CONTENT (Structured per Section 11 & domain guidelines) */}
        <div
          className={`space-y-8 font-body leading-relaxed text-[#171717] ${
            fontSize === 'large' ? 'text-lg leading-loose' : 'text-base'
          }`}
        >
          
          {/* Introduction with drop cap */}
          <section className="space-y-4">
            {story.content.introduction.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-display first-letter:font-extrabold first-letter:text-[#0B1F3A] first-letter:float-left first-letter:mr-3 first-letter:mt-1 leading-relaxed'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* The Beginning */}
          <section className="pt-4 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              The Beginning
            </h2>
            {story.content.beginning.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>

          {/* IMAGE 2 — FOUNDER PORTRAIT (Section 12) */}
          <div className="my-8 rounded-xl overflow-hidden border border-[#0B1F3A]/15 bg-white shadow-xs">
            <div
              className={`w-full min-h-[260px] bg-gradient-to-r ${story.images.founder.fallbackGradient} p-6 sm:p-8 flex flex-col justify-between text-white relative`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono bg-black/40 text-[#FF7A00] font-bold px-2.5 py-0.5 rounded">
                  FIG. 2 · {story.images.founder.badgeText}
                </span>
                <span className="text-xs font-mono text-white/70">AUTHORIZED PORTRAIT</span>
              </div>

              <div className="relative z-10 my-4">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {story.images.founder.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-lg">
                  Key architects behind the strategic growth and operational execution of {story.id.toUpperCase()}.
                </p>
              </div>

              <div className="relative z-10 text-[11px] text-white/60 font-mono pt-2 border-t border-white/10">
                Authorized Corporate Archive Archive Photo
              </div>
            </div>

            <div className="p-3 bg-[#F2ECE1] border-t border-[#0B1F3A]/10 text-xs text-[#171717]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>{story.images.founder.caption}</span>
              <span className="font-mono text-[11px] text-[#0B1F3A] font-semibold shrink-0">
                Image credit: {story.images.founder.credit}
              </span>
            </div>
          </div>

          {/* The Problem */}
          <section className="pt-4 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              The Problem
            </h2>
            <p className="font-medium text-[#0B1F3A]">{story.content.problem.text}</p>
            <ul className="space-y-2.5 pl-2">
              {story.content.problem.painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technology & Operations */}
          <section className="pt-4 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              {story.content.technologyOperations.title}
            </h2>
            <div className="space-y-3">
              {story.content.technologyOperations.points.map((pt, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-[#0B1F3A]/10">
                  <p className="text-sm sm:text-base">{pt}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-[#F2ECE1] rounded-lg border-l-4 border-[#0B1F3A] text-xs sm:text-sm italic font-medium text-[#0B1F3A]">
              💡 <strong>Core Takeaway:</strong> {story.content.technologyOperations.takeaway}
            </div>
          </section>

          {/* Business Model */}
          <section className="pt-4 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              {story.content.businessModel.title}
            </h2>
            <div className="space-y-3">
              {story.content.businessModel.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-lg border border-[#0B1F3A]/10">
                  <span className="font-mono text-xs font-bold text-[#FF7A00] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="text-sm sm:text-base">{pt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* IMAGE 3 — PRODUCT / COMPANY / OPERATIONS (Section 12) */}
          <div className="my-8 rounded-xl overflow-hidden border border-[#0B1F3A]/15 bg-white shadow-xs">
            <div
              className={`w-full min-h-[260px] bg-gradient-to-r ${story.images.product.fallbackGradient} p-6 sm:p-8 flex flex-col justify-between text-white relative`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono bg-black/40 text-[#138A4B] font-bold px-2.5 py-0.5 rounded">
                  FIG. 3 · {story.images.product.badgeText}
                </span>
                <span className="text-xs font-mono text-white/70">PRODUCT ARCHITECTURE</span>
              </div>

              <div className="relative z-10 my-4">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {story.images.product.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-lg">
                  Visual architecture showing user workflow and operational ecosystem.
                </p>
              </div>

              <div className="relative z-10 text-[11px] text-white/60 font-mono pt-2 border-t border-white/10">
                Digital Interface & System Infrastructure
              </div>
            </div>

            <div className="p-3 bg-[#F2ECE1] border-t border-[#0B1F3A]/10 text-xs text-[#171717]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>{story.images.product.caption}</span>
              <span className="font-mono text-[11px] text-[#0B1F3A] font-semibold shrink-0">
                Image credit: {story.images.product.credit}
              </span>
            </div>
          </div>

          {/* Marketing Strategy */}
          <section className="pt-4 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              {story.content.marketingStrategy.title}
            </h2>
            <div className="space-y-3">
              {story.content.marketingStrategy.points.map((pt, idx) => (
                <p key={idx}>{pt}</p>
              ))}
            </div>
            <div className="p-4 bg-[#FF7A00]/10 rounded-lg border border-[#FF7A00]/30 text-xs sm:text-sm font-medium text-[#0B1F3A]">
              🎯 <strong>Marketing Lesson for Students:</strong> {story.content.marketingStrategy.lesson}
            </div>
          </section>

          {/* Challenges & Scaling */}
          <section className="pt-4 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              Challenges & Headwinds
            </h2>
            <ul className="space-y-2.5 pl-2">
              {story.content.challenges.map((ch, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E23744] mt-2 shrink-0" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Lessons for Students & Entrepreneurs */}
          <section className="pt-6 border-t border-[#0B1F3A]/10">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#FF7A00]" />
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
                Key Lessons for Students & Entrepreneurs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {story.content.lessons.map((lesson, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-xl border border-[#0B1F3A]/10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#FF7A00] block mb-1">
                      LESSON 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base text-[#0B1F3A]">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
                      {lesson.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Takeaway */}
          <section className="p-6 bg-[#0B1F3A] text-white rounded-xl shadow-md my-8">
            <h3 className="font-display font-bold text-lg text-[#FF7A00] uppercase tracking-wider mb-2">
              Final Editorial Takeaway
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/90 font-body">
              {story.content.finalTakeaway}
            </p>
          </section>

        </div>

        {/* SOURCES & REFERENCES (Section 13 requirement) */}
        <section className="mt-12 pt-8 border-t border-[#0B1F3A]/20 bg-white rounded-xl p-6 sm:p-8 border border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#138A4B]" />
            <h2 className="font-display font-bold text-xl text-[#0B1F3A]">
              Sources & Institutional References
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-body">
            
            {/* Primary Sources */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3 pb-1 border-b border-[#0B1F3A]/10">
                Primary Sources
              </h3>
              <ul className="space-y-2 text-[#171717]/80">
                {story.editorial.primarySources.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#138A4B] font-bold">✓</span>
                    <span>{src}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Independent Sources */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3 pb-1 border-b border-[#0B1F3A]/10">
                Independent Sources
              </h3>
              <ul className="space-y-2 text-[#171717]/80">
                {story.editorial.independentSources.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF7A00] font-bold">•</span>
                    <span>{src}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Academic Citation Box */}
          <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#171717]/60">
            <span>
              <strong>APA Citation:</strong> {story.author}. (2026). {story.title}. <em>Indian Startup Stories</em>.
            </span>
            <button
              onClick={handleCopyCitation}
              className="text-[#0B1F3A] hover:text-[#FF7A00] font-semibold underline shrink-0"
            >
              {copiedCitation ? 'Copied to Clipboard' : 'Copy Full Citation'}
            </button>
          </div>
        </section>

        {/* RELATED STORIES (Section 11 requirement) */}
        <section className="mt-12 pt-8 border-t border-[#0B1F3A]/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-extrabold text-2xl text-[#0B1F3A]">
              Related Stories
            </h2>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1"
            >
              <span>View All 10 Stories</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedStories.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectStory(rel.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-lg border border-[#0B1F3A]/10 p-4 hover:border-[#0B1F3A] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#171717]/50 mb-1">
                    <span className="font-semibold text-[#0B1F3A]">{rel.category}</span>
                    <span>{rel.readingTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-[11px] text-[#171717]/70 mt-1 line-clamp-2">
                    {rel.subtitle}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#0B1F3A]/5 text-xs font-semibold text-[#0B1F3A] group-hover:text-[#FF7A00] flex items-center gap-1">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
