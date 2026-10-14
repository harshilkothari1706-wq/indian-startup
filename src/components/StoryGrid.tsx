import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, BookOpen } from 'lucide-react';
import { STARTUP_STORIES, StartupArticle } from '../data/startups';
import { StoryCard } from './StoryCard';

interface StoryGridProps {
  onSelectStory: (slug: string) => void;
  selectedIndustryFilter?: string | null;
  onClearFilter?: () => void;
  savedSlugs?: string[];
  onToggleBookmark?: (slug: string) => void;
}

export const StoryGrid: React.FC<StoryGridProps> = ({
  onSelectStory,
  selectedIndustryFilter,
  onClearFilter,
  savedSlugs = [],
  onToggleBookmark,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'time' | 'founded'>('default');

  const categories = [
    'All',
    'FinTech',
    'FoodTech',
    'E-commerce',
    'Consumer Tech',
    'EdTech',
    'Hospitality',
  ];

  const filteredStories = useMemo(() => {
    return STARTUP_STORIES.filter((story: StartupArticle) => {
      // Category filter tab
      if (activeCategory !== 'All' && story.category !== activeCategory) {
        return false;
      }
      // Industry filter prop from other pages
      if (
        selectedIndustryFilter &&
        selectedIndustryFilter !== 'all' &&
        story.category.toLowerCase().replace(/[^a-z]/g, '') !==
          selectedIndustryFilter.toLowerCase().replace(/[^a-z]/g, '')
      ) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = story.title.toLowerCase().includes(query);
        const matchesCategory = story.category.toLowerCase().includes(query);
        const matchesFounders = story.quickFacts.founders.toLowerCase().includes(query);
        const matchesModel = story.quickFacts.businessModel.toLowerCase().includes(query);
        const matchesStartup = story.id.toLowerCase().includes(query);
        return matchesTitle || matchesCategory || matchesFounders || matchesModel || matchesStartup;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'time') {
        const timeA = parseInt(a.readingTime);
        const timeB = parseInt(b.readingTime);
        return timeA - timeB;
      }
      if (sortBy === 'founded') {
        return a.quickFacts.founded - b.quickFacts.founded;
      }
      return 0;
    });
  }, [activeCategory, selectedIndustryFilter, searchQuery, sortBy]);

  return (
    <section className="py-12 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#0B1F3A]/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-1">
              <BookOpen className="w-4 h-4 text-[#FF7A00]" />
              <span>THE 10 LAUNCH CASE STUDIES</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A]">
              Startup Stories
            </h2>
          </div>

          <div className="text-xs text-[#171717]/70 font-mono">
            Showing <strong className="text-[#0B1F3A]">{filteredStories.length}</strong> of 10 stories
          </div>
        </div>

        {/* Filter Controls Bar (Interactive tabs compliant with Frontend Constitution) */}
        <div className="bg-white p-4 rounded-xl border border-[#0B1F3A]/10 mb-8 space-y-4 shadow-xs">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#171717]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search startups, founders, business models..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F7F5F0] border border-[#0B1F3A]/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF7A00] text-[#0B1F3A] placeholder-[#171717]/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#171717]/40 hover:text-[#0B1F3A]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sorting control */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-[#171717]/60 font-mono flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Sort:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-[#F7F5F0] border border-[#0B1F3A]/10 rounded-md px-2.5 py-1.5 text-[#0B1F3A] font-medium focus:outline-none focus:ring-1 focus:ring-[#FF7A00]"
              >
                <option value="default">Default Editorial Order</option>
                <option value="time">Quickest Reads First</option>
                <option value="founded">Founding Year (Oldest to Newest)</option>
              </select>
            </div>

          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'bg-[#0B1F3A] text-white shadow-xs'
                      : 'bg-[#F7F5F0] text-[#171717]/70 hover:text-[#0B1F3A] hover:bg-[#0B1F3A]/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}

            {selectedIndustryFilter && onClearFilter && (
              <button
                onClick={onClearFilter}
                className="ml-auto text-xs text-[#FF7A00] hover:underline font-semibold"
              >
                Clear Sector Filter
              </button>
            )}
          </div>

        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onSelectStory={onSelectStory}
                isBookmarked={savedSlugs.includes(story.slug)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-[#0B1F3A]/10 max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-[#FF7A00] mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-[#0B1F3A]">
              No stories match your criteria
            </h3>
            <p className="mt-1 text-xs text-[#171717]/70 font-body">
              Try adjusting your search terms or selecting "All" categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                if (onClearFilter) onClearFilter();
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#0B1F3A] rounded-lg hover:bg-[#1E3A8A]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
