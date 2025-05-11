export default function Loader({ size = 24, color = "text-blue-500" }) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: "transparent",
      }}
    />
  );
}
