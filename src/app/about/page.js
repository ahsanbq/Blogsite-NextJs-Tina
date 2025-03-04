import { client } from '../../../tina/__generated__/client';
import AboutHero from '../../components/about/AboutHero';
import AboutCards from '../../components/about/AboutCards';
import AboutContent from '../../components/about/AboutContent';

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
      <AboutHero 
        title={page.title}
        description={page.description}
        heroImage={page.heroImage}
      />
      <AboutCards cards={page.cards} />
      <AboutContent body={page.body} />
    </div>
  );
}
