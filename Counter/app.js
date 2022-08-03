let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let classes = e.currentTarget.classList;

        if (classes.contains('decrease')) {
            count--;
        }

        if (classes.contains('reset')) {
            count = 0;
        }

        if (classes.contains('increase')) {
            count++;
        }

        if (count > 0) {
            value.style.color = "green"
        } else if (count === 0) {
            value.style.color = "blue"
        } else {
            value.style.color = "red"
        }
        
        value.textContent = count;
    });

});