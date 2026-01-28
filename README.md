# Digital Marketing Website

## Introduction

The Digital Marketing Website is a robust web application designed to showcase digital marketing services, case studies, and client engagement tools. It provides a seamless experience for businesses and marketing agencies to present their offerings, generate leads, and communicate with prospects. Whether for portfolio, agency, or consultation use, this project aims to deliver a professional, responsive, and feature-rich online presence.

## Features

- Responsive and modern landing page design
- Service and solution listings with detailed descriptions
- Blog and resources section for SEO and content marketing
- Contact forms and lead capture
- Case studies or portfolio presentations
- Client testimonials and reviews integration
- SEO optimization and analytics integration

## Requirements

Before installing or running the Digital Marketing Website, ensure your environment meets these requirements:

- Node.js (v14 or higher)
- npm or Yarn package manager
- Git (for version control)
- Modern web browser (for frontend testing)
- Optional: Docker (for containerized deployment)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/As377507/Digital-Marketing-website.git
   cd Digital-Marketing-website
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Configure your environment variables (see Configuration section).
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Access the site at `http://localhost:5173`.

## Tech Stack

- React.js (Frontend)
- Vite (Build Tool)
- HTML5, CSS3, JavaScript (ES6+)
- Tailwind CSS / Custom CSS
- NGINX (Production Web Server)
- Git & GitHub (Version Control)

## Production Build

To create a production-ready build:

```bash
npm run build

# or 
yarn build
```

## Deployment (NGINX)

This project is deployed using NGINX on a Linux server.


### Steps:
Build the project:
   ```bash
   npm run build

Upload or clone the project to the server:
   ```bash
   git clone https://github.com/As377507/Digital-Marketing-website.git
   cd Digital-Marketing-website
   ```

## NGINX Installation

NGINX is used as the production web server to host the built React application.

### Install NGINX on Ubuntu / Debian:

```bash
sudo apt update
sudo apt install nginx -y
```

### Verify NGINX Instalation:

```bash
sudo systemctl status nginx
```

### Configure NGINX
```bash
sudo nano /etc/nginx/sites-available/react-app
```
### Deploy to /var/www/html
```bash
   sudo rm -rf /var/www/html*
```
### Paste the following NGINX configuration:
   ```bash
   server {
    listen 80;
    server_name _;

    root /var/www/html/Digital-Marketing-website/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}

sudo ln -s /etc/nginx/sites-available/react-app /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

```


## Live Demo

🌐 Live Website: http://15.206.197.167  
📦 GitHub Repository: https://github.com/As377507/Digital-Marketing-website

## Configuration

To ensure the website functions correctly, set up configuration files as needed:

- **Frontend Settings**: Adjust any API base URLs, branding, or analytics codes in the frontend configuration files.

## Usage

Once installed and configured, you can use the website as follows:

- **Public Website**: Browse services, case studies, blogs, and contact forms as a visitor.
- **Lead Generation**: Use forms to collect visitor inquiries and store them for follow-up.
- **Content Updates**: Add or modify content regularly via the admin interface to keep the site fresh and relevant.

---

## Contributing

We welcome contributions. Please fork the repository, create a feature branch, and submit a pull request with a clear description. For major changes, open an issue first to discuss what you would like to change.



---

For more details, visit our [official documentation](https://github.com/As377507/Digital-Marketing-website) or reach out via the contact page on the website.
