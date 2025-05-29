# CI-agent: Template Sync

Denne GitHub Action (`.github/workflows/sync-template.yml`) lar systemet hente inn nyeste basekode fra et eksternt template-repo.

- Actionen kan trigges manuelt via "Run workflow"
- Endringer fra `template` fuses inn i `main`
- Kan kombineres med PR-generering eller agent-review senere
