# Quick Start Guide - BIAKA Debate Club Backend

## 5-Minute Setup

### Step 1: Get Your Database (2 min)
Go to [neon.tech](https://neon.tech) and:
1. Sign up (free)
2. Create new project
3. Copy the connection string from "Connection string" tab
   - Should look like: `postgresql://user:password@host/dbname`

### Step 2: Get Gmail App Password (2 min)
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer"
3. Copy the 16-character password

### Step 3: Create .env File (1 min)
Create file `debateclub/.env`:
```
DATABASE_URL=paste_neon_url_here
GMAIL_USER=biakadebateclub@gmail.com
GMAIL_APP_PASSWORD=paste_16_char_password_here
ADMIN_EMAIL=biakadebateclub@gmail.com
ADMIN_KEY=my_secret_admin_key_12345
JWT_SECRET=secret_jwt_key_change_this
SITE_URL=http://localhost:3000
NODE_ENV=development
```

### Step 4: Test Locally
```bash
cd debateclub
npm install  # If you haven't already
npm start
```
Open: http://localhost:3000

Test registration at: http://localhost:3000/register

### Step 5: Deploy to Vercel (1 min)

#### Option A: Command Line
```bash
npm i -g vercel
vercel login
vercel
# Choose: Link to existing project? > No
# Name your project: biaka-debate-club
# Enter settings in Vercel dashboard
```

#### Option B: GitHub
1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import GitHub repository
5. Add environment variables (Settings > Environment Variables)
6. Deploy!

### Step 6: Add Environment Variables in Vercel
In Vercel Dashboard:
1. Project Settings > Environment Variables
2. Add:
   - DATABASE_URL
   - GMAIL_USER
   - GMAIL_APP_PASSWORD
   - ADMIN_EMAIL
   - ADMIN_KEY
   - JWT_SECRET

---

## What Works Now

✅ Registration form stores data in database
✅ Admin gets email notification when user registers
✅ Direct link: `yourdomain.com/register`
✅ News posts ready for admin to manage
✅ Deployed to Vercel/Netlify

---

## API Endpoints

### Public Endpoints

**Submit Registration**
```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "department": "Computer Science 200",
    "phone": "+237690123456",
    "experience": "Beginner: Never Debated",
    "reason": "Want to improve speaking skills"
  }'
```

**Get News Posts**
```bash
curl http://localhost:3000/api/news
```

### Admin Endpoints

**Get All Registrations**
```bash
curl http://localhost:3000/api/admin/registrations \
  -H "X-Admin-Key: your_admin_key"
```

**Create News Post**
```bash
curl -X POST http://localhost:3000/api/news \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Event",
    "type": "Image",
    "media": "https://example.com/image.jpg",
    "text": "Join us for our upcoming debate session"
  }'
```

---

## Troubleshooting

### Email not working?
- Check GMAIL_APP_PASSWORD (not regular Gmail password)
- Verify 2FA is enabled on Gmail
- Check [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

### Database connection error?
- Copy/paste DATABASE_URL exactly from Neon
- Check for typos in .env
- Verify database exists

### Registration not submitting?
- Open browser console (F12) > Console tab
- Look for error messages
- Check Network tab in DevTools

### Vercel deployment failing?
- Check Environment Variables are set
- Ensure DATABASE_URL has all characters
- Check logs in Vercel dashboard

---

## Sharing Registration Link

Once deployed, share this URL with members:
```
https://your-domain.com/register
```

Or use short URL service to create: `bit.ly/biaka-register`

---

## Support

Email: biakadebateclub@gmail.com

---

**Ready to deploy? Run:** `npm start`
