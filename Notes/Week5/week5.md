# CSS Notes

- ```:root``` is to make variable global, more specified and has better priority than declaring them in html
- there are some tags that behave like body, so declaring them in body won't be global
- box-sizing makes border and padding inside the width, doesn't work with margin
- use calc to divide element's width and subtract the margin value from it
- Inherit => inherit the value from your parent
- making ``` parent p ``` target every p inside the parent (child or grand-child), direct child > p
- making ```parent  ~ p``` targets all the p elements after class parent, even if there is something between them [on the same level, if an another parent element has another p inside of it, it won't get targeted]
- making ```parent *p``` means direct sibling, p after parent but if something between them not gonna work
- making```parent + p``` means the first p after parent
- semantic tag, seo doesn't see css, any name that has meaning is semantic
- Bootstrap Grid-system => instead of using width 100% we use 12 columns, works using flexbox
- In bootstrap we make row as the parent, and make it have d-flex

```<code>
<header>
<nav> </nav>
<aside> </aside>
</header>
<article></article>
<figure>
<img>
<figcaption></figcaption>
</figure>
<footer></footer>
</code>```
