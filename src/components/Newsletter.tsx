import React, { useState } from 'react';
import styles from '../styles/components/Newsletter.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../services/api';
import notifications from '../utils/notify';
const Newsletter = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const [errorName, setErrorName] = useState({});
  const [errorEmail, setErrorEmail] = useState({});

  async function handleSendData() {

    function formValidation() {
      const errorName: any = {}
      const errorEmail: any = {}

      let formValido = true;

      if (!name || name === '') {
        errorName.vazio = 'Insert a Name';
        notifications('error', 'Insert a Name')
        formValido = false;
      }
      if (!email || email === '') {
        errorEmail.vazio = 'Insert a Email';
        notifications('error', 'Insert a Email')
        formValido = false;
      }
      setErrorName(errorName);
      setErrorEmail(errorEmail);

      return formValido;
    }

    const formValido = formValidation();

    if (formValido) {
      await api.post('/', {
        name: name,
        email: email
      }).then(() => {
        notifications('success', 'Data send Success!')
      }).catch(err => {
        notifications('error', 'Error Send Data to API')
      })
    }
  }

  return (

    <div
      className={styles.content} >
      <ToastContainer />
      <section>
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <span>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </span>
        <form>
          <input
            type="text"
            maxLength={30}
            onChange={(e) => { setName(e.target.value) }}
            value={name}
            placeholder="Your Name" />
          {Object.keys(errorName).map(key => {
            return <div style={{ color: "red" }}>
              {errorName[key]} </div>
          })}
          <input
            type="text"
            maxLength={30}
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            placeholder="Your Email" />
          {Object.keys(errorEmail).map(key => {
            return <div style={{ color: "red" }}>
              {errorEmail[key]} </div>
          })}

          <button type='submit' onClick={handleSendData}>Send</button>
        </form>

      </section>
    </div>

  )
}

export default Newsletter






