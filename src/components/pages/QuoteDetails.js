import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";

const QuoteDetails = () => {
  const { quoteId } = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
