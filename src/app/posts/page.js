import { client } from '../../../tina/__generated__/client';

async function getAllPosts() {
  const postsResponse = await client.queries.postConnection({
    sort: 'date',
  });
  return postsResponse.data.postConnection.edges.map((edge) => edge.node);
}

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Blog Posts</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post._sys.filename}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  {post.author && (
                    <>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </>
                  )}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <a href={`/posts/${post._sys.filename}`} className="hover:text-blue-600">
                    {post.title}
                  </a>
                </h2>
                
                {post.coverImage && (
                  <div className="mb-4">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}
                
                <p className="text-gray-600 mb-4">{post.description}</p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={`/posts/${post._sys.filename}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
