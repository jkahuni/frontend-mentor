import styles from './qr-code-ui.module.scss';

/* eslint-disable-next-line */
export interface QrCodeUiProps { }

export function QrCodeUi(props: QrCodeUiProps) {
  return (
    <div className={`${styles['container']} border-radius-1`}>
      <img src="/image-qr-code.png" alt="Frontend Mentor QR Code" className='border-radius-1' />

      <div className={styles['text-content']}>
        <h1 className="color-primary fw-bold">Improve your front-end skills by building projects</h1>

        <p className='color-secondary fw-regular'>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCodeUi;
