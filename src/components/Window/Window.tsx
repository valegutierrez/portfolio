import WindowHeader from "./WindowHeader";
import WindowBody from "./WindowBody";
import { WindowProps } from "../../types";

function Window(props: WindowProps) {
  const { className, heading, subheading, body } = props;
  return (
    <div className={`window ${className}`}>
      <WindowHeader />
      <WindowBody
        heading={heading}
        subheading={subheading}
        body={body}
      />
    </div>
  );
}
export default Window;