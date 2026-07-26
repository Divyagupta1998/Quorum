# Quorum

A frontend prototype for a spontaneous local meetup app — activity “tables” only go live once enough people commit to join.

**Live site:** [https://divyagupta1998.github.io/Quorum/](https://divyagupta1998.github.io/Quorum/)

## Stack

- Vite + React (hooks only)
- Tailwind CSS v4
- lucide-react

No backend. All data and payments are mocked in local state.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Deploy (GitHub Pages)

Pushes to `main` build and deploy via GitHub Actions.

One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Flow

1. Browse open tables on the home page  
2. Join a table — seats fill on the seat graphic  
3. When seats hit the minimum, the table confirms and a mock payment form appears  
4. Confirm your seat to see the confirmation screen  

## Project structure

```
src/
  App.jsx
  components/
    PrototypeBanner.jsx
    Hero.jsx
    ConceptBrief.jsx
    HowItWorks.jsx
    TableCard.jsx
    TableGrid.jsx
    TableDetail.jsx
    SeatGraphic.jsx
    PaymentForm.jsx
    ConfirmedTable.jsx
  data/
    mockTables.js
```
