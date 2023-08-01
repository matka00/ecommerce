export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'species',
      title: 'Species',
      type: 'string',
      options: {
        list: [
          {title: 'Bunny', value: 'bunny'},
          {title: 'Doggie', value: 'doggie'},
          {title: 'Froggie', value: 'froggie'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'materials',
      title: 'Materials',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'treatment',
      title: 'Treatment',
      type: 'string',
    },
  ],
}
