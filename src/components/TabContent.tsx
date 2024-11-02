import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function TabContent({ children }: Props) {
  const [likes, setLikes] = useState<number>(0);

  return (
    <>
      <div className="w-full h-full max-w-4xl p-4 m-auto border border-black rounded-md min-h-64">
      <span>{likes}</span>
      <button onClick={() => setLikes((prev) => prev + 1)}>💓</button>
        {children}
      </div>
    </>
  );
}