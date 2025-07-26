
export default function ProductList({
  searchParams,
}: {
  searchParams: { category?: string; page?: string };
}) {
  return (
    <div>
      <h1>All Products List</h1>
      <p>Category: {searchParams.category}</p>
      <p>Page: {searchParams.page}</p>
    </div>
  );
}