import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

const MenuContext = React.createContext()
const UpdateMenuContext = React.createContext()

export function useMenu() {
  return useContext(MenuContext)
}

export function useMenuUpdate() {
  return useContext(UpdateMenuContext)
}

export function MenuProvider({ children }) {
  const router = useRouter()

  useEffect(() => {
    setShowMenu(false)
  }, [router])

  const [showMenu, setShowMenu] = useState(false)
  function toggleMenu() {
    setShowMenu(previousState => !previousState)
  }

  return (
    <MenuContext.Provider value={showMenu}>
      <UpdateMenuContext.Provider value={toggleMenu}>{children}</UpdateMenuContext.Provider>
    </MenuContext.Provider>
  )
}
