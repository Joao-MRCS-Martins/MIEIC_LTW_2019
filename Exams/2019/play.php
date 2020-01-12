<?php
  include_once('game.php');
  $id = $_POST['id'];
  $pos = $_POST['position'];

  if($pos == null) {
    echo json_encode(state($id));
  } else {
    play($id,$pos);
    echo json_encode(state($id));
  }
?>