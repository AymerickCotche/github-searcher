// == Import
import * as React from 'react';
import './styles.scss';

type MyProps = {
  counter: number;
};
// == Composant
const Message = ({ counter }: MyProps) => {
  let message = 'Effectuez une recherche';
  if (counter > 0) message = `La recherche a donnée ${counter} résultats`;
  return (
    <div className="message">
      <p className="message__text">{message}</p>
    </div>
  );
};

// == Export
export default Message;
