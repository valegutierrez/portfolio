interface ButtonProps {
  url: string;
  label: string;
  secondary?: boolean;
  smaller?: boolean;
}

function Button(props: ButtonProps) {
  const { url, label, secondary, smaller } = props;
  return (
    secondary ? (
      <button className={`button button-secondary ${smaller ? "smaller" : ""}`} onClick={() => window.open(url, '_blank')}>
        {label}
      </button>
    ) : (
      <button className={`button ${smaller ? "smaller" : ""}`} onClick={() => window.open(url, '_self')}>
        {label}
      </button>
    )
  );
}
export default Button;