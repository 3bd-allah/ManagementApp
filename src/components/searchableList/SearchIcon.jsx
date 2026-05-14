import { Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const SearchIcon = ({className}) => {
  return (
    <div className={className}>
        <NavLink to={'/search'}>
            <Search />
        </NavLink>
    </div>
  )
}

export default SearchIcon