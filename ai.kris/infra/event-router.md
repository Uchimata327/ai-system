# Event Router

Denne filen forklarer hvordan GitHub push-events fanges opp av webhook og oversettes til deploy-kall mot Vercel.

## Flyt

1. GitHub push til `main`
2. Webhook (GitHub Settings → Webhook) sender POST til `/api/webhook`
3. Webhook validerer signatur (via `GITHUB_SECRET`)
4. Dersom eventet er `push`, sendes POST til Vercel API

```json
POST https://api.vercel.com/v13/deployments
Authorization: Bearer <VERCEL_TOKEN>
