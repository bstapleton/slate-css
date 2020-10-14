## What the hell is utility-first CSS?

The concept of utility-first is to allow front-end developers to write and use CSS classes that infer meaning through naming conventions.

Generally speaking, it means that app and site front-ends can be rapidly prototyped in browsers in a way that other developers can pick it up without necessarily knowing the naming convention by heart.

Let's look at a couple of examples:

```html
<header class="site-header">
    <nav>
        <ul class="primary-navigation">
            ...
        </ul>
    </nav>
</header>
```

If you look at this code, unless you wrote the CSS for those classnames, or you open it in a browser, you have no idea how it's going to render out. You may have some **expectations** of how it will look based on experience, but that's not the same thing as *knowing*.

Now let's apply some utility-first CSS classes to the same block:

```html
<header class="padding:2x">
    <nav>
        <ul class="flex-container flex-row margin:bottom:1x">
            ...
        </ul>
    </nav>
</header>
```

You can tell by looking at the code *roughly* how it's going to render out on the screen, because you know what padding and margin is, and you have an understanding of flexbox.

The only thing that is kind of unknown at this point is: what on earth is 1x or 2x!?

## The 'default unit'

If you look back at CSS frameworks through the years, you'll find that many (maybe even all!) have a common idea - pre-dating the introduction of grid or flex - of splitting box model into columns and rows. Those columns have widths that are dependent on the size of the container they sit within. Bootstrap, for example, has a 12-column grid. Here's an example from their aging (and unsupported) version 2, which I include here just to demonstrate that this idea is not new:

```html
<div class="row">
  <div class="span4">...</div>
  <div class="span8">...</div>
</div>
```

Incidentally, this is also pretty neatly utility-first, since all you need to know is that the container is divided into 12 columns to understand that this represents (essentially) a left sidebar that takes up 1/3 of the viewport, and a content area that takes up 2/3 of the space.

Likewise, with slate-css, all you need to know is that the default unit is 8px. Its one of the first things in the `_variables.scss` file, all of which can be fully customised to suit your needs.

Applying this knowledge, we can infer that 1x is whatever the default unit is, and 2x is double it, and so on.

You can find out more about this in the page about variables.

## When not to use it

The best time **to** use utility-first is when you haven't yet built up an understanding of the design patterns in your front-end. Which is to say; you haven't built up a component library yet of CSS patterns that you want to use in many places. Directly applying utility-first is most useful when it comes to prototyping layouts, or elements that will only be rendered out infrequently enough to not warrant having its own component.

...But that's not to say you can't `@include` the mixins from the utility-first side in you component library! Just be mindful it will add a good chunk of kB to your resultant CSS files.

Without any kind of naming-and-shaming, it should be noted that it's very easy to let utility-first to get out of hand. Treat it as guidelines for free-thinking individuals with a modicum of common sense, using what you need, when you need it, and you'll be fine.

## Wrapping up

So now you should have a rough understanding of why utility-first CSS can be pretty handy dandy, especially if multiple people work on the same project, or if you want to start standardising your CSS, and how it can even assist when it comes to building your component library.