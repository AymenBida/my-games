import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getFavourites from '../../../../../api/getFavourites';

const Favourite = () => {
  const { token } = useSelector((state) => state.loginStatus);

  const callFavourites = async () => {
    const data = await getFavourites(token);
    console.log(data);
  };

  useEffect(() => {
    callFavourites();
  }, []);

  // const addFavourite = () => {

  // };

  return (
    <button type="button">hahaha</button>
  );
};

export default Favourite;
