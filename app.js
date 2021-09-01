// без делегирования
// ==============

// document.getElementById('item-1').addEventListener('click', (event) => {
//     event.target.classList.toggle('active')
// });

// document.getElementById('item-2').addEventListener('click', (event) => {
//     event.target.classList.toggle('active')
// });

// document.getElementById('item-3').addEventListener('click', (event) => {
//     event.target.classList.toggle('active')
// });

// document.getElementById('item-4').addEventListener('click', (event) => {
//     event.target.classList.toggle('active')
// });

// ==================
// делегирования событий
// ==================

// document.getElementById('list').addEventListener('click', (event) => {
//     event.target.classList.toggle('active')
//     if (event.target.id === 'item-4') {
//         event.target.classList.toggle('zoom-out')
//     }
// });

// document.getElementById('item-4').addEventListener('click', (event) => {
//     event.target.classList.toggle('zoom-out')
//     event.stopPropagation();
// });