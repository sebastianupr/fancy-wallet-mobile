import 'dotenv/config'

module.exports = {
  name: 'fancy-wallet-app',
  version: '1.0.0',
  slug: 'fancy-wallet-app',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  scheme: 'fancywallet',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.sebastianuprdev.fancywallet',
    config: {
      googleSignIn: {
        reservedClientId: process.env.GOOGLE_RESERVED_CLIENT_ID
      }
    },
    googleServicesFile: './GoogleService-Info.plist'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  },
  build: {
    babel: {
      include: ['@ui-kitten/components']
    }
  },
  packagerOpts: {
    sourceExts: ['cjs']
  },
  extra: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    GOOGLE_IOS_CLIENT_ID: process.env.GOOGLE_IOS_CLIENT_ID,
    GOOGLE_EXPO_CLIENT_ID: process.env.GOOGLE_EXPO_CLIENT_ID
  }
}
