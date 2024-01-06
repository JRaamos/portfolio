import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex items-center justify-center mb-16 mt-10">
      <form
        className="flex flex-col max-w-[70vh] p-6 items-center
        rounded-lg shadow-lg bg-[#fffffffb] w-[90%] dark:bg-slate-600"
      >
        <div className="flex flex-col w-[95%] max-w-[60vh]">
          <label htmlFor="name" className="mb-2 mt-2 font-mono">
            Nome
          </label>
          <input
            type="text"
            id="name"
            required
            className=" h-12
           rounded-lg bg-[#e0e1ffd5] p-2 dark:bg-slate-500"
            placeholder={ t('name') }
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
          />
        </div>
        <div className="flex flex-col w-[95%] max-w-[60vh]">
          <label htmlFor="message" className="mb-2 mt-5 font-mono">
            Mensagem
          </label>
          <textarea
            id="message"
            className="h-52 p-2 rounded-lg bg-[#e0e1ffd5] dark:bg-slate-500"
            maxLength={ 500 }
            required
            placeholder={ t('message') }
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-700 text-white p-1 rounded-md w-36 mt-5
          hover:scale-125 transition-all"
        >
          {t('buttonSubmit')}
        </button>
      </form>
    </div>
  );
}
export default Contacts;
