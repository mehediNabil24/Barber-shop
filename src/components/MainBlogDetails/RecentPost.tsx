type Post = {
    title: string;
  };
  
  type Props = {
    posts: Post[];
  };
  
  export default function RecentPosts({ posts }: Props) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Post</h3>
        <ul className="flex flex-col gap-3">
          {posts.map((post, index) => (
            <li key={index} className="text-sm text-gray-600 hover:text-gray-800 transition">
              <a href="#">{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }