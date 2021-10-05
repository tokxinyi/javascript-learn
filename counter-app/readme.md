# Learning Notes

## index.html
**Block level vs Inline level element**
Block level:
1. Always starts on a new line
2. Always takes up the full width _available_
3. Has top and bottom margin, whereas inline element does not have

Examples of block level elements: `<address>`, `<article>`, `<div>`, `<form>`, `<blockquote>`

Inline level:
1. Does not start on a new line
2. Only takes up as much width _as necessary_

Examples of inline level elements: `<span>`

**`<hr>` - Horizontal rule**
- Is used to insert a thematic break in an HTML page to divide the sections
- Is an empty tag, does not require an end like `</hr>`

**Shortcuts when writing html elements**
Type `.<name>` to generate
```html
<div class='<name>'></div>
```

Type `span.<name>` to generate
```html
<span class='<anme>'></span>
```

** `<i class>` 
- Is used to specify what icon you want to use in the page

## styles.css
**Defining colours**
In Visual Studio Code, when you type the colour (i.e. lightblue), it will auto suggest the colour code (i.e add8e6) to the colour you type.
If you defined the colours, use var() to use the colour code that you have defined for the colour.
e.g. `var(--light-blue)` (i.e. 005490) defined in `:root` in styles.css file.

**Targeting all the direct children of the element**
Specify the element (e.g. `.counter-div`) then specify all the elements under that specified element using `> *`
```css
.counter-div > * {
    /* whatever modficiations you want to apply to the children */
}
```

**Rounded corners to a button or shape**
Use `border-radius` attribute to define how rounded you want the corners to be.
e.g. `border-radius: 3px`

**Bold the words**
Use `font-weight` attribute to define how bold you want the words to be.
e.g. `font-weight: 700px`

**Change the cursor icon**
Use `cursor` attribute to change the icon when the cursor hovers over an element.
e.g. `cursor: pointer`

**Enable the button to work even when clicking on the icon**
In the index.html, before: `<i class="fas fa-arrow-down></i>`. This element does not contain the class name of 'add', 'subtract' or 'reset', which is what the javascript function is looking for, so when you click the icon in the button, the counter does not respond.

After: `<i class="fas fa-arrow-down subtract"></i>`. You can click on the icon and the counter will behave as intended.

Can add different name to the class so that the javascript can find the element and apply the behaviour accordingly.
