<template>
  <section id="contact" v-reveal class="bg-sand py-20 md:py-28 px-6 md:px-10">
    <div class="max-w-[620px] mx-auto">

      <div class="flex items-baseline gap-4 mb-4">
        <span class="section-eyebrow">04</span>
        <h2 class="section-title">Contact</h2>
      </div>
      <p class="text-lg text-text-light mb-11">
        Une question, une opportunité, une collaboration ? Écrivez-moi directement.
      </p>

      <div v-if="success" ref="successMessage" tabindex="-1" role="status" class="p-6 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
        Message envoyé ! Je vous répondrai dans les meilleurs délais.
      </div>

      <form v-else @submit.prevent="submitForm" class="flex flex-col gap-6">

        <div class="flex flex-col gap-2">
          <label for="name" class="form-label">Nom</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            placeholder="Votre nom"
            class="form-input"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="votre@email.com"
            class="form-input"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="message" class="form-label">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="4"
            placeholder="Votre message..."
            class="form-input resize-none"
          />
        </div>

        <p v-if="error" role="alert" class="text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer ou me contacter par email.
        </p>

        <button type="submit" :aria-disabled="loading" class="submit-btn">
          <span v-if="loading">Envoi en cours...</span>
          <span v-else>Envoyer le message</span>
        </button>

      </form>

    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const base = config.public.apiBaseUrl || ''

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)
const successMessage = ref<HTMLElement | null>(null)

async function submitForm() {
  if (loading.value) return
  loading.value = true
  error.value = false
  try {
    await $fetch(`${base}/api/contact`, {
      method: 'POST',
      body: { ...form },
    })
    success.value = true
    await nextTick()
    successMessage.value?.focus()
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.form-label {
  @apply text-xs font-semibold text-text-dark uppercase tracking-wide;
}

.form-input {
  @apply w-full bg-transparent border-0 border-b-[1.5px] border-text-light rounded-none
         px-0.5 py-2.5 text-base text-text-dark placeholder:text-text-light
         focus:outline-none focus:border-primary focus:shadow-[0_1.5px_0_0_theme(colors.primary)]
         transition-colors duration-200;
}

.submit-btn {
  @apply mt-3 py-4 px-7 rounded-lg font-semibold text-white text-[15px] bg-text-dark
         transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark
         aria-disabled:opacity-60 aria-disabled:hover:translate-y-0 aria-disabled:cursor-not-allowed;
}
</style>
