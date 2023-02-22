<template>
  <section>
		<div class="contact-card">
			<h2 class="contact-card__header">
				Contact Form
      </h2>
			<form
        class="contact-card__form"
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <div class="contact__form-group">
          <label for="fullName">Full Name</label>
          <input
            id="fullName"
            v-model.trim="contact.fullName"
            name="fullName"
            placeholder="Full Name"
            type="text"
            required
          />
        </div>
        <div class="contact__form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model.trim="contact.email"
            name="email"
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <div class="contact__form-group">
          <label for="subject">Subject</label>
          <input
            id="subject"
            v-model.trim="contact.subject"
            name="subject"
            placeholder="Subject"
            type="text"
            required
          />
        </div>
        <div class="contact__form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model.trim="contact.message"
            name="message"
            placeholder="Message"
            type="text"
            required
            cols="14"
            rows="6"
          ></textarea>
        </div>
				<div class="contact__form-actions">
					<BaseButton
						type="submit"
					>
            Send Message
          </BaseButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup>
const contact = reactive({
  fullName: "",
  email: "",
  subject: "",
  message: "",
});

// const mail = useMail()

// const send = async () => {
//   mail.send({
//     from: contact.email,
//     subject: contact.subject,
//     text: contact.message,
//   })
// }

</script>

<style scoped lang="scss">
section {
  width: 100%;
}

.contact-card {
  line-height: 2;
  max-width: 36rem;
  margin: 1rem;
  padding: 1.75rem;
  background-color: white;
  border-radius: 0.75rem;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  text-align: left;

  .contact-card__header {
    font-size: $text-2xl;
    margin-bottom: 2rem;
  }

  .contact-card__form {
    margin-top: 1.75rem;

    .contact__form-group {
      margin-top: 0.75rem;

      label {
        margin-bottom: 0.5rem;
        font-size: $text-large;
        display: block;
      }

      input, textarea {
        all: unset;
        width: 92%;
        padding: 0.75rem 1.25rem;
        border: 1px solid $dark-gray;
        background-color: $light-gray;
        border-radius: 0.375rem;
        filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
      }
    }

    .contact__form-actions {
      margin-top: 1.75rem;
    }
  }
}

@media (max-width: $medium) {
  section {
    width: 50%;
  }
}
</style>
