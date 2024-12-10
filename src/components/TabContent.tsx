import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function TabContent({ children }: Props) {
  return (
    <>
      <div className="w-full h-full max-w-4xl p-4 m-auto border border-black rounded-md min-h-64">
        {children}
      </div>
    </>
  );
}