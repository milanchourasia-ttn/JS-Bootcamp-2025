// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const productApi = {
  "title": "Product List",
  "description": "our product is good and resuable",
  "details": [
    {
      "id": "1",
      "name": "Product A",
      "description": "This is Product A",
      "price": 100,
    },
    {
      "id": "2",
      "name": "Product B",
      "description": "This is Product B",
      "price": 150,
    },
    {
      "id": "3",
      "name": "Product C",
      "description": "This is Product C",
      "price": 100,
    },
    {
      "id": "4",
      "name": "Product D",
      "description": "This is Product D",
      "price": 150,
    },{
      "id": "5",
      "name": "Product E",
      "description": "This is Product E",
      "price": 100,
    },
    {
      "id": "6",
      "name": "Product F",
      "description": "This is Product F",
      "price": 150,
    }
  ]
}
export default function handler(req, res) {
  res.status(200).json(productApi);
}
