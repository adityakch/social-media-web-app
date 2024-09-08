# 📸 Social Media Web App

## 🌟 Overview

This project is a social media web application inspired by Instagram. It allows users to share media, interact with posts, and explore content from other users. The application uses Appwrite for backend management and implements core features similar to Instagram.

## ✨ Features

- 🔐 **User Authentication**
  - Login and registration system
- 🖼️ **Media Posting**
  - Users can upload and share media content
- 👍 **Interaction**
  - Like posts
  - Save posts for later viewing
- 🔍 **Explore Page**
  - Search functionality based on keywords
- 🏠 **Home Feed**
  - Display recent posts from users

## 🛠️ Technologies Used

### Frontend
- ⚛️ React
- ⚡ Vite.js
- 🏷️ TypeScript
- 🎨 Tailwind CSS
- 🧰 shadcn/ui

### Backend
- 🚀 Appwrite

## 🚀 Setup and Installation

1. Clone the repository.

2. Install dependencies
   ```
   npm install
   ```

3. Set up Appwrite
   - Create an Appwrite account and set up a new project.
   - Configure your Appwrite endpoint and project ID in the application.

4. Environment Variables
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
     VITE_APPWRITE_PROJECT_ID=your_project_id
     ```

5. Run the application
   ```
   npm run dev
   ```

