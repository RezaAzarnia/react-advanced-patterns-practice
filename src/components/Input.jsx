import { memo } from "react"

function Input({ name, label, errorData, onChange, value }) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="capitalize">{label}</label>
            <input type="text" name={name} onChange={onChange} value={value}
                className="p-1.5 border border-gray-500 outline-none border-1 focus:shadow-gray-600 focus:shadow-sm rounded-md transition-shadow" />
            {
                errorData && errorData.type === "error" &&
                <span className="text-red-500 min-h-2">{errorData && errorData[name]}</span>
            }
        </div>
    )
}
export default memo(Input)