import React from 'react';

function ArtistProfile({ user }) {
  const artworks = [
    { id: 1, title: 'Sunset', price: '$500', image: '/placeholder.svg' },
    { id: 2, title: 'Abstract Thoughts', price: '$750', image: '/placeholder.svg' },
    { id: 3, title: 'City Lights', price: '$600', image: '/placeholder.svg' },
  ];

  return (
    <div className="profile">
      <h2>Artist Profile</h2>
      <img src={user.profilePicture ? URL.createObjectURL(user.profilePicture) : '/placeholder.svg'} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.bio}</p>
      
      <h3>My Artworks</h3>
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

export default ArtistProfile;

