<template>
  <header class="sm:container sm:mx-auto">
    <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
      <img src="~/assets/images/logo.svg" alt="logo">
      <nav class="navbar">
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/about">About me</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100vw;

  img {
    height: 50px;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
  }
}
</style>
