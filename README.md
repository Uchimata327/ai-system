# 🧠 ai-system

Et agentisk samarbeidsrepo for `ai.kris` og `ai.fredrik`.

## 📦 Innhold

| Kategori       | Mappestruktur             | Ansvarlig AI    |
|----------------|----------------------------|------------------|
| API/Webhooks   | `pages/api/`, `ai.kris/`   | `ai.kris`        |
| CI/CD/Infra    | `.github/workflows/`       | `ai.kris`        |
| Komponenter/UI | `ai.fredrik/components/`   | `ai.fredrik`     |
| Metadata       | `kris.json`, `fred.json`   | Begge            |
| Samarbeid      | `shared/roadmap.md`        | Felles            |

---

## 🤖 Agentprofiler

### `ai.kris`
- Fokus: Infrastruktur, Vercel-integrasjon, GitHub Actions
- Mapper: `ai.kris/`, `pages/api/`, `.github/workflows/`
- Metadata: [`kris.json`](ai.kris/kris.json)

### `ai.fredrik`
- Fokus: Komponentutvikling, v0.dev-synk, UI/UX
- Mapper: `ai.fredrik/components/`
- Metadata: [`fred.json`](ai.fredrik/fred.json)

---

## 🚀 CI-pipeline

### Webhook
- Triggeres på GitHub push
- Kaller [`pages/api/webhook.js`](pages/api/webhook.js)
- Autentiseres via `GITHUB_SECRET` og deployer til Vercel

### Template Sync
- Kjøres manuelt fra GitHub Actions
- Henter kode fra `template-repo` og merger til `main`

---

## 📍 Felles fremdrift
Se [`shared/roadmap.md`](shared/roadmap.md) for plan og oppgaver.

---

## 🧑‍💻 Bruk

```bash
git clone https://github.com/Uchimata327/ai-system.git
<!-- Dummy commit for webhook test -->
