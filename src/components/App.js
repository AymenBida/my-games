import './App.scss';
import { useEffect } from 'react';
import getGames from '../api/getGames';
import Card from './Card/Card';

const App = () => {
  useEffect(() => {
    getGames().then((response) => console.log(response));
  }, []);
  return (<Card title="My game" />);
};

export default App;
