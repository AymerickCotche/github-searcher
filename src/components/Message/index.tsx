// == Import
import * as React from 'react';
import './styles.scss';

type MyProps = {
  counter: number;
  hasResults: boolean
};
// == Composant
const Message = ({ counter, hasResults }: MyProps) => {
  let message = 'Do a search';
  if (counter > 1 && hasResults) message = `Search returned ${counter} results`;
  if (counter <= 1 && hasResults) message = `Search returned ${counter} result`;
  return (
    <div className="message">
      <p className="message__text">{message}</p>
    </div>
  );
};

// == Export
export default Message;
