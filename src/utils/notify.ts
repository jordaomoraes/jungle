import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import stylesMsg from '../styles/components/Toast.module.css';

function notifications(tipo: string, msg: string) {
    const styleToast = stylesMsg.message;
    const styleBarra = stylesMsg.barra;
    const styleBarraErro = stylesMsg.barraErro;


    if (tipo === 'success') {
      toast(msg, {
        className: styleToast,
        progressClassName: styleBarra,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else if (tipo === 'error') {
      toast(msg, {
        className: styleToast,
        progressClassName: styleBarraErro,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  export default notifications;