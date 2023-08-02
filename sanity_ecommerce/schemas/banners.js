export default {
  name: 'banners',
  title: 'Banners',
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
      name: 'bannerType',
      title: 'BannerType',
      type: 'string',
      options: {
        list: [
          {title: 'HeroBanner', value: 'heroBanner'},
          {title: 'FooterBanner', value: 'footerBanner'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'product',
        maxLength: 90,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'largeText',
      title: 'LargeText',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    },
  ],
}
