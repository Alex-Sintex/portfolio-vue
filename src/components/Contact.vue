<template>
    <section id="contact" class="contact-section">
        <div class="contact-header">
            <h2 class="contact-title">CONTACT</h2>
            <p class="contact-subtitle">Get in touch</p>
            <p class="contact-message">
                I'd love to hear from you! If you have any questions, comments or feedback,
                please use the form below.
            </p>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
            <div class="contact-row">
                <input type="text" class="contact-input" placeholder="Enter your name" v-model="form.name" />

                <input type="email" class="contact-input" placeholder="Enter your email" v-model="form.email" />
            </div>

            <textarea class="contact-textarea" placeholder="Enter your message" v-model="form.message"></textarea>

            <button class="contact-button" :disabled="loading">
                {{ loading ? 'Sending…' : 'Submit now →' }}
            </button>
        </form>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import emailjs from '@emailjs/browser'

// GLOBAL TOAST
const showToast = inject('showToast')

// FORM STATE
const form = ref({
    name: '',
    email: '',
    message: ''
})

const loading = ref(false)

// SUBMIT
function submitForm() {
    // 🔴 BASIC VALIDATION
    if (!form.value.name || !form.value.email || !form.value.message) {
        showToast('error', 'Please fill in all fields')
        return
    }

    loading.value = true

    emailjs
        .send(
            'service_e5yau1j',
            'template_arzvq82',
            {
                from_name: form.value.name,
                from_email: form.value.email,
                message: form.value.message
            },
            'OFMawHrk_qoNzqw25'
        )
        .then(() => {
            showToast('success', 'Message sent successfully ✔')

            form.value.name = ''
            form.value.email = ''
            form.value.message = ''
        })
        .catch(() => {
            showToast('error', 'Failed to send message ✖')
        })
        .finally(() => {
            loading.value = false
        })
}
</script>


<style scoped>
.contact-section {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
    /* light neutral background */
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
}

.contact-header {
    width: 100%;
    margin: 0 auto 2rem;
}

.contact-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #222;
}

.contact-subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
}

.contact-message {
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.contact-input {
    flex: 1;
    min-width: 240px;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.contact-input:focus {
    border-color: #333;
    outline: none;
}

.contact-textarea {
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    min-height: 120px;
    resize: none;
}

.contact-button {
    background-color: #fff;
    color: black;
    padding: 0.75rem 1.25rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-button:hover {
    border: 1px solid #000;
    background: #000;
    color: #fff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
}

/* TOAST BASE */
.toast {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.9rem 1.3rem;
    border-radius: 0.75rem;
    font-size: 0.95rem;
    font-weight: 500;
    z-index: 9999;
    min-width: 240px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* TYPES */
.toast.success {
    background: #0f172a;
    color: #fff;
}

.toast.error {
    background: #7f1d1d;
    color: #fff;
}

/* SLIDE ANIMATION */
.toast-enter-from {
    transform: translateX(120%);
    opacity: 0;
}

.toast-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.toast-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.toast-leave-to {
    transform: translateX(120%);
    opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.4s ease;
}
</style>