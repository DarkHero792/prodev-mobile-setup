# 📱 First Mobile App with Expo Router

## 🏗️ Project Setup
- Moved to project root: `cd prodev-mobile-setup`
- Created project using:  
  ```bash
  npx create-expo-app@latest app-example --template with-router
- Project folder: app-example

- Used Expo Router template

## 🧠 File Structure Observations
- app/(tabs)/index.tsx → Main tab screen (acts like a page in Next.js)

- constants/Colors.ts → Theme and design constants

- app/_layout.tsx → Layout wrapper for navigation

- Each folder under app/ represents a route/screen

## 📝 Home Screen Modification
- File modified: app/(tabs)/index.tsx

- Changed:
"Welcome!" → "** First App Created**"

## 🚀 Running the App

```npx expo start```

- Scanned the QR code with Expo Go (Android) / Camera App (iOS)

- App loaded successfully on physical device

## 🔄 Project Reset Notes

- Modified `app/(tabs)/index.tsx` to display "** First App Created **"
- ❗ Forgot to commit the changes before resetting the project
- Ran `npm run reset-project` → Deleted all custom files including the modified screen
- Script regenerated a minimal layout with:
  - `app/index.tsx`
  - `app/_layout.tsx`
- Reapplied the modification manually in `app/index.tsx`
- Ran `npx expo start` again → App launched successfully
- Accepted alternate port 8082 due to 8081 being in use

