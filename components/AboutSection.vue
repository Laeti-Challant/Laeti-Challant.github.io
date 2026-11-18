<template>
  <section id="about" v-reveal class="bg-cream py-20 md:py-28 px-6 md:px-10">
    <div class="max-w-6xl mx-auto">

      <div class="flex items-baseline gap-4 mb-12 md:mb-14">
        <span class="section-eyebrow">01</span>
        <h2 class="section-title">À propos</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start">

        <div class="flex flex-col gap-5 text-lg leading-relaxed text-text-dark/80">
          <p>
            Après près de 13 ans d'expérience dans l'agroalimentaire, j'ai choisi
            de me reconvertir dans le développement web en 2024. Passionnée par la
            résolution de problèmes et la création de solutions techniques, j'ai
            obtenu mon titre professionnel de Développeur Web et Web Mobile en
            juillet 2025.
          </p>
          <p>
            J'ai obtenu mon titre professionnel de Concepteur Développeur
            d'Applications (bac +3) en octobre 2026. Je recherche actuellement
            un poste en CDI chez un éditeur de logiciels ou un industriel, ou en
            tant que consultante auprès d'industriels. Je veux mettre mes
            compétences au service d'applications métier qui améliorent le
            quotidien des équipes de terrain.
          </p>
          <p>
            Mon parcours professionnel m'a apporté rigueur, autonomie et capacité
            à gérer des projets complexes. Ces qualités, je veux les appliquer
            aujourd'hui au développement d'applications métier, en apportant la
            vision métier de 13 ans de terrain.
          </p>
        </div>

        <div class="bg-white border border-border rounded-2xl p-8 md:p-9">
          <h3 class="font-display text-[17px] font-semibold text-primary mb-5">Points forts</h3>
          <ul class="flex flex-col gap-4">
            <li
              v-for="point in highlights"
              :key="point"
              class="flex items-start gap-3 text-base text-text-dark"
            >
              <span class="text-accent font-bold shrink-0">→</span>
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
