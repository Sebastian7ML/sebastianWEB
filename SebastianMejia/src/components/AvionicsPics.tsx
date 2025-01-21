import React from 'react';
import './avionicsPics.css'; 

interface AvionicsPicsProps {
    images: string[];
}


const AvionicsPics: React.FC<AvionicsPicsProps> = ({ images }) => {
    return (
        <div className="picture-row">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`picture-${index}`} className="picture" />
            ))}
        </div>
    );
};

export default AvionicsPics;


