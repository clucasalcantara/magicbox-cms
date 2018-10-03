/**
 * Entrypoint for effect engines
 * @memberof effect-cms
 *
 **/
import * as accessEngine from './access'
import * as deployEngine from './deploy'
import * as garbageEngine from './garbage'
import * as layoutEngine from './layout'
import * as pageEngine from './pages'
import * as themeEngine from './themes'

module.exports = {
  accesEngine,
  deployEngine,
  garbageEngine,
  layoutEngine,
  pageEngine,
  themeEngine,
}
