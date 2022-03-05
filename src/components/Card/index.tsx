// == Import
import * as React from 'react';
import './styles.scss';
// == Type
import { Repo } from '../../type';

type MyProps = { repo: Repo };
// == Component
const Card = ({ repo }: MyProps) => (
  <a href={repo.html_url} target="_blank" rel="noreferrer">
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
        <p className="card__content__stars">{repo.stargazers_count}</p>
      </div>
    </div>
  </a>
);

// == Export
export default Card;
