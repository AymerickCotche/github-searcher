// == Import
import * as React from 'react';
import './styles.scss';
import { Repo } from '../../type';

type MyProps = { repo: Repo };
// == Composant
const Card = ({ repo }: MyProps) => (
  <div className="card">
    <div className="card__imgcontainer">
      <img
        src={repo.owner.avatar_url}
        className="card__imgcontainer__img"
        alt="avatar url"
        key={repo.id}
      />
    </div>

    <div className="card__content">
      <p className="card__content__name">{repo.name}</p>
      <p className="card__content__owner">{repo.owner.login}</p>
      <p className="card__content__desc">{repo.description}</p>
    </div>
  </div>
);

// == Export
export default Card;
