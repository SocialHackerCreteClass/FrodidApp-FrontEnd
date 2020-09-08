import React from "react"
import Button from "components/Button/"
import VisitationTable from "./VisitationsTable"
import { titles, marginBot } from "./style"
import { useI18n } from "providers/I18n"
import { UserType } from "types"

Visitations.propTypes = { user: UserType }

function Visitations({ user }) {
  const { t } = useI18n()
  return (
    <div>
      <header className={marginBot}>
        <h2 className={titles}>{t("int.visitations")}</h2>
        <div>
          <Button ghost variant="secondary">
            {t("int.add_visitation")}
          </Button>
        </div>
      </header>
      <VisitationTable user={user} />
    </div>
  )
}

export default Visitations
