<template>
	<section>
		<div class="contact">
			<h2 class="contact__header">
				Contact details
			</h2>
			<ul class="contact-list">
				<li class="contact-list__item">
					<IconAddress />
					<a href="https://goo.gl/maps/KtFwAKcFxQxKN7VX9" target="_blank">
						6 rue Flornoy, 33000 Bordeaux, France
					</a>
				</li>
				<li class="contact-list__item">
					<IconMail />
					<a href="mailto:benjamin.liet.dev@gmail.com">
						benjamin.liet.dev@gmail.com
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
}

.contact {
  text-align: left;
  max-width: 36rem;
  padding: 0 1.5rem;

  .contact__header {
    font-size: $text-2xl;
    margin: 3rem 0 2rem 0;
  }

  .contact-list {
    list-style: none;

    .contact-list__item {
      display: flex;
      align-items: center;
      font-weight: 200;
      margin-bottom: 1rem;

      a {
        font-size: $text-large;
        margin-left: 1rem;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
