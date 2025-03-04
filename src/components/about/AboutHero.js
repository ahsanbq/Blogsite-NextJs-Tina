export default function AboutHero({ title, description, heroImage }) {
  return (
    <div className="relative">
      {heroImage && (
        <div className="absolute inset-0">
          <img
            className="w-full h-96 object-cover"
            src={heroImage}
            alt={title || 'About Us'}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
      )}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title || 'About Us'}
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          {description || 'Learn more about our mission and values'}
        </p>
      </div>
    </div>
  );
}
