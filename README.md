# Fruit Randomizer

Fruit Randomizer is a small educational website that uses probability to choose a fruit for the user. Visitors can draw a fruit from the home page or browse the complete fruit collection on the Fruits page.

## Features

- Draw a random fruit from the collection.
- Limit the number of draws available on the home page.
- Display the selected fruit, rarity, and probability.
- Browse all available fruits in a responsive card grid.
- View an About page explaining the project and its learning goals.

## Educational Data Structure

The fruit data is stored in `script.js` as an exported array of objects. Each fruit object contains:

```js
{
    name: "Apple",
    probability: 20,
    rarity: "Common",
    image: "image-url"
}
```

This structure is used to practice core JavaScript concepts:

- Arrays for storing the fruit collection.
- Objects for grouping related fruit properties.
- `map()` for rendering fruit cards dynamically.
- Modules for sharing the fruit data with the list page.
- Conditional logic for page-specific behavior.
- Random number generation for probability-based selection.

## Project Files

- `index.html` - The home page with the draw interaction and inventory area.
- `list.html` - The page that displays all fruit objects.
- `about.html` - An explanation of the website and its educational purpose.
- `script.js` - The fruit data, draw counter, random selection, and inventory rendering.
- `list-script.js` - Imports the fruit array and renders the full fruit list.
- `style.css` - Shared responsive layout and card styling.

## Running the Website

Because the project uses JavaScript modules, open it through a local development server instead of opening the HTML files directly. From the project folder, use any local server you already have available, then open `index.html` through that server.

No build step or external library is required.
