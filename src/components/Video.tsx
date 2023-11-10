import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url="https://www.youtube.com/watch?v=C3E1qMoL8Nc"
        />
      </div>
    </div>
  )
}