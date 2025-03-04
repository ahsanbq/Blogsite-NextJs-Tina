import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default function AboutContent({ body }) {
  if (!body) return null;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg prose-blue mx-auto">
        <TinaMarkdown content={body} />
      </div>
    </div>
  );
}
