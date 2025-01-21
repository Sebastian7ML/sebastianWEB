import React from 'react';
import './ImageRow.css'; // Import the CSS file for styling

// Import the images
import image1 from '../assets/ec.jpg';
import image2 from '../assets/bo.jpg';
import image3 from '../assets/bell.jpg';

const ImageRow: React.FC = () => {
  return (
    <div className="image-row">
      <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" />
      <img src={image3} alt="Image 3" />
    </div>
  );
};

export default ImageRow;
