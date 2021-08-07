import propTypes from 'prop-types';
import defaultImage from '../../assets/defaultImage.png';
import './style/card.scss';
import capitalize from '../../../../utilities/capitalize';

const Card = (props) => {
  const { title, cover, year } = props;
  const style = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <div className="card">
      <div className="card__cover" data-testid="cover" style={style} />
      <div className="card__detailsWrapper">
        <h1 className="card__title" data-testid="title">{capitalize(title)}</h1>
        <div className="card__yearWrapper">
          <p className="card__yearLabel" data-testid="yearLabel">Year</p>
          <p className="card__year" data-testid="year">{year}</p>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  cover: defaultImage,
  year: 'Unknown',
};

Card.propTypes = {
  title: propTypes.string.isRequired,
  cover: propTypes.string,
  year: propTypes.string,
};

export default Card;
