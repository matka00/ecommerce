export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'questionType',
      title: 'QuestionType',
      type: 'string',
      options: {
        list: [
          {title: 'Delivery', value: 'Delivery'},
          {title: 'Orders & Payment', value: 'Orders & Payment'},
          {title: 'Product Info', value: 'Product Information'},
          {title: 'Returns & Refunds', value: 'Returns & Refunds'},
          {title: 'Sales, Vouchers & Gift Cards', value: 'Sales, Vouchers & Gift Cards'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'string',
    },
  ],
}
