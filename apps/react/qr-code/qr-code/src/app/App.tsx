// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QrCodeUi } from '@frontend-mentor/qr-code-ui';
import styles from './App.module.scss';

export function App() {
  return (
    <main className={styles['main-container']}>
      <QrCodeUi />
    </main>
  );
}

export default App;
