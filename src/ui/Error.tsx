import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-5 text-sm font-semibold text-red-400">
      <h3>SOMETHING WENT WRONG</h3>
      <p className="text-center">{error.data || error.message}</p>
      <button
        className="rounded-lg bg-green-200 px-4 py-2 text-slate-700"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default Error;
