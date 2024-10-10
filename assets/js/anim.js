document.querySelectorAll('.accordion-header').forEach((button, index) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('show'));
            content.classList.add('show');
        }
    });

    // 初期状態で最初の質問を開く
    if (index === 0) {
        button.nextElementSibling.classList.add('show');
    }
});
