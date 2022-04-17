Position:
relevant vs absolute

--------------

If I put 3 divs as an absolute - according to last html written, the last one will be shown

control order = z-index by giving number higher than the rest

before , after and content

events in css -> hover
effect is written in element not in hover
.test{
<!-- transition-property: width;
transition-duration: 2s;
transition-delay: 1s;
transition-timing-function: 1s; -->
<!-- transition: 2s width; -->
<!-- transition: all 2s ; -->
transition: width 2s, height 1s ;
transition: transform 2s;
transform-origin: middle center;

use rotate or skew border


}
.text:hover{
    <!-- width: 100%;
    height: 100vh; -->
    transform: rotate(45deg, 45deg);
    transform: rotate(360);
    transform: rotateX(360);
    transform: rotateY(360);
    transform: translateX(360);
    transform: translateY(360);
    transform: translate(100px, 150px);
    <!-- Changed according to 2* Width and height  -->
    transform: scale(2); 
    transform: scale(2, 2); 
    transform: skew(2, 2); 
}

position relative to parent - absolute to element (layer) - top 0 begins from top - opacity - time in element not in hover - 

--
cover - extends background image and even stretch it to fit the layout according to viewport - can be cut - some times can't be all visible 
contain - fit the layout - not cut and it's all visible