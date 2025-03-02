import { client } from '../../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

async function getPost(filename) {
  const postResponse = await client.queries.post({
    relativePath: `${filename}.md`,
  });
  return postResponse.data.post;
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            {post.author && (
              <>
                <span>{post.author}</span>
                <span className="mx-2">•</span>
              </>
            )}
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
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
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <TinaMarkdown content={post.body} />
        </div>

        {/* Post Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/posts"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to all posts
          </a>
        </footer>
      </article>
    </div>
  );
}
