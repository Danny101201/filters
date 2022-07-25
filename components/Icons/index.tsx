/* eslint-disable react/display-name */
import { memo, SVGProps } from 'react'
import SearchIcon from './img/searchIcon.svg'



export const SearchIconComponents = memo((props: SVGProps<SVGAElement>) => {
  return <SearchIcon {...props} />
})