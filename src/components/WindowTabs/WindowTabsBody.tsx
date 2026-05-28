import { ReactNode } from "react";

interface WindowTabsBodyProps {
  body: ReactNode;
}

function WindowTabsBody({ body }: WindowTabsBodyProps) {

  return (
    <div className="window-body">
      <div>{body}</div>
    </div>
  );
}
export default WindowTabsBody;