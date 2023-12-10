import React from 'react'
import Header from './Header'

const App = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <main>
    <Header pathname='/'/>
    {children}
  </main>
)

export default App
