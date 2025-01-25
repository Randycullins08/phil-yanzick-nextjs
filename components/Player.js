export default function Player({ src }) {
  return (
    <iframe
      style={{ border: "0", width: "350px", height: "400px" }}
      src={src}
      allow="encrypted-media"
    />
  );
}
