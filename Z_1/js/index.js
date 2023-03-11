const form = document.querySelector('#form');
const cookieEl = document.querySelector('.cookieData')

form.addEventListener('submit', function(evt) {

        evt.preventDefault(); 
        cookieEl.innerHTML = "";

        const target = evt.target;

        for(i = 0; i < target.elements.length; i++){
            if (target.elements[i].name.length === 0)
                continue;

            if (target.elements[i].value.length === 0) {
                alert('Заполните поле ' + target.elements[i].name);
                return;
            }
        }

        const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        
        const email = target.elements.email.value;
        if (!emailReg.test(email)){
            alert('Неверный формат email');
            return
        }
        
        const phoneReg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        const phone = target.elements.phone.value;
        if (!phoneReg.test(phone)){
            alert('Неверный формат телефона');
            return
        }
        

        const data = Array.from(target.elements).map(function(item) {
            if (item.name.length === 0)
                return;

            document.cookie = item.name + "=" + item.value

            return item.name + ": " + item.value;
        });

        alert(data)

        const cookieData = document.cookie;

        cookieData.split(';').forEach(function(item) {
            const el = document.createElement('div');
            el.innerHTML = item;

            cookieEl.append(el)
        })
        

        deleteAllCookies();
    
})

function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}