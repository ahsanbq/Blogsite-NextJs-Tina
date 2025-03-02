import { client } from '../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

async function getAboutPage() {
  try {
    const pageResponse = await client.queries.page({
      relativePath: 'about.mdx',
    });
    return pageResponse.data.page;
  } catch (error) {
    console.error('Error fetching about page:', error);
    return {
      title: 'About TechBlog',
      description: 'Learn more about our mission to share knowledge and empower developers',
      heroImage: '',
      cards: [],
      body: {
        children: [
          {
            type: 'p',
            children: [{ text: 'Welcome to TechBlog. Our page content is currently being updated.' }]
          }
        ]
      }
    };
  }
}

export default async function AboutPage() {
  const page = await getAboutPage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {page.heroImage && (
          <div className="absolute inset-0">
            <img
              className="w-full h-96 object-cover"
              src={page.heroImage}
              alt={page.title || 'About Us'}
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          </div>
        )}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {page.title || 'About Us'}
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            {page.description || 'Learn more about our mission and values'}
          </p>
        </div>
      </div>

      {/* Cards Section */}
      {page.cards && page.cards.length > 0 && (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {page.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                {card.image && (
                  <div className="relative h-48">
                    <img
                      className="w-full h-full object-cover"
                      src={card.image}
                      alt={card.title || `Card ${index + 1}`}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-sm text-blue-600 mb-4">{card.subtitle}</p>
                  )}
                  {card.content && (
                    <div className="prose prose-blue">
                      <TinaMarkdown content={card.content} />
                    </div>
                  )}
                  {card.buttonText && card.buttonLink && (
                    <div className="mt-6">
                      <a
                        href={card.buttonLink}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {card.buttonText}
                        <svg
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-blue mx-auto">
          <TinaMarkdown content={page.body} />
        </div>
      </div>
    </div>
  );
}
