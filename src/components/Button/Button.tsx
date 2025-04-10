interface ButtonProps {
  url: string;
  label: string;
  secondary?: boolean;
  targetBlank?: boolean;
}

function Button(props: ButtonProps) {
  const { url, label, secondary, targetBlank } = props;
  return (
    secondary ? (
      <button className="button button-secondary" onClick={() => window.open(url, targetBlank ? "_blank" : "_self")}>
        {label}
      </button>
    ) : (
      <button className="button" onClick={() => window.open(url, targetBlank ? "_blank" : "_self")}>
        {label}
      </button>
    )
  );
}
export default Button;