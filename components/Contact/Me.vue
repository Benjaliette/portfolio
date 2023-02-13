<template>
	<section
		class="container contact__section"
	>
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails />
	</section>
</template>

<style scoped lang="scss">
.contact__section {
  margin: 0 auto;
  display: flex;
  padding: 2.5rem 0;
  margin-top: 2.5rem;
}

@media (max-width: $medium) {
  .contact__section {
    flex-direction: column-reverse;
    padding: 1.25rem 0;
    margin-top: 0rem;;
  }
}
</style>
