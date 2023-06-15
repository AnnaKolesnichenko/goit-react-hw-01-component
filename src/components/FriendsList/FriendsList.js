import PropTypes from 'prop-types';
import FriendListItem from '../FriendLisItem/FriendListItem';

import './friendsList.css';

const FriendsList = (props) => {
    const {friends} = props;

    const friendList = friends.map((friend) => {
        let className = 'status';
        if(friend.isOnline) {
            className += ' active';
        }
        return (
            <div>
                <FriendListItem 
                    className={className} 
                    avatar={friend.avatar} 
                    name={friend.name}
                />
            </div>
        )
    })

    console.log(friendList);

    return (
        <ul class="friend-list">
            {/*<!-- Произвольное кол-во FriendListItem -->*/}
            {friendList}
        </ul>
    )
};

FriendsList.propTypes = {
    friends: PropTypes.object,
};

export default FriendsList;