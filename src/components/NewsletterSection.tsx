import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-14 bg-[#0B1F3A] text-white relative overflow-hidden border-t border-[#0B1F3A]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#138A4B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase mb-3">
          <Mail className="w-4 h-4 text-[#FF7A00]" />
          <span>CURATED SUNDAY DISPATCH</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          Get The Startup Story of the Week
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl mx-auto font-body">
          Every Sunday morning, we dissect one Indian startup's operational flywheel, unit economics, and founder lessons. Written specifically for students and entrepreneurs.
        </p>

        {submitted ? (
          <div className="mt-8 p-6 bg-white/10 border border-[#138A4B] rounded-xl max-w-md mx-auto text-center animate-in zoom-in-95 duration-200">
            <CheckCircle className="w-8 h-8 text-[#138A4B] mx-auto mb-2" />
            <h3 className="font-display font-bold text-base text-white">
              Welcome to the Fellowship!
            </h3>
            <p className="mt-1 text-xs text-white/80">
              Check your inbox this Sunday for our next verified Indian startup case study.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your student or work email..."
                className="flex-1 px-4 py-3 text-sm text-[#0B1F3A] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] placeholder-[#171717]/50 shadow-xs"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-bold tracking-wide text-white bg-[#FF7A00] hover:bg-[#e06c00] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm active:translate-y-0.5"
              >
                <span>SUBSCRIBE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-white/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#138A4B]" />
              <span>Zero spam · Verified sources only · Unsubscribe anytime</span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
