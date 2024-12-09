# Savecom React App

This is a single-page React application demonstrating skills in UI development, API integration, drag-and-drop functionality, and third-party API integration using Google reCAPTCHA. The app fetches and displays a list of items, includes client-side search and pagination, and allows users to rearrange items within the current page using drag-and-drop.

## Features


1. **Item List with Pagination**: Displays items fetched from a mock API, with pagination (10 items per page).
2. **Search Filter**: Includes a text-based search to filter items on the client side.
3. **Drag and Drop**: Allows users to rearrange items within the current page using drag-and-drop functionality.
4. **Google reCAPTCHA Integration**: Secures the app by verifying the user before loading items.
5. **Optimized Performance**: Utilizes efficient state management and follows React best practices.



## Technologies Used

- React (functional components and hooks)
- React Beautiful DnD (for drag-and-drop functionality)
- Google reCAPTCHA (for user verification)
- CSS for styling
- Fake Store API (mock API for fetching items)




## Installation

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
  

   Usage


Open the app in your browser at http://localhost:3000/.
Verify yourself using Google reCAPTCHA.
Use the search bar to filter items by title.
Use the pagination controls to navigate through pages.
Drag and drop items to rearrange them within the current page.


src/
├── components/
│   ├── ItemList.js         # Component for displaying items with drag-and-drop
│   ├── Pagination.js       # Component for pagination controls
│   ├── SearchBar.js        # Component for the search input
│   ├── ReCaptcha.js        # Component for Google reCAPTCHA integration
├── api/
│   ├── fetchItems.js       # API call to fetch mock data
├── styles/
│   ├── App.css             # Global app styles
│   ├── ItemList.css        # Styles for ItemList component
│   ├── Pagination.css      # Styles for Pagination component
│   ├── SearchBar.css       # Styles for SearchBar component
├── App.js                  # Main application component
├── index.js                # Entry point
![App Screenshot](src/assets/Screenshot (1487).png)


Client-Side Pagination:

Handles pagination logic efficiently by slicing the filtered list of items.
Search Optimization:

Filters items based on the search term using Array.prototype.filter and a toLowerCase comparison for case-insensitive matching.
Drag-and-Drop:

Integrates react-beautiful-dnd for a smooth drag-and-drop experience.
Only updates the current page's item order to minimize state re-renders.
Google reCAPTCHA:

Verifies users before fetching data, ensuring the application is secure.
CSS Optimization:

Uses responsive layouts and consistent spacing with gap and flexbox.
