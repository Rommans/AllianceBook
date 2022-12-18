import { Link } from 'react-router-dom';

import classNames from 'classnames';
import classes from './card.module.scss';

const Card = (props) => {
  const { imgUrl, name, id } = props;

  return (
    <div className="bg-neutral-300 text-gray-900 p-5 text-center rounded-lg shadow-lg">
      <img src={imgUrl} alt={`${name}`} />
      <Link to={`/characters/${id}`}>
        <p className={classNames([classes.cardName], "font-bold text-base lg:text-lg inline-block relative")}>{name}</p>
      </Link>
    </div>
  );
};

export default Card;
