export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'string',
    },

    {
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'string',
    },
    {
      name: 'paragraph3',
      title: 'Paragraph 3',
      type: 'string',
    },
    {
      name: 'paragraph4',
      title: 'Paragraph 4',
      type: 'string',
    },
    {
      name: 'paragraph5',
      title: 'Paragraph 5',
      type: 'string',
    },
  ],
}
