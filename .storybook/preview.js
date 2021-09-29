import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
