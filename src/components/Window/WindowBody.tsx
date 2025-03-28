import { WindowProps } from "../../types";

function WindowBody(props: WindowProps) {
  const { heading, body } = props;
  return (
    <div className="window-body">
      <h1>{heading}</h1>
      <p>{body}</p>
    </div>
  );
}
export default WindowBody;