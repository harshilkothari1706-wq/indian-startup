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
import { FounderDetailView } from './components/FounderDetailView';
import { IndustryDetailView } from './components/IndustryDetailView';
import { MarketingDetailView } from './components/MarketingDetailView';
import { FailureDetailView } from './components/FailureDetailView';
import { MarketingPage } from './components/MarketingPage';
import { FundingPage } from './components/FundingPage';
import { FailureStoriesPage } from './components/FailureStoriesPage';
import { AboutPage } from './components/AboutPage';
import { SearchModal } from './components/SearchModal';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { SEOKeywordInspector } from './components/SEOKeywordInspector';
import { STARTUP_STORIES, StartupArticle } from './data/startups';
import { FOUNDERS, FounderProfile } from './data/founders';
import { INDUSTRIES, Industry } from './data/industries';
import { MARKETING_STORIES, MarketingCaseStudy } from './data/marketingStories';
import { FAILURE_STORIES, FailureCaseStudy } from './data/failureStories';

export default function App() {
  // Normalize current pathname from browser address bar or hash
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

  // Primary Navigation Dispatcher (updates URL bar via pushState)
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

  // Route Resolution
  let activeStory: StartupArticle | undefined = undefined;
  let activeFounder: FounderProfile | undefined = undefined;
  let activeIndustry: Industry | undefined = undefined;
  let activeMarketingCase: MarketingCaseStudy | undefined = undefined;
  let activeFailureStudy: FailureCaseStudy | undefined = undefined;

  // 1. /startup-stories/:slug
  if (currentPath.startsWith('/startup-stories/')) {
    const slug = currentPath.replace('/startup-stories/', '').split('?')[0].split('/')[0];
    activeStory = STARTUP_STORIES.find((s) => s.slug === slug);
  }

  // 2. /founders/:id
  if (currentPath.startsWith('/founders/')) {
    const id = currentPath.replace('/founders/', '').split('?')[0].split('/')[0];
    activeFounder = FOUNDERS.find((f) => f.id === id);
  }

  // 3. /industries/:id
  if (currentPath.startsWith('/industries/')) {
    const id = currentPath.replace('/industries/', '').split('?')[0].split('/')[0];
    activeIndustry = INDUSTRIES.find((ind) => ind.id === id);
  }

  // 4. /marketing/:id
  if (currentPath.startsWith('/marketing/')) {
    const id = currentPath.replace('/marketing/', '').split('?')[0].split('/')[0];
    activeMarketingCase = MARKETING_STORIES.find((m) => m.id === id);
  }

  // 5. /failure-stories/:id
  if (currentPath.startsWith('/failure-stories/')) {
    const id = currentPath.replace('/failure-stories/', '').split('?')[0].split('/')[0];
    activeFailureStudy = FAILURE_STORIES.find((fail) => fail.id === id);
  }

  // Parse optional query params for industry filter on /startup-stories
  let selectedIndustryFilter: string | null = null;
  try {
    const params = new URLSearchParams(window.location.search);
    selectedIndustryFilter = params.get('industry');
  } catch {
    selectedIndustryFilter = null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717] selection:bg-[#FF7A00]/20 selection:text-[#0B1F3A]">
      
      {/* Dynamic SEO Head Manager */}
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
        
        {/* Route 1: Unique Startup Story Page (/startup-stories/:slug) */}
        {activeStory ? (
          <ArticleView
            story={activeStory}
            onNavigate={navigateTo}
            isBookmarked={savedSlugs.includes(activeStory.slug)}
            onToggleBookmark={toggleBookmark}
          />
        ) : activeFounder ? (
          /* Route 2: Unique Founder Biography Page (/founders/:id) */
          <FounderDetailView
            founder={activeFounder}
            onNavigate={navigateTo}
          />
        ) : activeIndustry ? (
          /* Route 3: Unique Industry Sector Hub (/industries/:id) */
          <IndustryDetailView
            industry={activeIndustry}
            onNavigate={navigateTo}
            savedSlugs={savedSlugs}
            onToggleBookmark={toggleBookmark}
          />
        ) : activeMarketingCase ? (
          /* Route 4: Unique Marketing Playbook Page (/marketing/:id) */
          <MarketingDetailView
            caseStudy={activeMarketingCase}
            onNavigate={navigateTo}
          />
        ) : activeFailureStudy ? (
          /* Route 5: Unique Failure Postmortem Page (/failure-stories/:id) */
          <FailureDetailView
            study={activeFailureStudy}
            onNavigate={navigateTo}
          />
        ) : currentPath === '/startup-stories' ? (
          /* Route 6: Startup Stories Archive (/startup-stories) */
          <StoryGrid
            onNavigate={navigateTo}
            selectedIndustryFilter={selectedIndustryFilter}
            onClearFilter={() => navigateTo('/startup-stories')}
            savedSlugs={savedSlugs}
            onToggleBookmark={toggleBookmark}
          />
        ) : currentPath === '/founders' ? (
          /* Route 7: Founders Directory (/founders) */
          <FounderDirectory onNavigate={navigateTo} />
        ) : currentPath === '/industries' ? (
          /* Route 8: Industries Overview (/industries) */
          <div className="py-6">
            <ExploreIndustries onNavigate={navigateTo} />
            <StoryGrid
              onNavigate={navigateTo}
              selectedIndustryFilter={selectedIndustryFilter}
              onClearFilter={() => navigateTo('/industries')}
              savedSlugs={savedSlugs}
              onToggleBookmark={toggleBookmark}
            />
          </div>
        ) : currentPath === '/marketing' ? (
          /* Route 9: Marketing Playbooks Overview (/marketing) */
          <MarketingPage onNavigate={navigateTo} />
        ) : currentPath === '/funding' ? (
          /* Route 10: Startup Funding Tracker (/funding) */
          <FundingPage onNavigate={navigateTo} />
        ) : currentPath === '/failure-stories' ? (
          /* Route 11: Startup Lessons From Failure Overview (/failure-stories) */
          <FailureStoriesPage onNavigate={navigateTo} />
        ) : currentPath === '/about' ? (
          /* Route 12: About & Editorial Verification Policy (/about) */
          <AboutPage />
        ) : (
          /* Default: Home Page (/) */
          <>
            <Hero onNavigate={navigateTo} />
            <FeaturedStory onNavigate={navigateTo} />
            <StoryGrid
              onNavigate={navigateTo}
              savedSlugs={savedSlugs}
              onToggleBookmark={toggleBookmark}
            />
            <ExploreIndustries onNavigate={navigateTo} />
            <FounderDirectory onNavigate={navigateTo} />
            <StartupStats />
          </>
        )}

        {/* Global Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Instant Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Floating Live SEO & Google Search Console Keyword Inspector */}
      <SEOKeywordInspector currentPath={currentPath} />

    </div>
  );
}
