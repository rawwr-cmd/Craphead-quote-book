import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "author1", text: "text1" },
  { id: "q2", author: "author2", text: "text2" },
];

const QuoteDetails = () => {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No Crap Found At This Address!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            LOAD COMMENTS
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
