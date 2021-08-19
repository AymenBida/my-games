import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card element', () => {
  describe('If rendered with just a title', () => {
    it('renders a div containing a default image, a title and unknown year', () => {
      const { getByTestId } = render(<Card title="Game Title" />);
      const cover = getByTestId('cover');
      const title = getByTestId('title');
      const yearLabel = getByTestId('yearLabel');
      const year = getByTestId('year');

      expect(cover.style.backgroundImage).toBe('url(defaultImage.png)');
      expect(title.textContent).toBe('Game Title');
      expect(yearLabel.textContent).toBe('Year');
      expect(year.textContent).toBe('Unknown');
    });
  });

  describe('If rendered with a cover', () => {
    it('renders correctly with the image provided in the cover', () => {
      const imageUrl = 'https://i.pinimg.com/236x/3a/02/68/3a02685be25e504ea6bd2848e2a9715c--jeux-ps-ps-games.jpg';

      const { getByTestId } = render(<Card title="Game Title" cover={imageUrl} />);
      const cover = getByTestId('cover');

      expect(cover.style.backgroundImage).toBe(`url(${imageUrl})`);
    });
  });

  describe('If rendered with a year', () => {
    it('renders correctly with the year provided', () => {
      const { getByTestId } = render(<Card title="Game Title" year="2021" />);
      const year = getByTestId('year');

      expect(year.textContent).toBe('2021');
    });
  });
});
