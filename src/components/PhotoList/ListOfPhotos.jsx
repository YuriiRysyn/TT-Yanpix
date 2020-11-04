import React from 'react';
import PropTypes from 'prop-types';

export const ListOfPhotos = ({ photosList }) => {

  return (
    photosList.map(item => (
      <div className="list-of-photos__item">
        <img 
          className="list-of-photos__item-img"
          src={item.urls.small} 
          alt={item.alt_description}
        />
        <button className="list-of-photos__item-statistic-btn">
          View statistic
        </button>

      </div>
    ))
  )
};

ListOfPhotos.propTypes = {
  photosList: PropTypes.array.isRequired,
};