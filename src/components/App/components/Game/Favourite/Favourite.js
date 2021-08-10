import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import addFavourite from '../../../../../api/addFavourite';
import deleteFavourite from '../../../../../api/deleteFavourite';
import * as fav from '../../../../../redux/actions/FAVOURITES';
import toast from '../../../../MyToaster/MyToaster';

const Favourite = ({ gameId }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.loginStatus);
  const favourites = useSelector((state) => state.favourites);

  const callAddFavourite = async () => {
    const response = await addFavourite(gameId, token);
    if (response.status === 201) {
      dispatch(fav.addFavourite(gameId));
      toast(response.data.message, 'success');
    } else {
      toast(response.data.message, 'error');
    }
  };

  const callDeleteFavourite = async () => {
    const response = await deleteFavourite(gameId, token);
    if (response.status === 204) {
      dispatch(fav.deleteFavourite(gameId));
      toast('Game successfully removed from favourites!', 'warning');
    } else {
      toast(response.data.message, 'error');
    }
  };

  const checkIfFavourite = (gameIdToTest) => {
    if (!Array.isArray(favourites)) return undefined;

    return favourites.find((id) => id === gameIdToTest);
  };

  return (
    <>
      <ToastContainer />
      {checkIfFavourite(gameId)
        ? <button type="button" onClick={callDeleteFavourite}>hihihi</button>
        : <button type="button" onClick={callAddFavourite}>hahaha</button>}
    </>
  );
};

Favourite.propTypes = {
  gameId: propTypes.number.isRequired,
};

export default Favourite;
