import { Page, Section } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';

export const App = () => {
  return (
    <Page>
      <Section>
        <Profile user={user} />
      </Section>
    </Page>
  );
};
