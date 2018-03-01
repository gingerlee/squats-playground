import React from 'react';
import Hero from './components/Hero';
import welcomeImage from './../assets/images/welcome-image.jpg';
import RaisedButton from 'material-ui/RaisedButton';

function Welcome(){
  return(
    <div>
      <Hero
        heroImage={welcomeImage} />
      <div className='intro'>
        <img src={logo} />
        <h3 className='header'>A social workout app, to keep you motivated</h3>
        <p className='flow-text center'>A curated list of 21 workouts to improve your health and happiness</p>
      </div>
      <div className='about'>
        <RaisedButton label="Enter" style={style} />
      </div>
      <style jsx>{`
        .intro {
          margin: 3em;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .about  {
          margin: 0 15vw 20vh 15vw;
        }
      `}</style>
    </div>
  );
}


export default Welcome;
