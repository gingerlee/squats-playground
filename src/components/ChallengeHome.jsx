import React from 'react';
import WorkoutList from './WorkoutList';
import TeamList from './TeamList';
import Hero from './Hero';
import welcomeImage from './../assets/images/welcome-image.jpg';
import PropTypes from 'prop-types';

function ChallengeHome(props){
  return(
    <div>
      <Hero
        heroImage={welcomeImage}
        heroTitle={'Challenge Home'} />
      <div className='intro'>
        <h3 className='header'>21 Days of Squats!</h3>
        <p className='flow-text center'>A curated list of 21 workouts to help you stay in shape</p>
      </div>

      <div className='workout-list'>
        <WorkoutList workoutList={props.workoutList} />
      </div>

      <div className='team-list'>
        <TeamList userList={props.userList} />
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
        .workout-list  {
          margin: 0 15vw 20vh 15vw;
        }
      `}</style>
    </div>
  );
}

ChallengeHome.propTypes = {
  workoutList: PropTypes.object,
  userList: PropTypes.object
};

export default ChallengeHome;
