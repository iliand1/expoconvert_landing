"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'a' || event.key === 'ф' || event.key === 'Ф') {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [theme, setTheme])

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Desktop version */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-4 right-4 z-50 px-3 py-2 hidden xl:flex items-center space-x-2 
                  bg-background dark:bg-gray-800 
                  text-gray-800 dark:text-white 
                  border-gray-300 dark:border-gray-700 
                  hover:bg-gray-200 dark:hover:bg-gray-700 
                  hover:border-gray-400 dark:hover:border-gray-600 
                  transition-colors duration-200"
      >
        <span className="text-sm font-medium">Press</span>
        <span className="w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">A</span>
        <span className="text-sm font-medium">
          to switch to {theme === 'dark' ? 'light' : 'dark'}
        </span>
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 ml-2" />
        ) : (
          <Moon className="h-4 w-4 ml-2" />
        )}
      </Button>

      {/* Mobile version */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-6 right-6 z-50 xl:hidden 
                  bg-background dark:bg-gray-800 
                  text-gray-800 dark:text-white 
                  border-2 border-gray-400 dark:border-gray-700 
                  hover:bg-gray-200 dark:hover:bg-gray-700 
                  hover:border-gray-500 dark:hover:border-gray-600 
                  transition-colors duration-200
                  rounded-full w-12 h-12 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </Button>
    </>
  )
}