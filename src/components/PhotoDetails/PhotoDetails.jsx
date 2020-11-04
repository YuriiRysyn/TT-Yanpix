import React from 'react';

import './PhotoDetails.scss';

export const PhotoDetails = ({ selectedPhotoDetails }) => (
  <div className="photo-details__content">
    <h2 className="photo-details__headling">
      Photo Details:
    </h2>

    {
      selectedPhotoDetails.alt_description && 
      <p className="photo-details__item">
        Image description: {selectedPhotoDetails.alt_description}
      </p>
    }
    <p className="photo-details__item">
      Likes: {selectedPhotoDetails.likes || '0'}
    </p>

    {
      selectedPhotoDetails.user.name &&
      <p className="photo-details__item">
        User name: {selectedPhotoDetails.user.name}
      </p>
    }

    {
      selectedPhotoDetails.user.instagram_username &&
      <p className="photo-details__item">
        User instagram: {selectedPhotoDetails.user.instagram_username}
      </p>
    }
  </div>
);
