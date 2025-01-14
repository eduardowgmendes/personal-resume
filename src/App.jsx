
import Title from 'antd/es/typography/Title'
import './App.css'
import { Flex } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import personalResume from './local/resume.json'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Flex gap='middle' align='center' justify='center' vertical>
      <HomePage personalResume={personalResume} />
    </Flex>
  )
}

export default App
