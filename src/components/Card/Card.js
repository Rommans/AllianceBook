import { Link } from 'react-router-dom';

import classes from './card.module.scss';

const Card = (props) => {
    const { imgUrl, name, id } = props;

    return (
        <div className={classes.card}>
            <Link to={`/characters/${id}`}>
                <p>{name}</p>
            </Link>
            <p>{id}</p>
            <img src={imgUrl} alt={`${name}`}/>
        </div>
    );
};

export default Card;