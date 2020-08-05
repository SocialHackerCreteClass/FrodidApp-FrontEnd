import React from "react"
import Grid, { GridCell } from "components/Grid"
import Avatar from "components/Avatar"
import Flag, { FlagBody, FlagImg } from "components/Flag"
import ListInline, { ListInlineItem } from "components/ListInline"
import { alignItems, wrapper } from "./styles"
import { useAuth } from "providers/Auth"

function Topbar() {
  const { logout } = useAuth()
  return (
    <div className={wrapper}>
      <Grid className={alignItems}>
        <GridCell className="u-1_1 u-2_3-desktop">
          {/* <form className="c-form c-form--search">
            <input
              type="search"
              id="search"
              placeholder="Search..."
              className="u-margin-bottom-tiny u-margin-bottom-none@l-mobile u-margin-right-small@l-mobile"
            />
            <button type="submit" className="c-btn c-btn--primary c-btn--small">
              Submit
            </button>
          </form> */}
          {/* Need to insert the form component */}
        </GridCell>
        <GridCell className="u-hide u-show-desktop u-1_3-desktop">
          <Flag direction={"right"}>
            <FlagImg className="u-hide u-show-l-desktop">
              <Avatar
                user={{
                  image: "https://placekitten.com/300/300",
                  firstName: "John",
                  lastName: "Doe",
                  email: "test@email.com"
                }}
              />
            </FlagImg>
            <FlagBody>
              <p className="u-margin-bottom-tiny">Konstantinos Antoniadis</p>
              <ListInline className="u-margin-bottom-none u-xsmall">
                <ListInlineItem className="u-margin-right-tiny-tablet">
                  <a href="/#">Edit profile</a>
                </ListInlineItem>
                <ListInlineItem className="u-hide u-display-inline-block-tablet">
                  <a href={"#/"} onClick={logout}>
                    Logout
                  </a>
                </ListInlineItem>
              </ListInline>
            </FlagBody>
          </Flag>
        </GridCell>
      </Grid>
    </div>
  )
}

export default Topbar
