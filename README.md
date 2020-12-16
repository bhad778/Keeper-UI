# Pare UI

## Installation

Clone into repo and then

```bash
yarn install
```

and then

```bash
expo install
```

Once that is done run

```bash
amplify pull
```

This will add the necessary amplify files like aws-exports.js. You will
be asked a few questions-

Do you want to use an AWS profile?- Yes (if you dont have a profile set one up for your computer)
Please choose the profile you want to use- Bryan-desktop (pick your profile)
Which app are you working on?- d27hkhc0gs1k9k (it should auto suggest this)
Choose your default editor- Visual Studio Code
Choose the type of app that you're building- javascript
What javascript framework are you using- react-native
Source Directory Path: / (take defaults for this one and for rest of them)
Distribution Directory Path: /
Build Command: npm.cmd run-script build
Start Command: npm.cmd run-script start
Do you plan on modifying this backend? Yes

Once that has completed add the eslint extension (the first one you see after searing eslint made by Dirk Baeumer ) to vscode and then run

```bash
npm install eslint -g
```

After this, restart vscode and the project is ready

## Errors

Couldn't start project on Android: Error running adb: device 'adb' not found - https://docs.expo.io/workflow/android-studio-emulator/ take this link and make sure you have android sdk build tools installed, also try wiping data from device, or deleting node modules and expo installing, also try restarting computer
