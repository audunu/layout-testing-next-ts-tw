import React from 'react'
import styles from './GridContainer.module.css'

type Props = {
  children: React.ReactNode
}
function GridContainer({ children }: any) {
  return <div className={`${styles.container}`}>{children}</div>
}

export default GridContainer
