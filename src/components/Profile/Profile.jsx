import PropTypes from 'prop-types';
import {ProfileWrapper, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity} from './Profile.styled'

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileWrapper>
          <Description>
            <Avatar
              src={avatar}
              alt={username}
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
          </Description>

          <Stats>
            <StatsItem>
              <Label>Followers</Label>
              <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
              <Label>Views</Label>
              <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
              <Label>Likes</Label>
              <Quantity>{stats.likes}</Quantity>
            </StatsItem>
          </Stats>
        </ProfileWrapper>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;