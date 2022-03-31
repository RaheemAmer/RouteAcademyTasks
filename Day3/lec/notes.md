Lecture notes:
css works line by line - it depends on the order we called each one of them

3 types of writing css:
internal
external
internal

If we put 2 separate class attribute in HTML tag  
👍 => default behavior is to take first class and ignore second one 

If we took 2 class side by side 
👍 => css works line by line - order of calling them in css will decide who is gonna be activated

Div acts only as a container so if there is no content, any styles applied to this empty div won't be applied => height = auto
but it's place is reserved but without any value if we added a value to it, it will be changed from height= zero to height of content

all connected to the parent when we apply percentage 

image has fixed dimensions (it's original dimensions)
browsers are seen in dev tools as inline but in face it's both of them inline and inline-block

Height: auto
No margin top and bottom
Margin: auto
Margin-left: auto
Border-top: 10 px solid red
Bottom: 10 px solid red
Border-top: 10 px solid red Border-top-right-radius: 50%
Box height value increases when we add border and padding
Box sizing
Box-sizing: content-box
Default balue
Changes it to
Box-sizing: border-box
Font is vector not pixel
Lw fe space, put them inside double quotations
There is no 150 in font-weight
 Put there with no measuring unit
Background image vs img
If it's needed for Seo + alt 
Then img
Background-size : 100% 100%
Cover and contain
Background- position: center center
Background-image: url, url
Background-position: top left, top right
Height: 100vh
Margin-collapse
 When 2 divs start with same point
When we give margin to the son
It takes both of them
 No width and height for buttons
Not responsive
Make margin bottom
Work from top to bottom
When you want to change margin
Best practice to make margin and padding zero
 Background-attachment: fixed
