<?php
function hello()
{
    $x = 5;
    $y = 7;
    $t = (pow($x, 5) + $y * sqrt(abs($y +$x))/log(275.18)) - pow($x,$y) + (tan($x)/sin($x + 2));
    echo $t;
}

hello();
?>