<?php 
include_once('database/connection.php');
include_once('database/news.php');
include_once('database/comments.php');

$id = $_POST['id'];
$commID = $_POST['comment_id'];
$user = $_POST['username'];
$text = $_POST['text'];

addComment($id,$user,$text);

$comments = getCommentsAfterId($id,$commID);
echo json_encode($comments);
?>