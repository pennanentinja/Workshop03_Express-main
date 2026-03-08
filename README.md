# Workshop 03 – Express.js Server

Workshop 03:en ehtävänä oli rakentaa Express.js‑palvelin, joka palvelee staattisia HTML‑sivuja ja tarjoaa API‑endpointteja.

## ✔️ Toteutetut ominaisuudet

- Express.js‑palvelin portissa 3000
- Staattiset sivut:
  - `/` – Etusivu
  - `/about` – About-sivu
  - `/contact` – Contact-sivu
- API‑reitit:
  - `/api/time` – palauttaa nykyisen ajan JSON‑muodossa
  - `/api/info` – palauttaa palvelimen tietoja
- Express Router käytössä API‑reiteille
- Custom 404‑sivu
- Custom 500‑sivu
- Request‑logging middleware

## 📁 Projektin rakenne

- `server.js` – palvelimen logiikka
- `public/` – HTML, CSS ja virhesivut
- `package.json` – Express‑riippuvuus

## 🚀 Käynnistys

## ✔️ Submission Checklist

- [x] Kaikki pakolliset tehtävät (1–6) toteutettu
- [x] Sovellus käynnistyy komennolla `npm start`
- [x] Kaikki reitit toimivat
- [x] 404- ja 500-sivut toimivat
- [x] API-endpointit toimivat
- [x] node_modules ei ole GitHubissa
- [x] README päivitetty
