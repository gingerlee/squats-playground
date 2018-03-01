import React from 'react';
import User from './User.jsx';
import PropTypes from 'prop-types';

function MasterTeamList(props) {
  return (
    <div>

      <div className='cards'>
        {props.masterTeamList.map((user, index) =>
          <User
            name={user.name}
            image={user.image}
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

MasterTeamList.propTypes = {
  masterTeamList: PropTypes.array
};

export default MasterTeamList;
