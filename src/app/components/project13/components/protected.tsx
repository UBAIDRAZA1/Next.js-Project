import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default ProtectedPage;
