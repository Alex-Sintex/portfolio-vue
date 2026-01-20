<template>
    <section id="updates" class="updates-section">
        <h2 class="section-title">UPDATES</h2>

        <div class="updates-grid">
            <article v-for="update in updates" :key="update.title" class="update-card">
                <div class="image-wrapper">
                    <img :src="update.image" :alt="update.title" />
                </div>

                <h3 class="update-title">{{ update.title }}</h3>

                <p class="update-description">
                    {{ update.description }}
                </p>

                <p class="update-meta">
                    <strong>Status:</strong> {{ update.status }} ·
                    <span>{{ update.tech }}</span>
                </p>
            </article>
        </div>

        <button class="view-more">VIEW MORE</button>
    </section>
</template>

<script setup>
import portfolio_web from '@/assets/images/portfolio/web/portfolio_web.png'
import band_web from '@/assets/images/portfolio/web/band_web.png'
import mootec from '@/assets/images/portfolio/web/mootec.png'

const updates = [
    {
        title: 'Personal Portfolio (Vue 3)',
        image: portfolio_web,
        description:
            'Building my personal portfolio using Vue 3. Currently focused on animations, loaders, transitions, and UI polish.',
        status: 'In Progress',
        tech: 'Vue 3, HTML5, CSS Animations, JS'
    },
    {
        title: 'Band web app',
        image: band_web,
        description:
            'Developed a band ecommerce web application to launch latest music events and tickets.',
        status: 'Completed',
        tech: 'Vue 3, HTML5, CSS, JS'
    },
    {
        title: 'Cybersecurity Fundamentals',
        image: mootec,
        description:
            'Studying cybersecurity concepts such as threats, vulnerabilities, and defensive practices to strengthen my foundation.',
        status: 'Completed',
        tech: 'Cybersecurity Basics'
    }
]
</script>

<style scoped>
/* =========================
   SECTION
========================= */
.updates-section {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 160px;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #222;
}

/* =========================
   GRID
========================= */
.updates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto 3rem;
}

/* =========================
   CARD
========================= */
.update-card {
    background: #fff;
    text-align: left;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.update-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
}

/* =========================
   IMAGE
========================= */
.image-wrapper {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* =========================
   TEXT
========================= */
.update-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1.2rem 1.5rem 0.5rem;
    color: #111;
}

.update-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
    margin: 0 1.5rem 1rem;
}

.update-meta {
    font-size: 0.85rem;
    color: #777;
    margin: 0 1.5rem 1.5rem;
}

/* =========================
   BUTTON
========================= */
.view-more {
    padding: 0.75rem 2.2rem;
    background: transparent;
    border: 1px solid #222;
    font-size: 0.85rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-more:hover {
    background: #222;
    color: #fff;
}
</style>
