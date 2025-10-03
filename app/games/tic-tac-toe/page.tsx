import React from 'react';
import { PageLayout } from '@/components/page-layout';

const TicTacToe = () => {
  const breadcrumbs = [
    { label: 'Gry', href: '/' },
    { label: 'Kółko i krzyżyk' },
  ];

  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <h1 className="text-4xl font-bold mb-8">Kółko i krzyżyk</h1>
    </PageLayout>
  );
};

export default TicTacToe;
