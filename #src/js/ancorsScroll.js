export default function scrollForAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем стандартный переход по ссылке

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Включаем плавную прокрутку
                    block: 'start'      // Прокручиваем до верхней части элемента
                });
            }
        });
    });
}