// == Import
import * as React from 'react';
import './styles.scss';

type MyProps = {
  setResultsNb: Function;
  resultsNbValue: number;
};
// == Composant
const BtnMoreResults = ({ setResultsNb, resultsNbValue }: MyProps) => {
  const handleClickMoreResults = () => {
    setResultsNb(resultsNbValue + 9);
  };
  return (
    <div
      onClick={handleClickMoreResults}
      className="btnMore"
    >
      More results
    </div>
  );
};

// BtnMoreResults.propTypes = {
//   repos: PropTypes.array.isRequired,
// };

// == Export
export default BtnMoreResults;
