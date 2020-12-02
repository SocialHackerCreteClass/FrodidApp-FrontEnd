import { rest } from "msw"
import mockPatients from "./data/patients"

export const handlers = [
  // Handles a POST /login request
  rest.post("/auth/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", true)
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        user: {
          firstName: "Kostas",
          lastName: "Papadopoulos"
        },
        token: "123456789"
      })
    )
  }),
  rest.get("/patients", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated")
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized"
        })
      )
    }

    const pageSizeParam = req.url.searchParams.get("pageSize")
    const pageIndexParam = req.url.searchParams.get("pageIndex")
    const pageSize = pageSizeParam ? Number(pageSizeParam) : 10
    const pageIndex = pageIndexParam ? Number(pageIndexParam) : 0
    const total = mockPatients.length
    const data = mockPatients.slice(
      pageSize * pageIndex,
      Math.min(mockPatients.length, pageSize * pageIndex + pageSize)
    )
    // If authenticated, return a mocked user details
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        total,
        data
      })
    )
  })
]
