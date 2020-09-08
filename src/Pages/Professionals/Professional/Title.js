import React from "react"
import { box, wrapper, titleInfo } from "./style"
import Avatar from "components/Avatar"
import Badge from "components/Badge"
import { UserType } from "types"

const Title = ({ user }) => {
  return (
    <div className={wrapper}>
      <div className={box}>
        <Avatar size={"large"} user={user} />
        <div className={titleInfo}>
          {user.firstName} {user.lastName}
          <div>
            <Badge active />
          </div>
        </div>
      </div>
    </div>
  )
}

Title.propTypes = {
  user: UserType
}

export default Title
