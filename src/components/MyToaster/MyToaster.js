import { toast } from 'react-toastify';

const myToast = (text, type = 'alert') => {
  toast[type](text, {
    position: 'bottom-center',
    autoClose: 2000,
    closeButton: false,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    limit: 3,
  });
};

export default myToast;
