<template>
    <section id="portfolio" class="portfolio-section">
        <div class="portfolio-header">
            <h2 class="section-title">PORTFOLIO</h2>
            <p class="section-subtitle">Welcome to my web and mobile development portfolio! Explore a collection of
                projects
                showcasing my expertise in front-end and backend development.</p>
        </div>

        <div class="category-tabs">
            <button v-for="cat in categories" :key="cat" :class="['tab-button', { active: selectedCategory === cat }]"
                @click="selectedCategory = cat">
                {{ cat }}
            </button>
        </div>

        <div class="gallery">
            <div v-for="(item, i) in filteredProjects" :key="item.title" class="gallery-item" @click="showLightbox(i)">
                <img :src="item.image" :alt="item.title" />
                <h3>{{ item.title }}</h3>
            </div>
        </div>

        <VueEasyLightbox :visible="visible" :imgs="filteredProjects.map(p => p.image)" :index="index"
            @hide="visible = false" />
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

import dontacoLogin from '@/assets/images/portfolio/web/dontaco.png'
import academic_system from '@/assets/images/portfolio/web/academic_system.png'
import iautism from '@/assets/images/portfolio/mobile/iautism.png'
import itracker from '@/assets/images/portfolio/mobile/itracker.png'

const categories = ['Web Apps', 'Mobile Apps']
const selectedCategory = ref('Web Apps')

const projects = [
    { title: 'Accounting System', category: 'Web Apps', image: dontacoLogin },
    { title: 'Academic System Administration', category: 'Web Apps', image: academic_system },
    { title: 'IAutism App – Therapeutic support for children with TEA', category: 'Mobile Apps', image: iautism },
    { title: 'iTracker app - Money saver', category: 'Mobile Apps', image: itracker }
]

const filteredProjects = computed(() =>
    projects.filter(p => p.category === selectedCategory.value)
)

const visible = ref(false)
const index = ref(0)

function showLightbox(i) {
    index.value = i
    visible.value = true
}
</script>

<style scoped>
.portfolio-section {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
    color: #333;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 2.5rem;
    padding-top: 120px;
    padding-bottom: 160px;
}

.portfolio-header {
    margin-bottom: 2rem;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1.25rem;
    color: #222;
}

.section-subtitle {
    font-size: 1.1rem;
    color: #666;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 42rem;
}

.category-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.tab-button {
    padding: 0.5rem 1rem;
    border: 2px solid #333;
    background-color: transparent;
    color: #333;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tab-button.active {
    background-color: #333;
    color: #fff;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
}

.gallery-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.75rem;
    padding: 3rem;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    height: 300px;
    position: relative;
    overflow: hidden;
}

.gallery-item:hover {
    transform: translateY(-4px);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.5rem;
}

.gallery-item h3 {
    font-size: 1rem;
    color: #222;
}

@media (max-width: 768px) {
    .gallery-item {
        height: 200px;
        padding: 4rem;
    }
}
</style>