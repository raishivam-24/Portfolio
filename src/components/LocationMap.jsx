// Reusable Google Maps embed. No API key required (uses the public
// maps.google.com/maps?output=embed endpoint).
export default function LocationMap({ query, className = "", label }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=12&output=embed`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <iframe
        title={label || `Map of ${query}`}
        src={src}
        className="w-full h-full border-0 grayscale contrast-125 invert-[0.92] hue-rotate-180"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-[inherit]" />
    </div>
  );
}
