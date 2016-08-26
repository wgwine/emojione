#![Emoji One Logo](http://git.emojione.com/assets/logo.png) Emoji One [![Build Status](https://travis-ci.org/Ranks/emojione.svg?branch=master)](https://travis-ci.org/Ranks/emojione)
> bringing you [emojione.com](http://emojione.com/) & [emoji.codes](http://emoji.codes/)

The web's first and only complete open source emoji set. It is 100% free and super easy to integrate.



## The Idea

To standardize emoji on the web through the use of common :shortnames:.

When storing user inputted text in your database, say from a guestbook or through a CMS admin, you should always make sure you are storing text containing only :shortnames: and not Unicode emoji characters or emoji images. Then, when you are displaying that content to the user, you can convert it server-side with the PHP toolkit provided, or client-side using the Javascript toolkit which is also provided. Demos of this process using Javascript, jQuery, and PHP are included in the repo, and we have example code snippets below.


#### _What are Shortnames?_

 Shortnames are semi-standardized human-readable identifiers for each emoji icon. Many online web applications will accept these shortnames as alternatives for the actual unicode character. We've compiled the full list over at [emoji.codes](http://emoji.codes/) with quick copy & search functions.




## Installation

We've teamed up with [JSDelivr](http://www.jsdelivr.com/#!emojione) to provide a simple way to install these emoji on any javascript-enabled website. Add the following script and stylesheet links to the head of your webpage:

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
