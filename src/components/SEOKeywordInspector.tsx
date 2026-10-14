import React, { useState } from 'react';
import { Search, Globe, CheckCircle2, ChevronUp, ChevronDown, Key, ExternalLink, ShieldCheck } from 'lucide-react';
import { SEO_REGISTRY, PageSEO } from '../data/seoRegistry';

interface SEOKeywordInspectorProps {
  currentPath: string;
}

export const SEOKeywordInspector: React.FC<SEOKeywordInspectorProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const seoData: PageSEO = SEO_REGISTRY[currentPath] || SEO_REGISTRY['/'];

  return (
    <aside
      aria-label="SEO & Google Search Console Inspector"
      className="fixed bottom-4 right-4 z-50 font-sans"
    >
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-[#0B1F3A] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-full shadow-lg border border-[#FF7A00]/40 transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
        title="Toggle SEO & Search Console Data for this URL"
      >
        <Key className="w-3.5 h-3.5 text-[#FF7A00]" />
        <span>SEO & Keywords</span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>

      {/* Expanded Inspector Panel */}
      {isOpen && (
        <div className="mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-[#0B1F3A]/20 p-4 text-xs text-[#171717] animate-in fade-in slide-in-from-bottom-2 duration-150 max-h-[80vh] overflow-y-auto">
          
          <div className="flex items-center justify-between pb-2 border-b border-[#0B1F3A]/10">
            <div className="flex items-center gap-1.5 font-display font-bold text-sm text-[#0B1F3A]">
              <Globe className="w-4 h-4 text-[#FF7A00]" />
              <span>Page SEO & AEO Metadata</span>
            </div>
            <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#138A4B]" />
              GSC Ready
            </span>
          </div>

          <div className="space-y-3 mt-3">
            {/* Active URL */}
            <div>
              <span className="text-[10px] font-mono text-[#171717]/60 uppercase font-bold block">
                Unique URL (Good URL Rule)
              </span>
              <div className="font-mono text-[11px] text-[#0B1F3A] bg-[#F7F5F0] p-1.5 rounded border border-[#0B1F3A]/10 break-all select-all">
                {currentPath}
              </div>
            </div>

            {/* Main Keyword */}
            <div>
              <span className="text-[10px] font-mono text-[#171717]/60 uppercase font-bold block">
                Main Keyword
              </span>
              <div className="font-bold text-xs text-[#0B1F3A] bg-amber-50 border border-[#FF7A00]/30 px-2 py-1 rounded">
                🔑 {seoData.mainKeyword}
              </div>
            </div>

            {/* 2 Related Keywords */}
            <div>
              <span className="text-[10px] font-mono text-[#171717]/60 uppercase font-bold block">
                2 Related Keywords
              </span>
              <div className="space-y-1 mt-1">
                {seoData.relatedKeywords.map((kw, i) => (
                  <div
                    key={i}
                    className="text-[11px] text-[#171717]/85 bg-[#F7F5F0] px-2 py-0.5 rounded border border-[#0B1F3A]/10 flex items-center gap-1"
                  >
                    <span className="text-[#FF7A00] font-mono font-bold">#{i + 1}</span>
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Title Rule (50-60 chars) */}
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#171717]/60 uppercase font-bold">
                <span>Page Title</span>
                <span className={seoData.title.length <= 60 ? 'text-[#138A4B]' : 'text-amber-600'}>
                  {seoData.title.length}/60 chars
                </span>
              </div>
              <p className="font-medium text-[#0B1F3A] bg-[#F7F5F0] p-1.5 rounded border border-[#0B1F3A]/10 text-[11px]">
                {seoData.title}
              </p>
            </div>

            {/* Meta Description Rule (140-158 chars) */}
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#171717]/60 uppercase font-bold">
                <span>Meta Description</span>
                <span className={seoData.metaDescription.length >= 120 && seoData.metaDescription.length <= 165 ? 'text-[#138A4B]' : 'text-amber-600'}>
                  {seoData.metaDescription.length}/158 chars
                </span>
              </div>
              <p className="text-[11px] text-[#171717]/80 bg-[#F7F5F0] p-1.5 rounded border border-[#0B1F3A]/10 leading-relaxed font-body">
                {seoData.metaDescription}
              </p>
            </div>

            {/* Google Search Console Verification Notice */}
            <div className="pt-2 border-t border-[#0B1F3A]/10 text-[11px] text-[#171717]/70 space-y-1">
              <span className="font-mono text-[10px] text-[#0B1F3A] font-bold block uppercase">
                Google Search Console Connection
              </span>
              <p className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                HTML File &amp; Meta Tag verification active.
              </p>
              <div className="flex items-center gap-3 pt-1 text-[10px] font-mono">
                <a
                  href="/google9d9c74b6f8fe0f2f.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-0.5 underline"
                >
                  Verification File <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-0.5 underline"
                >
                  sitemap.xml <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      )}
    </aside>
  );
};
