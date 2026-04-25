import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>,
)
