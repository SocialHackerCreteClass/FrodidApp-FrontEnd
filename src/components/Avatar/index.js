import React from "react"
import PropTypes from "prop-types"
import { cx } from "emotion"
import {
  imgWrapper,
  wrapper,
  avatarMobile,
  avatarImage,
  letters,
  avatarTextWrapper,
  avatarImageWrapper
} from "./styles"
import { UserType } from "types"

const AvatarPropTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["medium", "large"]),
  user: UserType
}

const AvatarImage = ({ size, user, className }) => {
  return (
    <div
      className={cx(
        wrapper,
        { large: size === "large" },
        avatarImageWrapper,
        className
      )}>
      <div className={imgWrapper}>
        <img src={user.image} alt="avatar" />
      </div>
    </div>
  )
}

AvatarImage.propTypes = AvatarPropTypes

// Renders avatar with the letters
const AvatarText = ({ size, user, className }) => {
  const firstNameLetter = user.firstName.slice(0, 1)
  const lastNameLetter = user.lastName.slice(0, 1)
  return (
    <div className={cx(avatarTextWrapper, className)}>
      <a href="/#" title={`${user.firstName} ${user.lastName}`}>
        <span
          className={cx(wrapper, { large: size === "large" }, avatarMobile)}>
          <span className={avatarImage}>
            <span className={letters}>
              {`${firstNameLetter}${lastNameLetter}`}
            </span>
          </span>
        </span>
      </a>
    </div>
  )
}

AvatarText.propTypes = AvatarPropTypes

const Avatar = ({ size = "medium", user, className }) => {
  return !user.image ? (
    <AvatarText user={user} size={size} className={className} />
  ) : (
    <AvatarImage user={user} size={size} className={className} />
  )
}

Avatar.propTypes = AvatarPropTypes

export default Avatar
