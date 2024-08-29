// components/LoginButton.tsx
import { signIn, signOut, useSession } from "next-auth/react";

const GoogleLoginButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Hello, {session.user?.name}</p>
        <button onClick={() => signOut()}>Log Out</button>
      </div>
    );
  }

  return (
    <div className="border w-fit h-fit p-2">
      <button onClick={() => signIn("google")}>Log In with Google</button>
    </div>
  );
};

export default GoogleLoginButton;
