import React from "react";
type TabPorops = {
  name: string;
  index: number;
  onClick: () => void;
  activeTab: number;
};
export default function TabButton({
  index,
  onClick,
  activeTab,
  name,
}: TabPorops) {
  return (
    <>
      <button
        onClick={onClick}
        className={`rounded-sm px-6 py-2 border border-black border-b-0 ${index === activeTab ? "" : "border-0"} `}
      >
        {name}
      </button>
    </>
  );
}
