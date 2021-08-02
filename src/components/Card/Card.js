import propTypes from 'prop-types';
import defaultImage from './assets/defaultImage.png';

const Card = (props) => {
  const { title, cover, year } = props;
  const style = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <div>
      <div data-testid="cover" style={style} />
      <h1 data-testid="title">{title}</h1>
      <p data-testid="yearLabel">Year</p>
      <p data-testid="year">{year}</p>
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
