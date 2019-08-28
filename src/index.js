import React from 'react';
import { StatusBar } from 'react-native';

import App from './App';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <App />
    </>
  );
}
