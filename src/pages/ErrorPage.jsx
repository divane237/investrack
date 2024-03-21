import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="bg-stone-200 flex flex-col items-center justify-center min-h-dvh gap-4"
    >
      <h1 className="text-2xl sm:text-5xl font-semibold ">Oops!</h1>
      <p className="text-sm sm:text-base ">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm sm:text-base">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
