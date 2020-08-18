import React from "react"
import Grid, { GridCell } from "components/Grid"
import ListInline, { ListInlineItem } from "components/ListInline"
import { TextIcon } from "components/Flag"
import MailIcon from "components/Icons/Mail"
import PhoneIcon from "components/Icons/Phone"
import { wrapper } from "./styles"
import { useI18n } from "providers/I18n"

function AppFooter() {
  const { t } = useI18n()

  return (
    <div className={wrapper}>
      <Grid>
        <GridCell className="u-1_1 u-1_2-l-wide">
          <div className="u-margin-bottom u-margin-bottom-none-l-wide">
            <ListInline className="u-margin-bottom-none">
              <ListInlineItem className="u-margin-right u-margin-bottom-small u-margin-bottom-none-l-wide">
                <TextIcon icon={<MailIcon size={"small"} color={"white"} />}>
                  <a href="mailto:support@frontidapp.gr" className="u-white">
                    support@frontidapp.gr
                  </a>
                </TextIcon>
              </ListInlineItem>
              <ListInlineItem className="u-margin-bottom-small u-margin-bottom-none-l-wide">
                <TextIcon icon={<PhoneIcon size={"small"} color={"white"} />}>
                  <span className="u-white">0030 2810 223 555</span>
                </TextIcon>
              </ListInlineItem>
            </ListInline>
          </div>
        </GridCell>
        <GridCell className="u-1_1 u-1_2-l-wide">
          <div className="u-text-align-right-l-wide">
            <span>
              {`${t("int.signature")}`}{" "}
              <a href="/#" className="u-white">
                SHA&nbsp;{`${t("int.heraklion")}`}
              </a>
            </span>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}

export default AppFooter
