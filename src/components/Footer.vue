<template>
    <footer class="footer">
        <button class="scroll-top" @click="scrollToTop" aria-label="Back to top">
            <span class="arrow-up"></span>
        </button>
        <!-- TOP WAVE -->
        <div class="wave-container">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,80 C240,20 480,140 720,80 960,20 1200,140 1440,80 L1440,0 L0,0 Z" fill="#f9f9f9" />
            </svg>
        </div>

        <!-- FOOTER CONTENT -->
        <div class="footer-content">
            <p>© 2026 Kevin. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style scoped>
/* FOOTER BASE */
.footer {
    position: relative;
    background: #111;
    color: #999;
    text-align: center;
    padding-top: 80px;
}

/* WAVE CONTAINER */
.wave-container {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave-container svg {
    display: block;
    width: 100%;
    height: 120px;
}

/* CONTENT */
.footer-content {
    padding: 3rem 1rem 2.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.4px;
}

/* =========================
   SCROLL TO TOP ARROW
========================= */
.scroll-top {
    position: absolute;
    right: 30px;
    bottom: 30px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

/* ARROW SHAPE (UP) */
.arrow-up {
    display: block;
    width: 20px;
    height: 20px;
    border-left: 2px solid #aaa;
    border-top: 2px solid #aaa;
    transform: rotate(45deg);
    animation: fadeArrowUp 2s infinite ease-in-out;
}

/* FADE LOOP */
@keyframes fadeArrowUp {
    0% {
        opacity: 0;
    }

    30% {
        opacity: 1;
    }

    60% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>