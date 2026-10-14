import React, { useState } from 'react';
import { Search, Menu, X, Bookmark, Compass } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  savedCount?: number;
  onOpenSaved?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  savedCount = 0,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { path: string; label: string; anchorTitle: string }[] = [
    { path: '/', label: 'HOME', anchorTitle: 'Indian Startup Stories Homepage' },
    { path: '/startup-stories', label: 'STARTUP STORIES', anchorTitle: 'Browse 10 Verified Startup Case Studies' },
    { path: '/founders', label: 'FOUNDERS', anchorTitle: 'Meet Indian Startup Founders and Leadership' },
    { path: '/industries', label: 'INDUSTRIES', anchorTitle: 'Explore Startup Sectors and Industries' },
    { path: '/marketing', label: 'MARKETING', anchorTitle: 'Startup Marketing Strategies and Playbooks' },
    { path: '/funding', label: 'FUNDING', anchorTitle: 'Verified Indian Startup Funding Tracker' },
    { path: '/failure-stories', label: 'FAILURE STORIES', anchorTitle: 'Startup Lessons From Failure Postmortems' },
    { path: '/about', label: 'ABOUT', anchorTitle: 'About Us and Editorial Verification Policy' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#0B1F3A]/10 transition-all">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark as semantic anchor */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            title="Indian Startup Stories Homepage"
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded-sm"
          >
            <div className="w-8 h-8 rounded bg-[#0B1F3A] flex items-center justify-center shadow-xs group-hover:bg-[#1E3A8A] transition-colors">
              <span className="text-[#FF7A00] font-bold text-base font-display">IS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg lg:text-xl text-[#0B1F3A] tracking-tight leading-none whitespace-nowrap">
                INDIAN STARTUP STORIES
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#0B1F3A]/70 font-medium mt-0.5">
                Real Founders · Real Journeys
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: Navigation Links (Semantic anchors with rich anchor text) */}
        <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-wider text-[#0B1F3A]/80">
          {navItems.map((item) => {
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
            return (
              <a
                key={item.path}
                href={item.path}
                title={item.anchorTitle}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`transition-colors whitespace-nowrap py-1 relative hover:text-[#0B1F3A] focus:outline-none ${
                  isActive ? 'text-[#0B1F3A] font-bold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Search & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#0B1F3A]/80 hover:text-[#0B1F3A] bg-white border border-[#0B1F3A]/15 rounded-md hover:border-[#FF7A00] transition-colors focus:outline-none focus:ring-1 focus:ring-[#FF7A00]"
            title="Search startups, founders, industries (Ctrl+K)"
            aria-label="Open search dialog"
          >
            <Search className="w-3.5 h-3.5 text-[#0B1F3A]/70" />
            <span className="hidden sm:inline text-xs text-[#171717]/60">Search Database</span>
            <kbd className="hidden md:inline text-[10px] font-mono text-[#0B1F3A]/50 bg-[#F7F5F0] px-1.5 py-0.5 rounded border border-[#0B1F3A]/10">
              ⌘K
            </kbd>
          </button>

          {/* Bookmarks Counter */}
          {onOpenSaved && savedCount > 0 && (
            <button
              onClick={onOpenSaved}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#0B1F3A] hover:bg-[#0B1F3A]/5 rounded-md transition-colors"
              title="Saved reading list bookmarks"
              aria-label={`View ${savedCount} saved bookmarked stories`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-[#FF7A00] text-[#FF7A00]" />
              <span className="font-mono text-xs font-semibold">{savedCount}</span>
            </button>
          )}

          {/* Primary Action Button */}
          <a
            href="/startup-stories"
            onClick={(e) => handleLinkClick(e, '/startup-stories')}
            title="Explore All Indian Startup Stories"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white bg-[#0B1F3A] hover:bg-[#1E3A8A] rounded-md transition-colors whitespace-nowrap shadow-xs"
          >
            <Compass className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>EXPLORE STORIES</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#0B1F3A] hover:bg-[#0B1F3A]/5 rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#0B1F3A]/10 bg-[#F7F5F0] px-4 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                title={item.anchorTitle}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`text-left px-3 py-2 text-xs font-semibold rounded-md tracking-wider transition-colors ${
                  currentPath === item.path
                    ? 'bg-[#0B1F3A] text-white'
                    : 'text-[#0B1F3A] hover:bg-[#0B1F3A]/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
