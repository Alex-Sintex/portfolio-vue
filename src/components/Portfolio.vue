<template>
    <section id="portfolio" class="portfolio-section">
        <div class="portfolio-header">
            <h2 class="section-title">PORTFOLIO</h2>
            <p class="section-subtitle">
                Welcome to my web and mobile development portfolio! Explore a collection
                of projects showcasing my expertise in front-end and backend development.
            </p>
        </div>

        <!-- CATEGORY TABS -->
        <div class="category-tabs">
            <button v-for="cat in categories" :key="cat" :class="['tab-button', { active: selectedCategory === cat }]"
                @click="selectedCategory = cat">
                {{ cat }}
            </button>
        </div>

        <!-- CAROUSEL -->
        <div class="carousel">
            <button class="nav-arrow" @click="prevProject" :disabled="currentIndex === 0" aria-label="Previous project">
                ‹
            </button>

            <div class="carousel-window">
                <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div v-for="(item, i) in filteredProjects" :key="item.title" class="carousel-item"
                        @click="showLightbox(i)">
                        <img :src="item.image" :alt="item.title" loading="lazy" />
                        <h3>{{ item.title }}</h3>
                    </div>
                </div>
            </div>

            <button class="nav-arrow" @click="nextProject" :disabled="currentIndex === filteredProjects.length - 1"
                aria-label="Next project">
                ›
            </button>
        </div>

        <!-- LIGHTBOX (lazy loaded) -->
        <VueEasyLightbox v-if="visible" :visible="visible" :imgs="filteredProjects.map(p => p.image)" :index="index"
            @hide="visible = false" />
    </section>
</template>

<script setup>
import { ref, computed, watch, defineAsyncComponent } from 'vue'

// Web apps
import dontacoLogin from '@/assets/images/portfolio/web/dontaco.png'
import academic_system from '@/assets/images/portfolio/web/academic_system.png'
import band_web from '@/assets/images/portfolio/web/band_web.png'
// Mobile apps
import iautism from '@/assets/images/portfolio/mobile/iautism.png'
import itracker from '@/assets/images/portfolio/mobile/itracker.png'

const VueEasyLightbox = defineAsyncComponent(() =>
    import('vue-easy-lightbox')
)

const categories = ['Web Apps', 'Mobile Apps']
const selectedCategory = ref('Web Apps')

const projects = [
    { title: 'Accounting System', category: 'Web Apps', image: dontacoLogin },
    { title: 'Academic System Administration', category: 'Web Apps', image: academic_system },
    { title: 'Band ecommerce web application', category: 'Web Apps', image: band_web },
    { title: 'IAutism App – Therapeutic support for children with Autism Spectrum Disorder', category: 'Mobile Apps', image: iautism },
    { title: 'iTracker App – Money saver', category: 'Mobile Apps', image: itracker }
]

const filteredProjects = computed(() =>
    projects.filter(p => p.category === selectedCategory.value)
)

const currentIndex = ref(0)
const visible = ref(false)
const index = ref(0)

function nextProject() {
    if (currentIndex.value < filteredProjects.value.length - 1) {
        currentIndex.value++
    }
}

function prevProject() {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

watch(selectedCategory, () => {
    currentIndex.value = 0
})

function showLightbox(i) {
    index.value = i
    visible.value = true
}
</script>

<style scoped>
/* SECTION */
.portfolio-section {
    padding: 4rem 2rem;
    padding-top: 120px;
    padding-bottom: 160px;
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: 'Helvetica Neue', sans-serif;
}

.portfolio-header {
    margin-bottom: 2rem;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.section-subtitle {
    max-width: 42rem;
    margin: 0 auto;
    font-size: 1.1rem;
    color: var(--text-muted);
}

/* TABS */
.category-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
}

.tab-button {
    padding: 0.6rem 1.4rem;
    border: 2px solid var(--text-main);
    color: var(--text-main);
    border-radius: 999px;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
}

.tab-button.active {
    background-color: var(--text-main);
    color: var(--bg-main);
}

/* CAROUSEL */
.carousel {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.carousel-window {
    overflow: hidden;
    width: 50%;
}

.carousel-track {
    display: flex;
    transition: transform 0.4s ease;
}

.carousel-item {
    min-width: 100%;
    height: 260px;
    position: relative;
    border-radius: 0.75rem;
    overflow: hidden;
    cursor: pointer;
    background: var(--card-bg);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-item h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0.75rem;
    font-size: 0.95rem;
    color: #fff;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.65),
            transparent);
}

/* ARROWS */
.nav-arrow {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid var(--text-main);
    background: var(--card-bg);
    color: var(--text-main);
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-arrow:disabled {
    opacity: 0.3;
}

/* MOBILE */
@media (max-width: 640px) {
    .carousel-item {
        height: 220px;
    }

    .section-title {
        font-size: 2rem;
    }
}
</style>
