import React from "react"

type ButtonProps = {
  iconTitle?: string
  text: string
  variant?: "primary" | "danger" | "info" | "success"
}

const VARIANT_BACKGROUNDS = {
  primary: "bg-slate-600",
  danger: "bg-red-500",
  info: "bg-blue-500",
  success: "bg-emerald-500",
}
export default function Button({
  iconTitle,
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`${
        VARIANT_BACKGROUNDS[variant as keyof typeof VARIANT_BACKGROUNDS]
      } flex justify-center items-center px-6 py-3 rounded-md shadow-md shadow-black ease-linear duration-300 hover:scale-105 hover:text-black`}>
      {iconTitle && (
        <span className="material-symbols-outlined mr-2 font-bold">
          {iconTitle}
        </span>
      )}
      <span>{text}</span>
    </button>
  )
}
