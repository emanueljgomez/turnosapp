function ButtonExtra({ handleClick }) {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      style={{ margin: 4 + "px" }}
      onClick={() => handleClick()}
    >
      Horas Extra
    </button>
  );
}

export default ButtonExtra;
