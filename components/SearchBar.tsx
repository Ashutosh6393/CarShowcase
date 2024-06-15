"use Client"
import React from 'react'
import {SearchManufacturer} from '@/components'
import { useState } from 'react'

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState()
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer />
        </div>
    </form>
  )
}

export default SearchBar