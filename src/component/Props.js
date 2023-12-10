import "../CSS/Props.css";

export default function Props({
  Title,
  Channel,
  views,
  time = "5 month ago",
  id,
  varified,
  children
}) {
  return (
    <>
      <div className="container" style={{ border: "white" }}>
        <div className="Pic">
          <img
            className="img"
            src={`https://source.unsplash.com/random/800x800/?img=${id}`}
            alt="wallpaper"
          />
        </div>
        <div className="title">{Title}</div>
        <div className="channel">
          {Channel} {varified && "✅"}{" "}
        </div>
        <div className="views">
          {views} Views <span>.</span>
          {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
