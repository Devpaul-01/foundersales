/**
 * ClutchIcon — The Orbit Node
 * A clean geometric icon representing intelligence, autonomy, and continuous execution.
 * No dependencies. Pure SVG with optional CSS animation.
 *
 * Props:
 *   size       — number (default 32) — width/height in px
 *   className  — string — additional classes
 *   animated   — boolean (default true) — enables orbital rotation
 *   color      — string (default 'currentColor')
 */
export default function ClutchIcon({ size = 32, className = '', animated = true, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Clutch AI"
    >
      {/* Outer orbital arc — rotates slowly clockwise */}
      <g
        style={{
          transformOrigin: '16px 16px',
          animation: animated ? 'orbit 18s linear infinite' : 'none',
        }}
      >
        {/* ~300° arc — gaps at top-right, creates sense of motion */}
        <path
          d="M16 2.5 A13.5 13.5 0 1 1 5.4 8.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Small arrowhead at the arc end to indicate direction */}
        <circle cx="5.1" cy="8.2" r="1.2" fill={color} opacity="0.7" />
      </g>

      {/* Inner orbital arc — rotates counter-clockwise, faster */}
      <g
        style={{
          transformOrigin: '16px 16px',
          animation: animated ? 'orbit 11s linear infinite reverse' : 'none',
        }}
      >
        {/* ~210° arc */}
        <path
          d="M16 7.5 A8.5 8.5 0 1 1 8.1 21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* Small dot at end */}
        <circle cx="8.4" cy="21.2" r="1" fill={color} opacity="0.5" />
      </g>

      {/* Core — intelligence center */}
      <circle cx="16" cy="16" r="3.2" fill={color} />

      {/* Subtle inner ring around core */}
      <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}
