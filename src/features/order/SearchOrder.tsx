import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleSearchOrder(e) {
    e.preventDefault();
    navigate(`order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={(e) => handleSearchOrder(e)}>
      <input onChange={(e) => setQuery(e.target.value)} />
    </form>
  );
}

export default SearchOrder;
