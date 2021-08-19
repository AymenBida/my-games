import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
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

  useEffect(() => {
  }, []);

  return (
    <>
      <ToastContainer />
      {checkIfFavourite(gameId)
        ? (
          <button
            type="button"
            className="btn btn-sm btn-danger rounded-pill px-3 mb-3"
            onClick={callDeleteFavourite}
          >
            Delete Favourite
          </button>
        )
        : (
          <button
            type="button"
            className="btn btn-sm btn-success rounded-pill px-3 mb-3"
            onClick={callAddFavourite}
          >
            Add favourite
          </button>
        )}
    </>
  );
};

Favourite.propTypes = {
  gameId: propTypes.number.isRequired,
};

export default Favourite;
