import React from 'react';
import labImage from '../../Data/csed-lab-no.jpg';

const Faculty = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-gray-800 py-5">Faculty and Lab Locations</h1>
      
      {/* Image */}
      <img 
        src={labImage}
        alt="Faculty Room" 
        style={{ width: '400px', height: '450px', margin: 'auto', borderRadius: '10px' }}
      />
    </div>
  );
};

export default Faculty;
