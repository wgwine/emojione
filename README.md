#![Emoji One Logo](http://git.emojione.com/assets/logo.png) Emoji One 
> bringing you [emojione.com](http://emojione.com/) & [emoji.codes](http://emoji.codes/)

The web's first and only complete open source emoji set. It is 100% free and super easy to integrate.



## The Idea

This is a highly minified version of the emojione implementation. It strips out all functionality from emojione except for png sprites. 

There are 1,832 emojis in the emojione library. Emojione suggests using their individual images (one image per emoji) as the standard implementation. Most websites will require an emoji picker utility to allow their users to take advantage of emojis. A picker using the standard implementation would need to make 1,832 separate image requests in order to display all emojis to the user. Additionally, the standard emojione method relies on an external CDN which hosts the images. This adds risk to applications making use of these images. The images can be hosted locally, but that requires additional configuration, and does not alleviate the need to make 1,832 requests.

The sprite method was chosen for it's simplicity and because it vastly reduces the number of required requests for emoji picker utilities. Once the sprite image is loaded and cached in the browser, all emojis can display immediately without additional loading.  

## Additional changes were made to reduce the overall size of the implementation:

*  The standard emojione.min.js file is 217KB in size. 
  *  The emojione.slim.js file included in this repo is 77KB.
*  The standard emojione.sprites.png file is 2,205KB. 
  *  The sprite image in this repo has been compressed to 1,162KB.
*  Using sprites in the standard emojione requires the addition of a 96KB CSS file, which is not required for this slim implementation.

This brings the total size from 2,518KB down to 1,239KB, for a page weight savings of 1,279KB.


## Installation
Add the following script and stylesheet links to your webpage:
```
<script src="./path/to/emojione.slim.js"></script>
<link rel="stylesheet" href="./path/to/emojione.slim.css"/>
```
emojione.sprites.png must be stored with the css file, or the path in the css file must be changed to accomodate a different location.




### Javascript Conversion

**[.toImage\(str\)](http://git.emojione.com/demos/latest/jstoimage.html)** - _native unicode + shortnames -> images (mixed input)_

This demo shows you how to take input containing both native unicode emoji and shortnames, and translate it into Emoji One images for display.



## Licenses

### Emoji One Artwork

*  Applies to all PNG and SVG files as well as any adaptations made.
*  The following applies to artwork included in Emoji One GitHub libraries versions < 2.0.0.
  *  License: Creative Commons Attribution-ShareAlike 4.0 International
  *  Human Readable License: http://creativecommons.org/licenses/by-sa/4.0/
  *  Complete Legal Terms: http://creativecommons.org/licenses/by-sa/4.0/legalcode
*  The following applies to artwork included in Emoji One GitHub libraries versions >= 2.0.0.
  *  License: Creative Commons Attribution 4.0 International
  *  Human Readable License: http://creativecommons.org/licenses/by/4.0/
  *  Complete Legal Terms: http://creativecommons.org/licenses/by/4.0/legalcode


### Emoji One Non-Artwork

*  Applies to the Javascript, JSON, PHP, CSS, HTML files, and everything else not covered under the artwork license above.
*  License: MIT
*  Complete Legal Terms: http://opensource.org/licenses/MIT
