export const debounce = (func, ms = 300) => {
    let timer;

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() =>  {func.apply(this, args)}, ms)
    }
}

export const getData = (url, addURL = '') => {
    return fetch(url + addURL)
        .then(response => response.json())
        .catch(error => console.log('Произошла ошибка, данных нет!'))
}

export const method = (url, addURL, method, data) => {
    return fetch(url + addURL, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        }
    }).then(res => res.json())
    .catch(error => console.log('Произошла ошибка!'))   
}
