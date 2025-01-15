
import './App.css'
import { Card, ConfigProvider, Flex, Layout, Segmented, theme } from 'antd'
import { useEffect, useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import AppRoutes from './components/AppRoutes'
import { MoonFilled, SunFilled } from '@ant-design/icons'
import { calc } from 'antd/es/theme/internal'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  const handleThemeChange = (value) => {
    const isDarkMode = value === 'dark'
    setDarkMode(value === 'dark')
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light')
  }

  return (

    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}>
      <Layout style={{ minHeight: '100vh'}}>

        <Segmented vertical style={{ 
         zIndex: 9999, margin: '1rem', position: 'absolute', top: 0, right: 0
        }}
          options={[
            { icon: <SunFilled />, value: 'light' },
            { label: <MoonFilled />, value: 'dark' }
          ]} onChange={handleThemeChange} value={darkMode} />

        <Content>
          <AppRoutes />
        </Content>
      </Layout>

    </ConfigProvider>

  )
}

export default App
