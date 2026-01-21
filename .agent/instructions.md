# Coding Standards & ESLint Rules

To ensure successful production builds and maintain code quality, follow these rules strictly:

## TypeScript & ESLint

1.  **No `any` Types**: Never use the `any` type. Always define proper interfaces or use `unknown` if the type is truly dynamic.
    *   *Why*: The project uses `@typescript-eslint/no-explicit-any` which triggers errors during `next build`.
2.  **Unused Variables**: Do not leave unused variables, imports, or function parameters.
    *   *Why*: The project uses `@typescript-eslint/no-unused-vars` which triggers warnings/errors.
3.  **Image Optimization**: Always use the Next.js `Image` component from `next/image` instead of the standard `<img>` tag.
    *   *Why*: Next.js triggers warnings for `<img>` tags due to performance (LCP) and bandwidth concerns.
4.  **Custom Fonts**: Ensure custom fonts are added correctly according to Next.js 15 standards (using `next/font`). Avoid ad-hoc font loading in `layout.tsx` that might trigger `@next/next/no-page-custom-font`.

## Build Verification

Before considering a task "done", always run:
```bash
npm run build
```
to ensure that no ESLint errors or TypeScript issues will block deployment.
