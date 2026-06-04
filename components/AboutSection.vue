<template>
  <section id="about" class="py-16 px-8">
    <div class="max-w-6xl mx-auto">

      <h2 class="section-title">À propos</h2>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div class="flex flex-col gap-5 text-text-light leading-relaxed">
          <p>
            Après près de 15 ans d'expérience dans l'agroalimentaire, j'ai choisi
            de me reconvertir dans le développement web en 2024. Passionnée par la
            résolution de problèmes et la création de solutions techniques, j'ai
            obtenu mon titre professionnel de Développeur Web et Web Mobile en
            juillet 2025.
          </p>
          <p>
            Actuellement en formation Concepteur Développeur d'Applications
            (niveau Bac+3), je développe mes compétences en programmation orientée
            objet, architecture logicielle et conception d'applications web modernes.
          </p>
          <p>
            Mon parcours professionnel m'a apporté rigueur, autonomie et capacité
            à gérer des projets complexes. Ces qualités, je veux les appliquer
            aujourd'hui au développement d'applications métier, en apportant une
            vision métier là où les développeurs juniors n'en ont pas encore.
          </p>
        </div>

        <div class="bg-bg-light rounded-xl p-8 border-l-4 border-primary shadow-sm">
          <h3 class="text-lg font-semibold text-primary mb-5">Points forts</h3>
          <ul class="flex flex-col gap-3">
            <li
              v-for="point in highlights"
              :key="point"
              class="flex items-start gap-3 text-text-dark"
            >
              <span class="text-primary font-bold mt-0.5 shrink-0">→</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const highlights = [
  'Maturité professionnelle et sens des responsabilités',
  'Autonomie dans l\'apprentissage',
  'Capacité à comprendre les enjeux métier',
  'Rigueur acquise dans l\'agroalimentaire',
  'Adaptabilité et résilience',
]
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
</style>
