function Button({ handleClick }) {
  return (
    <button
      type="button"
      class="btn btn-primary"
      style={{ margin: 4 + "px" }}
      onClick={() => handleClick()}
    >
      Tomar Turno
    </button>
  );
}

export default Button;
