# InternConnect - Intern Dashboard Platform

A modern, full-stack web application for tracking intern performance, managing rewards, and maintaining leaderboards. Built with Node.js, Express, MongoDB, and vanilla JavaScript.

## 🚀 Features

### Core Functionality
- **🔐 User Authentication**: Secure signup and login system with MongoDB
- **📊 Dashboard**: Comprehensive overview of intern performance and statistics
- **🏆 Leaderboard**: Real-time ranking system with competitive features
- **👤 User Profiles**: Detailed profile management and customization
- **🎯 Goal Tracking**: Set and monitor personal and professional goals
- **📈 Performance Analytics**: Visual charts and progress indicators

### User Experience
- **🎨 Modern UI**: Dark theme with purple accent colors and smooth animations
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Real-time Updates**: Live data updates and notifications
- **🔒 Session Management**: Remember me functionality and secure logout
- **📝 Form Validation**: Client-side and server-side validation with helpful feedback

### Technical Features
- **🗄️ MongoDB Integration**: Persistent data storage with Mongoose ODM
- **🛡️ Error Handling**: Comprehensive error handling and user feedback
- **🔧 API Endpoints**: RESTful API with proper HTTP status codes
- **🌐 CORS Support**: Cross-origin resource sharing enabled
- **📦 Modular Architecture**: Clean separation of concerns

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework and API server
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling for Node.js
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS variables and animations
- **Vanilla JavaScript** - ES6+ features and async/await
- **Bootstrap 5** - Responsive UI components and grid system
- **Font Awesome** - Icon library for enhanced UI

## 📁 Project Structure

```
intern-dashboard/
├── backend/
│   ├── server.js              # Main Express server
│   ├── package.json           # Dependencies and scripts
│   ├── SETUP.md              # MongoDB setup guide
│   ├── node_modules/         # Installed packages
│   ├── data.json             # Sample data (empty)
│   └── leaderboard.json      # Leaderboard data (empty)
├── frontend/
│   ├── index.html            # Landing page with features showcase
│   ├── login.html            # User authentication page
│   ├── signup.html           # User registration page
│   ├── dashboard.html        # Main dashboard with statistics
│   ├── leaderboard.html      # Competitive leaderboard page
│   ├── profile.html          # User profile management
│   ├── js/
│   │   ├── login.js          # Login functionality and validation
│   │   ├── signup.js         # Registration with password strength
│   │   ├── dashboard.js      # Dashboard functionality (empty)
│   │   └── leaderboard.js    # Leaderboard functionality (empty)
│   ├── css/
│   │   └── style.css         # Global styles (empty)
│   └── assets/               # Images and static files (empty)
├── start-project.bat         # Windows quick start script
├── start-project.sh          # Unix/Linux quick start script
└── README.md                 # This file
```

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas cloud)

### Quick Start

#### Option 1: Using Quick Start Scripts
```bash
# Windows
start-project.bat

# Unix/Linux
chmod +x start-project.sh
./start-project.sh
```

#### Option 2: Manual Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intern-dashboard
   ```

2. **Set up MongoDB**
   - **Local MongoDB**: Install and start MongoDB service
   - **MongoDB Atlas**: Create free cluster and get connection string
   - See `backend/SETUP.md` for detailed instructions

3. **Configure environment**
   ```bash
   # Create .env file in backend directory
   cd backend
   echo "MONGODB_URI=mongodb://localhost:27017/internconnect" > .env
   echo "PORT=5000" >> .env
   ```

4. **Install dependencies and start backend**
   ```bash
   cd backend
   npm install
   npm start
   ```

5. **Start frontend**
   ```bash
   cd frontend
   # Open index.html in browser or use local server
   python -m http.server 8000  # Python 3
   # OR
   npx http-server -p 8000     # Node.js
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the `backend` directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/internconnect
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/internconnect

# Server Configuration
PORT=5000
```

### MongoDB Setup Options

#### Local MongoDB
1. Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Install with default settings
3. Start MongoDB service
4. Use connection string: `mongodb://localhost:27017/internconnect`

#### MongoDB Atlas (Recommended)
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create new cluster (free tier)
3. Get connection string from cluster
4. Replace `MONGODB_URI` in `.env` file

## 🚀 Usage Guide

### 1. Landing Page (`index.html`)
- **Overview**: Learn about platform features and benefits
- **Navigation**: Access signup, login, and feature sections
- **Responsive**: Optimized for all device sizes

### 2. User Registration (`signup.html`)
- **Form Fields**: First name, last name, email, password
- **Validation**: Real-time password strength checking
- **Security**: Client-side and server-side validation
- **UX**: Auto-redirect to login with email pre-filled

### 3. User Authentication (`login.html`)
- **Credentials**: Email and password authentication
- **Remember Me**: Persistent login state
- **Auto-fill**: Email pre-filled from signup redirect
- **Security**: Proper session management

### 4. Dashboard (`dashboard.html`)
- **Statistics**: Tasks completed, performance rating, leaderboard rank
- **Progress**: Goal tracking with visual progress bars
- **Activity**: Recent activities and points earned
- **Navigation**: Quick access to profile and leaderboard

### 5. Leaderboard (`leaderboard.html`)
- **Rankings**: Real-time intern rankings
- **Competition**: Competitive features and statistics
- **Visual**: Beautiful charts and progress indicators
- **Interactive**: Sortable and filterable data

### 6. User Profile (`profile.html`)
- **Personal Info**: Edit profile information
- **Statistics**: View personal performance metrics
- **Settings**: Account preferences and settings
- **Security**: Password change functionality

## 🔌 API Endpoints

### Authentication
- `POST /api/signup` - User registration
- `POST /api/login` - User authentication

### Data
- `GET /api/test` - Server health check
- `GET /api/users` - Get all users (testing)

### Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

## 🐛 Troubleshooting

### Common Issues

#### Backend Issues
1. **"MongoDB connection error"**
   - Check if MongoDB is running
   - Verify connection string in `.env`
   - For Atlas: Check IP whitelist

2. **"Module not found"**
   - Run `npm install` in backend directory
   - Check Node.js version compatibility

3. **"Port already in use"**
   - Change PORT in `.env` file
   - Kill process using port 5000

#### Frontend Issues
1. **"Network error"**
   - Ensure backend is running on port 5000
   - Check browser console for CORS errors
   - Verify API endpoints are accessible

2. **"Cannot connect to server"**
   - Check if backend server is started
   - Verify MongoDB connection
   - Check firewall settings

### Testing
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

## 🔒 Security Considerations

### Current Implementation
- ✅ Input validation (client and server-side)
- ✅ MongoDB injection protection (Mongoose)
- ✅ CORS configuration
- ✅ Error handling without sensitive data exposure

### Production Recommendations
- 🔒 **Password Hashing**: Implement bcrypt for password storage
- 🔒 **JWT Tokens**: Add JWT-based authentication
- 🔒 **Rate Limiting**: Implement API rate limiting
- 🔒 **HTTPS**: Use SSL/TLS encryption
- 🔒 **Input Sanitization**: Add comprehensive input validation
- 🔒 **Session Management**: Implement secure session handling

## 🚧 Development Status

### ✅ Completed Features
- User authentication system
- MongoDB integration
- Responsive UI design
- Form validation
- Session management
- Dashboard interface
- Leaderboard page
- Profile management
- Error handling
- API endpoints

### 🚧 In Progress
- Dashboard functionality implementation
- Leaderboard data integration
- Profile editing features
- Real-time updates

### 📋 Planned Features
- Password hashing with bcrypt
- JWT authentication
- Real-time notifications
- Advanced analytics
- Admin panel
- Email verification
- Password reset functionality

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Add proper error handling
- Include comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help
1. Check the troubleshooting section above
2. Review browser console for JavaScript errors
3. Check server console for backend errors
4. Consult `backend/SETUP.md` for MongoDB issues
5. Create an issue in the repository

### Useful Resources
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

---

**Built with ❤️ for interns worldwide**

*Empowering the next generation of professionals through innovative technology and user-centered design.*
