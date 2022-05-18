# CSS Notes

- Making top-50 or making it start from half means starts after half ratio => ```top:50; right:50; transform:translate(-50%,-50%);```
- giving position always screw up the width, we fix this by giving ```width:100% || left:0; right:0;``` also give ```z-index:1000;``` as a precaution
- Order default value => 0 (least value is highest priority
- Flex-grow = ورث
- Default value => 0
- Flex-shrink = دين
- Default value => 1
- Flex-shrink doesn't accept negative number
- calculate the space in flex by adding values of flex-grow and divide them by the remaining space
- if we didn't give any flex-grow, default value is basically zero, so remaining width is stored in the parent
- Use animation with keyframes for animated stuff[animation-name/duration/iteration-count/direction/from or 0%/ to or 100%]
- Flat design is more trendy[text or box shadow] - [horizontal - vertical - blur or intensity of shadow - color ]
- Linear-gradient(deg, red, blue) - making gradient decrease as you scroll down
- Radial-gradient(deg, red, blue) - percentage of each color
- CSS3 has a major problem with browsers => (Prefix)
- We Use CSS-Prefixer to handle and problem with browsers compatibility

## Bootstrap Notes

- [Min] files are attached to the main file, all map extensions are built with sass for documentation
- [Everything] are inside [bootstrap].css and min.css, main difference is that min is compressed
- [Reboot] is all about normalizing the css files while also ensuring not affecting whole layout
- [Caching] - using cdn is not a good practice if it has sensitive data - must have internet connection  (for css you can use cdn unless you're aiming for offline uses but for) (JS - not recommended)
- [Utilities]Remove a specific border or border-radius using  ```border-bottom-0 || rounded-circle```
- Use [Flexbox] => ```d-flex justify-content-center align-items-center```
- [Instead] of using top, right and translate => We use in bootstrap ```translate-middle-y || top-50 or top-50 ||
right-50  || translate-middle```

### Where property is one of

- m - for classes that set margin
- p - for classes that set padding

### Where sides names is one of

- s - for classes that set start with
- e - for classes that set end with

### Where sides is one of

- t - for classes that set margin-top or padding-top
- b - for classes that set margin-bottom or padding-bottom
- l - for classes that set margin-left or padding-left
- r - for classes that set margin-right or padding-right
- x - for classes that set both *-left and*-right
- y - for classes that set both *-top and*-bottom
- blank - for classes that set a margin or padding on all 4 sides of the element

### Where size is one of

- 0 - for classes that eliminate the margin or padding by setting it to 0
- 1 - (by default) for classes that set the margin or padding to $spacer * .25
- 2 - (by default) for classes that set the margin or padding to $spacer * .5
- 3 - (by default) for classes that set the margin or padding to $spacer
- 4 - (by default) for classes that set the margin or padding to $spacer * 1.5
- 5 - (by default) for classes that set the margin or padding to $spacer * 3
- auto - for classes that set the margin to auto
