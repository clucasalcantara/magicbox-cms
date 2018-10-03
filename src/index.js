/**
 * Default entrypoint
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
import('./server/index.js')
.then(server => {
    console.log(server.default)
})
