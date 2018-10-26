### Build Android for release
Here is the steps to build and prepare android for release

1. Build
```
$ ionic cordova build android --prod --release
```
2. Sign
```
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./certs/release-key.jks ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk notesapp
```
3. Optimise
```
$ ~/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk notesapp.apk
```
4. Verify
```
$ ~/Library/Android/sdk/build-tools/27.0.3/apksigner verify notesapp.apk
```