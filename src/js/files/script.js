// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

//https://github.com/qodesmith/datepicker
import datepicker from 'js-datepicker'



window.addEventListener('load', (e) => {
    const bgBlocks = document.querySelectorAll('[data-bg]');
    bgBlocks.forEach(item => {
        item.insertAdjacentHTML('beforeend', `<div class="bg-item"></div>`)
    })

    datepicker('[data-calendar]', {})


    const videoModule = document.querySelector('.video-mainpage');
    if (videoModule) {
    	document.addEventListener("watcherCallback", (e) => {
            const entry = e.detail.entry;
			const targetElement = entry.target;
            if (targetElement.dataset.watch === 'video' && !videoModule.classList.contains('_init')) {
                const video = targetElement.querySelector('video');
                if (entry.isIntersecting) {
                    // Видим объект
                    video.play()
                } else {
                    video.pause()
                    // Не видим объект
                }
            }
        });

        videoModule.addEventListener('click', (e) => {
            if (!videoModule.classList.contains('_init')) {
                videoModule.querySelector('video').src = videoModule.querySelector('video').dataset.full
                videoModule.classList.add('_active');
                videoModule.classList.add('_init');
                videoModule.querySelector('video').play()
            } else {
                if (videoModule.querySelector('video').paused) {
                    videoModule.querySelector('video').play()
                } else {
                    videoModule.querySelector('video').pause()
                }
                videoModule.classList.toggle('_active');
            }
        })

    }

})


