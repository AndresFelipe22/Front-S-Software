// Componente Product: página principal de productos, muestra filtros, listado y paginación
import React, { useState, useEffect } from 'react';
import FilterSection from './FilterSection';
import ProductCart from './ProductCard';
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, useMediaQuery, useTheme } from '@mui/material';
import { FilterAlt } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAllProducts } from '../../../State/customer/ProductSlice';

const Product = () => {
  // Hook para acceder al tema de MUI
  const theme = useTheme()
  // Hook para detectar si la pantalla es grande (breakpoint lg)
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'))
  // Estado para el tipo de ordenamiento seleccionado
  const [sort, setSort] = useState("");
  // Estado para la página actual de la paginación
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()
  const [searchParam] = useSearchParams();
  const { category } = useParams();
  const products = useAppSelector(state => state.product.products);
  const totalPages = useAppSelector(state => state.product.totalPages);

  // Maneja el cambio de ordenamiento
  const handleSortProduct = (event: any) => {
    setSort(event.target.value);
  };
  
  // Maneja el cambio de página en la paginación
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    // Extraer filtros de los searchParams
    const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
    const color = searchParam.get("color");
    const minDiscount = searchParam.get("discount") ? Number(searchParam.get("discount")) : undefined;
    const pageNumber = page - 1;
    dispatch(getAllProducts({
      category,
      color: color || undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minDiscount,
      sort,
      pageNumber
    }));
  }, [category, searchParam, sort, page, dispatch])

  return (
    // Contenedor principal de la página de productos
    <div className='z-10 mt-10'>
        {/* Título */}
        <div>
            <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>
                Componetes
            </h1>
        </div>
        <div className='lg:flex'>
          {/* Sección de filtros (visible solo en desktop) */}
          <section className='filter_section hidden lg:block w-[20%]'>
            <FilterSection />
          </section>
          {/* Sección de productos */}
          <div className='w-full lg:w-[80%] space-y-5'>
            {/* Barra superior: filtro móvil, ordenamiento */}
            <div className='flex justify-between items-center px-9 h-[40px]'>
              <div className='relative w-[50%]'>
                {/* Botón de filtro solo en móvil */}
                {
                  !isLarge && (
                  <IconButton>
                    <FilterAlt/>
                  </IconButton>)
                }
                {/* Filtros en móvil */}
                {
                  !isLarge && (<Box>
                    <FilterSection />
                  </Box>)
                }
              </div>
                {/* Selector de ordenamiento */}
                <FormControl size="small" sx={{ width: "200px" }}>
                  <InputLabel id="sort">Filtrar</InputLabel>
                  <Select
                    labelId="sort"
                    id="sort"
                    value={sort}
                    label="Sort"
                    onChange={handleSortProduct}
                  >
                    <MenuItem value={"price_low"}>Precio : Menor precio</MenuItem>
                    <MenuItem value={"price_high"}>Precio : Mayor precio</MenuItem>
                  </Select>
                </FormControl>
            </div>
            <Divider />
            {/* Grid de productos */}
          <section className='products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-s justify-center'>
            {products && products.length > 0 ? (
              products.map((item, idx) => <ProductCart key={item.id || idx} item={item} />)
            ) : (
              <div className='w-full text-center py-10'>No hay productos para mostrar.</div>
            )}
          </section>
            {/* Paginación */}
            <div className='flex justify-center py-10'>
              <Pagination onChange={handlePageChange} count={totalPages || 1} page={page} variant="outlined" color='primary' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product