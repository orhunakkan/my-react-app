# Orhun's Calendar

A modern, interactive calendar application built with React, TypeScript, and Firebase. Features a responsive design with dark/light theme support and real-time data synchronization.

## Features

- **Interactive Calendar Interface**
  - Navigate through months of 2025
  - Click to mark dates in green
  - Double-click to mark dates in red
  - View day names for each date
  - Real-time updates across all connected clients

- **Theme Support**
  - Light and dark mode
  - Persistent theme preference
  - Easy toggle with sun/moon button

- **Responsive Design**
  - Clean, modern interface
  - Custom CSS with CSS variables
  - Mobile-friendly layout

## Technology Stack

- React 18
- TypeScript
- Firebase Realtime Database
- Vite
- CSS Modules

## Getting Started

1. Clone the repository:
```sh
git clone https://github.com/orhunakkan/my-react-app.git
cd my-react-app
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Firebase Configuration

The application uses Firebase Realtime Database. Configuration is managed in firebase.ts

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Deployment

The application is configured for GitHub Pages deployment. The base URL is set to `/my-react-app` in vite.config.ts

To deploy:
```sh
npm run deploy
```

## Contact

Orhun Akkan - [GitHub Profile](https://github.com/orhunakkan)

Project Link: https://github.com/orhunakkan/my-react-app
