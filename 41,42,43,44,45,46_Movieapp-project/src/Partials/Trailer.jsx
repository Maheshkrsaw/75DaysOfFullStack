import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Determine category from URL
  const category = pathname.includes("/movie/") ? "movie" : "tv";

  // Safely select the trailer
  const ytvideo = useSelector((state) => state[category]?.info?.videos);

  const [showPlayer, setShowPlayer] = useState(true);
  const playerRef = useRef(null);

  const handleClose = () => {
    setShowPlayer(false);
    navigate(-1); // Go back to details page
  };

  // Stop video on unmount
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        const internalPlayer = playerRef.current.getInternalPlayer();
        if (internalPlayer?.pauseVideo) internalPlayer.pauseVideo();
      }
    };
  }, []);

  if (!ytvideo?.key || !showPlayer) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 text-white text-3xl hover:text-purple-500 z-50"
      >
        ✕
      </button>

      {/* YouTube Player */}
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        playing
        controls
        width="90%"
        height="80%"
      />
    </div>
  );
};

export default Trailer;
