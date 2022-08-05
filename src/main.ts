import birthday from 'virtual-dates:1970/01/01'

document.querySelector('#app')!.innerHTML = `${birthday} - ${birthday.toLocaleDateString()}`
