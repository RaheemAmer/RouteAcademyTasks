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
float when applied, it works on the whole page not the targeted one only and this occurred when we decreased the percentage from 33.33 to 25
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
Add space (proper way)
- add width to img => 90%
- add text-align = center = as long there is content, text-align will work
------------------------
Margin (shorthand) : 
top right bottom left = clockwise
top right ( + left ) bottom
top ( + bottom) right ( + left )
------------------------
Center a div:
margin: auto; = margin-left: auto + margin-right: auto;
------------------------
Note:
In order to center the div using margin, don't forget to make it's width not full width cuz no way
it's gonna be centred if it's full width, there is no space left to center it
Adds width to original width
------------------------
Difference between text-align: center and margin: auto?
margin: controls the div itself not the content inside of it
text-align: controls the content inside the div
------------------------
Padding (shorthand) : 
top right bottom left = clockwise
top right ( + left ) bottom
top ( + bottom) right ( + left )
------------------------
Note:
there is nothing called padding: auto => text-align: center does this job 
Adds width to original width
------------------------
Border property :
border: 5px solid red

Note:
there is no right order for writing stuff inside of border
Adds width to original width just ike margin and padding
We can add border-right or left or top and bottom if we wish
------------------------
Very important note:
border, margin and padding all of them affect the width and by increasing them the origin al width will increase
------------------------
Border-radius:
We can make border radius to a specific area like top or bottom or right
border-top-right-radius: 50%;
------------------------
Nesting selector:
calling selector inside class
------------------------
Button:
Has a default border built in
------------------------
font:
font size by default is 16px
accept both pixels and percentage
the font doesn't downgrade when we zoom in and out
------------------------
Note:
if we give it a percentage scale, then it's gonna be related to it's original size which is 16px
------------------------
font-weight:
range from 100 to 900 
font-weight is unitless, without any unit of measuring
default size is 400
------------------------
Note:
some font families doesn't get affected when change the font size to them
------------------------
font style:
font style to change it, you can choose from normal or italic
------------------------
font family:
you can choose font family 
------------------------
Note:
in css3, we can download the font family and refer to it internally when we make our own server without calling it from external server like google server
------------------------
Background:
if the image that I want to add as a a background image is smaller than the width and the height of the div then it will be repeated 
------------------------
Note:
default value is repeat
background-repeat: no-repeat
position of image is top left
------------------------
background-position can help you pick the desired position for the image works in a clockwise format
background-position can take either text, pixels or percentages
------------------------

if the image that I want to add as a a background image is larger than the width and the height of the div then the specific coordinates written as width and height will show a specific part of the image

we can control this using background-size and make image fit the parent dimensions
background-size: 100% 100%;
------------------------
background cover:
Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges
------------------------
background contain:
Resize the background image to make sure the image is fully visible
------------------------
height:
make height according to client's phone height using vh ( viewport height)
1 = 1% 
and so on

after making background-size: cover or 100% 100%
make background-position: center center
------------------------
Note:
You will find that there is space up top why?
Browser gives margin and padding to certain types of tags
so that's why we give to all tags at first margin and padding zero 

Another solution to this margin and padding default value:
this isn't the best solution and there is a reason why they did this in first place and also there is
something called reboot in bootstrap that allows us to modify is without making the value equals zero
------------------------
Performance of loading content in the web page:

link:
https://developer.yahoo.com/performance/rules.html 

minimize HTTP Request:
every file we connect it, is considered as HTTP request

To find what is the HTTP request in your webpage, find network in dev tools
------------------------
There is a trick, that most of us do but it's designed gor mega projects:
Image spirit using (css spirits)

We set y=up width and height for the div
then we use background-image: url
and then we use background-position: 75px 0px ( to traverse the whole images)
------------------------
alternate answer is to use image map tag
------------------------
Note:
always put image in div 
always make css link the last thing in head
if you see yourself putting over 50-60 pixels in both margin and padding then you're doing it wrong
------------------------
Background-attachment:
default value is static - if we want to make it constant while we move then we give it a fixed value
