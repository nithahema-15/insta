const StoryCircle = ({ story }) => {
  return (
    <div className="flex flex-col items-center space-y-1 min-w-[72px] cursor-pointer group">
      <div className={`${story.hasStory ? 'story-ring' : story.isUser ? 'p-[2px] rounded-full border-2 border-dashed border-gray-300' : 'story-ring-viewed'}`}>
        <div className="p-[2px] bg-white rounded-full">
          <img 
            src={story.avatar} 
            alt={story.username}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      {story.isLive && (
        <span className="absolute mt-10 bg-instagram-pink text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
          LIVE
        </span>
      )}
      <span className="text-xs text-gray-700 font-medium truncate max-w-[72px]">
        {story.username}
      </span>
    </div>
  );
};

export default StoryCircle;