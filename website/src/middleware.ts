import { NextRequest } from 'next/server'

import { intlayerMiddleware } from "next-intlayer/middleware";
import {
  chain,
  chainableMiddleware,
  csp,
} from "@next-safe/middleware";

const securityMiddleware = csp({
  // CSP base configuration with IntelliSense
  // single quotes for values like 'self' are automatic
  directives: {
    "default-src": ["self"],
    "script-src": ["self", "strict-dynamic"],
    "style-src": ["self", "https://fonts.googleapis.com"],
    "img-src": ["self"],
    "font-src": ["self", "https://fonts.gstatic.com"],
    "object-src": ["none"],
    "base-uri": ["self"],
    "form-action": ["self"],
    "frame-ancestors": ["self"],
  },
})

export const middleware = chain(
  chainableMiddleware((request: NextRequest) => intlayerMiddleware(request)),
  securityMiddleware
);

export const config = {
  matcher: [
    "/((?!api|static|assets|robots|sitemap|sw|service-worker|manifest|.*\\..*|_next).*)",
  ]
};