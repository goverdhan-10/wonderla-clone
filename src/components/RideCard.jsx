import React from 'react';

const RideCard = ({ ride }) => {
  return (
    <div className="w-64 bg-white rounded-3xl shadow-md overflow-hidden mx-2 transition-all duration-300 hover:shadow-xl flex flex-col">
      <div className="aspect-[229/394] w-full overflow-hidden rounded-t-3xl relative flex-shrink-0">
        <video
          autoPlay
          loop
          playsInline
          muted
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={ride.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white">{ride.title}</h3>
          <p className="text-sm text-white">{ride.location}</p>
          <p className="text-white mt-2 text-sm">{ride.description}</p>
          <button className="w-full mt-2 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-300">
            Ride Details
          </button>
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col justify-end">
      </div>
    </div>
  );
};

export default RideCard;