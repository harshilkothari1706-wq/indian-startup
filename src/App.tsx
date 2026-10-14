/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, ActiveTab } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedStory } from './components/FeaturedStory';
import { StartupStats } from './components/StartupStats';
import { ExploreIndustries } from './components/ExploreIndustries';
import { StoryGrid } from './components/StoryGrid';
import { FounderDirectory } from './components/FounderDirectory';
import { ArticleView } from './components/ArticleView';
import { MarketingPage } from './components/MarketingPage';
import { FundingPage } from './components/FundingPage';
import { FailureStoriesPage } from './components/FailureStoriesPage';
import { AboutPage } from './components/AboutPage';
import { SearchModal } from './components/SearchModal';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { STARTUP_STORIES, StartupArticle } from './data/startups';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [activeStorySlug, setActiveStorySlug] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('iss_bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('iss_bookmarks', JSON.stringify(savedSlugs));
    } catch {
      // ignore
    }
  }, [savedSlugs]);

  // Handle global keyboard shortcut for Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleBookmark = (slug: string) => {
    setSavedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const handleSelectStory = (slug: string) => {
    setActiveStorySlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromStory = () => {
    setActiveStorySlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectIndustry = (industryId: string) => {
    setIndustryFilter(industryId);
    setActiveTab('stories');
    setActiveStorySlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentStory: StartupArticle | undefined = activeStorySlug
    ? STARTUP_STORIES.find((s) => s.slug === activeStorySlug)
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717] selection:bg-[#FF7A00]/20 selection:text-[#0B1F3A]">
      
      {/* Top Header Contract */}
      <Header
        activeTab={activeStorySlug ? 'stories' : activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setActiveStorySlug(null);
        }}
        onOpenSearch={() => setSearchModalOpen(true)}
        savedCount={savedSlugs.length}
        onOpenSaved={() => {
          setActiveTab('stories');
          setActiveStorySlug(null);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* If viewing a single story, render ArticleView */}
        {activeStorySlug && currentStory ? (
          <ArticleView
            story={currentStory}
            onBack={handleBackFromStory}
            onSelectStory={handleSelectStory}
            isBookmarked={savedSlugs.includes(currentStory.slug)}
            onToggleBookmark={toggleBookmark}
          />
        ) : (
          <>
            {/* View Switching based on activeTab */}
            {activeTab === 'home' && (
              <>
                {/* 1. Hero Section */}
                <Hero
                  onExploreStories={() => {
                    setActiveTab('stories');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onMeetFounders={() => {
                    setActiveTab('founders');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onSelectStory={handleSelectStory}
                />

                {/* 2. Featured Story (Zerodha) */}
                <FeaturedStory onSelectStory={handleSelectStory} />

                {/* 3. 10 Startup Stories Grid */}
                <StoryGrid
                  onSelectStory={handleSelectStory}
                  savedSlugs={savedSlugs}
                  onToggleBookmark={toggleBookmark}
                />

                {/* 4. Explore Industries (8 visual category cards) */}
                <ExploreIndustries onSelectIndustry={handleSelectIndustry} />

                {/* 5. Meet the Founders */}
                <FounderDirectory onSelectStory={handleSelectStory} />

                {/* 6. India's Startup Ecosystem (Visual Statistics) */}
                <StartupStats />
              </>
            )}

            {activeTab === 'stories' && (
              <StoryGrid
                onSelectStory={handleSelectStory}
                selectedIndustryFilter={industryFilter}
                onClearFilter={() => setIndustryFilter(null)}
                savedSlugs={savedSlugs}
                onToggleBookmark={toggleBookmark}
              />
            )}

            {activeTab === 'founders' && (
              <FounderDirectory onSelectStory={handleSelectStory} />
            )}

            {activeTab === 'industries' && (
              <div className="py-6">
                <ExploreIndustries onSelectIndustry={handleSelectIndustry} />
                <StoryGrid
                  onSelectStory={handleSelectStory}
                  selectedIndustryFilter={industryFilter}
                  onClearFilter={() => setIndustryFilter(null)}
                  savedSlugs={savedSlugs}
                  onToggleBookmark={toggleBookmark}
                />
              </div>
            )}

            {activeTab === 'marketing' && (
              <MarketingPage onSelectStory={handleSelectStory} />
            )}

            {activeTab === 'funding' && (
              <FundingPage onSelectStory={handleSelectStory} />
            )}

            {activeTab === 'failures' && (
              <FailureStoriesPage />
            )}

            {activeTab === 'about' && (
              <AboutPage />
            )}
          </>
        )}

        {/* Global Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Global Footer */}
      <Footer
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setActiveStorySlug(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectStory={handleSelectStory}
      />

      {/* Interactive Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectStory={handleSelectStory}
        onSelectIndustry={handleSelectIndustry}
      />

    </div>
  );
}
