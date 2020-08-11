/* eslint-disable react/prop-types */
import React, { useMemo } from "react"
import Breadcrumbs from "react-router-dynamic-breadcrumbs"
import { itemCls, wrapperCls } from "./styles"
import { cx } from "emotion"
import { useI18n } from "providers/I18n"

function BreadcrumbsComponent() {
  const { t } = useI18n()

  const routesList = useMemo(() => {
    return {
      "/login": t("int.login"),
      "/register": "Register",
      "/visits/details": null,
      "/visits/details/:id": t("int.view_single_visit"),
      "/visits/create-new": t("int.create_new_visit"),
      "/visits/edit": null,
      "/visits/edit/:id": t("int.edit_a_visit"),
      "/visits": t("int.allvisits"),
      "/patients": t("int.patients"),
      "/patients/details": null,
      "/patients/details/:id": t("int.patient_details"),
      "/patients/create-new": t("int.patients_create_new"),
      "/patients/edit": null,
      "/patients/edit/:id": t("int.patient_edit"),
      "/professionals": t("int.professionals"),
      "/professionals/details": null,
      "/professionals/details/:id": t("int.professional_details"),
      "/professionals/create-new": t("int.professional_create_new"),
      "/professionals/edit": null,
      "/professionals/edit/:id": t("int.professional_edit")
    }
  }, [t])

  return (
    <Breadcrumbs
      mappedRoutes={routesList}
      WrapperComponent={(props) => (
        <ol className={wrapperCls}>{props.children}</ol>
      )}
      LinkComponent={(props) => <li className={itemCls}>{props.children}</li>}
      ActiveLinkComponent={(props) => (
        <li className={cx(itemCls, "active")}>{props.children}</li>
      )}
    />
  )
}

export default BreadcrumbsComponent
