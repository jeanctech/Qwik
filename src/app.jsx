import { component$, useSignal } from '@builder.io/qwik'
import Qwik from './Assets/Qwik.svg'
import Vite from '../Public/Vite.svg'
import './Styles/App.css'

export const App = component$(() => {
  const count = useSignal(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Vite} class="logo" alt="Vite logo" />
        </a>
        <a href="https://qwik.builder.io" target="_blank">
          <img src={Qwik} class="logo qwik" alt="Qwik logo" />
        </a>
      </div>
      <h1>Vite + Qwik</h1>
      <div class="card">
        <button onClick$={() => count.value++}>count is {count.value}</button>
        <p>
          Edit <code>src/app.jsx</code> and save to test Hmr
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
    </>
  )
})
