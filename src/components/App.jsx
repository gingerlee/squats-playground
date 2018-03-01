import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Welcome from './Welcome';
import Home from './Home';
import WorkoutDetail from './WorkoutDetail';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      workoutList: [
        {
          title: 'Jump!',
          day: 'Day 1',
          duration: '20min',
          image: '',
          videoLink: ''
        },
        {
          title: 'Squat!',
          day: 'Day 2',
          duration: '25min',
          image: '',
          videoLink: ''
        },
      ]
    };
  }

  render(){
    return (
      <div>
        <style global jsx>{`
          html, body, h1, h2, h3, h4, p, ul, li {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}</style>
        <Switch>
          <Route exact path='/' render={()=><Welcome />} />
          <Route exact path='/home' render={()=><Home workoutList={this.state.masterWrokoutList} />} />
          <Route exact path='/workout-detail' render={()=><WorkoutDetail />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
