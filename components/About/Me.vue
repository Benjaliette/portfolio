<template>
	<section class="about">
    <div class="about__img">
      <img
        src="~/assets/images/profile_about.webp"
        alt="profile picture"
      />
    </div>
    <div class="about__text">
      <p>
        Ex PhD scientist in Chemistry and Life Sciences, fully web developper now,
        I am a problem solving enthousiast, loving to learn new concepts
        and challenge myself.
        <br />
        <br />
        When we ask ourselves what we want to do and who we want to be, this is
        a challenging way of thinking. I made this exercise a few years ago, and
        the truth was : I want to do more. I want to help people but with my passion
        and with new technologies. To this end, I learned by myself how to code
        (mostly Python and JS), I made some small projects to make progress and,
        finally, I made a web development formation (Ruby and Ruby on Rails) to
        fullfill my career goal.
        <br />
        <br />
        In the past year, I made a marketplace website for a french painter
        (CLIET Tableaux), I started my own company ELIGIA to help people in
        mourn to stop contract and subscriptions hold by the deceased, and I kept
        learning again and again (Vue.js, Nuxt and Django).
        <br />
        <br />
        My journey is still long and I want to discover more, help a wider range
        of people and live with my passion : <span class="red semi-bold">CODE</span> !
      </p>
    </div>
	</section>
</template>

<style scoped lang="scss">
.about {
  gap: 2.5rem;
  margin-top: 5rem;
  display: flex;

  .about__img {
    width: 25%;

    img {
      width: 96%;
      transform: scaleX(-1);
    }
  }

  .about__text {
    width: 75%;
    text-align: left;

    p {
      margin-bottom: 1rem;
      font-size: $text-large;

      .red {
        color: $red;
      }

      .semi-bold {
        font-weight: 600;
      }
    }
  }
}

@media (max-width: $small) {
  .about {
    display: flex;
    margin-top: 2.5rem;
    gap: 0rem;

    .about__img {
      width: 100%;
      margin-bottom: 1.75rem;
    }

    .about__text {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
