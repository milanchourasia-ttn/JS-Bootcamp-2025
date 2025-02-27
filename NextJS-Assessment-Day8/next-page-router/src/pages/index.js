import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "./redux/quoteActions";

const Home = () => {
  const dispatch = useDispatch();
  const { quotes, loading, error } = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes()); // Fetch quotes on mount
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Q3.Implement Redux to fetch api 'https://dummyjson.com/quotes'.      </h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            "{quote.quote}" - <strong>{quote.author}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
