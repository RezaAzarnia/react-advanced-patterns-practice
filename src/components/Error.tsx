import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
  message: string;
}

export default function Error() {
  const error = useRouteError() as Props;

  return (
    <>
      <div className="max-w-screen-xl p-8 m-auto">
        <Navbar />
        <div className="my-12">
          <h3 className="text-center">some error eccoured</h3>
          <h1 className="p-3 my-1 text-2xl text-center text-white capitalize bg-red-500 rounded-md">
            {error?.message.includes("Failed to fetch")
              ? "check your internet connection please"
              : error?.message}
          </h1>
        </div>
      </div>
    </>
  );
}
