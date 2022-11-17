import React from 'react';

const TeamDetails = ({ teamdata }) => {
    const { image, name, socialLink, descryption } = teamdata;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{descryption}</p>
          <div className="card-actions">
            <button className="btn btn-success btn-outline rounded-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;