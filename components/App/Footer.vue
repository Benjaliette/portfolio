
<template>
	<section class="container">
		<div class="footer">
			<div class="footer-content">
				<p class="footer-content__header">
					Follow me
				</p>
				<ul class="footer-content__list">
					<a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="footer-content__list-item"
					>
            <IconSocial :type="social.name" />
					</a>
				</ul>
			</div>

			<div class="footer-copyright">
        <div class="footer-copyright__text">
          &copy; {{ copyrightDate }}.
          <a
            href="https://github.com/Benjaliette/portfolio"
            target="__blank"
            class="footer-copyright__link"
          >
            Nuxt3/Vue.js3 portfolio
          </a>
          . Developed by
          <a
            href="https://benjamin-liet.info"
            target="__blank"
            class="footer-copyright__link"
            >Benjamin Liet Dev</a
          >
        </div>
      </div>
		</div>
	</section>
</template>

<script setup>
const response = await useFetch('/api/socials')

const socials = computed(() => response.data.value.socialList);
const copyrightDate = computed(() => new Date().getFullYear());
</script>

<style scoped lang="scss">
section {
  margin: 0 auto;
}

.footer {
  padding: 7.5rem 0rem 2rem 0rem;
  margin-top: 5rem;
  border-top: 2px solid $light-gray;

  .footer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    .footer-content__header {
      font-weight: 600;
      font-size: $text-4xl;
      margin-bottom: 1.25rem;
    }

    .footer-content__list {
      display: flex;
      gap: 2rem;

      .footer-content__list-item {
        color: $gray;
        cursor: pointer;
        border-radius: 0.5rem;
        background-color: $light-gray;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        padding: 1rem;
        transition-duration: 500ms;

        &:hover {
          color: black;
          background-color: $gray;
          transition-duration: 500ms;
        }
      }
    }
  }

  .footer-copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .footer-copyright__text {
      font-size: $text-large;

      .footer-copyright__link {
        transition-duration: 500ms;

        &:hover {
          text-decoration: underline;
          color: $green;
          transition-duration: 500ms;
        }
      }
    }
  }
}

@media (max-width: $small) {
  .footer {
    padding-top: 5rem;

    .footer-content {
      margin-bottom: 3rem;

      .footer-content__header {
        font-size: $text-3xl;
      }

      .footer-content__list {
        gap: 1rem;
      }
    }
  }
}
</style>
