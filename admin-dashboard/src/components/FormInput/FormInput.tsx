import { useState } from "react"
import { InputType } from "../../utils/types"

type FormInputProps = {
  iconTitle: string
  placeholder: string
  type?: InputType
  value?: string
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}
export default function FormInput({
  iconTitle,
  placeholder,
  type,
  value,
  onChangeHandler,
  required = false,
}: FormInputProps) {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="w-full flex items-center border-b pb-2 gap-2">
      <span className="material-symbols-outlined">{iconTitle}</span>
      <input
        type={type ?? "text"}
        className="bg-transparent placeholder:font-semibold placeholder:text-gray-400 outline-none"
        placeholder={placeholder}
        value={value ?? inputValue}
        onChange={(e) =>
          onChangeHandler ? onChangeHandler(e) : setInputValue(e.target.value)
        }
        required={required}
      />
    </div>
  )
}
