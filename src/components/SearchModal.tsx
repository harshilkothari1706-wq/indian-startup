import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, ArrowRight, User, Layers, FileText } from 'lucide-react';
import { STARTUP_STORIES } from '../data/startups';
import { FOUNDERS } from '../data/founders';
import { INDUSTRIES } from '../data/industries';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase().trim();

    const matchedStories = STARTUP_STORIES.filter(
      (s) =>
        s.id.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.quickFacts.founders.toLowerCase().includes(q) ||
        s.seo.keywords.some((k) => k.toLowerCase().includes(q))
    );

    const matchedFounders = FOUNDERS.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.startup.toLowerCase().includes(q) ||
        f.originCity.toLowerCase().includes(q) ||
        f.education.toLowerCase().includes(q)
    );

    const matchedIndustries = INDUSTRIES.filter(
      (ind) =>
        ind.name.toLowerCase().includes(q) ||
        ind.startups.some((st) => st.toLowerCase().includes(q)) ||
        ind.description.toLowerCase().includes(q)
    );

    return {
      stories: matchedStories,
      founders: matchedFounders,
      industries: matchedIndustries,
      totalCount: matchedStories.length + matchedFounders.length + matchedIndustries.length,
    };
  }, [query]);

  const handleResultClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#0B1F3A]/70 backdrop-blur-xs animate-in fade-in duration-150">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#0B1F3A]/20 overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        
        {/* Search Bar Input */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#0B1F3A]/10 bg-[#F7F5F0]">
          <Search className="w-5 h-5 text-[#0B1F3A]/60 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search startups, founders, industries, keywords (e.g. FinTech, Zerodha, Falguni)..."
            className="w-full bg-transparent text-sm sm:text-base text-[#0B1F3A] placeholder-[#171717]/40 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#171717]/40 hover:text-[#0B1F3A] mr-1"
              aria-label="Clear query text"
            >
              ✕
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#171717]/50 hover:text-[#0B1F3A] hover:bg-black/5"
            aria-label="Close search dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Body Content */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          
          {!query.trim() && (
            <div className="py-8 text-center text-xs text-[#171717]/60">
              <p className="font-semibold text-[#0B1F3A] text-sm mb-1">
                Explore India's Startup Database
              </p>
              <p className="max-w-xs mx-auto">
                Search by company name (e.g., Zerodha, boAt), founder (Deepinder, Kunal), or sector (FinTech, FoodTech).
              </p>
              
              {/* Quick Suggestions */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                {['FinTech', 'Zerodha', 'Zomato', 'Falguni Nayar', 'D2C', 'Physics Wallah'].map((suggest) => (
                  <button
                    key={suggest}
                    onClick={() => setQuery(suggest)}
                    className="px-2.5 py-1 text-xs bg-[#F7F5F0] hover:bg-[#0B1F3A] hover:text-white rounded-md text-[#0B1F3A] transition-colors border border-[#0B1F3A]/10"
                  >
                    {suggest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.totalCount === 0 && (
            <div className="py-8 text-center text-xs text-[#171717]/60">
              <p className="font-bold text-[#0B1F3A] text-sm">No matches found for "{query}"</p>
              <p className="mt-1">Try checking for spelling errors or searching by broad sector.</p>
            </div>
          )}

          {/* Results: Startup Stories */}
          {results && results.stories.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A00] mb-2 px-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Startup Case Studies ({results.stories.length})</span>
              </div>
              <div className="space-y-1.5">
                {results.stories.map((story) => {
                  const path = `/startup-stories/${story.slug}`;
                  return (
                    <a
                      key={story.id}
                      href={path}
                      onClick={(e) => handleResultClick(e, path)}
                      title={`Read full ${story.title} case study`}
                      className="p-3 rounded-lg hover:bg-[#F7F5F0] cursor-pointer flex items-center justify-between group transition-colors border border-transparent hover:border-[#0B1F3A]/10 block"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-[#171717]/60">
                          <span className="font-semibold text-[#0B1F3A]">{story.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{story.readingTime}</span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                          {story.title}
                        </h4>
                        <p className="text-xs text-[#171717]/70 line-clamp-1">
                          Founders: {story.quickFacts.founders}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#0B1F3A] group-hover:text-[#FF7A00] shrink-0 ml-2" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Results: Founders */}
          {results && results.founders.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 px-1">
                <User className="w-3.5 h-3.5 text-[#138A4B]" />
                <span>Founders ({results.founders.length})</span>
              </div>
              <div className="space-y-1.5">
                {results.founders.map((founder) => {
                  const path = `/startup-stories/${founder.startupSlug}`;
                  return (
                    <a
                      key={founder.id}
                      href={path}
                      onClick={(e) => handleResultClick(e, path)}
                      title={`Read ${founder.name}'s story at ${founder.startup}`}
                      className="p-3 rounded-lg hover:bg-[#F7F5F0] cursor-pointer flex items-center justify-between group transition-colors border border-transparent hover:border-[#0B1F3A]/10 block"
                    >
                      <div>
                        <h4 className="font-display font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                          {founder.name}
                        </h4>
                        <p className="text-xs text-[#171717]/70">
                          {founder.role} at {founder.startup} · {founder.education}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-[#0B1F3A] group-hover:text-[#FF7A00] flex items-center gap-1">
                        <span>View {founder.startup} Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Results: Industries */}
          {results && results.industries.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 px-1">
                <Layers className="w-3.5 h-3.5 text-[#0B1F3A]" />
                <span>Industries ({results.industries.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {results.industries.map((ind) => {
                  const path = `/startup-stories?industry=${ind.id}`;
                  return (
                    <a
                      key={ind.id}
                      href={path}
                      onClick={(e) => handleResultClick(e, path)}
                      title={`View all ${ind.name} startup case studies`}
                      className="p-3 bg-[#F7F5F0] rounded-lg hover:bg-[#0B1F3A] hover:text-white cursor-pointer group transition-all block"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{ind.emoji}</span>
                        <span className="font-display font-bold text-sm group-hover:text-white">
                          {ind.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#171717]/70 group-hover:text-white/80 mt-1 line-clamp-1">
                        {ind.startups.join(', ')}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#F7F5F0] border-t border-[#0B1F3A]/10 flex items-center justify-between text-[11px] text-[#171717]/60">
          <span>Press ESC to close</span>
          <span>Verified Editorial Search Engine</span>
        </div>

      </div>
    </div>
  );
};
