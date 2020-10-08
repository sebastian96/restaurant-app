export const changeClass = (className) => {
    const inputs = document.querySelectorAll(`.${className}`);
    inputs.forEach(input => {
        const label = input.nextSibling;
        if(input.checked) {
            label.classList.add('btn-primary');
            label.classList.remove('btn-outline-primary');
        }else {
            label.classList.remove('btn-primary');
            label.classList.add('btn-outline-primary');
        }
    })
};