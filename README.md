<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# Laravel React Cruise App

This project is a cruise booking application built with Laravel and React.

## Development with Docker

This project uses Docker for local development to ensure a consistent environment across all developers' machines.

### Prerequisites

- Docker and Docker Compose installed on your machine
- Git

### Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd New-App
   ```

2. For HTTPS support (recommended for production-like environments):
   ```bash
   # Generate self-signed certificates
   ./generate-certs.sh
   ```

3. Start the Docker development environment:
   ```bash
   # With HTTPS enabled
   ENABLE_HTTPS=true make build
   ENABLE_HTTPS=true make up
   
   # OR without HTTPS
   make build
   make up
   ```

4. The application will be available at:
   - Laravel: http://localhost:8000
   - Vite Dev Server:
     - HTTP: http://localhost:5173 (if HTTPS is disabled)
     - HTTPS: https://localhost:5173 (if HTTPS is enabled)

### Available Commands

We've included a Makefile to simplify common tasks:

```bash
make up        # Start the containers
make down      # Stop the containers
make restart   # Restart the containers
make build     # Rebuild the containers
make shell     # Access the container's shell
make logs      # View container logs
make install   # Install dependencies

# Run artisan commands
make artisan migrate
make artisan db:seed

# Run npm commands
make npm install
make npm update
```

### Development Workflow

1. The source code is mounted into the container, so any changes you make locally will be reflected in real-time
2. Vite's hot module replacement is enabled, so changes to React components will be instantly reflected in the browser
3. The Laravel development server will automatically reload when PHP files are changed

### Troubleshooting

If you encounter any issues with the Vite manifest:

1. Access the container shell:
   ```bash
   make shell
   ```

2. Clear the Laravel cache:
   ```bash
   php artisan optimize:clear
   ```

3. Restart the servers:
   ```bash
   exit
   make restart
   ```

### Troubleshooting Mixed Content Errors

If you're experiencing mixed content errors (HTTP resources loaded over HTTPS):

1. Ensure you're using HTTPS for your Vite development server:
   ```bash
   ENABLE_HTTPS=true make restart
   ```

2. If you're deploying to a production environment like Render:
   - Ensure your app is configured to use HTTPS for all resources
   - The Content-Security-Policy header is added to the HTML to upgrade insecure requests
   - You might need to rebuild and redeploy your container with HTTPS enabled:
   ```bash
   ENABLE_HTTPS=true ./build-push.sh
   ```

## Production Deployment

For production deployment, the build process should be used instead of the development server. Modify the Dockerfile to use `npm run build` instead of `npm run dev` for production deployments.

# JetSet App

A modern full-stack application built with React, Node.js, and SQLite.

## Features

- User authentication with JWT
- User profile management
- RESTful API with Express
- SQLite database with Sequelize ORM
- React frontend with Vite

## Project Structure

```
├── backend/             # Backend Node.js code
│   ├── config/          # Database configuration
│   ├── controllers/     # API controllers
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Sequelize models
│   └── routes/          # API routes
├── database/            # SQLite database files
├── public/              # Static assets
├── resources/           # Frontend React code
│   ├── css/             # Stylesheets
│   └── js/              # React components
└── server.js            # Express server entry point
```

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Start development server: `npm run dev`

## Scripts

- `npm run dev`: Starts both the backend and frontend in development mode
- `npm run server`: Runs just the Node.js backend
- `npm run client`: Runs just the React frontend
- `npm run build`: Builds the frontend for production
- `npm start`: Starts the production server

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user
- `GET /api/auth/me`: Get current user profile

### Users
- `GET /api/users`: Get all users (admin only)
- `GET /api/users/:id`: Get user by ID
- `PUT /api/users/:id`: Update user
- `DELETE /api/users/:id`: Delete user
