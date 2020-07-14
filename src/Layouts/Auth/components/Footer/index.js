import React from "react"
import Mail from "components/Icons/Mail"
import Phone from "components/Icons/Phone"
import { wrapper } from "./styles"
import Grid, { GridCell } from "components/Grid"
import ListInline, { ListInlineItem } from "components/ListInline"
import { TextIcon } from "components/Flag"

function Footer() {
  return (
    <div className={wrapper}>
      <Grid>
        <GridCell className="u-1_1 u-1_2-desktop">
          <div className="u-margin-bottom u-margin-bottom-none-desktop">
            <ListInline className="u-margin-bottom-none">
              <ListInlineItem className="u-margin-right u-margin-bottom-small u-margin-bottom-none-desktop">
                <TextIcon icon={<Mail size={"small"} color={"#fff"} />}>
                  <a href="mailto:support@frontidapp.gr" className="u-white">
                    support@frontidapp.gr
                  </a>
                </TextIcon>
              </ListInlineItem>
              <ListInlineItem className="u-margin-bottom-small u-margin-bottom-none-desktop">
                <TextIcon icon={<Phone size={"small"} color={"#fff"} />}>
                  <span className="u-white">0030 2810 223 555</span>
                </TextIcon>
              </ListInlineItem>
            </ListInline>
          </div>
        </GridCell>
        <GridCell className="u-1_1 u-1_2-desktop">
          <div className="u-text-align-right-desktop">
            <span>
              Designed and Developed&nbsp;
              <a href="/#" className="u-white">
                SHA&nbsp;Heraklion
              </a>
            </span>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}

export default Footer
