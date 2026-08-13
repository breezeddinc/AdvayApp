#!/usr/bin/env node
/**
 * google-services.json is gitignored (it's per-project Firebase config, not
 * something we want sitting in a public repo), so it never makes it to
 * Vercel/CI via git. This script reconstructs it at build time from a
 * base64-encoded environment variable instead.
 *
 * Setup:
 *   1. Download google-services.json from the Firebase console
 *      (Project settings > General > your Android app, package "com.advay.app").
 *   2. Base64-encode it:
 *        macOS:   base64 -i google-services.json | pbcopy
 *        Linux:   base64 -w 0 google-services.json
 *        Windows: certutil -encode google-services.json tmp.b64 (strip header/footer lines)
 *   3. In Vercel: Project Settings > Environment Variables, add
 *        GOOGLE_SERVICES_JSON_BASE64 = <the base64 string>
 *      for whichever environments (Production/Preview) need it.
 *
 * Locally, just keep a real google-services.json in the project root and
 * this script is a no-op.
 */
const fs = require('fs')
const path = require('path')

const target = path.join(__dirname, '..', 'google-services.json')
const b64 = process.env.GOOGLE_SERVICES_JSON_BASE64

if (fs.existsSync(target)) {
  // Already present (e.g. local dev, or a previous run in this build) - nothing to do.
  process.exit(0)
}

if (!b64) {
  console.warn(
    '[write-google-services] GOOGLE_SERVICES_JSON_BASE64 is not set and google-services.json is missing.\n' +
      '[write-google-services] The Android prebuild step will fail without it - see scripts/write-google-services.js for setup.',
  )
  process.exit(0) // let expo prebuild raise its own clear error rather than masking it here
}

try {
  const json = Buffer.from(b64, 'base64').toString('utf8')
  JSON.parse(json) // sanity-check it decoded to valid JSON before writing
  fs.writeFileSync(target, json)
  console.log(
    '[write-google-services] Wrote google-services.json from GOOGLE_SERVICES_JSON_BASE64',
  )
} catch (err) {
  console.error(
    '[write-google-services] GOOGLE_SERVICES_JSON_BASE64 did not decode to valid JSON:',
    err.message,
  )
  process.exit(1)
}
