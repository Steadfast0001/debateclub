# BIAKA Debate Club Website

A full-stack web application for the BIAKA Debate Club with registration management, news updates, and admin dashboard.

## Features

- ✅ Registration form with email notifications
- ✅ News management (admin-only)
- ✅ Admin dashboard for viewing registrations
- ✅ Multilingual support (English & French)
- ✅ Direct registration link (`/register`)
- ✅ Database persistence (PostgreSQL)
- ✅ Vercel/Netlify compatible

## Setup Instructions

### 1. Local Development

#### Prerequisites
- Node.js 14+ 
- PostgreSQL database (local or remote)
- Gmail account with app-specific password

#### Installation

```bash
# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env with your credentials
# - DATABASE_URL: PostgreSQL connection string
# - GMAIL_USER: Your Gmail address
# - GMAIL_APP_PASSWORD: Gmail app password (NOT your regular password)
# - ADMIN_EMAIL: Where to send registration notifications
# - ADMIN_KEY: Secret key for admin endpoints
```

#### Get Gmail App Password
1. Enable 2-factor authentication on Gmail
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Windows Computer"
4. Copy the 16-character password into GMAIL_APP_PASSWORD

#### Start Server
```bash
npm start
# Server runs on http://localhost:3000
```

### 2. Database Setup

The database tables are created automatically on first connection.

**Tables created:**
- `registrations` - Stores all member registrations
- `news_posts` - Stores news/updates
- `admin_users` - Admin user accounts

### 3. Deploy to Vercel

```bash
# Login to Vercel
npm i -g vercel
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# Settings > Environment Variables
# Add all variables from .env
```

### 4. Deploy to Netlify

Netlify doesn't support traditional Node.js servers. Use Vercel or these alternatives:

**Option A: Use Netlify Functions (requires AWS Lambda backend)**
- Set up separate backend (Railway, Heroku, etc.)
- Deploy frontend to Netlify
- Update API endpoints to point to backend

**Option B: Use Express with Netlify Functions**
- Install: `npm install @netlify/functions`
- Convert `api/` routes to Netlify functions format

### 5. Usage

#### For Users
- Visit `/register` for direct registration link
- Fill out registration form
- Admin receives email notification immediately
- User sees success message

#### For Admin
- View registrations: GET `/api/admin/registrations` (requires X-Admin-Key header)
- Create news: POST `/api/news` with `{title, type, media, text}`
- News posts auto-display on homepage

## API Documentation

### Registration (Public)
```bash
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "department": "Computer Science 200",
  "phone": "+237690123456",
  "experience": "Beginner: Never Debated",
  "reason": "I want to improve my speaking skills"
}
```

### Get News (Public)
```bash
GET /api/news
```

### Admin Registrations (Protected)
```bash
GET /api/admin/registrations
Headers: X-Admin-Key: your_admin_key
Query params: ?limit=50&offset=0
```

### Create News (Admin)
```bash
POST /api/news
Content-Type: application/json

{
  "title": "New Debate Session",
  "type": "Image",
  "media": "https://example.com/image.jpg",
  "text": "Join us for..."
}
```

## Environment Variables

```
DATABASE_URL=postgresql://user:password@host:5432/dbname
JWT_SECRET=your_secret_key
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=16_character_app_password
ADMIN_EMAIL=admin@example.com
ADMIN_KEY=secret_admin_key_change_this
SITE_URL=https://yourdomain.com
NODE_ENV=production
```

## File Structure

```
debateclub/
├── api/
│   ├── register.js          # Registration endpoint
│   ├── news.js              # News CRUD operations
│   ├── email.js             # Email configuration
│   ├── db.js                # Database connection
│   └── admin/
│       └── registrations.js # Admin registrations endpoint
├── index.html               # Main webpage
├── app.js                   # Frontend logic
├── styles.css               # Styling
├── server.js                # Server configuration
├── package.json             # Dependencies
├── vercel.json              # Vercel deployment config
├── .env.example             # Environment variables template
└── README.md                # This file
```

## Troubleshooting

### Email not sending
- Check GMAIL_APP_PASSWORD is correct (not regular password)
- Verify Gmail 2FA is enabled
- Check SMTP settings in `api/email.js`

### Database connection error
- Verify DATABASE_URL format
- Ensure PostgreSQL server is running
- For Vercel: use Neon or Supabase for free PostgreSQL

### Registration form not submitting
- Check browser console for errors
- Verify `/api/register` endpoint is accessible
- Check CORS headers in API responses

## Future Enhancements

- [ ] JWT authentication for admin
- [ ] Admin dashboard UI
- [ ] Edit/delete registrations
- [ ] Email templates with HTML
- [ ] Rate limiting on registration
- [ ] Duplicate registration prevention
- [ ] Export registrations to CSV
- [ ] Analytics dashboard

## License

MIT

## Support

Contact: biakadebateclub@gmail.com
