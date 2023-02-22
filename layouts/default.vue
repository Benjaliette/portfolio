<template>
  <AppHeader />
  <div class="sm:container sm:mx-auto">
    <slot></slot>
  </div>
  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="fullName" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>
  <AppFooter />
</template>
