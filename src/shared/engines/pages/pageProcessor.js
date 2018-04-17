import pages from './pages'

const getPageData = (key) => pages.filter(page => page.id === key)[0]

export {
  getPageData
}