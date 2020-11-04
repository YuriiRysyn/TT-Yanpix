const BASE_URL = 'https://api.unsplash.com';

export const getPhotos = async() => {
  const response = await fetch(`${BASE_URL}/photos/?client_id=zZbe2XQ-xO__lIPsH1bA8nsI8qq4ky6zd9wCEHcHCC0`);
  const result = await response.json();

  return result;
}