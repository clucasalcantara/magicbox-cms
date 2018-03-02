/**
 * Default entrypoint
 * Author: Caio Alcantara - 2018
 * @memberOf magicbox-core/isomorphic
 */
import('./server/index.js')
.then(server => {
    console.log(server.default)
})
