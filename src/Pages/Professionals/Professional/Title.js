import React from "react"
import { box, wrapper, titleInfo } from "./style"
import Avatar from "components/Avatar"
import Badge from "components/Badge"
import { UserType } from "types"

const Title = ({ firstName, lastName, image }) => {
  return (
    <div className={wrapper}>
      <div className={box}>
        <Avatar
          size={"large"}
          user={{
            image,
            firstName,
            lastName
          }}
        />
        <div className={titleInfo}>
          {firstName} {lastName}
          <div>
            <Badge active />
          </div>
        </div>
      </div>
    </div>
  )
}

Title.propTypes = UserType

export default Title