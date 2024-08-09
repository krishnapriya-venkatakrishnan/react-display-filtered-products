## React- Display filtered products

### Overview
This application lists all the products from a local file. The user can search for a specific product. The user can select a checkbox to filter the products that are not available.

### Tree view
Displayed using ReacTree

![Tree](https://github.com/user-attachments/assets/cc6c4538-949a-4295-a3af-c1b618032921)

### Components and its usage
- FilterableProductTable: This component holds 2 children. Gets the user's value from one component, SearchBar and passes it to the other component, ProductTable.
- SearchBar: A form is maintained to get the user's requested product and a checkbox. On user's input, the parent component is notified.
- ProductTable: The local file containing the product information is read and the product data is filtered.
- ProductCategoryRow: The product category is received from the ProductTable and is displayed as a heading.
- ProductRow: The product information is received from the ProductTable and is displayed on the page. The stocked product is displayed in red.

### Concepts used
- Hook: useState
- Elements: Form to receive user input. Table to display the filtered product list.

### Live Demo
(https://scrimba-krishna-v-display-products.netlify.app/)
