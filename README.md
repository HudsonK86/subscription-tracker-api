# Subscription Tracker API

A robust RESTful API built with Express and MongoDB that helps users track and manage their subscriptions.

## Features

- **User Authentication**: Secure signup and login functionality with JWT
- **Subscription Management**: Create, read, update, and delete subscription records
- **Automated Notifications**: Email notifications for upcoming subscription renewals
- **Workflow Management**: Automated workflows using Upstash
- **Data Analytics**: Track spending patterns and subscription usage

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, bcrypt
- **Email**: Nodemailer
- **Caching**: Upstash Redis
- **Workflows**: Upstash Workflow
- **Security**: Arcjet rate limiting and protection

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm
- MongoDB connection

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/subscription-tracker-api.git
   cd subscription-tracker-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USERNAME=your_email
   EMAIL_PASSWORD=your_email_password
   UPSTASH_REDIS_URL=your_redis_url
   UPSTASH_REDIS_TOKEN=your_redis_token
   ARCJET_SITE_KEY=your_arcjet_key
   ARCJET_SECRET_KEY=your_arcjet_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token

### Subscription Endpoints

- `GET /api/subscriptions` - Get all subscriptions for the logged-in user
- `POST /api/subscriptions` - Create a new subscription
- `GET /api/subscriptions/:id` - Get a specific subscription
- `PUT /api/subscriptions/:id` - Update a subscription
- `DELETE /api/subscriptions/:id` - Delete a subscription

## Development

```bash
# Run in development mode with hot reloading
npm run dev

# Lint code
npm run lint

# Run tests
npm run test
```
