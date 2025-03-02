# TechBlog with Next.js and Tina CMS

A modern blog platform built with Next.js and Tina CMS, featuring a beautiful UI powered by Tailwind CSS.

## 🚀 Project Overview

This blog platform combines the power of Next.js for frontend rendering, Tina CMS for content management, and Tailwind CSS for styling. It allows you to write, manage, and publish blog posts with a beautiful and responsive interface.

## 🛠️ Tech Stack

- **Next.js 14**: React framework for production
- **Tina CMS**: Headless CMS for content management
- **Tailwind CSS**: Utility-first CSS framework
- **MDX**: For enhanced markdown content

## 📁 Project Structure

```
tina/
├── content/              # Content managed by Tina CMS
│   ├── posts/           # Blog posts
│   └── pages/           # Static pages (About, etc.)
├── public/              # Static assets
│   └── uploads/         # Media uploads
├── src/
│   └── app/             # Next.js app directory
│       ├── posts/       # Blog post pages
│       ├── about/       # About page
│       └── page.js      # Homepage
├── tina/
│   ├── config.js        # Tina CMS configuration
│   └── __generated__/   # Generated Tina types
└── package.json         # Project dependencies
```

## 🔄 How Tina CMS Works with Next.js

### 1. Content Management

Tina CMS manages content through a Git-based workflow:
- Content is stored as Markdown/MDX files in the `content/` directory
- Media files are stored in `public/uploads/`
- Changes are committed directly to your Git repository

### 2. Schema Configuration

The `tina/config.js` file defines how content is structured:

```javascript
// Blog Post Schema
{
  name: "post",
  label: "Blog Posts",
  path: "content/posts",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    // ... other fields
  ]
}
```

### 3. Content Integration

Blog posts are integrated into Next.js pages through Tina's client:

```javascript
// src/app/posts/page.js
import { client } from '../../../tina/__generated__/client';

async function getBlogPosts() {
  const postsResponse = await client.queries.postConnection();
  return postsResponse.data.postConnection.edges;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  // Render posts...
}
```

### 4. Dynamic Routes

Individual blog posts use dynamic routing:

```javascript
// src/app/posts/[slug]/page.js
async function getPost(slug) {
  const postResponse = await client.queries.post({
    relativePath: `${slug}.md`,
  });
  return postResponse.data.post;
}
```

## 🔧 Setup and Configuration

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file:
   ```env
   NEXT_PUBLIC_TINA_CLIENT_ID=<your-client-id>
   TINA_TOKEN=<your-token>
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   - Next.js runs on: http://localhost:3000
   - Tina CMS admin: http://localhost:3000/admin

## 📝 Creating Content

1. **Write a Blog Post**:
   - Navigate to http://localhost:3000/admin
   - Click "New Post"
   - Fill in the required fields:
     - Title
     - Description
     - Date
     - Content (supports Markdown)
   - Save and publish

2. **Add Media**:
   - Use the media picker in the admin interface
   - Images are automatically optimized and stored in `public/uploads/`

## 🎨 Styling and Customization

The project uses Tailwind CSS for styling:

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Typography plugin for blog content
- Responsive design for all screen sizes

## 🔐 Authentication

Tina CMS provides authentication through:
- Local development: No authentication required
- Production: GitHub-based authentication
- Custom auth providers can be configured

## 📱 Features

1. **Blog Features**:
   - Responsive layout
   - SEO optimization
   - Social sharing
   - Categories and tags
   - Author information

2. **CMS Features**:
   - Visual editing
   - Media management
   - Content validation
   - Git-based storage
   - Real-time preview

3. **Developer Features**:
   - Hot reloading
   - TypeScript support
   - API routes
   - Static generation
   - Dynamic imports

## 🚀 Deployment

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Deploy to Hosting**:
   - Supports Vercel, Netlify, etc.
   - Configure environment variables
   - Set up Git integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is MIT licensed.
