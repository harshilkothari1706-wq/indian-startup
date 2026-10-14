/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
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
import { SEOHead } from './components/SEOHead';
import { STARTUP_STORIES, StartupArticle } from './data/startups';

export default function App() {
  // Normalize current pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('iss_bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Listen to browser Back/Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('iss_bookmarks', JSON.stringify(savedSlugs));
    } catch {
      // ignore
    }
  }, [savedSlugs]);

  // Global keyboard shortcut for Search (Cmd+K / Ctrl+K)
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

  // Primary Navigation Dispatcher (updates URL via pushState)
  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmark = (slug: string) => {
    setSavedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  // Determine active view based on currentPath
  let activeStory: StartupArticle | undefined = undefined;
  let selectedIndustry: string | null = null;

  if (currentPath.startsWith('/startup-stories/')) {
    const slug = currentPath.replace('/startup-stories/', '').split('?')[0].split('/')[0];
    activeStory = STARTUP_STORIES.find((s) => s.slug === slug);
  }

  // Parse industry filter from search params if present
  try {
    const params = new URLSearchParams(window.location.search);
    selectedIndustry = params.get('industry');
  } catch {
    selectedIndustry = null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717] selection:bg-[#FF7A00]/20 selection:text-[#0B1F3A]">
      
      {/* Dynamic SEO Head Manager (Title, Meta Description, Keywords, OpenGraph, JSON-LD) */}
      <SEOHead currentPath={currentPath} />

      {/* Top Header Contract */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchModalOpen(true)}
        savedCount={savedSlugs.length}
        onOpenSaved={() => navigateTo('/startup-stories')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* If route matches /startup-stories/:slug and story exists */}
        {activeStory ? (
          <ArticleView
            story={activeStory}
            onNavigate={navigateTo}
            isBookmarked={savedSlugs.includes(activeStory.slug)}
            onToggleBookmark={toggleBookmark}
          />
        ) : currentPath === '/startup-stories' ? (
          <StoryGrid
            onNavigate={navigateTo}
            selectedIndustryFilter={selectedIndustry}
            onClearFilter={() => navigateTo('/startup-stories')}
            savedSlugs={savedSlugs}
            onToggleBookmark={toggleBookmark}
          />
        ) : currentPath === '/founders' ? (
          <FounderDirectory onNavigate={navigateTo} />
        ) : currentPath === '/industries' ? (
          <div className="py-6">
            <ExploreIndustries onNavigate={navigateTo} />
            <StoryGrid
              onNavigate={navigateTo}
              selectedIndustryFilter={selectedIndustry}
              onClearFilter={() => navigateTo('/industries')}
              savedSlugs={savedSlugs}
              onToggleBookmark={toggleBookmark}
            />
          </div>
        ) : currentPath === '/marketing' ? (
          <MarketingPage onNavigate={navigateTo} />
        ) : currentPath === '/funding' ? (
          <FundingPage onNavigate={navigateTo} />
        ) : currentPath === '/failure-stories' ? (
          <FailureStoriesPage />
        ) : currentPath === '/about' ? (
          <AboutPage />
        ) : (
          /* Default: Home Page (/) */
          <>
            {/* 1. Hero Section */}
            <Hero onNavigate={navigateTo} />

            {/* 2. Featured Story (Zerodha) */}
            <FeaturedStory onNavigate={navigateTo} />

            {/* 3. 10 Startup Stories Grid */}
            <StoryGrid
              onNavigate={navigateTo}
              savedSlugs={savedSlugs}
              onToggleBookmark={toggleBookmark}
            />

            {/* 4. Explore Industries (8 visual category cards) */}
            <ExploreIndustries onNavigate={navigateTo} />

            {/* 5. Meet the Founders */}
            <FounderDirectory onNavigate={navigateTo} />

            {/* 6. India's Startup Ecosystem (Visual Statistics) */}
            <StartupStats />
          </>
        )}

        {/* Global Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Global Footer with Semantic Anchor Links */}
      <Footer onNavigate={navigateTo} />

      {/* Global Instant Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={navigateTo}
      />

    </div>
  );
}
