<template>
  <section id="contact" class="py-16 px-8 bg-bg-light">
    <div class="max-w-2xl mx-auto">

      <h2 class="section-title">Contact</h2>
      <p class="mt-4 text-text-light">
        Une question, une opportunité, une collaboration ? Écris-moi directement.
      </p>

      <div v-if="success" class="mt-10 p-6 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
        Message envoyé ! Je vous répondrai dans les meilleurs délais.
      </div>

      <form v-else @submit.prevent="submitForm" class="mt-10 flex flex-col gap-5">

        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm font-medium text-text-dark">Nom</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            placeholder="Votre nom"
            class="form-input"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-sm font-medium text-text-dark">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="votre@email.com"
            class="form-input"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="message" class="text-sm font-medium text-text-dark">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="5"
            placeholder="Votre message..."
            class="form-input resize-none"
          />
        </div>

        <p v-if="error" class="text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer ou me contacter par email.
        </p>

        <button type="submit" :disabled="loading" class="submit-btn">
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

async function submitForm() {
  loading.value = true
  error.value = false
  try {
    await $fetch(`${base}/api/contact`, {
      method: 'POST',
      body: { ...form },
    })
    success.value = true
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.section-title {
  @apply text-3xl font-bold text-text-dark relative inline-block pb-3;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3rem;
  height: 3px;
  background: linear-gradient(90deg, #764ba2, #fe9a66);
  border-radius: 2px;
}

.form-input {
  @apply w-full px-4 py-3 rounded-lg border border-border bg-white text-text-dark text-sm
         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
         transition-colors duration-200;
}

.submit-btn {
  @apply w-full py-3 px-6 rounded-lg font-semibold text-white text-sm
         transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg;
  background: linear-gradient(135deg, #764ba2, #fe9a66);
}
</style>
