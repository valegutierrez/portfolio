import { WindowTabsProps } from "../../types";

function WindowTabsHeader(props: WindowTabsProps) {
  const { options, activeTab, setActiveTab } = props;
  return (
    <div className="window-header space-between nopadding">
      <div>
        <div className="window-header-tabs">
          {options.map((option) => (
            <button
              className={`window-tab ${activeTab === option.label ? 'active' : ''}`}
              onClick={() => setActiveTab(option.label)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="window-options">
        <i className="ri-close-large-line"></i>
      </div>
    </div>
  );
}
export default WindowTabsHeader;