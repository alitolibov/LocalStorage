let form = document.forms.form
let data = localStorage.getItem('user')
let text = document.querySelector('.text2')
let inps = document.querySelectorAll('.inp')

function reload(item) {
    form.onsubmit = (e) => {
        e.preventDefault()
        let arr = {
            id: Math.random()
        }

        let fm = new FormData(form)

        fm.forEach((value, key) => {
            arr[key] = value
        })

        localStorage.setItem('user', JSON.stringify(arr))
    }
}
text.onclick = () => {
    window.location.assign("../registration/index.html")
}