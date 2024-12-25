// npm install --global sanity@latest
// npm create sanity@latest -- --template clean --create-project "beginners" --dataset production
// locallhost:3000/studio
// locallhost:3000/components/project16


import { client } from '../../../sanity/lib/client'; // Sanity client import
import React from 'react';

interface Product {
  _id: string;
  productName: string;
  price: number;
}

export default async function Page() {
  // Fetching products data
  const query = `*[_type == "product"]{
    _id,
    productName,
    price
  }`;

  const products: Product[] = await client.fetch(query);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '16px' }}>
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
