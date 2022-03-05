import { SiteHead } from 'components/site-head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className={``}>
      <SiteHead title="Notification Shower!" />
      <main
        style={{
          paddingTop: '4rem',
          height: '99vh',
          display: 'grid',
          placeContent: 'start center',
        }}
      >
        WORKS!
      </main>
    </div>
  );
};

export default Home;
