// Shopping Cart Simulation

// Simulating a user login status
let isLoggedIn = true; // Change to false to test the logged-out state

// List of available products
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Headphones", price: 100 }
];

// Cart to store added products
let cart = [];

// Task 1: Check if the user is logged in
if (isLoggedIn) {
    console.log("User is logged in. You can add items to the cart.");
    
    // Task 2: Display available products and add to cart
    console.log("Available Products:");
    products.forEach(product => {
        console.log(`${product.id}: ${product.name} - $${product.price}`);
    });

    // Simulate adding products to the cart (In a real app, this would be user-driven)
    addToCart(1); // Add Laptop
    addToCart(3); // Add Headphones

    // Task 3: Calculate and display total cost
    const totalCost = calculateTotalCost();
    console.log("Total Cost:", `$${totalCost}`);
} else {
    console.log("User is not logged in. Please log in to add items to the cart.");
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} added to cart.`);
    } else {
        console.log("Product not found.");
    }
}

// Function to calculate the total cost of items in the cart
function calculateTotalCost() {
    return cart.reduce((total, product) => total + product.price, 0);
}

// Banking System

// Initial bank account balance
let balance = 1000;

// Task 1: Create a function to handle deposits
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited $${amount}. New balance: $${balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

// Task 2: Create a function to handle withdrawals
function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${balance}`);
    } else if (amount > balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

// Task 3: Create a function to check the balance
function checkBalance() {
    console.log(`Current balance: $${balance}`);
}

// Example usage of banking functions
deposit(500);    // Deposit $500
withdraw(200);   // Withdraw $200
checkBalance(); // Check balance
