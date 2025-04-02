import { WindowProps } from "../../types";

function WindowBody(props: WindowProps) {
  const { heading, subheading, body } = props;
  return (
    <div className="window-body">
      {heading && 
        <h1>{heading}</h1>
      }
      {subheading &&
        <h2>{subheading}</h2>
      }
      <p>{body}</p>
    </div>
  );
}
export default WindowBody;