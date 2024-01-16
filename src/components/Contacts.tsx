/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (inputErrors) {
      setTimeout(() => {
        setInputErrors(false);
      }, 4000);
    }
  }, [inputErrors]);

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }
  }, [isSent]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setInputErrors(true);
      return;
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    };

    setIsLoading(true);
    const result = await emailjs.send(
      'service_mwjn5sb',
      'template_bhq5mr9',
      templateParams,
      'i100fPMzQzLJ8RQ2S',
    );

    if (result.status === 200) {
      setIsSent(true);
      setIsError(false);
      setEmail('');
      setName('');
      setMessage('');
    } else {
      setIsSent(false);
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full mb-16 mt-10">
      <div className="w-full flex items-center justify-center">
        <form
          className="flex flex-col max-w-[70vh] p-6 items-center
          rounded-lg shadow-lg bg-[#fffffffb] w-[90%] dark:bg-slate-600"
        >
          <div className="flex flex-col w-[95%] max-w-[60vh]">
            <div className="flex justify-between items-center  mt-2">
              <label htmlFor="name" className="font-mono">
                Nome
              </label>
              {isSent && (
                <p
                  className="text-indigo-700 dark:text-indigo-400
                font-bold font-mono transition-all"
                >
                  {t('success')}
                </p>
              )}
              {isError && (
                <p className="text-red-700 font-bold font-mono transition-all">
                  {t('error')}
                </p>
              )}
              {inputErrors && (
                <p className="text-red-700 font-bold font-mono transition-all">
                  {t('inputError')}
                </p>
              )}
              {isLoading ? (
                <div className="loading-spinner w-10 h-10 mb-1" />
              ) : (
                <div className="w-10 h-10 mb-1" />
              )}
            </div>
            <input
              type="text"
              id="name"
              required
              className=" h-12
           rounded-lg bg-[#e0e1ffd5] p-2 dark:bg-slate-500"
              placeholder={ t('name') }
              onChange={ (e) => setName(e.target.value) }
              value={ name }
            />
          </div>
          <div className="flex flex-col w-[95%] max-w-[60vh]">
            <label htmlFor="email" className="mb-2 mt-5 font-mono ">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="h-12 rounded-lg bg-[#e0e1ffd5] p-2 dark:bg-slate-500"
              placeholder={ t('email') }
              onChange={ (e) => setEmail(e.target.value) }
              value={ email }
            />
          </div>
          <div className="flex flex-col w-[95%] max-w-[60vh]">
            <label htmlFor="message" className="mb-2 mt-5 font-mono">
              Mensagem
            </label>
            <textarea
              id="message"
              className="h-64 p-2 rounded-lg bg-[#e0e1ffd5] dark:bg-slate-500 resize-none"
              maxLength={ 500 }
              required
              placeholder={ t('message') }
              onChange={ (e) => setMessage(e.target.value) }
              value={ message }
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-700 text-white p-1 rounded-md w-36 mt-5
          hover:scale-125 transition-all"
            onClick={ handleSubmit }
          >
            {t('buttonSubmit')}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contacts;
