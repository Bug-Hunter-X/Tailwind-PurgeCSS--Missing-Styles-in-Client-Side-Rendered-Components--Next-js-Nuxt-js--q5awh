# Tailwind PurgeCSS Bug: Missing Styles in Client-Side Rendered Components
This repository demonstrates a bug related to Tailwind CSS's PurgeCSS feature when used with client-side rendered components in Next.js or Nuxt.js applications. The core problem is that dynamically generated classes are sometimes not included in the final CSS output because the PurgeCSS process doesn't detect them during the build.

## Bug Reproduction
The `bug.js` file contains a Next.js component that generates a dynamic class name. This class is not picked up by PurgeCSS.  The `bugSolution.js` file shows how to resolve the issue.

## Solution
The solution involves configuring PurgeCSS to correctly handle the dynamically generated classes, either by adjusting the purge configuration or employing alternative strategies to ensure those classes are present in the final CSS output. See `bugSolution.js` for a detailed implementation.

## Technologies Used
* Next.js (or Nuxt.js)
* Tailwind CSS
* PurgeCSS