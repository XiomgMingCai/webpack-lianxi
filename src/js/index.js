require('../css/main.css')
require('../css/index.css')
require('../css/base.css')

const hello = '我的名字叫233'
document.write(`<p id="app">${hello}  </p>`)

define(["./dsta.json"],  (json) => {
    document.getElementById('app').append(json.name)
});
