import './FriendList.css';
import friends from 'components/FriendList/friends.json';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ isOnline, name, avatar, id }) => (
        <li class="item" key={id}>
          <span
            class="status"
            style={{
              backgroundColor: isOnline ? 'green' : 'red',
            }}
          >
            {isOnline}
          </span>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
};

export default FriendListItem;
