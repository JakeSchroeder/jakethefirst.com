import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";

const Replay = () => {
  const router = useRouter();
  const { setAuth } = useContext(AuthContext);
  useEffect(() => {
    setAuth(true);
    router.push("/");
  }, []);
  return <></>;
};

export default Replay;
