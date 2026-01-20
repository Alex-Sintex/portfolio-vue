<template>
    <section id="contact" class="contact-section">
        <div class="contact-header">
            <h2 class="contact-title">Connect with me</h2>
            <p class="contact-subtitle">Get in touch</p>
            <p class="contact-message">
                I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>
        </div>

        <form class="contact-form">
            <div class="contact-row">
                <input type="text" placeholder="Enter your name" class="contact-input" />
                <input type="email" placeholder="Enter your email" class="contact-input" />
            </div>
            <textarea placeholder="Enter your message" class="contact-textarea"></textarea>
            <button type="submit" class="contact-button">Submit now →</button>
        </form>
    </section>
</template>

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
</style>