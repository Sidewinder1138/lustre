# webplay
Playing around with interesting web UI ideas.

## Build Web UIs with SVG
I want to try using SVG elements as the basis for constructing web UIs, instead
of the traditional HTML/CSS approach.

I'll be using TypeScript to manipulate the SVG elements, and any DOM elements as well.

I'll be embedding snippets of HTML/CSS content inside SVG elements via the
<foreignObject> SVG element, that way for "regular" textual content we can use
traditional techniques.

I'm going to try and use rxjs Observables to get that sweet functional event/async
handling.

Considering exploring TypeScript's support for JSX (.tsx files)... could use this
to allow user to more easily stuff HTML into the SVG-based UI...

# Usage
$ npm install

In one tab do:
$ npm run watch

In another tab do:
$ npm run serve
