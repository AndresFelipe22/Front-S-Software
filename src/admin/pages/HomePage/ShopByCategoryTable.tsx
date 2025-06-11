import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../../State/Store'

const ShopByCategoryTable = () => {
  const { homePageData } = useAppSelector((state: any) => state.homePage)
  return (
    <div>
      <HomeCategoryTable categories={homePageData?.shopByCategories || []} />
    </div>
  )
}

export default ShopByCategoryTable