import PostCard from './PostCard';
import { posts } from '../data/mockData';

const Feed = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;