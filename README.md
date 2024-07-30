# Expo Framework mit Beispielen

Ein paar use cases für das Expo Framework im Rahmen einer kleinen PA.

Darunter werden folgende Funktionalitäten eingebunden:

- Einbindung von nativen Komponenten von der Expo-SDK:
    - Bildwahl aus Album -> expo-image-picker
    - App & Geräteinformation -> expo-application
    - Geräteinformation bzgl. Sensorik -> expo-sensors
- React Kontexte für
    - Login
    - Theme
    - Page
- Dark mode Switch
- Swipeable View mit Animation (Eigene Kreation für eine bessere Startseite)
- Use-cases:
    - Authentifizierung via Firebase
    - Liste von Elementen
    - Expo Router Module

Author: Oliver Rausch

# Lokales Starten über Expo Go

1. Expo GO auf iOS oder Android herunterladen (geht auch auf Emulatoren)
2. Expo Account erstellen und in Expo GO einloggen
3. `npm install` ausführen
4. `expo login` ausführen, um sich bei den Expo Services anzumelden.
5. `npm run start` oder `npm run tunnel` ausführen, um den Bundler zu starten. (**Bedingung ist, dass sich mit dem
   Bundler im selben Netzwerk befindet**
   Letzterer Befehl verwendet einen Tunnel über den Service von `ngrok`, falls die Netzwerkkonfiguration "zu sicher"
   eingestellt ist.