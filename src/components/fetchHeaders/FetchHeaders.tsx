'use client';

import { useEffect } from 'react';

export default function FetchHeaders() {
  useEffect(() => {
    fetch('/api/test')
      .then(res => {
        console.log('Content-Type:', res.headers.get('content-type'));
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  }, []);

  return <div>Check console for headers</div>;
}