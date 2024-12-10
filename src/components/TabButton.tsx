import React, { memo } from "react";
type TabPorops = {
  tabName: string;
  tabIndex: number;
  onClick: () => void;
  activeTabIndex: number;
};
function TabButton({
  tabIndex,
  onClick,
  activeTabIndex,
  tabName,
}: TabPorops) {
  return (
    <>
      <button
        onClick={onClick}
        className={`rounded-sm px-6 py-2 border border-black border-b-0 ${tabIndex === activeTabIndex ? "" : "border-0"} `}
      >
        {tabName}
      </button>
    </>
  );
}
export default memo(TabButton);