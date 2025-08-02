# InternConnect - Intern Dashboard Platform

A modern web application for tracking intern performance, managing rewards, and maintaining leaderboards.

## 🚀 Features

- **User Authentication**: Secure signup and login system
- **Modern UI**: Dark theme with responsive design
- **Performance Tracking**: Monitor tasks, ratings, and points
- **Leaderboard System**: Compare with other interns
- **Rewards System**: Earn points for achievements
- **Dashboard**: Comprehensive overview of intern progress

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **In-memory Storage** - For development (can be replaced with MongoDB)

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with custom variables
- **Vanilla JavaScript** - Functionality
- **Bootstrap 5** - UI components
- **Font Awesome** - Icons

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   or for development with auto-restart:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Open `index.html` in your browser or serve it using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```

The frontend will be available at `http://localhost:8000`

## 🔧 Usage

### 1. Landing Page
- Visit the homepage to learn about the platform
- Click "Sign Up" to create a new account
- Click "Login" to access existing account

### 2. Sign Up
- Fill in your details (First Name, Last Name, Email, Password)
- Password strength is validated in real-time
- Agree to terms and conditions
- Click "Create Account"

### 3. Login
- Enter your email and password
- Use "Remember me" to stay logged in
- Click "Login" to access your dashboard

### 4. Dashboard
- View your performance statistics
- Check your leaderboard ranking
- Monitor your progress towards goals
- View recent activities and points earned

## 🐛 Troubleshooting

### Common Issues

1. **Server not starting**
   - Check if port 5000 is available
   - Ensure all dependencies are installed
   - Check console for error messages

2. **Frontend can't connect to backend**
   - Verify backend is running on port 5000
   - Check browser console for CORS errors
   - Ensure both frontend and backend are running

3. **Login/Signup not working**
   - Check browser console for JavaScript errors
   - Verify network connectivity
   - Check if backend API endpoints are responding

### Testing the API

You can test the backend API directly:

```bash
# Test server health
curl http://localhost:5000/api/test

# Test signup
curl -X POST http://localhost:5000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@example.com","password":"password123"}'

# Test login
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## 📁 Project Structure

```
intern-dashboard/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Dependencies
│   └── node_modules/      # Installed packages
├── frontend/
│   ├── index.html         # Landing page
│   ├── login.html         # Login page
│   ├── signup.html        # Registration page
│   ├── dashboard.html     # User dashboard
│   ├── js/
│   │   ├── login.js       # Login functionality
│   │   └── signup.js      # Signup functionality
│   └── css/
│       └── style.css      # Global styles
└── README.md              # This file
```

## 🔒 Security Notes

⚠️ **Important**: This is a development version with simplified security:

- Passwords are stored in plain text (not recommended for production)
- No session management or JWT tokens
- In-memory storage (data is lost on server restart)
- No input sanitization or rate limiting

For production use, implement:
- Password hashing (bcrypt)
- JWT or session-based authentication
- Database storage (MongoDB, PostgreSQL)
- Input validation and sanitization
- Rate limiting
- HTTPS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser console for errors
3. Check the server console for backend errors
4. Create an issue in the repository

---

**Built with ❤️ for interns worldwide**
