import React from 'react';

function ListRenderer() {
  // Array of strings to display
  const fruits = ['Apple 🍎', 'Banana 🍌', 'Cherry 🍒', 'Date 🥭'];

  return (
    <div>
      <h2>List Rendering with map()</h2>
      <ul>
        {/* Use the map() function to iterate over the array */}
        {fruits.map((fruit, index) => (
          // IMPORTANT: The key prop must be unique for each list item
          // Using index as a key is okay for simple, static lists
          <li key={index}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRenderer;