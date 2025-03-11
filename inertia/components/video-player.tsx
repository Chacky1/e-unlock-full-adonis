import LessonDto from "#dtos/lesson";
import UserDto from "#dtos/user";
import { router } from "@inertiajs/react";
import { useRef, useState } from "react"

type VideoPlayerProps = {
  videoUrl: string,
  lesson: LessonDto,
  user: UserDto | null,
}

const VideoPlayer = ({ videoUrl, user, lesson }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCalled, setHasCalled] = useState(false);

  const handleTimeUpdate = async () => {
    if (!videoRef.current) return;
    if (!user) return;

    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    // Call the API to mark the lesson as completed when the video is watched 95%
    if (!hasCalled && duration > 0 && currentTime >= duration * 0.95) {
      setHasCalled(true);
      await fetch(`/users/${user.id}/lessons/${lesson.id}/complete`, { method: 'POST' });
      router.reload();
    }
  };

  return (
    <div className="aspect-video bg-black rounded-lg mb-4">
      <div className="w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg"
          src={videoUrl}
          onTimeUpdate={handleTimeUpdate}
          controls
        ></video>
      </div>
    </div>
  )
}

export default VideoPlayer
