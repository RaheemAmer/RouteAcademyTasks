Difference between tel and number:
Here is the full story, when HTML5 launched new input types, it helped us with better control and validation, some of which are particularly important for mobile users4
---------------------------------------------------------------------------------------------------------
Number:
Where supported, the input will be restricted to valid numbers by the browser. The browser may also display a numeric keypad, to make numeric input easier. On desktop browsers, increment and decrement controls are displayed beside the field.

On mobile browsers, when supported, if you click on the input field below, you will get a numeric keypad. On desktop browsers, you may be presented with increment and decrement controls to the side of the input field.
---------------------------------------------------------------------------------------------------------
Tel:
The main difference is in the numeric keypad that is displayed on some browsers. For number a simple numeric keypad is shown, but for tel the user is presented with a virtual telephone keypad, complete with alphanumeric keys.
---------------------------------------------------------------------------------------------------------
Input type search:
if a results attribute is added 
<input type="search" results="10" />
then at least some webkit browsers (for example Chrome mobile & desktop, but not stock Android) will display a small magnifying glass icon in the search box.

In addition, once you begin typing, many browsers will display a small ‘x’ at the right side of the text box, to easily remove any typed text. And a contextualized keyboard is displayed in most supporting browsers too: the iOS keyboard shows a Search instead of the usual Go; similarly, Android displays a magnifying glass icon on the submit button of the virtual keyboard.
---------------------------------------------------------------------------------------------------------
Cool article:
https://mobiforge.com/design-development/html5-mobile-web-forms-and-input-types 

Wonderful solution:
https://stackoverflow.com/questions/7241341/can-i-set-an-opacity-only-to-the-background-image-of-a-div

Grade for this assignment was 10/10

1-Things to consider:
2-better naming conventions
3-use vertical-align property instead of position 
4-don't make empty divs
5-layer after main div - to make background little bit faded - use rgba for opacity - vertical align
6-box-sizing: content box => border + margin + padding = width  because of content box - solution is make it border-box

cool css challenge:
https://alvaromontoro.com/blog/67936/100-days-of-css-illustrations

draw a triangle:
https://alvaromontoro.com/blog/67970/drawing-a-triangle-with-css