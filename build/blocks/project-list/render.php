<?php
/**
 * Variables WP gives us
 * @var array $attributes Array of block attributes
 * @var string $content The Post content from the save function
 */

// TODO: add pagination
$query = new WP_Query([
	'post_type' => 'project',
	'orderby' => 'title',
	'order' => 'ASC',
]);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while ($query->have_posts()) : $query->the_post(); ?>
	<a class="project-link" href="<?= get_post_meta(get_the_ID(), 'project_link', true) ?>">
		<div class="project-card" style="background-color: <?= $attributes['cardColor'] ?>">
			<div class="project-card-inner">
				<img class="project-card-img" src="<?= get_the_post_thumbnail_url(); ?>"/>
				<div class="project-card-info">
					<div>
						<h3 class="project-title"
							style="color: <?= $attributes['headingColor'] ?>"><?= get_the_title() ?></h3>
						<div class="project-description"
							 style="color: <?= $attributes['textColor'] ?>"><?= get_post_meta(get_the_ID(), 'project_short_description', true) ?></div>
					</div>
					<div class="project-card-arrow"></div>
				</div>
			</div>
		</div>
	</a>
	<?php endwhile ?>
</div>
