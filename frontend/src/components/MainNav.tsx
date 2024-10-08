import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import OverlayLoader from "./ui/OverlayLoader";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="relative">
      {isLoading && <OverlayLoader />}
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <Button
            variant="ghost"
            className="font-bold hover:text-orange-500 hover:bg-white"
            onClick={async () => await loginWithRedirect()}
          >
            Log in
          </Button>
        )}
      </span>
    </div>
  );
};

export default MainNav;
