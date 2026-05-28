import { WindowProps } from "../../types";

function WindowBody(props: WindowProps) {
  const { heading, subheading, body, centered } = props;
  return (
    <div className="window-body">
      {heading && 
        <h1>{heading}</h1>
      }
      {subheading &&
        <h2>{subheading}</h2>
      }
      <div className={centered ? "centered" : undefined}>
        {body}
      </div>
    </div>
  );
}
export default WindowBody;