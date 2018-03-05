import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Welcome from './Welcome';
import ChallengeHome from './ChallengeHome';
// import SiteNav from './SiteNav';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      workoutsById: {
        1: {
          title: 'Jump!',
          day: 'Day 1',
          duration: '30min',
          level: 'Intermediate',
          intensity: 'Medium',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=E4tiWhsQhQg&list=PL5lPziO_t_VgdnI02Bi4XDlJTphcuX6dW',
          users: []
        },
        2: {
          title: 'Step up to your goals',
          day: 'Day 2',
          duration: '40min',
          level: 'Advanced',
          intensity: 'Hard',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=Ea6o73uwVYM',
          users: []
        },
        3: {
          title: 'Abs',
          day: 'Day 3',
          duration: '30min',
          level: 'Beginner',
          intensity: 'Low',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=EkWBqgXUXDY',
          users: []
        },
      },
      usersById: {
        1: {
          name: 'Ginger',
          title: 'Team Lead',
          image: 'https://avatars0.githubusercontent.com/u/7268556?s=460&v=4',
          completedWorkouts: []
        },
        2: {
          name: 'Cat',
          title: 'Team Member',
          image: 'https://avatars0.githubusercontent.com/u/28492736?s=460&v=4',
          completedWorkouts: []
        }
      },
    };
  }

  render(){
    return (
      <div>
        <style jsx global>{`
          html, body, h1, h2, h3, h4, p, ul, li {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}</style>
      
        <Switch>
          <Route component={Error404} />
          <Route exact path='/' component={Welcome} /> />
          <Route path='/challenge'
            render={()=> <ChallengeHome workoutList={this.state.workoutsById}  userList={this.state.usersById} /> } />
        </Switch>
      </div>
    );
  }
}


export default App;


// <SiteNav />
