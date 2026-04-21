import React from 'react'
import image from '../assets/no-projects.png'
import { Link } from 'react-router'

const MainPage = () => {
    console.log("main page")
  return (
    <div className="flex flex-col items-center justify-center w-full mt-24">
        <img src={image} alt='Project Management' className="w-24 h-24 object-contain mx-auto"/>
        <div className="text-center mb-10 max-w-sm">
        <h1 className="text-3xl font-extrabold text-stone-700 mb-2 tracking-tighter">
          No Project Selected
        </h1>
        <p className="text-stone-450 text-base leading-relaxed">
          Select a project or get started with a new one
        </p>
      </div>

      {/* 4. "LIFTED" CREATE BUTTON */}
      {/* Uses the "Lifting it up" margin approach we discussed earlier */}
      <Link to={'/create-project'}>
        <button 
            className="py-3 px-8 bg-stone-800 text-stone-200 rounded-xl hover:bg-stone-700 hover:text-stone-50 transition-all text-base font-bold flex items-center gap-3 active:scale-95 shadow-lg"
        >
            <span>+</span>
            Create New Project
        </button>
      </Link>
    </div>
  )
}

export default MainPage