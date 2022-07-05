import { Page, Section } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends';

export const App = () => {
  return (
    <Page>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
    </Page>
  );
};
