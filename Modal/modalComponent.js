export default class modalComponent {

    constructor(title, message) {
        this.title = title || 'warning';
        this.message = message || 'are you sure ?';
    }

    confirm(result) {

        const dialogTemplate = `
<dialog id="modalComponent" open class="confirm-dialog">
    <h3>${this.title}</h3>
    <div class="confirm-dialog-question">${this.message}</div>
    <div class="confirm-dialog-button-controls" style="margin-top: 2rem">
        <button class="confirm-btn">yes?</button>
        <button class="reject-btn" style="margin-left: 1rem;color: #ff0000">no?</button>
    </div>
</dialog>`
        document.body.innerHTML += dialogTemplate;

        return new Promise((resolve, reject)=>{

            let confimBtn = document.body.querySelector('.confirm-btn');
            confimBtn.addEventListener('click',(e)=>{
                resolve(true);
                // this.destroy();
            });

            let rejectBtn = document.body.querySelector('.reject-btn');
            rejectBtn.addEventListener('click',(e)=>{
                resolve(false);
                // this.destroy();
            });
        });

    }

    destroy() {
        let dialog = document.querySelector('#modalComponent');
        document.body.removeChild(dialog);
    }

}


