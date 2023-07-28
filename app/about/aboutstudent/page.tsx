"use client"

import {useRouter as router} from 'next/navigation';

export default function page() {
    const route = router();

  return (
    <>
      <h2>About Student Page</h2>
      <button onClick={() => route.push('/')}>Go To Home</button>
    </>
  );
}
