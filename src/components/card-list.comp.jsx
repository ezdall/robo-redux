import React from 'react';
import Card from './card.comp';

export default function CardList({ robots }) {
  return (
    <div>
      {robots.map(({ id, name, email }) => (
        <Card key={`key-${id}`} id={id} name={name} email={email} />
      ))}
    </div>
  );
}
