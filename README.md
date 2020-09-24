# Lustre UI
A UI framework for the Web based around SVG and TypeScript.

Lustre allows you to construct rich interactive user interfaces for the Web using nothing but a simple collection of TypeScript classes. Behind the scenes Lustre renders your UI using SVG, taking advantage of the browser's existing capability for rendering vector graphics efficiently.

Traditional HTML/CSS content can be "embedded" into Lustre widgets if desired, so you can still use more "common" methods for parts of your UI.

Lustre is meant for people who are tired of shoehorning HTML/CSS into doing things they were never meant to do.

# Technologies
Lustre relies on and embraces:

* TypeScript
* SVG
* RxJS (Observables)

# Usage
$ npm install

To compile in "watch" mode do:
$ npm run watch

And then in another tab, serve up the app:
$ npm run serve
