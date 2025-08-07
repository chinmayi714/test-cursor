# Login Form Application

A full-stack login form application built with React (frontend) and Node.js/Express (backend), featuring secure authentication with JWT tokens.

## Features

### Frontend (React)
- 🎨 Modern, responsive UI with gradient backgrounds and animations
- ✅ Form validation with real-time error feedback
- 🔐 Secure login with JWT token management
- 📱 Mobile-responsive design
- ⚡ Loading states and error handling
- 🔄 Automatic token persistence with localStorage

### Backend (Node.js/Express)
- 🛡️ JWT-based authentication
- 🔒 Password hashing with bcryptjs
- 🌐 CORS enabled for cross-origin requests
- 📝 Input validation and error handling
- 🔐 Protected routes with token verification
- 💾 Mock user database (easily replaceable with real database)

## Project Structure

```
login-form-app/
├── package.json                 # Root package.json with scripts
├── backend/                     # Node.js backend
│   ├── package.json
│   ├── server.js               # Express server with auth endpoints
│   └── .env                    # Environment variables
└── frontend/                   # React frontend
    ├── package.json
    ├── public/
    └── src/
        ├── App.js              # Main app component
        ├── App.css             # Global styles
        └── components/
            ├── LoginForm.js    # Login form component
            ├── LoginForm.css   # Login form styles
            ├── Dashboard.js    # Post-login dashboard
            └── Dashboard.css   # Dashboard styles
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository and install dependencies:
```bash
npm run install-deps
```

2. Start both frontend and backend servers:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend development server on http://localhost:3000

### Manual Setup

If you prefer to start servers individually:

1. Start the backend:
```bash
cd backend
npm install
npm run dev
```

2. Start the frontend (in a new terminal):
```bash
cd frontend
npm install
npm start
```

## Demo Credentials

Use these credentials to test the login functionality:

- **Email:** user@example.com
- **Password:** password123

or

- **Email:** admin@example.com
- **Password:** password123

## API Endpoints

### POST /api/login
Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

### GET /api/profile
Protected route that returns user profile (requires valid JWT token).

**Headers:**
```
Authorization: Bearer <jwt_token>
```

### GET /api/health
Health check endpoint to verify server status.

## Security Features

- **Password Hashing:** Passwords are hashed using bcryptjs before storage
- **JWT Tokens:** Secure token-based authentication with expiration
- **Input Validation:** Server-side validation for all inputs
- **CORS Protection:** Configured for secure cross-origin requests
- **Error Handling:** Secure error messages that don't leak sensitive information

## Customization

### Adding a Real Database

Replace the mock `users` array in `backend/server.js` with your preferred database:

```javascript
// Example with MongoDB/Mongoose
const User = require('./models/User');
const user = await User.findOne({ email });
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
JWT_SECRET=your-super-secret-jwt-key
DB_CONNECTION_STRING=your-database-url
NODE_ENV=production
```

### Styling Customization

The application uses CSS custom properties and can be easily themed by modifying the color gradients and design tokens in the CSS files.

## Technologies Used

### Frontend
- React 18
- CSS3 with Flexbox/Grid
- Fetch API for HTTP requests
- Local Storage for token persistence

### Backend
- Node.js
- Express.js
- bcryptjs for password hashing
- jsonwebtoken for JWT handling
- cors for cross-origin resource sharing
- dotenv for environment variables

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
