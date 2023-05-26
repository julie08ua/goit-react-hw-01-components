import { Item,Status,Avatar,Name } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status isOnline={isOnline}/>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </Item>
    )
}

export default FriendListItem;