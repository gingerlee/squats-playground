import React from 'react';
import { Button } from 'react-materialize';
import Hero from './Hero';
import welcomeImage from '../assets/images/welcome-image.jpg';

function Welcome(){
  return(
    <div>
      <Hero
        img={welcomeImage}
        heroTitle={'Start the Challenge'} />
      <div className='intro'>
        <h3 className='header'>A social workout app, to keep you motivated</h3>
        <p className='flow-text center'>A curated list of 21 workouts to improve your health and happiness</p>
        <Button waves='light'>Enter</Button>
      </div>

      <style jsx>{`
        .intro {
          margin: 3em;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        button  {
          margin: 0 15vw 20vh 15vw;
        }
      `}</style>
    </div>
  );
}


export default Welcome;
