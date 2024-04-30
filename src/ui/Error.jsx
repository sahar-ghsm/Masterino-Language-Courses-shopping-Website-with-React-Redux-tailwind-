import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>SOMETHING WENT WRONG</h1>
      <h2>{error.data || error.message}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Error;
