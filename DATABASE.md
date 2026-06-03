# Database Schema - BIAKA Debate Club

## Tables Overview

### 1. `registrations` Table
Stores all member registrations.

```sql
CREATE TABLE registrations (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  department VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  experience VARCHAR(50) NOT NULL,
  reason TEXT NOT NULL,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Columns:**
- `id` - Unique identifier
- `full_name` - User's full name
- `department` - Department + Level (e.g., "Computer Science 200")
- `phone` - Phone or WhatsApp number
- `experience` - One of: "Beginner: Never Debated", "Intermediate: Some Experience", "Advanced: Competed Before"
- `reason` - Why they want to join
- `ip_address` - User's IP (for spam detection)
- `created_at` - Registration timestamp

**Example Entry:**
```
id: 1
full_name: "Grace Ngwa"
department: "Computer Science 200"
phone: "+237 690 100 101"
experience: "Beginner: Never Debated"
reason: "I want to improve my public speaking skills"
ip_address: "192.168.1.100"
created_at: 2026-06-03 09:30:00
```

---

### 2. `news_posts` Table
Stores news and updates published by admins.

```sql
CREATE TABLE news_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  media VARCHAR(500),
  text TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Columns:**
- `id` - Unique post identifier
- `title` - Post title
- `type` - One of: "Image", "Video", "Text"
- `media` - URL to image/video (optional)
- `text` - Post content
- `author_id` - Admin who created post (future FK to admin_users)
- `created_at` - When post was created
- `updated_at` - Last modification time

**Example Entry:**
```
id: 1
title: "Inter-department Debate Announced"
type: "Image"
media: "https://images.unsplash.com/photo-1..."
text: "Join us for an exciting inter-department debate..."
author_id: 1
created_at: 2026-06-03 08:00:00
updated_at: 2026-06-03 08:00:00
```

---

### 3. `admin_users` Table
Stores admin account information (for future use).

```sql
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Columns:**
- `id` - Admin identifier
- `email` - Admin email (unique)
- `password_hash` - Bcrypt hashed password
- `role` - User role (admin, moderator, etc.)
- `created_at` - Account creation timestamp

---

## Indexes

Indexes are automatically created for performance:

```sql
CREATE INDEX idx_registrations_created ON registrations(created_at DESC);
CREATE INDEX idx_news_posts_created ON news_posts(created_at DESC);
```

These allow fast querying for recent registrations and posts.

---

## Query Examples

### Get all registrations in order
```sql
SELECT * FROM registrations 
ORDER BY created_at DESC 
LIMIT 10;
```

### Get registrations from specific date
```sql
SELECT * FROM registrations 
WHERE created_at >= '2026-06-01' 
ORDER BY created_at DESC;
```

### Get registrations by experience level
```sql
SELECT experience, COUNT(*) as count 
FROM registrations 
GROUP BY experience;
```

### Get published news
```sql
SELECT * FROM news_posts 
ORDER BY created_at DESC;
```

### Count total registrations
```sql
SELECT COUNT(*) as total_registrations 
FROM registrations;
```

---

## Data Relationships

```
admin_users (1) ──── (Many) news_posts
     ↑
     │ author_id
     │
   Future: Manage who created each post
```

---

## Database Backups

### For Neon (PostgreSQL)
```bash
# Export backup
pg_dump postgresql://user:password@neon.tech/dbname > backup.sql

# Restore from backup
psql postgresql://user:password@neon.tech/dbname < backup.sql
```

### For Supabase
1. Go to project dashboard
2. Settings > Backups
3. Click "Backup" or view automatic backups

---

## Scaling Considerations

**Current Limits (Free Tier):**
- ~100k registrations per month
- File storage: 500MB - 1GB
- Connections: 4-20 simultaneous

**When you need to upgrade:**
- If you get 10k+ registrations/month
- If storage exceeds limit
- If seeing connection errors

---

## Security Best Practices

- ✅ Passwords stored as bcrypt hashes (not plain text)
- ✅ IP addresses logged for spam detection
- ✅ HTTPS in production
- ✅ SQL injection protected (using parameterized queries)
- ✅ Environment variables for secrets
- ✅ API key authentication for admin endpoints

---

## Maintenance Tasks

### Monthly
- Check registration count: `SELECT COUNT(*) FROM registrations;`
- Archive old data if needed

### Quarterly
- Review access logs
- Update admin passwords
- Test backup/restore

### Yearly
- Plan for database growth
- Review security policies
- Migrate to larger tier if needed

---

## Useful Monitoring Queries

### Check database size
```sql
SELECT pg_size_pretty(pg_database_size(current_database()));
```

### Get connection count
```sql
SELECT count(*) FROM pg_stat_activity;
```

### Find large tables
```sql
SELECT 
  schemaname AS schema,
  tablename AS table,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables 
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

---

**Schema Version**: 1.0
**Last Updated**: June 3, 2026
