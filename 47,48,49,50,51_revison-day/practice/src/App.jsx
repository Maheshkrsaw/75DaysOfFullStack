import React, { useState } from "react";

// Header Component for post
const Header = ({ userName, userImage, time, followers, isSponsored }) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <img
          src={userImage}
          alt="user"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">{userName}</h2>
          <p className="text-sm text-gray-500">{time}</p>
          {/* Conditional rendering: show followers only if not sponsored */}
          {!isSponsored && (
            <p className="text-xs text-gray-400">{followers} followers</p>
          )}
        </div>
      </div>
      {/* Conditional: Show Sponsored label */}
      {isSponsored && (
        <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
          Sponsored
        </span>
      )}
    </div>
  );
};

// Post Component
const Post = ({ post }) => {
  return (
    <div className="border rounded p-4 my-4 bg-white shadow-md w-full max-w-md mx-auto">
      <Header
        userName={post.userName}
        userImage={post.userImage}
        time={post.time}
        followers={post.followers}
        isSponsored={post.isSponsored}
      />

      {/* Conditional Rendering for text */}
      {post.text && <p className="mb-3">{post.text}</p>}

      {/* Conditional Rendering for image */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full max-h-64 object-cover rounded"
        />
      )}

      <div className="flex justify-between text-gray-500 text-sm mt-3">
        <span>Like</span>
        <span>Comment</span>
        <span>Share</span>
      </div>
    </div>
  );
};

// Main App
const App = () => {
  const [posts] = useState([
    {
      id: 1,
      userName: "John Doe",
      userImage: "https://i.pravatar.cc/40?img=1",
      text: "Learning React is fun! 🚀",
      image: "https://picsum.photos/400/200?random=1",
      time: "2h ago",
      followers: 1200,
      isSponsored: false,
    },
    {
      id: 2,
      userName: "Jane Smith",
      userImage: "https://i.pravatar.cc/40?img=2",
      text: "Check out this awesome tool!",
      image: "",
      time: "5h ago",
      followers: 800,
      isSponsored: true, // Sponsored post will hide followers
    },
    {
      id: 3,
      userName: "Alex Johnson",
      userImage: "https://i.pravatar.cc/40?img=3",
      text: "Just finished my project! 🎉",
      image: "https://picsum.photos/400/200?random=2",
      time: "1d ago",
      followers: 500,
      isSponsored: false,
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-6">LinkedIn Feed</h1>

      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};

export default App;
