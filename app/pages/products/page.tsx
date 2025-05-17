'use client';

import useGetItems from '@/app/hooks/products/useGetItems';
import React from 'react';

const Page = () => {
  const { items, loading, error } = useGetItems();

console.log(items);


  return (
    <div>
      <h2>This is products ...</h2>
    </div>
  );
};

export default Page;