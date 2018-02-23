// Entrypoint
import('./server/index.js')
.then(server => {
    console.log(server.default);
})
