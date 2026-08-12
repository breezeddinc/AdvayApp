# ADVAY branding changes

This fork has been prepared as an ADVAY-branded client.

## Changed
- App display name: `ADVAY`
- Expo slug: `advay`
- Deep-link scheme: `advay`
- iOS bundle identifier: `com.advay.app`
- Android package identifier: `com.advay.app`
- iOS app-group identifier: `group.com.advay.app`
- App-extension bundle identifiers use the ADVAY bundle prefix
- Root package name: `advay.app`
- User-facing standalone `Bluesky` branding was changed to `ADVAY` across text-based application/docs files.
- The upstream Expo/EAS owner and upstream EAS project ID were removed.
- Sentry configuration is now opt-in through `SENTRY_ORG`, `SENTRY_PROJECT`, and `SENTRY_AUTH_TOKEN`.

## Intentionally preserved
AT Protocol and dependency identifiers are intentionally unchanged, including:
- `app.bsky.*` Lexicons
- `did:web:api.bsky.app`
- `@bsky.app/*` package scopes
- native module names/files that contain `Bluesky`
- existing `bsky.app` network URLs where they refer to the Bluesky/AT Protocol network rather than application branding

## Before production
Configure your own:
- Expo/EAS project
- Apple Developer identifiers/signing
- Google Play/Android signing
- Firebase `google-services.json`
- Sentry project, if desired
- analytics/telemetry services
- public web/domain URLs
- privacy policy and terms URLs
- app icon/logo assets
