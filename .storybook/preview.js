export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

// .storybook/preview.js

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/utils';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story/>
    </ThemeProvider>
  )
];