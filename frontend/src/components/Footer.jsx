import ClutchIcon from './ClutchIcon';

// X (formerly Twitter) SVG
const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.858L2.042 2.25h6.945l4.274 5.654L18.244 2.25Zm-1.161 17.52h1.833L7.044 4.126H5.078L17.083 19.77Z" />
  </svg>
);

// Reddit SVG
const RedditIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

// LinkedIn SVG
const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Email SVG
const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
  </svg>
);

const socials = [
  { href: 'https://x.com/foundersales', label: 'X', icon: <XIcon /> },
  { href: 'https://reddit.com/r/foundersales', label: 'Reddit', icon: <RedditIcon /> },
  { href: 'https://linkedin.com/company/foundersales', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: 'mailto:hellofoundersales@gmail.com', label: 'Email', icon: <EmailIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-near-black border-t border-white/8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Top — Brand + tagline + socials */}
        <div className="flex flex-col items-center mb-10">

          {/* Logo + brand */}
          <div className="flex items-center gap-3 mb-2">
            <img src="/logo.svg" alt="FounderSales" className="w-11 h-11 flex-shrink-0" />
            <span className="font-space font-bold text-xl text-white tracking-tight">
              FounderSales
            </span>
          </div>

          {/* Powered by Clutch AI — brand architecture line */}
          <div className="flex items-center gap-2 mb-5">
            <ClutchIcon size={13} color="#7c3aed" animated={false} />
            <span className="font-geist text-[11px] text-violet-400/70 tracking-widest uppercase">
              Powered by Clutch AI
            </span>
          </div>

          {/* Tagline */}
          <p className="font-geist text-white/40 text-sm text-center mb-7 max-w-xs leading-relaxed">
            Stop freezing. Start executing.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/6 border border-white/8 flex items-center
                           justify-center text-white/50 hover:bg-electric-blue hover:text-white
                           hover:border-electric-blue transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4
                        font-geist text-xs text-white/30">
          <div>© 2026 FounderSales. All rights reserved.</div>
          <div className="text-center sm:text-right">
            Built by{' '}
            <span className="text-electric-blue/70 font-medium">Dev Paul</span>
            {' '}— a solo founder who got tired of being frozen.
          </div>
        </div>

      </div>
    </footer>
  );
}
