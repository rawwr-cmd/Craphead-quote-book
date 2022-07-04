import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const { quoteId } = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetails;
