import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from '../style/Theme';

export const renderConfig = (Children) =>
  render(
    <ThemeProvider theme={Theme}>
      <Router>{Children}</Router>
    </ThemeProvider>
  );
