import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export const StartupStats: React.FC = () => {
  return (
    <section className="py-12 bg-[#0B1F3A] text-white relative overflow-hidden border-b border-[#0B1F3A]/20">
      {/* Background Indian Tricolor accent gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#138A4B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#FF7A00] uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
              <span>OFFICIAL GOVERNMENT & REGULATORY BENCHMARKS</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              India's Startup Ecosystem
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/70 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#138A4B]" />
            <span>National Startup Day & DPIIT Verified Data (2026)</span>
          </div>
        </div>

        {/* Oversized Statistics Grid (Section 8 & Section 22 Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Stat 1: 200,000+ DPIIT Recognised */}
          <div className="p-6 lg:p-8 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF7A00]/40 transition-colors group">
            <div className="text-[11px] font-mono tracking-wider text-white/60 uppercase mb-2">
              ECOSYSTEM SCALE
            </div>
            <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#FF7A00] tracking-tight tabular-nums group-hover:scale-[1.02] transition-transform">
              200,000+
            </div>
            <div className="mt-3 font-display font-bold text-lg text-white">
              DPIIT-recognised startups
            </div>
            <p className="mt-2 text-xs text-white/70 leading-relaxed font-body">
              Officially validated enterprises registered under the Department for Promotion of Industry and Internal Trade (DPIIT), creating millions of direct and indirect jobs across tech and manufacturing.
            </p>
          </div>

          {/* Stat 2: 53% Tier 2/3 Cities */}
          <div className="p-6 lg:p-8 bg-white/5 rounded-xl border border-white/10 hover:border-[#138A4B]/40 transition-colors group">
            <div className="text-[11px] font-mono tracking-wider text-white/60 uppercase mb-2">
              BHARAT PENETRATION
            </div>
            <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight tabular-nums group-hover:scale-[1.02] transition-transform">
              53%
            </div>
            <div className="mt-3 font-display font-bold text-lg text-white">
              Startups from Tier 2/3 cities
            </div>
            <p className="mt-2 text-xs text-white/70 leading-relaxed font-body">
              More than half of newly recognized startups originate outside major metropolitan hubs (Delhi, Mumbai, Bengaluru), spanning towns like Indore, Jaipur, Kochi, Coimbatore, and Surat.
            </p>
          </div>

          {/* Stat 3: 32 States & UTs with Policies */}
          <div className="p-6 lg:p-8 bg-white/5 rounded-xl border border-white/10 hover:border-[#FF7A00]/40 transition-colors group">
            <div className="text-[11px] font-mono tracking-wider text-white/60 uppercase mb-2">
              POLICY INFRASTRUCTURE
            </div>
            <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#138A4B] tracking-tight tabular-nums group-hover:scale-[1.02] transition-transform">
              32
            </div>
            <div className="mt-3 font-display font-bold text-lg text-white">
              States & UTs with startup policies
            </div>
            <p className="mt-2 text-xs text-white/70 leading-relaxed font-body">
              Dedicated state-level innovation frameworks providing seed grants, incubation spaces, public procurement preference, and intellectual property fee reimbursements.
            </p>
          </div>

        </div>

        {/* Mandatory Sourcing Note from Section 8 */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-start gap-2.5 text-xs text-white/60">
          <Info className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Source & Attribution Notice:</strong> These figures are sourced directly from the official Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India, published on National Startup Day material. Startup statistics fluctuate over time; last updated with official 2026 releases.
          </p>
        </div>

      </div>
    </section>
  );
};
