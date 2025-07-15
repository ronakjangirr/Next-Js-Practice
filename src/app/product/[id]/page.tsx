
function Page({ params }: { params: { id: string } }) {
     const products = [
  { id: 1, name: "iPhone 15", description: "Latest Apple phone with A16 chip." },
  { id: 2, name: "Samsung Galaxy", description: "Flagship Samsung Android device." },
  { id: 3, name: "Google Pixel", description: "Stock Android phone by Google." },
];

 const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>Product: {product.name}</h1>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default Page;