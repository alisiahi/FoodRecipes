<!-- Title -->
# FoodRecipes - A React Web Application


<!-- Table of Contents -->
## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Overview](#project-overview)
- [Key React Concepts](#key-react-concepts)
- [Getting Started](#getting-started)


<!-- Technologies Used -->
## Technologies Used

- **React**: This project is built using the React JavaScript library for creating user interfaces. React allows for efficient and dynamic UI rendering.
- **React Router**: React Router is used for routing and navigation in the application, enabling seamless transitions between pages.
- **Edamam API**: I've integrated the Edamam API to fetch recipe data and display it in the application.
- **Tailwind CSS**: I've used Tailwind CSS for styling to ensure a clean and responsive design.
- **Web Icons**: Various icon libraries like React-icons were used for adding icons to the UI components.
- **Additional libraries**: Various other dependencies for fetching data and components are utilized.

<!-- Project Overview -->
## Project Overview

**FoodRecipes** is a web application that provides users with the ability to:

- Explore a wide range of recipes from different cuisines.
- View detailed information about individual recipes, including ingredients, health labels, and recommended similar recipes.
- Perform recipe searches using the search bar.

<!-- Key React Concepts -->
## Key React Concepts

This project highlights several fundamental React concepts and libraries:

- **Components**: React components are used to create a modular and reusable structure for the UI. Components like `Navbar`, `Footer`, `RecipeCard`, `Searchbar`, and more are used throughout the application.

- **React Router**: React Router is used to manage routing and navigation within the application. The `<Routes>` and `<Route>` components enable the rendering of different pages based on URL changes.

- **State and Props**: React's state management and props passing are utilized to handle dynamic data and component communication.

- **Hooks**: The project uses React hooks like `useState` and `useEffect` to manage state and side effects in functional components. For example, `useState` is used to manage loading states, and `useEffect` is used to fetch data.

- **Fetching Data**: Data fetching is an essential part of the application, and asynchronous functions are employed to fetch recipe data from the Edamam API.

- **Conditional Rendering**: Conditional rendering is used to display loading indicators when data is being fetched and to handle cases where no recipes are found.

- **Styling**: Tailwind CSS is used for styling, allowing for a clean and responsive design with minimal custom CSS.

<!-- Getting Started -->
## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/alisiahi/FoodRecepies.git

2. Install the project's dependencies:

   ```bash
   cd FoodRecepies
   npm install

3. Set up environment variables:

  - You'll need to set up environment variables for the Edamam API credentials.
 
4. Start the development server:

   ```bash
   npm run dev
  - The application should now be running locally at http://localhost:5173.

