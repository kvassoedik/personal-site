<template>
    <div>
        <nav>
            <ul>
                <li><router-link to="/">Обо мне</router-link></li>
                <li><router-link to="/projects">Проекты</router-link></li>
                <li><router-link to="/contacts">Контакты</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    a {
        color: var(--color-bg);
    }
    a:visited {
        color: var(--color-bg);
    }
    div {
        width: 100%;
        height: 50px;
        background-color: var(--color-main);
        color: white;
        margin: 0;
    }
    nav {
        margin: auto;
        width: 50%;
    }
    nav ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        justify-content: center;
        margin: 0;
        padding-top: 12px;
    }
    a.router-link-active {
        text-decoration: underline;
    }
</style>