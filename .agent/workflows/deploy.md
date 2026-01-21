---
description: Deploy the application to Vercel
---

1. Ensure all ESLint and TypeScript errors are resolved.
// turbo
2. Run a production build locally to verify.
```bash
npm run build
```
3. Authenticate with Vercel if not already logged in.
```bash
vercel login
```
4. Deploy to production.
```bash
vercel --prod --yes
```
