function Contacts() {
  return (
    <div className="w-full flex items-center justify-center mb-16">
      <form className="flex flex-col w-full items-center">
        <div className="flex flex-col">
          <label htmlFor="name">
            Nome
          </label>
          <input type="text" id="name" required className="w-[60vh] h-10 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            Email
          </label>
          <input type="email" id="email" required className="w-[60vh] h-10 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">
            Mensagem
          </label>
          <textarea
            id="message"
            className="w-[60vh] h-52 p-2 rounded-lg"
            maxLength={ 500 }
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-700 text-white p-1 rounded-md w-36 mt-5
          hover:scale-125 transition-all"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
export default Contacts;
