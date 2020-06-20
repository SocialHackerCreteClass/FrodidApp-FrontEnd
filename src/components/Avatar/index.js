import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { imgWrapper, wrapper } from "./styles";
import { UserType } from '../../type';

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["medium", "large"]),
  src: UserType.image.PropTypes.string
}

if ( src !== '' ) {
  const Avatar = ({ size = "medium", src, className }) => {
    return (
      <div className={cx(wrapper, { large: size === "large" }, className)}>
        <div className={imgWrapper}>
          <img src={src} alt="avatar" />
        </div>
      </div>
    )}
} else {
  const Avatar = () =>{
  <div class="u-margin-bottom">
    <a href="#" title="Konstantinos Antoniadis">
      <span class="c-avatar c-avatar--mobile">
        <span class="c-avatar__img">
          <span class="u-uppercase u-bold">KA</span>
        </span>
      </span>
    </a>
  </div>
  }
}


export default Avatar
