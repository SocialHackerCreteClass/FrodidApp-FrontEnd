import React from "react"
import PropTypes from "prop-types"
import { cx } from "emotion"
import {
  imgWrapper,
  wrapper,
  marginBottom,
  avatarMobile,
  avatarImage,
  letters
} from "./styles"
import { UserType } from "../../type"

// Renders the Avatar with Image
const AvatarImage = ({ size = "medium", user, className }) => {
  return (
    <div className={cx(wrapper, { large: size === "large" }, className)}>
      <div className={imgWrapper}>
        <img src={user.image} alt="avatar" />
      </div>
    </div>
  )
}

AvatarImage.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["medium", "large"]),
  user: UserType
}

// Renders avatar with the letters
const AvatarText = ({ user }) => {
  const firstNameLetter = user.firstName.slice(0, 1)
  const lastNameLetter = user.lastName.slice(0, 1)
  return (
    <div className={cx(marginBottom)}>
      <a href="#" title={`${user.firstName} ${user.lastName}`}>
        <span className={cx(wrapper, avatarMobile)}>
          <span className={cx(avatarImage)}>
            <span className={cx(letters)}>
              {`${firstNameLetter}${lastNameLetter}`}
            </span>
          </span>
        </span>
      </a>
    </div>
  )
}

AvatarText.propTypes = {
  user: UserType
}

const Avatar = ({ user }) => {
  return user.image === "" ? (
    <AvatarText user={user} />
  ) : (
    <AvatarImage user={user} />
  )
}

Avatar.propTypes = {
  user: UserType
}
export default Avatar
