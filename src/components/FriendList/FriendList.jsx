import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListWrapper } from './FriendList.styled';

const FriendList = ({friends}) => {
    return (
        <FriendListWrapper>
            {friends.map(friend => (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />)
            )}
        </FriendListWrapper>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}

export default FriendList;