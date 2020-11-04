import React from 'react';
import PropTypes from 'prop-types';

import './PhotoList.scss';

export const PhotoList = ({ 
  photoList,
  deleteItem,
  loadImageDetails
}) => (
  <>
    <h2 className="photo-list__headling">
      Photo list:
    </h2>
    {photoList.map(item => (
      <div key={item.id} className="photo-list__item">
        <img 
          className="photo-list__item-img"
          src={item.urls.small} 
          alt={item.alt_description}
        />
        <div className="photo-list__buttons">
          <button 
            className="photo-list__item-btn photo-list__item-btn-stats"
            onClick={() => loadImageDetails(item.id)}
          >
            View statistic
          </button>
          <button 
            className="photo-list__item-btn photo-list__item-btn-delete" 
            onClick={() => deleteItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </>
);

PhotoList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
};