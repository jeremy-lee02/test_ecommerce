export default{
    name: "product",
    tittle: "Product",
    type: "document",
    fields: [
        {
            name: 'image',
            tittle: 'Image',
            type: 'array',
            of: [{type:'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            tittle: "Name",
            type: 'string'
        },
        {
            name: 'slug',
            tittle: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: '100'
            }
        },
        {
            name: 'price',
            tittle: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            tittle: 'Details',
            type: 'string'
        }
    ]
}