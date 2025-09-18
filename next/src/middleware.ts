export { intlayerMiddleware as middleware } from "./intlayerMiddleware";

export const config = {
  matcher: [
    "/((?!api|static|assets|robots|sitemap|sw|service-worker|manifest|.*\\..*|_next).*)",
  ]
};