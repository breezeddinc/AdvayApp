import {type Did} from '@atproto/api'

import packageJson from '#/../package.json'

/**
 * The semver version of the app, as defined in `package.json.`
 *
 * N.B. The fallback is needed for Render.com deployments
 */
export const RELEASE_VERSION: string =
  process.env.EXPO_PUBLIC_RELEASE_VERSION || packageJson.version

/**
 * The env the app is running in e.g. development, testflight, production, e2e
 */
export const ENV: string = process.env.EXPO_PUBLIC_ENV as
  | 'production'
  | 'testflight'
  | 'development'
  | 'e2e'
  | (string & {})

/**
 * Indicates whether the app is running in TestFlight
 */
export const IS_TESTFLIGHT = ENV === 'testflight'

/**
 * Indicates whether the app is `__DEV__`
 */
export const IS_DEV = __DEV__

/**
 * Indicates whether the app is running in a test environment
 */
export const IS_E2E = ENV === 'e2e'

/**
 * Indicates whether the app is `__DEV__` or TestFlight
 */
export const IS_INTERNAL = IS_DEV || IS_TESTFLIGHT

/**
 * The commit hash that the current bundle was made from. The user can
 * see the commit hash in the app's settings along with the other version info.
 * Useful for debugging/reporting.
 */
export const BUNDLE_IDENTIFIER: string =
  process.env.EXPO_PUBLIC_BUNDLE_IDENTIFIER || 'dev'

/**
 * This will always be in the format of YYMMDDHH, so that it always increases
 * for each build. This should only be used for analytics reporting and shouldn't
 * be used to identify a specific bundle.
 */
export const BUNDLE_DATE: number =
  process.env.EXPO_PUBLIC_BUNDLE_DATE === undefined
    ? 0
    : Number(process.env.EXPO_PUBLIC_BUNDLE_DATE)

/**
 * The log level for the app.
 */
export const LOG_LEVEL = (process.env.EXPO_PUBLIC_LOG_LEVEL || 'info') as
  | 'debug'
  | 'info'
  | 'warn'
  | 'error'

/**
 * Enable debug logs for specific logger instances
 */
export const LOG_DEBUG: string = process.env.EXPO_PUBLIC_LOG_DEBUG || ''

/**
 * ADVAY's own PDS (Personal Data Server) URL and DID. Defaults to a local
 * dev-stack PDS rather than Bluesky's `bsky.social`, so the app never
 * silently talks to Bluesky's real network once you're set up to run
 * independently. Set these once your own PDS is deployed.
 */
export const PDS_SERVICE: string =
  process.env.EXPO_PUBLIC_PDS_SERVICE || 'http://localhost:2583'
export const PDS_SERVICE_DID: Did =
  (process.env.EXPO_PUBLIC_PDS_SERVICE_DID as Did) ||
  'did:web:localhost%3A2583'

/**
 * ADVAY's own AppView — indexes the network and serves feeds, search,
 * profiles, notifications, etc. This is the largest piece of
 * infrastructure in a fully independent AT Protocol deployment.
 */
export const APPVIEW_SERVICE: string =
  process.env.EXPO_PUBLIC_APPVIEW_SERVICE || 'http://localhost:2584'
export const APPVIEW_DID: Did =
  (process.env.EXPO_PUBLIC_APPVIEW_DID as Did) ||
  'did:plc:dw4kbjf5mn7nhenabiqpkyh3' // matches DEV_ENV_APPVIEW_DID in constants.ts

/**
 * ADVAY's own chat/DM service.
 */
export const CHAT_SERVICE: string =
  process.env.EXPO_PUBLIC_CHAT_SERVICE || 'http://localhost:2584'

/**
 * The DID of the ADVAY appview to proxy to. Defaults to the same local
 * dev AppView as APPVIEW_DID above — intentionally NOT Bluesky's real
 * `did:web:api.bsky.app`, so a request never gets silently proxied to
 * Bluesky's production network by an unconfigured build.
 */
export const BLUESKY_PROXY_DID: Did =
  (process.env.EXPO_PUBLIC_BLUESKY_PROXY_DID as Did) || APPVIEW_DID

/**
 * The DID of the chat service to proxy to. Defaults to the same local
 * dev AppView/chat address as CHAT_SERVICE above.
 */
export const CHAT_PROXY_DID: Did =
  (process.env.EXPO_PUBLIC_CHAT_PROXY_DID as Did) || APPVIEW_DID

/**
 * Metrics API host
 */
export const METRICS_API_HOST: string =
  process.env.EXPO_PUBLIC_METRICS_API_HOST || 'https://events.bsky.app'

/**
 * Growthbook API host
 */
export const GROWTHBOOK_API_HOST: string =
  process.env.EXPO_PUBLIC_GROWTHBOOK_API_HOST || `${METRICS_API_HOST}/gb`

/**
 * Growthbook client key
 */
export const GROWTHBOOK_CLIENT_KEY: string =
  process.env.EXPO_PUBLIC_GROWTHBOOK_CLIENT_KEY || 'sdk-7gkUkGy9wguUjyFe'

/**
 * Sentry DSN for telemetry
 */
export const SENTRY_DSN: string | undefined = process.env.EXPO_PUBLIC_SENTRY_DSN

/**
 * Bitdrift API key. If undefined, Bitdrift should be disabled.
 */
export const BITDRIFT_API_KEY: string | undefined =
  process.env.EXPO_PUBLIC_BITDRIFT_API_KEY

/**
 * GCP project ID which is required for native device attestation. On web, this
 * should be unset and evaluate to 0.
 */
export const GCP_PROJECT_ID: number =
  process.env.EXPO_PUBLIC_GCP_PROJECT_ID === undefined
    ? 0
    : Number(process.env.EXPO_PUBLIC_GCP_PROJECT_ID)

/**
 * URLs for the app config web worker. Can be a
 * locally running server, see `env.example` for more.
 */
export const GEOLOCATION_DEV_URL = process.env.GEOLOCATION_DEV_URL
export const GEOLOCATION_PROD_URL = `https://ip.bsky.app`
export const GEOLOCATION_URL = IS_DEV
  ? (GEOLOCATION_DEV_URL ?? GEOLOCATION_PROD_URL)
  : GEOLOCATION_PROD_URL

/**
 * URLs for the live-event config web worker. Can be a
 * locally running server, see `env.example` for more.
 */
export const LIVE_EVENTS_DEV_URL = process.env.LIVE_EVENTS_DEV_URL
export const LIVE_EVENTS_PROD_URL = `https://live-events.workers.bsky.app`
export const LIVE_EVENTS_URL = IS_DEV
  ? (LIVE_EVENTS_DEV_URL ?? LIVE_EVENTS_PROD_URL)
  : LIVE_EVENTS_PROD_URL

/**
 * URLs for the app-config web worker. Can be a
 * locally running server, see `env.example` for more.
 */
export const APP_CONFIG_DEV_URL = process.env.APP_CONFIG_DEV_URL
export const APP_CONFIG_PROD_URL = `https://app-config.workers.bsky.app`
export const APP_CONFIG_URL = IS_DEV
  ? (APP_CONFIG_DEV_URL ?? APP_CONFIG_PROD_URL)
  : APP_CONFIG_PROD_URL
