# Intersy.js

A simple, lightweight library of CSS effects that are triggered when element enters the viewport as the user scrolls the page.
Intersy works well with "reactive" frameworks where the content is loaded dynamically (Vue, React, LiveWire etc.).

It automatically adds `"in-view"` class to each element with `"intersy"` class currently present in viewport.

[See in action!](https://pronode.github.io/intersy/)

## Usage

1. Include Intersy script anywhere in your HTML:

```
<script src="https://cdn.jsdelivr.net/gh/pronode/intersy@main/intersy.js"></script>
```

2. Add CSS with pre-defined effects:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/pronode/intersy@main/intersy.css" />
```

3. Add one ore more Intersy classes to the element you want to animate:

```
<!-- We want a div to appear when 25% of it enters the viewport -->
<div class="intersy fade-in"> yey! </div>
```

4. That's it!

## Extra

-   You can add `"fast"` and `"slow"` classes to control the speed of transition: 250 / 500 (default) / 750 ms.
-   Add `"once"` class to prevent repeats.
-   Use `"delay-[ms]"` (250/500/750/1000) class to delay transition by X ms.
-   Use `"threshold-[percent]"` (0/10/50/75/100) class to define what part of element should be in viewport to trigger the effect. 25% is default and threshold-0 value is equal to 0.001% of element.

## Adding your own effects

To add your own effects, simply create a CSS classes keeping following convention:

```
.my-custom-effect { /* when element is out of view */
    opacity: 0;
}

.my-custom-effect.in-view { /* when element is in view */
    opacity: 1;
}
```

You can combine Intersy classes to mix effects. Enjoy!
[See in action!](https://pronode.github.io/intersy/)
