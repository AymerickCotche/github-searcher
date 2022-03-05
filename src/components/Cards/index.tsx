// == Import
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './styles.scss';
import Card from 'src/components/Card';
// == Type
import { Repo } from '../../type';

type MyProps = {
  repos: Repo[];
};
// == Composant
const Cards = ({ repos }: MyProps) => {
  const jsxCards = repos.map((repo) => <Card repo={repo} key={repo.id} />);
  return <div className="cards">{jsxCards}</div>;
};

Cards.propTypes = {
  repos: PropTypes.array.isRequired,
};

// == Export
export default Cards;
