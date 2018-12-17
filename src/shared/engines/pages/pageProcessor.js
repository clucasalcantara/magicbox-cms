import pages from './pages'

const getPageData = (key) => pages.find(page => page.id === key)

export {
  getPageData
}