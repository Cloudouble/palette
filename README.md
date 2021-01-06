# Palette
A PWA web app starter kit including core CSS themes, manifest and file structure. Part of 
the [live-element](https://live-element.net) framework.


## What It Does
```Palette``` is not something you include as a library, it is a quick-start for you to reliably get going with your PWA web app. 
It has everything already structured to enable a smooth development process, including the other ```live-element``` libraries.
It assumes a strong working knowledge of HTML, Javascript and CSS (including variables) and PWAs.


## Installation
Copy the following files into your web root and you will have a complete PWA web app ready to work on:
* ```browserconfig.xml```
* ```index.html```
* ```manifest.json```
* ```script.js```
* ```palette.css```
* ```style.css```
* ```worker.js```
* the ```elements``` directory and it's contents
* the ```images``` directory and it's contents


## Usage

Recommended to follow this order, but it's not critical.


### Preparation
Before you can do anything useful with this, you will need at least an app name, a colour scheme with 
the CSS colour codes for it's colours, a logo image and an icon image (square). 


### /images/*
Create your own set of log and icon files to overwrite all the files in the images directory. Keep the 
image dimensions and filenames the same for each one. All default files in that directory should be overwritten 
with your own branding images.


### /palette.css
The idea of this file is that it goes at the start of your CSS cascade and enables you to define the core 
aspects of your theme in one place. By defined all theming aspects of your app here you can easily 
adjust or swap out this file to create a completely new look and feel for your app.

* **lines 4-8**: put your colour scheme codes in here, with meaningful CSS variable names. This is the only 
place where you should create or change any CSS variable names, otherwise only overwrite the values.
* **lines 11-14**: put your global font families here. If you leave lines 12-14 as is, the same font from 
line 11 will be used everywhere. 
* **lines 17-22**: you only need to customize this area if you wish to use a different file path as your main 
logo and icon files. Otherwise overwriting the files in the ```images``` directory will enough.
* **lines 27-36**: assign your colour scheme colours to the functional colour variables. Don't copy the 
actual codes but use the variable names you previously defined. Very important NOT to change these variable 
names in any way from now on. The purpose of each colour functional name is described below.
* **lines 42-52**: if you wish to use specific images for these different sizes, overwrite with their urls 
here as the variable values.
* **lines 59-85**: overwrite any variables you need to in order to create your app's 'dark theme' 
 

### /browserconfig.xml
* **line 9**: adjust the value of this to be the same as the actual resolved hex code of your 
```palette--color-secondary``` variables in ```palette.css```. Compare the example to understand.


### / manifest.json
Adjust the values of the following: 
* **name**: the full name of your app
* **short_name**: a shorter name for your app, one word ideally
* **background_color**: make this the same as the resolved color code for the ```--palette--color-canvas``` variable 
from ```palette.css```
* **theme_color**: make this the same as the resolve color code for the ```--palette--color-chrome``` variable from 
```palette.css```
* unless you have changed the filenames of the branding images in **```images```**, you do not need to adjust anthing in the
```icons``` property
* adjust or remove **other included properties** as you see fit, see [Web app manifests on MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest) to learn more.


### /worker.js
* **line 2**: put a list of the domains that the live (publically available) version of your app will be 
served from
* **line 3**: put a list of files you want to cache in the live version of your app. 


### /index.html
* **line 8**: put your full app name here, or whatever else you like to see as it's title...
* **line 9**: put your app short name here, same as you did in ```short_name``` of ```manifest.json```
* **line 15**: put the resolved CSS color code here for ```--palette--color-chrome``` from ```palette.css```
* **line 20**: put your app short name here, same as you did in ```short_name``` of ```manifest.json```
* **line 23**: put the resolved CSS color code here for ```--palette--color-primary``` from ```palette.css```
* include any other stylesheets (e.g. for web fonts) in the ```head```
* **line 28**: adjust your message for browsers with Javascript turned off
* **line 60**: check your are referencing the latest version of ```element```
* **line 61**: check your are referencing the latest version of ```live```
* include any other javascript libraries before line 62 


## And then...
* complete the HTML, CSS and Javascript of your application accordingly using and extending the files 
provided, see the documentation for the other [live-element](https://live-element.net) libraries for more information.


## Further Reading 

[live-element framework](https://live-element.net)

[Web Components at MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[Web app manifests on MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest)

[CSS variables on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

[Progressive Web Apps (PWAs) on web.dev](https://web.dev/progressive-web-apps/)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
