// @flow
import type { SagaIterator } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import getStore from '../getStore'
import type { CreateGameAction } from '../action'
import { addPlayer, CREATE_GAME, joinRoom } from '../action'

import getConfig from 'next/config'

import axios from 'axios'

const { publicRuntimeConfig } = getConfig()

function* createGame(createGameAction: CreateGameAction) {
  const { username } = getStore().getState().session
  const { name, gameMode } = createGameAction
  const player = { name: username }

  const { apiUrl } = publicRuntimeConfig
  // TODO: Error handling using try/catch
  const response = yield call(axios.post, `${apiUrl}/api/new`, {
    name,
    gameMode,
    player,
  })
  yield all([
    put(joinRoom(response.data, name, 0)),
    put(addPlayer(0, username)),
  ])
}

function* createGameSaga(): SagaIterator {
  yield takeLatest(CREATE_GAME, createGame)
}

export default function* gameSaga(): SagaIterator {
  yield all([createGameSaga()])
}
