A api based project to list down all the available emoji's

Emoji List: Upon loading the web page, the application fetches emoji data from the specified Web API (e.g., from emoji.json).

Filter by Category: The application populates a category filter dropdown based on the available categories in the fetched emoji data. Users can select a specific category from the dropdown to filter the displayed emojis accordingly.

Pagination: Initially, the application displays 10 emojis per page. Users can navigate through multiple pages to view more emojis using the pagination feature.

Emoji Cards: Each emoji is displayed in a card layout, showing the emoji itself, its name, category, and group.

Responsive Design: The website is designed to be responsive, adapting its layout and styles based on the user's device, ensuring an optimal user experience on both desktop and mobile devices.

How it Works:

Fetch Data: The JavaScript code fetches emoji data from the Web API (e.g., emoji.json) using the fetch API. The response is processed to obtain the emoji details, including the name, category, group, and HTML code.

Populate Dropdown: The category filter dropdown is populated with options based on the available categories in the fetched emoji data.

Filter Emoji Data: When the user selects a category from the dropdown, the JavaScript code filters the emojis based on the selected category or displays all emojis if the "All" option is chosen.

Pagination: The emoji data is displayed using pagination, showing 10 emojis per page. Users can navigate to other pages to view more emojis.

Render Emoji Cards: The JavaScript code dynamically creates emoji cards for each emoji, displaying the emoji image, name, category, and group information.
