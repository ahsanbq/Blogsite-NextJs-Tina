import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default function AboutCards({ cards }) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        {cards.map((card, index) => (
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
  );
}
