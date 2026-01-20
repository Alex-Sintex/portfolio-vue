<template>
    <div class="hero">
        <div class="overlay">
            <div class="intro">
                <h1 class="text-uppercase">Kevin Alexis</h1>
                <p class="typewriter">{{ typedText }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const texts = [
    'Mobile developer (iOS).',
    'Web Developer.',
    'Freelancer.',
    'Programmer.'
]

const typedText = ref('')
let textIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect() {
    const currentText = texts[textIndex]

    if (!isDeleting) {
        // Typing forward
        typedText.value = currentText.substring(0, charIndex + 1)
        charIndex++

        if (charIndex === currentText.length) {
            // Pause before deleting
            setTimeout(() => {
                isDeleting = true
            }, 1500)
        }
    } else {
        // Deleting backward
        typedText.value = currentText.substring(0, charIndex - 1)
        charIndex--

        if (charIndex === 0) {
            isDeleting = false
            textIndex = (textIndex + 1) % texts.length
        }
    }

    const speed = isDeleting ? 50 : 100 // faster delete, slower type
    setTimeout(typeEffect, speed)
}

onMounted(() => {
    typeEffect()
})
</script>

<style scoped>
.hero {
    height: 100vh;
    background: url('@/assets/images/backgrounds/kali.jpg') center/cover no-repeat;
    position: relative;
    color: white;
    font-family: 'Helvetica Neue', sans-serif;
}

.text-uppercase {
    font-weight: 800;
    color: rgb(255, 255, 255);
    font-size: 60px;
    line-height: 100px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro {
    text-align: center;
}

.intro h2 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.typewriter {
    display: inline-block;
    position: relative;
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-weight: 500;
}

.typewriter::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 32px;
    background-color: white;
    margin-left: 4px;
    vertical-align: bottom;
    opacity: 1;
    animation: 0.7s infinite blink;
    font-size: 35px;
    font-weight: 900;
    color: rgb(255, 255, 255);
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>
