/**
 * Default entrypoint
 * Author: Caio Alcantara - 2018
 * @memberOf magicbox-cms
 */
import('./server/index.js')
.then(server => {
    console.log(server.default)
})
