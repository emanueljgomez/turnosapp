function Button({ handleClick }) {
  return (
    <button type="button" class="btn btn-primary" onClick={() => handleClick()}>
      Click me
    </button>
  );
}

export default Button;
