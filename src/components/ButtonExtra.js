function ButtonExtra({ handleClick }) {
  return (
    <button
      type="button"
      class="btn btn-primary"
      style={{ margin: 4 + "px" }}
      onClick={() => handleClick()}
    >
      Horas Extra
    </button>
  );
}

export default ButtonExtra;
