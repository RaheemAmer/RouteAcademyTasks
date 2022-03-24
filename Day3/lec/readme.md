Day3
separation of concurrency
------------------------
CSS
Cascading = Connected to each other and synchronous
style = Properties like color, position and Responsive
Sheet = HTML Code
------------------------
tag in css = selector
------------------------
3 Types to write css in sheet:
1 - internal
2 - internal 
3 - external
------------------------
Order of calling different attributes if  they are different nothing will happen otherwise order matter
------------------------
Link
<link rel="stylesheet> href="style.css">
------------------------
if we have internal and external who is gonna work?
css works with order - who is ordered last has the best chance to be applied

internal
<style> </style>
external
<link rel="stylesheet> href="style.css">

answer is:
both of them will work but external will override the existed styles made on the tags

but if we wrote it in a different way

external
<link rel="stylesheet> href="style.css">
internal
<style> </style>

answer is:
both of them will work but internal will override the existed styles made on the tags

if i put two selectors with same tag, who is gonna work?
the last one will override the duplicated style made by the previous selector