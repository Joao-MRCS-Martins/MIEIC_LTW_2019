<!DOCTYPE HTML>
<html lang="en-US">
  <head>
		<title> Sum of numbers </title>
  </head>    
  <body>
    <?php
  	  function sum($a, $b) {
          echo $a + $b;
      }

      $a = $_GET['num1']; $b=$_GET['num2'];
			sum($a,$b);
			echo '</br>';
			echo '<a href="http://gnomo.fe.up.pt/~up201707311/form2.html">Return</a>';

    ?>
  </body>
</html>