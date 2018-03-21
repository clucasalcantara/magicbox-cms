if (process.env.NODE_ENV === 'development') {
  if (
    !require('piping')({
      hook: true,
      ignore: /(\/\.|~$|\.json|\.scss$)/i,
    })
  ) {
    return
  }
}
require('./start-server')
