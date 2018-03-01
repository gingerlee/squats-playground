import React from 'react';
import Hero from '../components/Hero';
import homeIamge from '../assets/images/home-image.jpg';

import PropTypes from 'prop-types';

function Home(props){
  return(
    <div>
      <Hero
        heroImage={homeImage}/>
      <div className='intro'>
        <h3 className='header'>21 Days of Squats!</h3>
        <p className='flow-text center'>A curated list of 21 workouts to help you stay in shape</p>
      </div>
      <div className='workout-list'>
        <WorkoutList kegList={props.workoutList}/>
      </div>
      <style jsx>{`
        .intro {
          margin: 3em;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
          .workout-list  {
            margin: 0 15vw 20vh 15vw;
          }
      `}</style>
    <div className='team-list'>
        <TeamList kegList={props.teamList}/>
      </div>
      <style jsx>{`
        .intro {
          margin: 3em;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
          .team-list  {
            margin: 0 15vw 20vh 15vw;
          }
      `}</style>
    </div>
  );
}

Home.propTypes = {
  workoutList: PropTypes.array
};

export default Home;