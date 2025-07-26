'use client';

import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  role: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/user?role=admin&page=1')
      .then(res => res.json())
      .then(data => {
        // Assuming `data.users` will be the array from the API
        setUsers(data.users);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.role})
        </li>
      ))}
    </ul>
  );
}
