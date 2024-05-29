import { render } from '@testing-library/react';

import QrCodeUi from './qr-code-ui';

describe('QrCodeUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QrCodeUi />);
    expect(baseElement).toBeTruthy();
  });
});
