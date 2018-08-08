Download Android SDK from the official site, you may download only the Command Line Tools instead of the entire Android Studio IDE, this guide will refer to the Command Line Tools.
https://developer.android.com/studio/#downloads

Decompress and go to `<path to the decompresed android sdk>/Android/Sdk/tools/bin` from your console.

To get the list of available android system images run `./sdkmanager --list` 

Install a image using `./sdkmanager --install "system-images;android-24;default;x86_64"`. Change the system image name for the one you need. If you haven't accepted the sdk licenses before, you will be asked now, accept them and continue.

If you get the following warning `Warning: File /home/<YourUser>/.android/repositories.cfg could not be loaded.` .Simply create an empty file on that path, named `repositories.cfg`

If you get the following warning `Warning: Failed to read or create install properties file.`
You may run the install command with `sudo` or try to fix the permissions

If you get the error `ERROR: JAVA_HOME is set to an invalid directory: /usr/lib/jvm/java-8-oracle`. First go to `/usr/lib/jvm/` and check the name of your java installation folder. Then open the environment file `/etc/environment` and change the `JAVA_HOME` variable to the name of you java folder, e.g: `JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64"`, name and version may change.

install cordova npm install -g cordova
ionic cordova platform add then android
add ANDROID_HOME export path to installation folder
run javac -version to see if available, if not install the suggested version (headless)
sudo apt-get install gradle
./sdkmanager --install "platform-tools" "platformandroid" "emulator"
export ANDROID_HOME=/home/lsrodriguezmz/AndroidStudio_SDK_CMD_LINUX
/home/lsrodriguezmz/Escritorio/Proyectos_Ionic/IonicTest/ionic_test/platforms/android/app/src/main/res/values/strings.xml
<string name="fb_app_id">1005005713003967</string>
<string name="fb_app_name">MyApp</string>
config.xml

After the android system image download and installation is complete, you can create the Android Virtual Device (AVD)

To create an Android virtual device go to `<path to the decompresed android sdk>/Android/Sdk/tools/bin` and run `./avdmanager create avd --name MyAVD -k "system-images;android-24;default;x86_64"`. Use the name and system image you want.

To run the emulator go to your ionic project folder, and run `ionic cordova run android`

To install your app on the emulator, go to the folder were the app was compiled, usually `<ProjectRootFolder>/platforms/android/app/build/outputs/apk/debug/app-debug.apk`, and drag and drop the apk on the emulator window, it will automatically start the installation
