import PropTypes from 'prop-types';
import FriendListItem from '../FriendLisItem/FriendListItem';

import css from './friendsList.module.css';

const FriendsList = ({friends}) => {

    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem 
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar} 
                name={friend.name}/>
            ))}
        </ul>
    )
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired,
};

export default FriendsList;