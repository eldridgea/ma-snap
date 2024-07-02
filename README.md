# Music Assistant Snapclient #

[Music Assistant](https://music-assistant.io/) can make use of [Snapcast](https://mjaggard.github.io/snapcast/) to stream to devices. It also has a web client that Music Assistant makes available if enabled.
Using this you can stream your library to your computer, or add your computer as a speaker without installing software.
This is a small page that iframes the Music Assistant and Snapclient interface into one screen with the Snapclient section being hideable by clicking the gray bar.
If accessed from a mobile device, this won't display at all (but will load in the background).

## Snapclient ##
When you pop out the Snapclient section, clicking the Play icon in the upper right will register it as an available speaker. You can rename it as needed. 
Once it's available it's usable as a destination for audio. Clicking the stop button makes the speaker unavailable. 

## Usage ## 
To set this up for your installation, in [index.html](https://github.com/eldridgea/ma-snap/blob/main/index.html) you'll need to replace the `iframe-left` with the URL for your Music Assistant and `iframe-right` with the URL for your Snapclient (if you're running the Home Assistant integration, it'll be running on port `1780`).

This is also set up as a [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app) so has the option to be installed from supporting browsers/OSes.

## Screenshots ##

![Screenshot_20240627_003213](https://github.com/eldridgea/ma-snap/assets/5951110/02d3c19d-96b9-4218-b63e-54ea40e8868e)


![Screenshot_20240627_003234](https://github.com/eldridgea/ma-snap/assets/5951110/728d1680-9231-400f-a9b1-04d4ef5fe0cc)
