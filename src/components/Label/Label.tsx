interface LabelProps {
  label: string;
}

function Label(props: LabelProps) {
  const { label } = props;

  return (
    <div className="label">
      <p>{label}</p>
    </div>
  )
}
export default Label;