import React from 'react';
import PropTypes from 'prop-types';

function WorkoutList(props) {
  return (
    <div>

      <div className='cards'>
        {props.workoutList.map((workout, index) =>
          <Workout
            name={workout.name}
            image={workout.image}
            key={index} />
        )}
      </div>
      <style jsx>{`
          .cards {
          display: grid;
          grid-gap: 30px;
          grid-template-columns: repeat(3, 1fr);
          margin: 0 3em;
        }
      `}</style>
    </div>
  );
}

WorkoutList.propTypes = {
  workoutList: PropTypes.array
};

export default WorkoutList;
