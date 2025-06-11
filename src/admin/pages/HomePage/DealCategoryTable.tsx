import React from 'react'
import { useAppSelector } from '../../../State/Store'
import HomeCategoryTable from './HomeCategoryTable'

const DealCategoryTable = () => {
  const { homePageData } = useAppSelector((state: any) => state.homePage)
  return (
    <div>
      <HomeCategoryTable categories={homePageData?.dealCategories || []} />
    </div>
  )
}

export default DealCategoryTable