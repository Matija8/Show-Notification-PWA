import { SiteHead } from 'components/site-head';
import type { NextPage } from 'next';
import { useRef } from 'react';

// TODO
let currentActiveNotification: Notification | null = null;

const Home: NextPage = (): JSX.Element => {
  const textAreaRef: React.Ref<HTMLTextAreaElement> = useRef(null);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SiteHead title="Notification Shower!" />
      <main
        style={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          // margin: 'auto 1rem',
          width: '80%',
          minWidth: '200px',
          maxWidth: '800px',
        }}
      >
        <textarea
          style={{ flexGrow: 1, height: '60vh' }}
          rows={5}
          ref={textAreaRef}
        ></textarea>
        <button
          onClick={() => {
            const text = textAreaRef.current?.value;
            if (!text) {
              closeNotificationIfOpen();
              return;
            }
            show(text);
          }}
        >
          Show <br /> Notification
        </button>
      </main>
    </div>
  );
};

function closeNotificationIfOpen() {
  currentActiveNotification && currentActiveNotification.close();
}

async function show(text: string) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API
  if (text === currentActiveNotification?.title) {
    return;
  }
  if (!Notification) {
    alert("Your browser doesn't support notifications!?");
  }
  if (Notification.permission !== 'granted') {
    const res = await Notification.requestPermission();
    if (res !== 'granted') {
      alert('You need to allow notifications for this demo to work!');
      return;
    }
    show(text);
    return;
  }
  closeNotificationIfOpen();
  currentActiveNotification = new Notification(text, { body: 'Body!' });
}

export default Home;
