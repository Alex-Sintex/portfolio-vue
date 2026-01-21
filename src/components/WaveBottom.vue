<template>
    <div class="wave-bottom">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <!-- BACK layer -->
            <path d="M0,80
           C120,40 360,120 600,100
           840,80 1080,40 1440,80
           L1440,140 L0,140 Z" fill="var(--wave-shadow)" />

            <!-- FRONT layer -->
            <path d="M0,100
           C120,60 360,140 600,120
           840,100 1080,60 1440,100
           L1440,140 L0,140 Z" fill="var(--wave-main)" />
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const offset = ref(0)

const onScroll = () => {
    offset.value = window.scrollY * -0.12
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.wave-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 140px;
    overflow: hidden;
    line-height: 0;
    z-index: 2;
}

.wave-bottom svg {
    display: block;
    width: 100%;
    height: 100%;
}

.wave-top,
.wave-bottom {
    transition: transform 0.08s ease-out;
}

svg path:first-child {
    filter: blur(1.2px);
}
</style>
