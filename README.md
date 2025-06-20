# Rick & Morty Explorer

A fully responsive, SSR-powered web application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **GraphQL**, allowing users to search, filter, and explore characters from the Rick and Morty universe in a clean and intuitive UI.

> Powered by [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql)

## 🚀 Live Demo

[View Live Demo](https://rick-and-morty-explorer-wheat.vercel.app/)

---

## 🛠️ Tech Stack

- **Next.js** (App Router, SSR, Turbopack)
- **TypeScript**
- **Tailwind CSS**
- **GraphQL** via `graphql-request`
- **Codegen** (GraphQL fragments & types)
- **Responsive design**

---

## ⚙️ Features

### Main Page

- **Sidebar with Search & Filters**:

  - Dynamic filtering by status, gender, species, etc;
  - Active filters shown with the ability to toggle or clear them;

- **Character Grid**:
  - Displays cards with name, image, status, and species;
  - Responsive grid layout with hover effects;
  - Pagination support;

### Filtering Logic

- Filters are synced with the URL via `searchParams`;
- Selecting a filter toggles its state (on/off);
- A "Clear Filters" button resets all filters instantly;
- Empty search results are gracefully handled with a "No results" message;

### Character Details Page

- Shows **complete character information**:
  - Name, image, status, species, gender, and more.
  - Origin and current location (with dimension and type).
- **Episode Appearance**:
  - If the character appears in **only one episode**:
    - Displays a single **"Seen In"** section with episode and location info.
  - If the character appears in **multiple episodes**:
    - Splits into **"First Seen"** and **"Last Seen"** sections.
    - The rest of the appearances are listed in an **"Other Episodes"** section.
- **Graceful fallback**:
  - If there are no additional episodes — the "Other Episodes" section is hidden.
- **Error Handling**:
  - If an invalid character ID is accessed, the app redirects to a custom **404 Not Found** page.

### Data Handling

- **Server-Side Rendering** for main page (characters list);
- **GraphQL Fragments**:
  - Reused for both cards and detail pages to reduce duplication;
- **Strong Type Safety**:
  - Fully typed data via `graphql-codegen`;
- **Graceful Loading**:
  - Handles missing fields like image or location with fallbacks;

---

## Responsive Design

- Fully responsive on mobile, tablet, and desktop;
- Layout adapts:
  - On mobile — all content stacks vertically;
  - On larger screens — uses grid layout with columns for image, info, and episode data;
