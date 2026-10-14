import React, { useState, useMemo } from 'react';
import { Search, ShieldAlert, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';
import { FUNDING_DATA, FundingRecord } from '../data/fundingData';

interface FundingPageProps {
  onNavigate: (path: string) => void;
}

export const FundingPage: React.FC<FundingPageProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [stageFilter, setStageFilter] = useState<string>('All');

  const stages = ['All', 'Bootstrapped', 'Publicly Listed', 'Series F', 'Profitable'];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const filteredRecords = useMemo(() => {
    return FUNDING_DATA.filter((record: FundingRecord) => {
      if (stageFilter !== 'All' && record.stage !== stageFilter) {
        return false;
      }
      if (search.trim() !== '') {
        const query = search.toLowerCase();
        return (
          record.startup.toLowerCase().includes(query) ||
          record.industry.toLowerCase().includes(query) ||
          record.keyBackers.some((b) => b.toLowerCase().includes(query)) ||
          record.verifiedDetails.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [search, stageFilter]);

  return (
    <section aria-labelledby="funding-heading" className="py-12 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Question-Answer Format for AEO */}
        <div className="mb-8 pb-4 border-b border-[#0B1F3A]/10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-2">
            <DollarSign className="w-4 h-4 text-[#FF7A00]" />
            <span>INSTITUTIONAL CAPITAL & SOLVENCY TRACKER</span>
          </div>

          <h1 id="funding-heading" className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] tracking-tight">
            How Are India's Leading Startups Capitalized and Funded?
          </h1>

          <div className="mt-4 p-4 bg-amber-50/80 border-l-3 border-[#FF7A00] rounded-r-lg text-xs sm:text-sm text-[#0B1F3A] font-medium leading-relaxed font-body max-w-4xl">
            <strong>Direct Answer:</strong> Capitalization paths in India diverge into three proven archetypes: completely bootstrapped champions (Zerodha, Zoho) funding hyper-growth purely from customer cash flow; venture-backed scaleups (Razorpay, CRED, Meesho) backed by institutional global funds; and public corporations (Zomato, Nykaa, Swiggy) listed on the National Stock Exchange of India.
          </div>
        </div>

        {/* Mandatory Editorial Integrity Notice */}
        <div className="mb-8 p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Editorial Standard for Funding Data:</strong> We refuse to publish speculative valuation rumors, secondary transaction gossip, or unverified funding amounts. All figures and stages presented below are backed by dated corporate regulatory disclosures and official registrar records.
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#0B1F3A]/10 mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xs">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#171717]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by startup, industry, or institutional backer..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F7F5F0] border border-[#0B1F3A]/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF7A00] text-[#0B1F3A]"
            />
          </div>

          {/* Segmented stage filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1 md:pb-0 scrollbar-none">
            {stages.map((st) => (
              <button
                key={st}
                onClick={() => setStageFilter(st)}
                className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
                  stageFilter === st
                    ? 'bg-[#0B1F3A] text-white shadow-xs'
                    : 'bg-[#F7F5F0] text-[#171717]/70 hover:text-[#0B1F3A]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

        </div>

        {/* Funding Tracker Table */}
        <div className="bg-white rounded-xl border border-[#0B1F3A]/15 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              
              {/* Table Header */}
              <thead>
                <tr className="bg-[#0B1F3A] text-white font-mono text-[11px] tracking-wider uppercase border-b border-[#0B1F3A]/20">
                  <th className="py-3.5 px-4 font-bold">Startup</th>
                  <th className="py-3.5 px-4 font-bold">Industry</th>
                  <th className="py-3.5 px-4 font-bold">Funding Stage</th>
                  <th className="py-3.5 px-4 font-bold tabular-nums">Founded</th>
                  <th className="py-3.5 px-4 font-bold">Key Backers</th>
                  <th className="py-3.5 px-4 font-bold">Verified Details & Disclosures</th>
                  <th className="py-3.5 px-4 font-bold text-right">Story Link</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#0B1F3A]/10 font-body">
                {filteredRecords.map((item: FundingRecord) => {
                  const storyUrl = item.storySlug ? `/startup-stories/${item.storySlug}` : null;
                  return (
                    <tr key={item.id} className="hover:bg-[#F7F5F0]/60 transition-colors">
                      
                      {/* Startup */}
                      <td className="py-4 px-4">
                        <div className="font-display font-bold text-sm text-[#0B1F3A]">
                          {storyUrl ? (
                            <a
                              href={storyUrl}
                              onClick={(e) => handleLinkClick(e, storyUrl)}
                              title={`Read ${item.startup} startup story and business model`}
                              className="hover:text-[#FF7A00] transition-colors"
                            >
                              {item.startup}
                            </a>
                          ) : (
                            item.startup
                          )}
                        </div>
                        <span className="text-[10px] text-[#171717]/50 font-mono">
                          {item.headquarters}
                        </span>
                      </td>

                      {/* Industry */}
                      <td className="py-4 px-4 font-medium text-[#171717]">
                        {item.industry}
                      </td>

                      {/* Funding Stage */}
                      <td className="py-4 px-4">
                        <span
                          className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-sm ${
                            item.stage === 'Bootstrapped'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : item.stage === 'Publicly Listed'
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : item.stage === 'Profitable'
                              ? 'bg-blue-100 text-blue-900 border border-blue-300'
                              : 'bg-slate-100 text-slate-800 border border-slate-300'
                          }`}
                        >
                          {item.stage}
                        </span>
                      </td>

                      {/* Founded Year */}
                      <td className="py-4 px-4 font-mono font-medium tabular-nums text-[#0B1F3A]">
                        {item.founded}
                      </td>

                      {/* Key Backers */}
                      <td className="py-4 px-4 text-[#171717]/80 max-w-xs">
                        {item.keyBackers.join(', ')}
                      </td>

                      {/* Verified Details */}
                      <td className="py-4 px-4 text-[#171717]/80 max-w-sm">
                        <p className="text-[11px] leading-relaxed font-body">
                          {item.verifiedDetails}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-[10px] font-mono text-[#138A4B]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{item.publicStatusOrFilings} · {item.lastVerifiedDate}</span>
                        </div>
                      </td>

                      {/* Action Link with Rich Anchor Text (Requirement 6) */}
                      <td className="py-4 px-4 text-right">
                        {storyUrl ? (
                          <a
                            href={storyUrl}
                            onClick={(e) => handleLinkClick(e, storyUrl)}
                            title={`Read verified ${item.startup} Case Study`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0B1F3A] hover:text-[#FF7A00] transition-colors whitespace-nowrap"
                          >
                            <span>Read {item.startup} Story</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-[11px] text-[#171717]/40 font-mono">Archive Record</span>
                        )}
                      </td>

                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
