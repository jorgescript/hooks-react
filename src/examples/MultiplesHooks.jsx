import { useConter } from "../useState/hooks/useCounter";
import { useFetch } from "./hooks/useFetch";
import { Quote } from "./Quote";

export const MultiplesHooks = () => {
  const {
    state: { counter },
    handleAdd,
  } = useConter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <h2>Quote: {counter}</h2>
      {isLoading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {data && data.map((item) => <Quote key={item.quote_id} item={item} />)}
      {data && (
        <button onClick={handleAdd} className="btn btn-primary">
          Next Quote
        </button>
      )}
    </>
  );
};
