import {CHANGE_NAME, SORT_ITEMS_ASC, SORT_ITEMS_DESC} from '../mutation-types'

import {sortBy_asc, sortBy_desc} from '@/lib/sort'

import faker from 'faker'
faker.locale = 'zh_CN';
var _util = require('lodash/util');
const state = {
  students: {
    mun: 100,
    school: '上海市延安中学',
    items: _util.times(32, function(n) {
      return {
        name: faker.name.findName(),
        class: `${Math.ceil(Math.random() * 5)}班`,
        age: `${Math.ceil(Math.random() * 5) + 20}`,
        gender: (Math.random() * 10 < 5)
          ? '男'
          : '女'
      }
    }),
    currentItem: {}
  }
}

const mutations = {
  [CHANGE_NAME](state, schollName) {
    state.students.school = schollName;
  },
  [SORT_ITEMS_ASC](state, key) {
    state.students.items = sortBy_asc(state.students.items, key)
  },
  [SORT_ITEMS_DESC](state, key) {
    state.students.items = sortBy_desc(state.students.items, key)
  }
}

export default {
  state,
  mutations
}
