/* eslint-disable react/prop-types */
const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center -mt-20 gap-10 mx-5"
    >
      <input
        className="alura-input"
        required
        type="text"
        placeholder="insira seu nome..."
      />
      <input
        className="alura-input"
        required
        type="email"
        placeholder="insira seu email..."
      />
      <button type="submit" className="alura-button ">
        Seguir
      </button>
    </form>
  );
};

export default Form;
