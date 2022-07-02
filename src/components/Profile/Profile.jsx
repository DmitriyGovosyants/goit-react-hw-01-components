import PropTypes from 'prop-types';
import { Avatar, Description, Container, UserName, UserInfo, Stats, StatItem, StatLabel, StatValue } from './Profile.styled';

export const Profile = ({ user }) => {
  const { avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png", username, tag, location, stats } = user;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatValue>{stats.followers}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatValue>{stats.views}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatValue>{stats.likes}</StatValue>
        </StatItem>
      </Stats>
    </Container>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })
  })
}