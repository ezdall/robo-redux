import React from 'react';

export default function Card({ id, name, email }) {
  return (
    <div className="bg-light-blue dib br4 pa3 ma2 grow">
      <img
        src={`https://robohash.org/${id}?size=150x150&bgset=bg2&set=any`}
        alt={`robot ${id}`}
      />
      <div>
        <h4>
          {id}. {name}
        </h4>
        <p>{email}</p>
      </div>
    </div>
  );
}
