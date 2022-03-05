// == Import
import * as React from 'react';
import './styles.scss';

// == Composant
const Faq = () => {
  const qrs = [
    { q: 'A quoi ça sert ?', r: 'Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.' },
    { q: 'Comment faire une recherche ?', r: 'Sur la page recherche, complétez le champ de recherche et valider la recherche.' },
    { q: 'Puis-je chercher n\'importe quel terme ?', r: 'Oui, c\'est fou.' },
  ];
  const jsxList = qrs.map((qr) => (
    <li className="faq__qr">
      <p className="faq__qr__q">{qr.q}</p>
      <p className="faq__qr__r">{qr.r}</p>
    </li>
  ));
  return (
    <ul className="faq">
      {jsxList}
    </ul>
  );
};

// == Export
export default Faq;
