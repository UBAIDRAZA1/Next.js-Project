import { ClerkProvider } from '@clerk/nextjs';

const ClerkAppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClerkAppProvider;
