# CSS Notes

- giving position always screw up the width, we fix this by giving ```width:100% || left:0; right:0;``` also give ```z-index:1000;``` as a precaution
- Order default value => 0 (least value is highest priority
- Flex-grow = ورث
- Default value => 0
- Flex-shrink = دين
- Default value => 1
- Flex-shrink doesn't accept negative number
- calculate the space in flex by adding values of flex-grow and divide them by the remaining space
- if we didn't give any flex-grow, default value is basically zero, so remaining width is stored in the parent

## Bootstrap Notes

- Min files are attached to the main file, all map extensions are built with sass for documentation
- Everything are inside bootstrap.css and min.css, main difference is that min is compressed
- Reboot is all about normalizing the css files while also ensuring not affecting whole layout
- Caching - using cdn is not a good practice if it has sensitive data - must have internet connection  (for css you can use cdn unless you're aiming for offline uses but for) (JS - not recommended)
