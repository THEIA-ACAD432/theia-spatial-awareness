const items = [
  "Overhead detection",
  "Haptic feedback",
  "Hands-free",
  "Silent operation",
  "Belt-worn",
  "180° awareness",
  "Real-time response",
  "Augments the cane",
];

const Marquee = () => {
  return (
    <div className="relative border-y border-hairline bg-graphite text-ivory overflow-hidden py-5">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl md:text-3xl">
            <span>{item}</span>
            <span className="text-signal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
