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

  <!-- GLOBAL TOAST -->
  <transition name="toast">
    <div v-if="toast.show" :class="['toast', toast.type]">
      {{ toast.message }}
    </div>
  </transition>

  <!-- SITE CONTENT -->
  <div class="site">
    <Navbar />

    <section id="home" class="hero">
      <Hero />
      <WaveBottom />
    </section>

    <section id="about" class="about fade-in-section">
      <WaveTop />
      <About />
      <WaveBottom />
    </section>

    <section id="portfolio" class="portfolio fade-in-section">
      <WaveTop />
      <Portfolio />
      <WaveBottom />
    </section>

    <section id="services" class="services fade-in-section">
      <WaveTop />
      <Services />
      <WaveBottom />
    </section>

    <section id="updates" class="updates fade-in-section">
      <WaveTop />
      <Updates />
      <WaveBottom />
    </section>

    <section id="contact" class="contact fade-in-section">
      <WaveTop />
      <Contact />
    </section>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import Portfolio from './components/Portfolio.vue'
import Services from './components/Services.vue'
import Updates from './components/Updates.vue'
import Contact from './components/Contact.vue'
import WaveTop from './components/WaveTop.vue'
import WaveBottom from './components/WaveBottom.vue'
import { ref, onMounted } from 'vue'
import { reactive, provide } from 'vue'

// Dark mode switching
const theme = ref(localStorage.getItem('theme') || 'light')

function setTheme(mode) {
  theme.value = mode
  document.body.classList.toggle('dark', mode === 'dark')
  localStorage.setItem('theme', mode)
}

provide('theme', theme)
provide('setTheme', setTheme)

// TOAST STATE
const toast = reactive({
  show: false,
  type: 'success', // success | error
  message: ''
})

// PROVIDE FUNCTION
function showToast(type, message) {
  toast.type = type
  toast.message = message
  toast.show = true

  setTimeout(() => {
    toast.show = false
  }, 3500)
}

provide('showToast', showToast)

const loading = ref(true)

onMounted(() => {
  // Set theme
  setTheme(theme.value)
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
   THEME VARIABLES
========================= */
:root {
  /* HERO */
  --hero-text: #ffffff;
  --hero-text-muted: #e5e7eb;
  --hero-cursor: #ffffff;
  --hero-arrow: #ffffff;
  --hero-overlay: rgba(0, 0, 0, 0.25);

  /* COLORS */
  --bg-main: #f9f9f9;
  --bg-section: #ffffff;
  --bg-navbar: transparent;
  --bg-navbar-scrolled: #111111;

  --text-main: #1f1f1f;
  --orbit-badge-bg: #1f1f1f;
  --orbit-text: #ffffff;
  --text-muted: #555;
  --text-inverse: #ffffff;

  --card-bg: #ffffff;
  --border-color: #e5e5e5;

  /* Toasts */
  --toast-success: #064e3b;
  /* deep emerald */
  --toast-error: #7c2d12;
  /* warm dark amber/red */

  --wave-main: #e5e5e5;
  /* section background */
  --wave-shadow: rgba(253, 249, 249, 0.04);
  /* next section bg */
  --wave-footer: #f9f9f9;
  --wave-bg: #e5e5e5;
  --wave-footer-bg: #e5e5e5;
}

/* DARK MODE */
body.dark {
  /* HERO */
  --hero-text: #f9fafb;
  --hero-text-muted: #d1d5db;
  --hero-cursor: #f9fafb;
  --hero-arrow: #f9fafb;
  --hero-overlay: rgba(0, 0, 0, 0.45);

  /* COLORS */
  --bg-main: #121212;
  --bg-section: #1a1a1a;
  --bg-navbar: transparent;
  --bg-navbar-scrolled: #121212;

  --text-main: #eaeaea;
  --orbit-badge-bg: #eaeaea;
  --orbit-text: #1f1f1f;
  --text-muted: #aaaaaa;
  --text-inverse: #ffffff;

  --card-bg: #1f1f1f;
  --tool-icon-bg: #fdfbfb;
  --border-color: #333;

  /* Toasts */
  --toast-success: #10b981;
  /* soft emerald */
  --toast-error: #f87171;
  /* muted red */

  --wave-main: #1f1f1f;
  /* section background */
  --wave-shadow: rgba(253, 249, 249, 0.04);
  /* next section bg */
  --wave-footer: #121212;
  --wave-bg: #1f1f1f;
}

body {
  background: var(--bg-main);
  color: var(--text-main);
}

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

/* =========================
   TOAST
========================= */
.toast {
  position: fixed;
  top: 6rem;
  right: 1.5rem;
  z-index: 999999;
  background: var(--card-bg);
  color: var(--text-main);
  padding: 15px 20px;
  border-radius: 3px;
  font-size: 1rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.toast.success {
  border-left: 8px solid #22c55e;
}

.toast.error {
  border-left: 8px solid #ef4444;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.35s ease;
}
</style>