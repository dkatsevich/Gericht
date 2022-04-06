// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";


window.addEventListener('load', (e) => {
    const bgBlocks = document.querySelectorAll('[data-bg]');
    bgBlocks.forEach(item => {
        item.insertAdjacentHTML('beforeend', `<div class="bg-item"></div>`)
    })
})


