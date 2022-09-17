import { createRoot } from 'react-dom/client'
import { App } from './App'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const container = document.querySelector('#root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<App />)
