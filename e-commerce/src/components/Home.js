import React from 'react';

function Home({ user }) {
  const artworks = [
    { id: 1, title: 'Sunset', price: '$500', image: '/placeholder.svg' },
    { id: 2, title: 'Abstract Thoughts', price: '$750', image: '/placeholder.svg' },
    { id: 3, title: 'City Lights', price: '$600', image: '/placeholder.svg' },
    { id: 4, title: 'Nature\'s Embrace', price: '$450', image: '/placeholder.svg' },
  ];

  return (
    <div>
      <h1>Welcome to ArtistHub, {user.name}!</h1>
      <p>Explore the latest artworks from talented artists around the world.</p>
      
      <h2>Featured Artworks</h2>
      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <img src={artwork.image} alt={artwork.title} />
            <div className="artwork-info">
              <h3>{artwork.title}</h3>
              <p>{artwork.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

