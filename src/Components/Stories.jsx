import StoryCircle from './StoryCircle';
import { stories } from '../data/mockData';

const Stories = () => {
  return (
    <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Stories</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {stories.map((story) => (
          <StoryCircle key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default Stories;