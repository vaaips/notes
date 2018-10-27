# Android
ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./certs/release-key.jks ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk notesapp
~/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk notesapp.apk
~/Library/Android/sdk/build-tools/27.0.3/apksigner verify notesapp.apk

# iOS
ionic cordova build ios --prod