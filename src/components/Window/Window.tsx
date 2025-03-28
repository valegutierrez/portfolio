import WindowHeader from "./WindowHeader";
import WindowBody from "./WindowBody";
import { WindowProps } from "../../types";

function Window(props: WindowProps) {
  const { heading, body } = props;
  return (
    <div className="window">
      <WindowHeader />
      <WindowBody
        heading={heading}
        body={body}
      />
    </div>
  );
}
export default Window;