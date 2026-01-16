document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const content = textElement.innerHTML;
    textElement.innerHTML = '';
    
    let i = 0;
    function type() {
        if (i < content.length) {
            textElement.innerHTML += content.charAt(i);
            i++;
            setTimeout(type, 20);
        }
    }
    
    type();
});
