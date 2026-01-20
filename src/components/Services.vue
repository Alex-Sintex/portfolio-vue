<template>
    <section id="services" class="services-section">
        <h1 class="section-title">SERVICES</h1>
        <p class="subtitle">WHAT I DO</p>

        <div class="services-grid">
            <div v-for="service in services" :key="service.title" class="service-card">
                <font-awesome-icon :icon="service.icon" class="service-icon" />

                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        title: 'Web Design',
        icon: ['fas', 'code'],
        description:
            'Creating visually engaging and user-friendly interfaces for websites and apps.'
    },
    {
        title: 'Development',
        icon: ['fas', 'cube'],
        description:
            'Building scalable and maintainable web and mobile applications.'
    },
    {
        title: 'Graphics Design',
        icon: ['fas', 'camera'],
        description:
            'Designing logos, banners, and visual assets for digital platforms.'
    },
    {
        title: 'Responsive Design',
        icon: ['fas', 'mobile-screen'],
        description:
            'Ensuring seamless experiences across all screen sizes and devices.'
    },
    {
        title: 'SEO Friendly',
        icon: ['fas', 'thumbs-up'],
        description:
            'Optimizing websites for search engines to improve visibility and ranking.'
    },
    {
        title: 'Support',
        icon: ['fas', 'life-ring'],
        description:
            'Providing ongoing assistance and updates for deployed projects.'
    }
]
</script>

<style scoped>
.services-section {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 160px;
}

.subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #222;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.service-card {
    text-align: center;
    padding: 30px 20px;
    margin-bottom: 2rem;
    background-color: #f2f2f2;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    -o-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-card:hover {
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
}

.service-icon {
    width: 48px;
    margin-bottom: 1rem;
    height: 48px;
    color: #111;
}

.service-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
}

.service-description {
    font-size: 0.95rem;
    color: #666;
}
</style>