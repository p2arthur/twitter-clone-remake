import { AppProps } from 'next/app';
import Layout from '@/pages/components/Layout';
import Home from '@/pages/components';
import { LoginModal } from '@/pages/components/modals/LoginModal';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';
import RegisterModal from '@/pages/components/modals/RegisterModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
