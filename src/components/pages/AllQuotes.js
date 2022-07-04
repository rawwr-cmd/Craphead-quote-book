import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "author1", text: "text1" },
  { id: "q2", author: "author2", text: "text2" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
