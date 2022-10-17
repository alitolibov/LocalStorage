let form = document.forms.form
let data = localStorage.getItem('user')
let text = document.querySelector('.text2')
form.onsubmit = (e) => {
    e.preventDefault()
    let arr = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value,key) => {
        arr[key] = value
    })

    localStorage.setItem('user', JSON.stringify(arr))
}

    if(data) {
        window.location.assign("../log/index.html")
    }
    console.log(data);
    text.onclick = () => {
        window.location.assign("../log/index.html")
    }