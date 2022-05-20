import React from 'react'
import styles from './NewContainer.module.css'

type Props = {
  children: React.ReactNode
}

const TestContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center relative">
      <div className={`${styles.container}`}>{children}</div>
    </div>
  )
}

export default TestContainer
