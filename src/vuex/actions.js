import * as types from './mutation-types'

const makeAction = (type) => {
  return ({ commit }, ...args) => commit(type, ...args)
}

// goods actions
export const changeName = makeAction(types.CHANGE_NAME)
export const sortItemsAsc = makeAction(types.SORT_ITEMS_ASC)
export const sortItemsDesc = makeAction(types.SORT_ITEMS_DESC)
