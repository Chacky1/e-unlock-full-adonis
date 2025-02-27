type VideoPlayerProps = {
  videoUrl: string
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  return (
    <div className="aspect-video bg-black rounded-lg mb-4">
      {/* Video player placeholder */}
      <div className="w-full h-full flex items-center justify-center">
        <video
          className="w-full h-full object-cover rounded-lg"
          src={videoUrl}
          controls
        ></video>
      </div>
    </div>
  )
}

export default VideoPlayer
