<?php
$str1 = "Артём";
$str2 = 'WarThunder';
$len=strlen($str1);
$s = ltrim(preg_replace( '/[A-Z]/', ' $0', $str2 ));
print " ";
print $s;
print " ";
print $len;
print " ";
$str1 = strtr ($str1, array ('Артём' => 'Павел'));
echo $str1;
?>
