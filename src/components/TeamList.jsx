import React from 'react';
import User from './User.jsx';
import PropTypes from 'prop-types';

function TeamList(props) {
  return (
    <div>
      <div className='tiles'>
        {props.teamList.map((user, index) =>
          <User
            name={user.name}
            title={user.title}
            image={user.image}
            key={index} />
        )}
      </div>
      <style jsx>{`
          .tiles {
          display: grid;
          grid-gap: 100px;
          grid-template-columns: repeat(2, 1fr);
          margin: 0 2em;
        }
      `}</style>
    </div>
  );
}

TeamList.propTypes = {
  teamList: PropTypes.object
};

export default TeamList;
