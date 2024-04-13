Node version: 16

Version 18 is required to deploy to Firebase (use `nvm use 18`)

Steps:

```
nvm use 16
npm run start
npm run build
nvm use 18
firebase deploy --only-hosting
```
