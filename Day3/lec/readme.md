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
------------------------
answer is:
both of them will work but external will override the existed styles made on the tags
------------------------
but if we wrote it in a different way

external
<link rel="stylesheet> href="style.css">
internal
<style> </style>
------------------------
answer is:
both of them will work but internal will override the existed styles made on the tags
------------------------
if i put two selectors with same tag, who is gonna work? (CSS page)
------------------------
answer is:
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
------------------------
Example:
https://www.w3schools.com/cssref/css_default_values.asp 
------------------------
Question:
If we added a div tag with a class and that class have background-color and height:auto, what is the output?
------------------------
Answer:
Nothing will happen because the div doesn't have anything inside of it and height only works according to content's height, adding width: 100% won't also solve a thing nor display a thing even if we added height:auto hard coded.

Height is not used pretty often
------------------------
Percentage is set according to the parent's width or height
------------------------
Display in css?
it depends on if it's block line or inline
------------------------
display: has default value for each tag used
If it's inline:
- doesn't accept width and height value nor margin and padding
If it's block:
- accept width and height value + margin and padding
If it's inline-block:
- accept width and height value + margin and padding and also stays in the same line
------------------------
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
3- whitespace between images

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

-we could have made width's value be 33.33& as 100 divided by three equals this but we can't do this because there is a whitespace between each div
-if we made the value 32.5% this will solve the problem when we minimize the page but that's not the best practice, the best practice for this is using float(Whitespace isn't )
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
------------------------
link:
https://stackoverflow.com/questions/7641678/use-css-to-remove-the-space-between-images
------------------------
Another Solution:
display: block;
float:left;
------------------------
another workaround would be:
Contain them in a parent div, and give that div a font-size of 0.
.nospace {
   font-size: 0;
}
------------------------
Another solution:
// jQuery
$('p').contents().filter(function() { return this.nodeType === 3; }).remove();
------------------------
Another solution:
white-space-collapsing:discard
------------------------
Another solution:
Add display: flex; 
to the parent element. Here is the solution with a prefix:
------------------------
Another solution:
Add comments between elements to NOT have a white space. For me it is easier than resetting font size to zero and then setting it back.
------------------------
main aspects in css:
-float
-spacing = margin + padding
------------------------
Float:
-float doesn't leave any spaces
-instead of using display: inline-block we use float 
-even if we didn't add it to the parent, it will be applied to all
------------------------
Example:
In HTML:
% 1st image
<div class="member">
<img href="#" alt="#">
</div>
% 2nd image
<div class="member">
<img href="#" alt="#">
</div>
% 3rd image
<div class="member">
<img href="#" alt="#">
</div>
% A simple h2 tag added to the file
<h2>Text</h2>
In CSS: 
.member{
    background-color: blue;
    width: 25%
    float: left;
}
img{
    width: 100&
}
------------------------
The H2 tag will float to the left like the images did even if we didn't add a class to it
------------------------
but why?
float when applied, it works on the whole page not the targeted one only and this occured when we decreased the percentage from 33.33 to 25
------------------------
we add an empty div and put in css property => clear: left;
------------------------
Example:
In HTML:
% 1st image
<div class="member">
<img href="#" alt="#">
</div>
% 2nd image
<div class="member">
<img href="#" alt="#">
</div>
% 3rd image
<div class="member">
<img href="#" alt="#">
</div>
<div class="ClearFloat"></div>
% A simple h2 tag added to the file
<h2>Text</h2>
In CSS: 
.member{
    background-color: blue;
    width: 25%;
    float: left;
}
img{
    width: 100%;
}
.ClearFloat{
    clear: float;
}
------------------------
If you added clear:left to the member style class, it will remove the float and nothing will be applied
------------------------
if you made two divs each one of them have float right and other one have float left to override the float on the whole page, we add an empty div with class and add style property clear: both;
------------------------
When and where to add the div to clear float?

answer:
when => you want to end the float mastery on the whole page 
where =>after the section you applied float to 
------------------------
People usually name the empty div with name of (class="clear-fix" or "clr")
------------------------
Note:

display: inline-block 
is not being used and it's not considered best practice
------------------------
Convention naming:

add type of change to class nem like here we can add to the 3rd div class name with "member w-50"
------------------------
Float kicks out children from the parent mastery

answer:
When the children elements are floated, they are taken out of the flow of the document. In doing so, the parent no longer has defined dimensions, as the children aren't technically occupying space. Thus, the parent element collapses upon itself. The same thing occurs when absolutely positioning the children elements too.

In this instance, we can fix it by adding overflow:hidden to the parent element, thus forcing it to contain the children elements. Alternatively overflow:auto works just as well. Some may suggest it is even better than overflow:hidden as you will be able to tell if any calculations are off.

jsFiddle example

.content {
    overflow:hidden;
}

Now the parent element is no longer collapsed and the red background is visible.
------------------------
You could alternatively use a clearfix if you are looking for support in older browsers, but I don't recommend doing so.
link:
https://stackoverflow.com/questions/20180081/css-background-color-with-floating-elements
https://stackoverflow.com/questions/9538247/css-background-disappears-when-using-floatleft
------------------------
Explanation:
we have a container div that has 3 other divs inside of it
after we apply float to it, float kicks the 3 divs from the mastery of their main container div
so this means that none of them is now under control of the container div laws in order to make them float

so now the browser sees that the main container div has no contents which makes his height equals to zero (Evidence on my sayings is that when you add hard coded height to the main container, the background color will appear)
------------------------
float drawbacks:
1- when you add float to any div, this will also include any other tags to it's floating system
2- when you add sub class in side main class and add float to them, the sub class and it's content are removed from the container supervision which makes the browsers acts like he has no content and make his height is zero and this will remove the background color 

------------------------
solving float drawbacks:
- only making an empty div and name it (clear-fix) for the naming convention (after the content that we applied float on to mark it's end)
-  add class inside the main div that wraps the whole tags and also add to the styles in css, clear: both;
------------------------
