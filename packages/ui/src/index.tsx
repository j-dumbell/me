import { createRoot } from 'react-dom/client'
import '../app/globals.css'
import App from '@/components/App'

const container = document.getElementById('root') as HTMLDivElement
container.className = 'bg-gray-950'
const root = createRoot(container)

root.render(<App />)
