import React from 'react';
import './ProjectCard.css';
import '../App.css';

const randNum = () => {
  return Math.floor(Math.random() * 1000);
};

function ProjectCard() {
  return (
    <div className="card-grid light-bkgd dark-blue flex-center-h">
      {/* <div className="card">
        <img src={`https://source.unsplash.com/random/?sig=${randNum()}`} />
      </div>
      <div className="card">
        <img src={`https://source.unsplash.com/random/?sig=${randNum()}`} />{' '}
      </div>
      <div className="card">
        <img src={`https://source.unsplash.com/random/?sig=${randNum()}`} />{' '}
      </div>
      <div className="card">
        <img src={`https://source.unsplash.com/random/?sig=${randNum()}`} />{' '}
      </div> */}
    </div>
  );
}

export default ProjectCard;
