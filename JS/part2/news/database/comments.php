<?php
  function getCommentsByNewId($id) {
    global $db;
    $stmt = $db->prepare('SELECT * FROM comments JOIN users USING (username) WHERE news_id = ?');
    $stmt->execute(array($id));
    return $stmt->fetchAll();
  }

  function addComment($newsID,$user,$text) {
    global $db;
    try {
      $stmt = $db->prepare('INSERT INTO comments (id,news_id,username,published,text) values(NULL,?,?,?,?)');
      $stmt->execute(array($newsID,$user,time(),$text));
    } catch(PDOException $e) {
      echo 'error: ' . $e;
    }
  }

  function getCommentsAfterId($id,$comment_id) {
    global $db;
    try {
      $stmt = $db->prepare('SELECT comments.*, users.name FROM comments JOIN users USING (username) WHERE news_id = ? AND comments.id > ?');
      $stmt->execute(array($id,$comment_id));
      return $stmt->fetchAll();
    } catch(PDOException $e) {
      echo 'error: ' . $e;
    }
  }
?>
