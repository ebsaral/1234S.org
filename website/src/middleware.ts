import { NextRequest } from 'next/server'

import { intlayerMiddleware } from "next-intlayer/middleware";
import {
  chainMatch,
  isPageRequest,
  chain,
  chainableMiddleware,
  csp,
  strictDynamic
} from "@next-safe/middleware";

const securityMiddleware = [
  csp({
      // CSP base configuration with IntelliSense
      // single quotes for values like 'self' are automatic
      directives: {
        "style-src": ["self", "https://fonts.googleapis.com"],
        "font-src": ["self", "https://fonts.gstatic.com"],
        "frame-ancestors": ["self"],
      },
  }),
  strictDynamic()
]

export const middleware = chain(
  chainableMiddleware((request: NextRequest) => intlayerMiddleware(request)),
  chainMatch(isPageRequest)(...securityMiddleware)
);

export const config = {
  matcher: [
    "/((?!api|static|assets|robots|sitemap|sw|service-worker|manifest|.*\\..*|_next).*)",
  ]
};