<template>
  <section class="banner">
		<div class="banner-infos">
			<h1 class="banner-infos__header">
				Hi, I am Benjamin Liet
			</h1>
			<p class="banner-infos__text">
				A Full-Stack Developer & an Enthusiast Learner
			</p>
			<div class="banner-infos__action">
				<BaseButton downloadText="BL-Resume.pdf" from="/CV.pdf">
					<IconDownload />
					<span
						class="btn-text"
						>
            Download CV
          </span>
        </BaseButton>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="banner-img">
			<img
				src="~/assets/images/profile_pic.png"
				alt="Developer"
			/>
		</div>
	</section>
</template>

<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding: 5rem;

  .banner-infos {
    width: 60%;
    text-align: left;

    .banner-infos__header {
      font-weight: 700;
      font-size: $text-3xl;
      text-transform: uppercase;
    }

    .banner-infos__text {
      margin-top: 0.5rem;
      font-size: $text-x-large;
      color: $gray;
    }

    .banner-infos__action {
      display: flex;
      justify-content: center;
      display: block;

      .btn-text {
        font-size: $text-large;
      }
    }
  }

  .banner-img {
    width: 40%;
    text-align: right;
    float: right;
  }
}

@media (max-width: $medium) {
  .banner {
    flex-direction: column;
    .banner-infos {
      width: 100%;
    }

    .banner-img {
      width: 100%;
    }
  }
}

@media (max-width: $small) {
  .banner .banner-infos {
    .banner-infos__header {
      text-align: center;
    }
    .banner-infos__text {
      font-size: $text-large;
      text-align: center;
    }

    .banner-infos__action .btn-text {
      font-size: $text-small;
    }
  }
}
</style>
