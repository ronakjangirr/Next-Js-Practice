'use client';

import { useRouter } from 'next/navigation';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter();

  const closeModal = () => {
    router.push('/product-item');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 100,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#fff',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '10px',
        zIndex: 1000,
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      }}
    >
      <h2>📦 Product Detail</h2>
      <p>This is product with ID: {params.id}</p>
      <button onClick={closeModal} style={{ marginTop: '1rem' }}>
        Close
      </button>
    </div>
  );
}
