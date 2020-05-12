import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import reducers from 'store/reducers/index.js'

const store = configureStore({ reducers })
function MainComponent () {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <div>hi</div>
    </Provider>
  )
}
ReactDOM.render(<MainComponent />, document.getElementById('root'))
