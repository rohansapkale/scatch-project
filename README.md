
 🛒 E-Commerce Application with User Authentication and Product Management

 📋 Description

This project is a full-fledged e-commerce application built with Node.js, Express, and MongoDB, focusing on user authentication, product management, and file handling. The application enables users to register, log in, and log out, while administrators can create and manage products. It incorporates secure session management and flash messaging to enhance user experience and security.

 🌟 Features

- **User Authentication**: Register new users and log in with secure password handling using bcrypt.
- **Product Management**: Admins can add new products with images, manage existing products, and handle product details such as name, price, and discount.
- **File Upload**: Use `multer` for handling image uploads to associate images with products.
- **Dynamic Flash Messaging**: Display success or error messages dynamically on the user interface.
- **Session Management**: Secure session handling using `express-session` with cookie management.
- **Responsive Design**: Frontend built with EJS templates and Tailwind CSS for responsive and modern UI.

 🔧 Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/username/ecommerce-app.git
    cd ecommerce-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory with the following variables:
    ```plaintext
    EXPRESS_SESSION_SECRET=your_session_secret
    MONGO_URI=mongodb://your_mongo_db_uri
    ```

4. **Configure MongoDB**:
    Ensure you have a MongoDB instance running and update the `MONGO_URI` in the `.env` file.

5. **Run the Application**:
    ```bash
    npm start
    ```
    Visit `http://localhost:3000` in your browser to access the application.

 📂 Project Structure

```plaintext
ecommerce-app
│
├── config
│   ├── mongoose-connection.js  // MongoDB connection setup
│   ├── multer-config.js        // File upload configuration
│
├── models
│   ├── user-model.js           // User schema and model
│   ├── product-model.js        // Product schema and model
│
├── public                      // Static assets
│
├── routes
│   ├── index.js                // Main routes
│   ├── ownersRouter.js         // Owner-specific routes
│   ├── usersRouter.js          // User-specific routes
│   ├── productsRouter.js       // Product-specific routes
│
├── views                       // EJS templates
│   ├── partials                // Reusable parts of views
│   ├── shop.ejs                // Shop view
│   ├── create-product.ejs      // Product creation form
│
├── app.js                      // Main application file
├── package.json
├── .env                        // Environment variables
└── README.md                   // Project description
```

 🚀 Key Technologies

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: bcrypt for password hashing, express-session for session management
- **File Handling**: multer for file uploads
- **Frontend**: EJS templates, Tailwind CSS

 👨‍💻 Usage

- **User Authentication**:
    - Register a new account via the registration form.
    - Log in using email and password.
    - Log out by clicking the logout button.

- **Product Management**:
    - Navigate to the product creation page to add new products.
    - Upload images and fill in product details.
    - View all products and sort or filter based on criteria.

 📝 Contributions

Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request.

🔐 Security Considerations

- Passwords are hashed using bcrypt for secure storage.
- Session management with secure cookies to prevent session hijacking.
- Input validation and sanitization to prevent injection attacks.


 📬 Contact

For any queries or issues, please contact [99beastrohan@gmail.com](mailto:99beastrohan@gmail.com).



