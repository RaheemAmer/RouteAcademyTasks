dd# CSS Notes

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
- In bootstrap we make row as the parent, and it's default value starts with d-flex
- Container in bootstrap has width less than 100% with margin-auto

Example:

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

Example:
```<code>
<!-- width,100%, margin:auto and other stuff-->
<!-- if you a container with no margin, use container-fluid -->
<div class="container">
<!-- 3 cols from 12, applied only on xl screen -->
<!-- instead of using media queries for each resolution and dividing the width on it, we use bootstrap breakpoints -->
    <div class="col-xl-3 col-lg-4 col-md--6 col-sm-12>
        <!-- display flew parent and other stuff -->
        <div class="row>
            <img src="" class="w-100">
            <h4>Test</h4>
         <p>Loremakjsdbasdga;uidasod</p>
      </div>
    </div>
</div>
</code>```
