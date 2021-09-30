import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Theme from '../style/Theme';

export const renderConfig = (Children) =>
  render(<ThemeProvider theme={Theme}>{Children}</ThemeProvider>);
