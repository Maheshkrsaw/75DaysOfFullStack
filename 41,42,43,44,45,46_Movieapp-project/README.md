# 🎬 Full-Stack Movie App — Development Log (Day 41–45)

[FilmyWorld — React Final Project](https://react-filmyworld.netlify.app/)  

This document captures my **daily progress from Day 41 to Day 45** while building the **React Movie App (FilmyDuniya)**.  
The app integrates **TMDB API** with React, Redux, and other libraries to provide a fully functional frontend movie/TV/persons platform.

---

## 📅 Day 41 — Redux Setup + Project Kickoff

### 🔹 Work Done
- **Redux Toolkit Integration**
  - Installed `@reduxjs/toolkit` and `react-redux`.
  - Created `store.js` and integrated with `Provider` at root level.
  - Defined slices:
    - `moviesSlice`
    - `tvSlice`
    - `personsSlice`
    - `trendingSlice`
  - Each slice handled:
    - `loading` state
    - `data` from API
    - `error` handling

- **API Integration**
  - Connected TMDB API endpoints into Redux actions.
  - Centralized all requests using `axios.create()` in `/Utils/Axios.js`.

- **Why Redux?**
  - Before Redux, state was scattered across components.
  - With Redux → centralized state management, smoother data sharing across components.

### ⚡ Key Learnings
- Full reliance on ChatGPT for logic was **inefficient**.
- Best approach: use GPT for hints → implement logic manually.
- Debugging 1 hr wasted due to “over-reliance” on GPT-written code.

---

## 📅 Day 42 — Infinite Scroll + Section Implementation

### 🔹 Work Done
1. **Infinite Scroll**
   - Implemented using [`react-infinite-scroll-component`](https://www.npmjs.com/package/react-infinite-scroll-component).
   - Logic:
     - Initial API call fetches first page.
     - On scroll → fetch next page → merge with old state in Redux.
   - Applied to **Movies, TV Shows, Persons, Trending, Popular**.

2. **Dynamic Categories**
   - Dropdown menu to switch between categories:
     - Trending → `/trending/{media_type}/{time_window}`
     - Movies → `/movie/{category}`
     - TV Shows → `/tv/{category}`
     - Persons → `/person/{category}`

3. **Ratings**
   - Pulled `vote_average` from TMDB API.
   - Displayed rating stars/score on cards.

### ⚡ Key Learnings
- Infinite scroll required **careful state merging**.
- Dropdown-driven API calls improved **dynamic UX**.

---

## 📅 Day 43 — Topnav Fix + Item Details

### 🔹 Work Done
1. **Topnav Fix**
   - Search input aligned properly.
   - Added `debounce` for search API calls to reduce spam requests.

2. **Trending Section**
   - All categories in Trending (movies, TV, people) now fully functional.
   - Used `useParams` hook for category handling.

3. **Details Page**
   - Clicking item → opens **details page**.
   - Fetched full info with endpoints:
     - Movies → `/movie/{id}`
     - TV → `/tv/{id}`
     - Person → `/person/{id}`
   - Added external links:
     - Wikipedia (if available)
     - IMDb (`imdb_id`)
     - Official homepage

### ⚡ Key Learnings
- Reusing components is powerful, but blind copy-paste → bugs.
- Debugging with GPT support made it easier, but still required **manual brainwork**.

---

## 📅 Day 44 — Movies & TV Show Details

### 🔹 Work Done
1. **Movie Details Page**
   - Title, IMDb Score, Tagline, Overview, Duration.
   - Similar Movies section → `/movie/{id}/similar`.
   - Trailer UI layout added (`/movie/{id}/videos`) → but failed to integrate player logic (only placeholder for now).

2. **TV Show Details Page**
   - Show Info: Title, Overview, Tagline, Rating.
   - Seasons integrated → `/tv/{id}` includes `seasons` array.
   - Displayed all seasons & episodes in structured layout.
   - Similar TV Shows → `/tv/{id}/similar`.

### ⚡ Challenges
- Trailer functionality failed → API gave video keys, but player integration required `react-youtube` or iframe → postponed.
- Parsing season details was complex since some shows had **dozens of seasons**.

---

## 📅 Day 45 — People (Persons) Section

### 🔹 Work Done

#### Persons.jsx (People List Page)
- Dynamic Title: `FW | People Shows`.
- Categories: Popular, Latest, Trending (`/person/{category}`).
- Infinite scroll integrated.
- Responsive Cards: Show image, name, popularity score.
- Fallback image → custom placeholder if profile missing.
- Loader animation during API fetch.
- Dark theme + consistent layout with other sections.

#### PersonDetails.jsx (Single Person Details Page)
- Dynamic Title: `FW | Person Details`.
- Details API: `/person/{id}` + `/person/{id}/combined_credits`.
- Info Displayed:
  - Gender
  - Birthday
  - Known For
  - Place of Birth
  - Also Known As
- Biography formatted line-by-line.
- Social Links (if available): Twitter, Instagram, Facebook.
- Known For Section → horizontal scrollable cards.
- Acting Credits → split into **Movies** & **TV Shows**.
- Loader spinner while fetching data.
- Back navigation included.

### ⚡ Mistake
- Copied Movie component for Persons and modified via GPT.  
- Initially saved time but caused **major bugs** in PersonDetails page.  
- Debugging → took **1+ hr** to fix mismatches in props and API fields.

---

## 🔑 Overall Learnings (Day 41–45)
- **Redux Toolkit** simplified complex state handling.
- Infinite scrolling improved UX but demanded **careful API + pagination handling**.
- Over-reliance on GPT for complete code = **bad idea**. Best to use it for guidance, not entire logic.
- Debugging teaches more than just coding.
- Consistent UI/UX (dark theme, loaders, navigation) creates a **professional app feel**.
- Mistakes in component reuse highlighted the importance of **understanding underlying API structures**.

---

✅ **Next Step → Final Project Overview (Day 46)**  
This will include **full summary of all features + screenshots + demo link**.



