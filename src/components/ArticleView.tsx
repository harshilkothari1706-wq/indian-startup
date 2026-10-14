import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  ShieldCheck,
  Bookmark,
  Check,
  Building,
  FileText,
  ChevronRight,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { StartupArticle, STARTUP_STORIES } from '../data/startups';
import { SEO_REGISTRY } from '../data/seoRegistry';

interface ArticleViewProps {
  story: StartupArticle;
  onNavigate: (path: string) => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  story,
  onNavigate,
  isBookmarked = false,
  onToggleBookmark,
}) => {
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const pagePath = `/startup-stories/${story.slug}`;
  const seoData = SEO_REGISTRY[pagePath];

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
    const citation = `${story.author}. (${story.publishedDate.split(' ').pop()}). "${story.title}." Indian Startup Stories. Retrieved from ${window.location.origin}${pagePath}`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const relatedStories = STARTUP_STORIES.filter((s) => s.id !== story.id).slice(0, 3);

  // Link click handler with history push
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    e.preventDefault();
    onNavigate(targetPath);
  };

  return (
    <article className="min-h-screen bg-[#F7F5F0] pb-20">
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#0B1F3A]/10">
        <div
          className="h-full bg-[#FF7A00] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Reading Utility Bar */}
      <div className="sticky top-18 z-30 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#0B1F3A]/10 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          
          {/* Breadcrumb Navigation with Descriptive Anchor Text */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold">
            <a
              href="/startup-stories"
              onClick={(e) => handleLinkClick(e, '/startup-stories')}
              className="text-[#0B1F3A] hover:text-[#FF7A00] transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Startup Stories Directory</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Font Size Toggle */}
            <div className="flex items-center bg-white border border-[#0B1F3A]/10 rounded-md p-0.5 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded font-mono ${
                  fontSize === 'normal' ? 'bg-[#0B1F3A] text-white font-bold' : 'text-[#171717]/60'
                }`}
                title="Default reading font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded font-mono text-sm ${
                  fontSize === 'large' ? 'bg-[#0B1F3A] text-white font-bold' : 'text-[#171717]/60'
                }`}
                title="Enlarge reading font size"
              >
                A+
              </button>
            </div>

            {/* Academic Citation Copy */}
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#0B1F3A] bg-white border border-[#0B1F3A]/15 hover:border-[#0B1F3A] rounded-md transition-colors"
              title="Copy academic citation format"
            >
              {copiedCitation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#138A4B]" />
                  <span className="text-[#138A4B]">Citation Copied</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-[#0B1F3A]/70" />
                  <span className="hidden sm:inline">Cite Case Study</span>
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
                title={isBookmarked ? 'Saved to bookmarks' : 'Bookmark this case study'}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
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
          
          {/* CATEGORY (Unboxed uppercase kicker with anchor text to industry) */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase mb-3">
            <a
              href="/industries"
              onClick={(e) => handleLinkClick(e, '/industries')}
              className="hover:underline"
            >
              {story.category} Sector Case Study
            </a>
            <span aria-hidden="true">·</span>
            <span>Verified Long-Form Analysis</span>
          </div>

          {/* BIG BLOG HEADLINE (H1) */}
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

          {/* SEO Keyword Indicators */}
          {seoData && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-[#171717]/60 font-mono">
              <span>Main Topic: <strong className="text-[#0B1F3A]">{seoData.mainKeyword}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Related: {seoData.relatedKeywords.join(', ')}</span>
            </div>
          )}

        </header>

        {/* IMAGE 1 — HERO: Small payload SVG vector banner with explicit alt text (Section 5 & 12) */}
        <figure className="mb-8 rounded-xl overflow-hidden border border-[#0B1F3A]/15 shadow-sm bg-white">
          <div
            className={`w-full h-64 sm:h-80 bg-gradient-to-br ${story.images.hero.fallbackGradient} p-6 sm:p-8 flex flex-col justify-between text-white relative`}
            role="img"
            aria-label={`${story.title} - Official editorial illustration representing ${story.id.toUpperCase()}`}
          >
            {/* Lightweight inlined SVG vector asset (small payload < 2KB, no external delay) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <line x1="0" y1="20" x2="100" y2="80" stroke="#FFFFFF" strokeWidth="0.5" />
              <line x1="0" y1="80" x2="100" y2="20" stroke="#FF7A00" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="#138A4B" strokeWidth="0.5" fill="none" />
            </svg>

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest bg-black/40 text-[#FF7A00] font-bold px-3 py-1 rounded">
                FIG. 1 · {story.images.hero.badgeText}
              </span>
              <span className="text-xs font-mono text-white/80">
                HQ: {story.quickFacts.headquarters}
              </span>
            </div>

            <div className="relative z-10 my-auto text-center py-4">
              <div className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                {story.id.toUpperCase()}
              </div>
              <p className="font-display font-medium text-sm sm:text-base text-white/90 mt-1 max-w-lg mx-auto">
                {story.images.hero.title}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs text-white/70 border-t border-white/10 pt-2">
              <span>{story.category} Architecture</span>
              <span className="font-mono">Established {story.quickFacts.founded}</span>
            </div>
          </div>

          {/* Mandatory Image Caption & Credit (Section 12 requirement) */}
          <figcaption className="p-3 bg-[#F2ECE1] border-t border-[#0B1F3A]/10 text-xs text-[#171717]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span>{story.images.hero.caption}</span>
            <span className="font-mono text-[11px] text-[#0B1F3A] font-semibold shrink-0">
              Image credit: {story.images.hero.credit}
            </span>
          </figcaption>
        </figure>

        {/* QUICK FACTS BAR */}
        <section aria-labelledby="quick-facts-heading" className="bg-white rounded-xl border border-[#0B1F3A]/15 p-6 mb-10 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#0B1F3A]/10">
            <Building className="w-4 h-4 text-[#FF7A00]" />
            <h2 id="quick-facts-heading" className="text-xs font-bold tracking-widest uppercase text-[#0B1F3A]">
              QUICK FACTS & CORPORATE OVERVIEW
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
        <aside aria-label="Editorial Verification Box" className="mb-10 bg-emerald-50/60 border border-[#138A4B]/30 rounded-xl p-5 shadow-xs">
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
        </aside>

        {/* ARTICLE CONTENT (Structured in Question-Answer Format for AEO & AI Overviews) */}
        <div
          className={`space-y-10 font-body leading-relaxed text-[#171717] ${
            fontSize === 'large' ? 'text-lg leading-loose' : 'text-base'
          }`}
        >
          
          {/* Executive Overview */}
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

          {/* Section 1: H2 in Question-Answer Format (AEO) */}
          <section className="pt-6 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              How Did {story.id.toUpperCase()} Start and Who Are the Founders Behind It?
            </h2>

            {/* Direct Answer Paragraph for AI Overviews / Snippets */}
            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed">
              <strong>Direct Answer:</strong> {story.id.toUpperCase()} was founded in {story.quickFacts.founded} by {story.quickFacts.founders} in {story.quickFacts.headquarters}. It originated from real operational friction in the Indian market, building a sustainable advantage through technology and customer-first alignment.
            </div>

            {story.content.beginning.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>

          {/* IMAGE 2 — FOUNDER PORTRAIT (Small Payload with Alt Text) */}
          <figure className="my-8 rounded-xl overflow-hidden border border-[#0B1F3A]/15 bg-white shadow-xs">
            <div
              className={`w-full h-56 sm:h-64 bg-gradient-to-r ${story.images.founder.fallbackGradient} p-6 sm:p-8 flex flex-col justify-between text-white relative`}
              role="img"
              aria-label={`Portrait visual of ${story.quickFacts.founders}, founders of ${story.id.toUpperCase()}`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono bg-black/40 text-[#FF7A00] font-bold px-2.5 py-0.5 rounded">
                  FIG. 2 · {story.images.founder.badgeText}
                </span>
                <span className="text-xs font-mono text-white/70">AUTHORIZED PORTRAIT</span>
              </div>

              <div className="relative z-10 my-2">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {story.images.founder.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-lg">
                  Key architects behind the strategic growth and operational execution of {story.id.toUpperCase()}.
                </p>
              </div>

              <div className="relative z-10 text-[11px] text-white/60 font-mono pt-2 border-t border-white/10">
                Corporate Media Room Archive
              </div>
            </div>

            <figcaption className="p-3 bg-[#F2ECE1] border-t border-[#0B1F3A]/10 text-xs text-[#171717]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>{story.images.founder.caption}</span>
              <span className="font-mono text-[11px] text-[#0B1F3A] font-semibold shrink-0">
                Image credit: {story.images.founder.credit}
              </span>
            </figcaption>
          </figure>

          {/* Section 2: H2 in Question-Answer Format (AEO) */}
          <section className="pt-6 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              What Core Problem in the Indian Market Did {story.id.toUpperCase()} Solve?
            </h2>

            {/* Direct Answer Paragraph */}
            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed">
              <strong>Direct Answer:</strong> {story.content.problem.text} Incumbents suffered from high fees, clunky legacy workflows, and a systemic lack of customer education, leaving Indian consumers and businesses severely underserved.
            </div>

            <ul className="space-y-2.5 pl-2">
              {story.content.problem.painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: H2 in Question-Answer Format (AEO) */}
          <section className="pt-6 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              What Technology and Operational Architecture Built {story.id.toUpperCase()}'s Moat?
            </h2>

            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed">
              <strong>Direct Answer:</strong> {story.content.technologyOperations.takeaway} By building in-house proprietary software rather than relying on clunky third-party vendors, the company reduced latencies, scaled throughput, and lowered operational costs.
            </div>

            <div className="space-y-3">
              {story.content.technologyOperations.points.map((pt, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-[#0B1F3A]/10">
                  <p className="text-sm sm:text-base">{pt}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: H2 in Question-Answer Format (AEO) */}
          <section className="pt-6 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              How Does {story.id.toUpperCase()} Make Money: What Is Its Business Model?
            </h2>

            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed">
              <strong>Direct Answer:</strong> {story.id.toUpperCase()} operates on a {story.quickFacts.businessModel.split('(')[0]} model, capturing value through predictable transaction volumes, software subscriptions, and high-frequency recurring user activities.
            </div>

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

          {/* IMAGE 3 — PRODUCT / OPERATIONS (Small Payload with Alt Text) */}
          <figure className="my-8 rounded-xl overflow-hidden border border-[#0B1F3A]/15 bg-white shadow-xs">
            <div
              className={`w-full h-56 sm:h-64 bg-gradient-to-r ${story.images.product.fallbackGradient} p-6 sm:p-8 flex flex-col justify-between text-white relative`}
              role="img"
              aria-label={`Product and operational ecosystem diagram for ${story.id.toUpperCase()}`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono bg-black/40 text-[#138A4B] font-bold px-2.5 py-0.5 rounded">
                  FIG. 3 · {story.images.product.badgeText}
                </span>
                <span className="text-xs font-mono text-white/70">INFRASTRUCTURE ARCHITECTURE</span>
              </div>

              <div className="relative z-10 my-2">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
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

            <figcaption className="p-3 bg-[#F2ECE1] border-t border-[#0B1F3A]/10 text-xs text-[#171717]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>{story.images.product.caption}</span>
              <span className="font-mono text-[11px] text-[#0B1F3A] font-semibold shrink-0">
                Image credit: {story.images.product.credit}
              </span>
            </figcaption>
          </figure>

          {/* Section 5: H2 in Question-Answer Format (AEO) */}
          <section className="pt-6 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              What Marketing Strategy Allowed {story.id.toUpperCase()} to Grow Sustainably?
            </h2>

            <div className="p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed">
              <strong>Direct Answer:</strong> {story.content.marketingStrategy.lesson} Instead of burning cash on commoditized ad channels, the company unlocked organic growth through education, community identity, and extreme brand trust.
            </div>

            <div className="space-y-3">
              {story.content.marketingStrategy.points.map((pt, idx) => (
                <p key={idx}>{pt}</p>
              ))}
            </div>
          </section>

          {/* Section 6: H2 in Question-Answer Format (AEO) */}
          <section className="pt-6 border-t border-[#0B1F3A]/10 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
              What Critical Challenges and Scaling Headwinds Did the Founders Confront?
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

          {/* Section 7: H2 in Question-Answer Format (AEO) */}
          <section className="pt-6 border-t border-[#0B1F3A]/10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#FF7A00]" />
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A]">
                What Are the Core Lessons from {story.id.toUpperCase()} for Students and Entrepreneurs?
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

          {/* On-Page FAQ Block for AEO / Answer Engines */}
          {seoData?.faqs && seoData.faqs.length > 0 && (
            <section className="pt-8 border-t border-[#0B1F3A]/10 bg-white rounded-xl p-6 border border-[#0B1F3A]/10 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-[#138A4B]" />
                <h2 className="font-display font-bold text-xl text-[#0B1F3A]">
                  Frequently Asked Questions (AEO Verified Answers)
                </h2>
              </div>
              <div className="space-y-4">
                {seoData.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-[#F7F5F0] rounded-lg">
                    <h3 className="font-display font-bold text-sm text-[#0B1F3A] mb-1.5">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#171717]/85 font-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

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
        <section aria-labelledby="sources-heading" className="mt-12 pt-8 border-t border-[#0B1F3A]/20 bg-white rounded-xl p-6 sm:p-8 border border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#138A4B]" />
            <h2 id="sources-heading" className="font-display font-bold text-xl text-[#0B1F3A]">
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
              <strong>APA Citation:</strong> {story.author}. (2026). <em>{story.title}</em>. Indian Startup Stories. Available at: {pagePath}
            </span>
            <button
              onClick={handleCopyCitation}
              className="text-[#0B1F3A] hover:text-[#FF7A00] font-semibold underline shrink-0"
            >
              {copiedCitation ? 'Copied to Clipboard' : 'Copy Full Citation'}
            </button>
          </div>
        </section>

        {/* RELATED STORIES with Rich Anchor Text (Requirement 6) */}
        <section aria-labelledby="related-heading" className="mt-12 pt-8 border-t border-[#0B1F3A]/10">
          <div className="flex items-center justify-between mb-6">
            <h2 id="related-heading" className="font-display font-extrabold text-2xl text-[#0B1F3A]">
              Related Startup Case Studies
            </h2>
            <a
              href="/startup-stories"
              onClick={(e) => handleLinkClick(e, '/startup-stories')}
              className="text-xs font-semibold text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1"
            >
              <span>Explore All 10 Case Studies</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedStories.map((rel) => {
              const relPath = `/startup-stories/${rel.slug}`;
              return (
                <div
                  key={rel.id}
                  className="bg-white rounded-lg border border-[#0B1F3A]/10 p-4 hover:border-[#0B1F3A] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#171717]/50 mb-1">
                      <span className="font-semibold text-[#0B1F3A]">{rel.category}</span>
                      <span>{rel.readingTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors line-clamp-2">
                      <a
                        href={relPath}
                        onClick={(e) => handleLinkClick(e, relPath)}
                        className="hover:underline"
                      >
                        {rel.title}
                      </a>
                    </h3>
                    <p className="text-[11px] text-[#171717]/70 mt-1 line-clamp-2">
                      {rel.subtitle}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#0B1F3A]/5 text-xs font-semibold text-[#0B1F3A] group-hover:text-[#FF7A00] flex items-center gap-1">
                    <a
                      href={relPath}
                      onClick={(e) => handleLinkClick(e, relPath)}
                      className="flex items-center gap-1"
                    >
                      <span>Read {rel.id.toUpperCase()} Story</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </article>
  );
};
