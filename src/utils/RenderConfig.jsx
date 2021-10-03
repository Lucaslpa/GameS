import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from '../style/Theme';
import { Contexts } from '../Contexts';

export const renderConfig = (Children) =>
  render(
    <ThemeProvider theme={Theme}>
      <Contexts>
        <Router>{Children}</Router>

      </Contexts>
    </ThemeProvider>
  );
