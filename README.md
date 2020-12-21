# Pare UI

## Installation

Clone into repo and then

```bash
npm install
```

and then

```bash
expo install
```

Once that is done run

```bash
npm install -g @aws-amplify/cli
```

For this next step you will need to have logged in to your aws account, get your admin to give you one now

```bash
amplify pull
```

When it asks to make a profile, make one, it will remmember you access keys and all your choices here.
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

you must add secret key and access key when making profile, if you mess up youll have to take this link to download aws cli https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html then do

```bash
aws configure
```

to reconfigure your profile

Once that has completed add the eslint extension (the first one you see after searing eslint made by Dirk Baeumer ) to vscode and then run

```bash
npm install eslint -g
```

If you do not see an aws.exports file run this

```bash
amplify init
```

use existing environment

After this, restart vscode and the project is ready

## Errors

Couldn't start project on Android: Error running adb: device 'adb' not found - https://docs.expo.io/workflow/android-studio-emulator/ take this link and make sure you have android sdk build tools installed, also try wiping data from device, or deleting node modules and expo installing, also try restarting computer
