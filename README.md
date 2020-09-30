# Lustre UI
A UI framework for the Web based around SVG and TypeScript.

Lustre allows you to construct rich interactive user interfaces for the Web using nothing but a simple collection of TypeScript classes. Behind the scenes Lustre renders your UI using SVG, taking advantage of the browser's existing capability for rendering vector graphics efficiently.

Traditional HTML/CSS content can be "embedded" into Lustre widgets if desired, so you can still use more "common" methods for parts of your UI.

Lustre is meant for people who are tired of shoehorning HTML/CSS into doing things they were never meant to do.

![Lustre Screenshot](https://github.com/Sidewinder1138/lustre/blob/master/docs/images/lustre-screenshot-2020-09-24.png)



# Usage
`$ npm install`

To compile in "watch" mode do:
`$ npm run watch`

And then in another tab, serve up the app:
`$ npm run serve`

# Technologies
Lustre relies on and embraces:

* TypeScript
* SVG
* RxJS (Observables)

# Isn't SVG Just an Image Format?
Yes, SVG can be thought of as an image format, for exactly what it stands for: scalable vector graphics. Most people who use SVG use it for this purpose: to just render a nice little graphic on the screen in a "scalable" way (no pixelation when zoom/stretched). However, what if you expand the idea out, and imagine using SVG elements (rectangles, circles, etc) to construct a full-page UI? Modern browsers have an extensive system for rendering and interacting with SVG content (which is integrated nicely with the DOM), so we believe there is an opportunity to build entire web applications out of "pure" SVG elements. This is very similar to the old Flash system, where you created vector graphics and then added interactivity with scripting, except SVG is part of the open standards for the web (HTML5, etc), and so works "natively" in all browsers without a plugin, and doesn't require proprietary software to create content.

# Why isn't anyone else doing this?
This is admittedly not the "standard way" to make UIs for the web. We are purposely trying to push boundaries here. I haven't found any similar project out there, but if you know of one please let me know!

Here's some possible objections:
  * Won't work well for accessibility - Response: Actually we can very nicely support accessibility using aria attributes and other techniques.
  * Won't work well for search engines - Response: I'm confident we can solve this too, but open to suggestions (I'm not an SEO expert).
  * The performance will be terrible - Response: I'm not at all convinced, SVG renders very fast. However, we will be benchmarking and optimizing like crazy where needed.
  * It's just not "the right way" to do things - Response: The "right" way is whichever way works best, and this project is attempting to show at least a possible new "right" way to do things in the crazy turbulent world for Web front-end.
  
