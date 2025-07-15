
interface ProductPageProps {
  params: { id: string };
}

export default function Page({ params }: ProductPageProps) {
  return (
    <div>
      <h1>Employees Detail</h1>
      <p>Employee ID: {params.id}</p>
    </div>
  );
}
