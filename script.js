let requests = document.getElementById("connectionRequests")
let requestCount = document.getElementById('requestCount')
let connectionCount = document.getElementById('connectionCount')


function hide(el) {
    el.remove()
}

function changeName(el) {
    el.innerText = "John Hammond"
}

function accept(el) {
    el.remove()
    requestCount.innerText--
    connectionCount.innerText++
    if (requestCount.innerText == 0) {
        requests.classList.add('hidden')
        setTimeout(() => {
            requests.style.display = 'none'
        }, 500)
    }
}

function reject(el) {
    el.remove()
    requestCount.innerText--
    if (requestCount.innerText == 0) {
        requests.classList.add('hidden')
        setTimeout(() => {
            requests.style.display = 'none'
        }, 500)
    }
}