export function Waveform({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 20"
      width="48"
      height="20"
      aria-hidden
    >
      {[8, 14, 20, 26, 32, 38].map((x, index) => (
        <rect
          key={x}
          className="waveform-bar"
          x={x}
          y="2"
          width="2.5"
          height="16"
          rx="1"
          fill="currentColor"
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </svg>
  );
}
