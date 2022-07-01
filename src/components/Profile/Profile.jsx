import { Avatar, Description, Container, Username, DescriptionText, Stats, StatItem, StatLabel, StatValue } from './Profile.styled';

export const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <Username>{username}</Username>
        <DescriptionText>@{tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
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