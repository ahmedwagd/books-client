# Book Management Application

A modern web application for managing books built with React, TypeScript, and Vite.

## 🔗 Live Demo

Check out the live application: [https://books-client-five.vercel.app/](https://books-client-five.vercel.app/)

## 🚀 Features

- Browse and search books
- View detailed book information
- Add new books to the collection
- Edit existing book details
- Responsive design for all devices

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **UI Components**: Custom components with Radix UI primitives
- **HTTP Client**: Axios
- **Routing**: React Router 7

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd blog-client
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build

To build the application for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Linting

To run the linter:

```bash
npm run lint
# or
yarn lint
```

## 🏗️ Project Structure

```
blog-client/
├── public/              # Static assets
├── src/
│   ├── api/             # API integration
│   ├── assets/          # Project assets
│   ├── components/      # Reusable components
│   │   └── ui/          # UI components
│   ├── context/         # React context providers
│   ├── layouts/         # Layout components
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── reducers/        # State management
│   ├── types/           # TypeScript type definitions
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── .gitignore           # Git ignore file
├── components.json      # Component configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 📱 Application Routes

- `/` - Home page
- `/books` - Books listing page
- `/books/:id` - Individual book details page

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
