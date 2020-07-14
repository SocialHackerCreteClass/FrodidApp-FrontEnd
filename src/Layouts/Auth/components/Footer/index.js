import React from "react"
import Mail from "components/Icons/Mail"
import Phone from "components/Icons/Phone"
import { wrapper } from "./styles"
import Grid, { GridCell } from "components/Grid"
import ListInline, { ListInlineItem } from "components/ListInline"
import Flag, { FlagImg, FlagBody } from "components/Flag"

function Footer() {
  return (
    <div className={wrapper}>
      <Grid>
        <GridCell className="u-1_1 u-1_2-desktop">
          <div className="u-margin-bottom u-margin-bottom-none-desktop">
            <ListInline className="u-margin-bottom-none">
              <ListInlineItem className="u-margin-right u-margin-bottom-small u-margin-bottom-none-desktop">
                <Flag>
                  <FlagImg>
                    <Mail size={"small"} color={"#fff"} />
                  </FlagImg>
                  <FlagBody>
                    <a href="mailto:support@frontidapp.gr" className="u-white">
                      support@frontidapp.gr
                    </a>
                  </FlagBody>
                </Flag>
              </ListInlineItem>
              <ListInlineItem className="u-margin-bottom-small u-margin-bottom-none-desktop">
                <Flag>
                  <FlagImg>
                    <Phone size={"small"} color={"#fff"} />
                  </FlagImg>
                  <FlagBody>
                    <span className="u-white">0030 2810 223 555</span>
                  </FlagBody>
                </Flag>
              </ListInlineItem>
            </ListInline>
          </div>
        </GridCell>
        <GridCell className="u-1_1 u-1_2-desktop">
          <div className="u-text-align-right-desktop">
            <span>
              Designed and Developed
              <a href="/#" className="u-white">
                by&nbsp;SHA&nbsp;Heraklion
              </a>
            </span>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}

export default Footer
