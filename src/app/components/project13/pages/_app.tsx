import ClerkAppProvider from '@/app/components/project13/components/clerkprovider';  // Import ClerkAppProvider
import '@/styles/globals.css';

export default function App({ Component, pageProps }: any) {
  return (
    <ClerkAppProvider>   {/* Wrap the whole app with ClerkAppProvider */}
      <Component {...pageProps} />
    </ClerkAppProvider>
  );
}
