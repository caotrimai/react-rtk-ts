import React from 'react';
import { store } from '~/app/store';
import { Provider } from 'react-redux';
import GlobalStyles from '~/components/GlobalStyle';

// @ts-ignore
export default function RootWrapper({ children }) {
  return (
    <Provider store={store}>
      <GlobalStyles>
        {children}
      </GlobalStyles>
    </Provider>
  );
}