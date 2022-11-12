import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <p>
            Welcome {user.attributes?.email}
            <button onClick={signOut}>Sign Out</button>
          </p>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center"></footer>
    </div>
  );
};

export default withAuthenticator(Home);
