// Motherland Cafe mark — 8-point starburst / asterisk interpretation.
// Renders in currentColor so it inherits from whatever wraps it.
// Adjust `size` for pixel size. `stroke` chooses the outline weight vs. filled diamonds.
export default function MotherlandMark({
  size = 32,
  color = 'currentColor',
  className,
  style,
  title
}) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={style}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <g fill={color}>
        {rays.map((angle) => (
          <path
            key={angle}
            // A tapered diamond: broad near tip, narrows into a fine spine, then meets the center.
            d="M50 5 L54.5 40 L50 50 L45.5 40 Z"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        {/* Small central hub keeps the mark from looking hollow */}
        <circle cx="50" cy="50" r="3" fill={color} />
      </g>
    </svg>
  );
}
