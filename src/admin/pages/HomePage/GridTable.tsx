import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../../State/Store'

const GridTable = () => {
  const { homePageData } = useAppSelector((state: any) => state.homePage)
  return (
    <div>
      <HomeCategoryTable categories={homePageData?.grid || []} />
    </div>
  )
}

export default GridTable