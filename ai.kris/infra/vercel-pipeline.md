# Vercel-pipeline

Denne filen beskriver hvordan deploy fra GitHub via webhook til Vercel fungerer.

- Trigger: GitHub push
- Webhook URL: `/api/webhook`
- Autentisering: `GITHUB_SECRET` matches med payload
- Deployment: `POST https://api.vercel.com/v13/deployments`
