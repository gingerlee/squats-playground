// import React from 'react';
// import Hero from './components/Hero';
// import WorkoutVideo from './components/WorkoutVideo';
// import TeamList from './components/TeamList';
// import workoutDetailImage from './../assets/images/workout-detail-image.jpg';
//
// import PropTypes from 'prop-types';
//
// function WorkoutDetail(props){
//   return(
//     <div>
//       <Hero
//         heroImage={workoutDetailImage}
//         heroTitle={'Workout of the Day'} />
//       <div className='intro'>
//         <h3 className='header'>Challenge: 21 Days of Squats!</h3>
//         <p className='flow-text center'>Your daily workout details below</p>
//       </div>
//
//       <div className='workout-list'>
//         <WorkoutList workoutList={props.workoutList} />
//       </div>
//
//       <div className='team-list'>
//         <TeamList teamList={props.teamList} />
//       </div>
//
//       <style jsx>{`
//         .intro {
//           margin: 3em;
//         }
//         .header {
//           text-align: center;
//           margin-bottom: 30px;
//         }
//           .team-list  {
//             margin: 0 15vw 20vh 15vw;
//           }
//           .workout-list  {
//             margin: 0 15vw 20vh 15vw;
//           }
//       `}</style>
//     </div>
//   );
// }
//
// WorkoutDetail.propTypes = {
//   workout: PropTypes.array
//   teamList: PropTypes.array
// };
//
// export default WorkoutDetail;
