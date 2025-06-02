// Componente FilterSection: muestra y gestiona los filtros de productos (color, precio, descuento)
import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { colors, discount, price } from '../../../data/Filter/index'
import { useSearchParams } from 'react-router-dom';

const FilterSection = () => {
  // Estado para expandir/colapsar la lista de colores
  const [expendColor, setExpendColor] = useState(false);
  // Hook para manipular los parámetros de búsqueda en la URL
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Alterna la expansión de la lista de colores
  const handleExpendColor = () => {
    setExpendColor(!expendColor);
  };

  // Actualiza los parámetros de búsqueda al seleccionar un filtro
  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  // Limpia todos los filtros de la URL
  const clearAllFilters = () => {
    // Crea una copia de los searchParams
    const params = new URLSearchParams(searchParams.toString());
    // Guarda todas las claves primero
    const keys: string[] = [];
    params.forEach((_, key) => {
      keys.push(key);
    });
    // Borra cada clave
    keys.forEach((key) => {
      params.delete(key);
    });
    setSearchParams(params);
  };

  return (
    // Contenedor principal de la sección de filtros
    <div className="-z-50 space-y-5 bg-white">
      {/* Encabezado y botón para borrar filtros */}
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button onClick={clearAllFilters} size='small' className='text-primary-color cursor-pointer font-semibold'>
          Borrar
        </Button>
      </div>
      <Divider/>
      {/* Filtro por color */}
     <div className='px-9 space-y-6'>
       <section>
        <FormControl>
          <FormLabel 
          sx={{
            fontSize:'16px',
            fontWeight:'bold',
            color:'primary.main',
            pb: '14px',
          }}
          className='text-2xl font-semibold' id='color'>Modelo</FormLabel>
          <RadioGroup
            aria-labelledby="color"
            defaultValue=""
            name="color"
            onChange={updateFilterParams}
          >
            {/* Renderiza los colores disponibles, con opción de expandir */}
            {colors.slice(0, expendColor ? colors.length : 5).map((item: { name: string; hex: string }) => (
              <FormControlLabel key={item.name} value={item.name} control={<Radio />} label={
                <div className='flex items-center gap-3'>
                  <p>{item.name}</p>
                  <p style={{ backgroundColor: item.hex }} className={`h-5 w-5 rounded-full border ${item.name === "Blanco" ? "border-gray-400" : ""}`}></p>
                </div>
              } />
            ))}
          </RadioGroup>
        </FormControl>
        {/* Botón para mostrar más/menos colores */}
        <div>
          <button
          onClick={handleExpendColor}
          className='text-primary-color cursor-pointer hover:text-secondary-color'>
            {expendColor?'Ocultar':`+${colors.length - 5} más`}
          </button>
        </div>
      </section>
     </div>
     <Divider />
     {/* Filtro por precio */}
     <div className='px-9 space-y-6'>
        <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              pb: "14px",
              color: 'primary.main'
            }}
            className="text-2xl font-semibold"
            id="price"
          >
            Precio
          </FormLabel>
          <RadioGroup
            name="price"
            onChange={updateFilterParams}
            aria-labelledby="price"
            defaultValue=""
          >
            {/* Renderiza los rangos de precio */}
            {price.map((item: { name: string; value: string }, index: number) => (
              <FormControlLabel
                key={item.name}
                value={item.value}
                control={<Radio size="small" />}
                label={item.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
        </section>
     </div>
     <Divider />
     {/* Filtro por descuento */}
      <div className='px-9 space-y-6'>
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                color: 'primary.main',
              }}
              className="text-2xl font-semibold"
              id="brand"
            >
              Descuento
            </FormLabel>
            <RadioGroup
              name="discount"
              onChange={updateFilterParams}
              aria-labelledby="brand"
              defaultValue=""
            >
              {/* Renderiza los niveles de descuento */}
              {discount.map((item: { name: string; value: number }, index: number) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  )
}

export default FilterSection