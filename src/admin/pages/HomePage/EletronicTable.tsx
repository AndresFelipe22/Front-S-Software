import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../../State/Store'

const Eletronic = () => {
  const { homePageData } = useAppSelector((state: any) => state.homePage)
  return (
    <div>
      <HomeCategoryTable categories={homePageData?.electricCategories || []} />
    </div>
  )
}

export default Eletronic