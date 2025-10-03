import React from 'react';
import { PageLayout } from '@/components/page-layout';

const Memory = () => {
  const breadcrumbs = [{ label: 'Gry', href: '/' }, { label: 'Memory' }];

  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <h1 className="text-4xl font-bold mb-8">Memory</h1>
    </PageLayout>
  );
};

export default Memory;
