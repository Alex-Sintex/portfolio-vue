<template>
  <!-- LOADER -->
  <div v-show="loading" id="loader">
    <!-- CENTER LOADING -->
    <div class="loader-center">
      <img src="/favicons/favicon-32x32.png" alt="loading" class="navbar-logo" draggable="false" />
      <div class="ring"></div>
    </div>

    <!-- CURTAINS -->
    <div class="curtain left"></div>
    <div class="curtain right"></div>
  </div>

  <!-- SITE CONTENT (UNCHANGED) -->
  <div class="site">
    <Navbar />

    <section id="home" class="hero">
      <Hero />
      <Wave />
    </section>

    <section id="about" class="about fade-in-section">
      <Wave />
      <About />
    </section>

    <section id="portfolio" class="portfolio fade-in-section">
      <Wave />
      <Portfolio />
    </section>

    <section id="services" class="services fade-in-section">
      <Wave />
      <Services />
    </section>

    <section id="contact" class="contact fade-in-section">
      <Contact />
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Wave from './components/Wave.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import Portfolio from './components/Portfolio.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'

import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // 1) Let loader show first
  setTimeout(() => {
    document.body.classList.add('curtain-open')
  }, 1500)

  // 2) Remove loader after curtain animation
  setTimeout(() => {
    loading.value = false
    document.body.classList.remove('curtain-open')
  }, 3800)

  // Fade-in observer
  const faders = document.querySelectorAll('.fade-in-section')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.3 }
  )
  faders.forEach(section => observer.observe(section))
})
</script>

<style>
/* =========================
   LOADER BASE
========================= */
#loader {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 9999;
  overflow: hidden;
}

/* =========================
   LOADER CENTER (VISIBLE FIRST)
========================= */
.loader-center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 2;
}

.loader-center {
  opacity: 1;
  transition: opacity 0.6s ease;
}

.navbar-logo {
  user-select: none;
  width: 32px;
  /* adjust */
  height: auto;
  display: block;
}

.ring {
  position: absolute;
  width: 90px;
  height: 90px;
  border: 5px solid transparent;
  border-top: 5px solid #fff;
  border-right: 5px solid #fff;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

/* =========================
   CURTAINS (HIDDEN INITIALLY)
========================= */
.curtain {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: #111;
  z-index: 3;
  transform: translateX(0);
  opacity: 0;
  transition:
    transform 1.8s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.3s ease;
}

.curtain.left {
  left: 0;
}

.curtain.right {
  right: 0;
}

/* SHOW + OPEN */
body.curtain-open .loader-center {
  opacity: 0;
  pointer-events: none;
}

body.curtain-open .curtain {
  opacity: 1;
}

body.curtain-open .curtain.left {
  transform: translateX(-100%);
}

body.curtain-open .curtain.right {
  transform: translateX(100%);
}

/* =========================
   SITE FADE IN
========================= */
.site {
  opacity: 1;
}

/* =========================
   FADE SECTIONS
========================= */
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   ANIMATIONS
========================= */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes siteIn {
  to {
    opacity: 1;
  }
}

/* =========================
   RESET
========================= */
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>