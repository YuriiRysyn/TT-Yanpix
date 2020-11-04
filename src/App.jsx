import React, { useState, useEffect } from 'react';
import './App.scss';

import { PhotoList } from './components/PhotoList/PhotoList';
import { Loader } from './components/Loader/Loader';
import { PhotoDetails } from './components/PhotoDetails/PhotoDetails';

import { getPhotos } from './api/api';

export const App = () => {
  const [photoList, setPhotoList] = useState([]);
  const [selectedPhotoDetails, setSelectedPhotoDetails] = useState(null)

  const loadImageDetails = (itemId) => {
    setSelectedPhotoDetails( () => {
      return photoList.find(item => item.id === itemId);
    })
  }

  useEffect(() => {
    getPhotos().then((data) => setPhotoList(data));
  },[]);

  const deleteItem = (itemId) => {
    setPhotoList(() => photoList.filter(item => item.id !==itemId));

    if(selectedPhotoDetails.id === itemId) {
      setSelectedPhotoDetails(null);
    }
  };

  return (
    <div className="content">
      <section className="photo-list">
        {photoList.length === 0 ?
          <Loader />
          :
          <PhotoList 
            photoList={photoList} 
            deleteItem={deleteItem}
            loadImageDetails={loadImageDetails}
          />
        }
      </section>
      <section className="photo-details">
        {selectedPhotoDetails 
          && 
          <PhotoDetails selectedPhotoDetails={selectedPhotoDetails} />}
      </section>
    </div>
  );
};