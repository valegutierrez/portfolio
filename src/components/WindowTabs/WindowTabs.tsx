import WindowTabsHeader from "./WindowTabsHeader";
import WindowTabsBody from "./WindowTabsBody";
import { WindowTabsProps } from "../../types";

function WindowTabs(props: WindowTabsProps) {
  const { options, activeTab, setActiveTab } = props;
  return (
    <div className="window">
      <WindowTabsHeader
        options={options}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <WindowTabsBody
        body={
          options.find((option) => option.label === activeTab)?.body
        }
      />
    </div>
  );
}
export default WindowTabs;