const scriptURL = 'https://script.google.com/macros/s/AKfycbyzs5U2hg_Fm3MjNQM3lKILrpNjmhGlACmaPN8d8O5Ij9U-MKaO6UI8vXp4s8oZP9ScxA/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent succesfully"
                    setTimeout(function () {
                        msg.innerHTML = ""
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })