import React, { useMemo } from "react"
import { generateRandomNumber } from "../../utils/helpers"

type ProfilePictureProps = {}

export default function ProfilePicture() {
  const src = useMemo(() => {
    const randomNumber = generateRandomNumber(1, 99)
    const gender = generateRandomNumber() % 2 === 0 ? "men" : "women"
    return `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`
  }, [])

  return (
    <div className="rounded-full overflow-hidden border-4 w-20">
      <img src={src} alt="" />
    </div>
  )
}
