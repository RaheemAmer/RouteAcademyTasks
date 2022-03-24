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

if i put two selectors with same tag, who is gonna work? (CSS page)
the last one will override the duplicated style made by the previous selector
------------------------
last version of html allows you to create a special tag upon your request
------------------------
tag can take 2 more classes
------------------------
Specificity 
Class > Tag
------------------------
Specificity class calling in HTML - Class calling with different order in css
order in HTML doesn't have an effect - in CSS order matter
------------------------
Default value without adding any value,
adding background-color not only adds the color but also adds width 100%
Height => default value = auto = scalled according to content's height

Example:
https://www.w3schools.com/cssref/css_default_values.asp 

Question:
If we added a div tag with a class and that class have background-color and height:auto, what is the output?

Answer:
Nothing will happen because the div doesn't have anything inside of it and height only works according to content's height, adding width: 100% won't also solve a thing nor display a thing even if we added height:auto hard coded.

Height is not used pretty often
------------------------
Percentage is set according to the parent's width or height
------------------------
Display in css?
it depends on if it's block line or inline

display: has default value for each tag used
If it's inline:
- doesn't accept width and height value nor margin and padding
If it's block:
- accept width and height value + margin and padding
If it's inline-block:
- accept width and height value + margin and padding and also stays in the same line

Example (Special Case):
Image tag (img) acts an inline-block but in fact it's both inline and inline-block but browser considers it an inline
------------------------
- always give background color to help you know the dimensions of the tag you are working on
- pics can't be side by side as long as their width is at 100%
- image isn't affected by the parent dimensions, so we add width to it
- To make each block sit side by side we added display: inline block to member class
- Display: inline block added a whitespace between each div that takes space and will affect the scalling when we open from smaller screen devices
------------------------
Problems we made here:

1- width is fixed so that's not the best solution for any device 
2- right whitespace 

.member {
    background-color: blue;
    width: 350px;
    display: inline-block;
}
img{
    width: 350px;
}
------------------------
We should do this:
- img becomes 100% to be similar to it's parent's width
- instead of 33 make it 32.5 to be more responsive
------------------------
but why we used that ratio?
we could have made width's value be 33.33& as 100 divided by three equals this but we can't do this because there is a whitespace between each div

if we made the value 32.5% this will solve the problem when we minimize the page but that's not the best practice, the best practice for this is using float(Whitespace isn't )
------------------------
.member {
    background-color: blue;
    width: 32.5%;
    display: inline-block;
    text-align: center;
}
img{
    width: 100%;
}
------------------------
Important :
To remove whitespace that's between the images, I have to delete the whitespace between each div

link:
https://stackoverflow.com/questions/7641678/use-css-to-remove-the-space-between-images

Another Solution:
display: block;
float:left;

another workaround would be:
Contain them in a parent div, and give that div a font-size of 0.
.nospace {
   font-size: 0;
}

Another solution:
// jQuery
$('p').contents().filter(function() { return this.nodeType === 3; }).remove();

Another solution:
white-space-collapsing:discard

Another solution:
Add display: flex; 
to the parent element. Here is the solution with a prefix:

Another solution:
Add comments between elements to NOT have a white space. For me it is easier than resetting font size to zero and then setting it back.
------------------------
