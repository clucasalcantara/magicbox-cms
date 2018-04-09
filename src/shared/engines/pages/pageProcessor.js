import pages from './pages'

const getPageConfig = (key) => pages.filter(page => page.id === key)

export {
  getPageConfig
}