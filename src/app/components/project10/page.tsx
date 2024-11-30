//http://localhost:3000/api/auth/callback/github
// terminal cmd run npm exec auth secret 
// Login and Sign up
// api/auth/[...nextauth]/route.ts
// components/SessionWrapper.tsx
// components/login/authComponents.tsx or SignOutComponents.tsx
// lib/auth.ts
//.env.local

"use client";

import { SessionProvider } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}

function Login() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          {isAuthenticated ? "Welcome Back!" : "Login or Sign Up"}
        </h1>
        <p className="mt-4 text-center text-gray-600">
          {isAuthenticated
            ? `You are logged in as ${session?.user?.name || "User"}.`
            : "Sign in with your GitHub or Google account."}
        </p>
        <div className="mt-6 flex justify-center">
          {isAuthenticated ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Sign In with GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
