const $ = el => document.querySelector(el)
const body = $('body')
$('button').addEventListener("click", fetchData)

fetchData()

async function fetchData() {    
    const URL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    const dolarValue = $('#dolar-value')
    const oficialValue = $('#oficial-value')

    let res = await fetch(URL)
    res = await res.json()
    // console.log(res)

    const values = [res[0].casa.compra, res[1].casa.compra]

    dolarValue.innerHTML = `$ ${values[1]} ARS`
    oficialValue.innerHTML = `$ ${values[0]} ARS`

    body.appendChild()
}