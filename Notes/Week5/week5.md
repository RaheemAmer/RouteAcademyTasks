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
- Offset to make space for the grid, if I want to make a col 10 and leave 2 for space then use offset = offset-start
- Give last element offset value because there is no offset right
- In bootstrap, they don't give width percentage instead they give fixed width that's changed whenever a new viewport is introduced
- Container's value is changed with every new viewport xl, lg, md, small, extra-small and then becomes auto, but if we decided to make container-lg then it's okay to get scalled until it reaches the lg max-width and then get's 100%
- the parent element in container or container-fluid has build in padding so if we add a child inside of it, the padding is removed due to having negative margin values in the child element
- the issues of using row alone with no container, in bootstrap 3 using row was used with no effect, but later on the negative margins of row became a problem
- Create a div for the item to make any changes you want, every col dimension has it's own padding right and left
- they make default spacing between each div using padding, box sizing allow it, so by using col class and item we have a space between them
- Make padding of the parent, acts like a margin to the child
- If you want to remove the space that's happened because of the parents(col-xl) padding (left and right), we use gutter for the main parent gx-0[1,2,3,4] or gy-0
- If I gave only one dimensions in the class in bootstrap while others have it all
- mt-3 => margin-top=3
- col-xs is automatically 100%
- divide it to an odd number, make a simple col class, auto detect number of divs and divide it(flex-grow)
- writing col only obligates that each div is divided equally on all screens, if i wrote col-lg then xxl,xl and lg works till it's smaller then divided
- font awesome docs- scalable, fa-fw(fixed-width),  fa-10x, fa-rotate90, fa-heart fa-beat, fa-spinner fa-spin, fa-shake, fa-bounce

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
<!-- width,100%, margin left and right :auto, padding left and right and other stuff-->
<!-- if you a container with no margin, use container-fluid -->
<div class="container">
<!-- 3 cols from 12, applied only on xl screen -->
<!-- instead of using media queries for each resolution and dividing the width on it, we use bootstrap breakpoints -->
    <div class="col-xl-3 col-lg-4 col-md--6 col-sm-12>
        <!-- display flew parent, fle-wrap: wrap and other stuff -->
        <div class="row>
            <img src="" class="w-100">
            <h4>Test</h4>
         <p>Loremakjsdbasdga;uidasod</p>
      </div>
    </div>
</div>
</code>```

Example:

```<code>
<div class="container bg-info">
    <!-- padding left and right has blue color -->
    <h2 class="bg-warning">Web Design</h2>
    <!-- But if we put the h2 inside the row tag, the padding is removed from right and left and moved to bottom  -->
    <div class="row">
            <h2 class="bg-warning">Web Design</h2>
    </div>
</div>
</code>```

Example:

```<code>
<div class="container>
    <div class="row>
        <div class="col-xl-3>
            <div class="item>
                <h2>Hello</h2>
            </div>
        </div>
    </div>
</code>```

Example:

```<code>
<div class="container>
    <div class="row>
        <!-- bigger than him equals his value, smaller than him equals 12 -->
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12>
        <div class="col-lg-3>
        ----------------------
        <div class="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12>
        <div class="col-xl-3>
            <div class="item>
                <h2>Hello</h2>
            </div>
        </div>
    </div>
</code>```
