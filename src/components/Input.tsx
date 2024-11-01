import { memo } from "react";

type Props = {
  name: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  errorData?: { success: boolean; [key: string]: string | boolean };
  type?: string;
};

function Input({
  name,
  label,
  errorData,
  onChange,
  value,
  type = "text",
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="capitalize">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="p-1.5 border border-gray-500 outline-none border-1 focus:shadow-gray-600 focus:shadow-sm rounded-md transition-shadow"
      />
      {errorData && !errorData.success && (
        <span className="text-red-500 min-h-2">
          {errorData && errorData[name]}
        </span>
      )}
    </div>
  );
}
export default memo(Input);
