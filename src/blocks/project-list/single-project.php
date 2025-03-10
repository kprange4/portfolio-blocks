<?php
$the_query = new WP_Query([
	'post_type' => 'project',
	'meta_value' => get_the_ID(),
]);

$technologies = get_post_meta(get_the_ID(), 'project_technologies_used', true);
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="project-page">
		<h1><?= get_the_title() ?></h1>
		<div class="technologies-used">
			<?php foreach ($technologies as $technology) { ?>
				<div class="project-technology-pill"><?= $technology ?></div>
			<?php } ?>
		</div>
		<div class="project-images">

		</div>
		<div>
			<a class="btn" href=""><?= get_post_meta(get_the_ID(), 'project_short_description', true) ?></a>
		</div>


		<footer class="entry-footer">
		</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
