interface LabelProps {
  label: string;
  secondary?: boolean;
}

function Label(props: LabelProps) {
  const { label, secondary } = props;

  return (
    <div className={`label ${secondary ? "secondary" : ""}`}>
      <p>{label}</p>
    </div>
  )
}
export default Label;