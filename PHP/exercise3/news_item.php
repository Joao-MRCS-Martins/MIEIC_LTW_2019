<?php
  $db = new PDO('sqlite:news.db');
  $stmt = $db->prepare('SELECT * FROM news JOIN users USING (username) WHERE id = ?');
  $stmt->execute(array($_GET['id']));
  $article = $stmt->fetch();
?>

<?php ?>
  <h1><a href="item.html"> <?= $article['title']?></a></h1>
  <p><?= $article['introduction']?></p>
  <footer>  
    <span class="author"><?= $article['username']?></span>
    <?php $tags = explode(",", $article['tags']); ?>
    <span class="tags">
    <?php foreach ($tags as $tag) { ?>
      <a href="index.html">#<?= $tag?></a>
    <?php } ?>
    </span>
    <span class="date"> <?=date("d/m/y",$article['published']) ?> </span>
    </footer>
  </article>
<?php ?>

<?php
    $stmt = $db->prepare('SELECT * FROM comments JOIN users USING (username) WHERE news_id = ?');
    $stmt->execute(array($_GET['id']));
    $comments = $stmt->fetchAll();
?>  