import type { NextPage } from 'next'

import Filterlayout from 'components/filterlayout'
import List from 'components/list'
import SearchBar from 'components/searchBar'
const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <SearchBar />
      <div className="grid grid-cols-[25%_1fr]">
        {/* Filterlayout */}
        <div className="min-h-screen">
          <Filterlayout />
        </div>
        {/*  List*/}
        <div className="min-h-screen">
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home
