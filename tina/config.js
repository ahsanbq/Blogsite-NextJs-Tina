import { defineConfig } from 'tinacms';

const branch =
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '9b5055f5-7990-480a-9119-5b645d11da3c',
  token: process.env.TINA_TOKEN || '5ad3fd44ab2689e4dc9efb2009846a0407ddeba6',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'content/posts',
        format: 'md',
        ui: {
          filename: {
            readonly: false,
            slugify: values => {
              if (values?.title) {
                return `${values.title.toLowerCase().replace(/ /g, '-')}`
              }
              return 'untitled'
            },
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author Name',
            required: false,
          },
          {
            type: 'image',
            name: 'coverImage',
            label: 'Cover Image',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Hero Image',
          },
          {
            type: 'object',
            name: 'cards',
            label: 'Content Cards',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Card Title',
                required: true,
              },
              {
                type: 'string',
                name: 'subtitle',
                label: 'Card Subtitle',
              },
              {
                type: 'image',
                name: 'image',
                label: 'Card Image',
              },
              {
                type: 'rich-text',
                name: 'content',
                label: 'Card Content',
              },
              {
                type: 'string',
                name: 'buttonText',
                label: 'Button Text',
              },
              {
                type: 'string',
                name: 'buttonLink',
                label: 'Button Link',
              }
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body Content',
            isBody: true,
          },
        ],
      },
    ],
  },
});