import { Button } from '@mui/material';
import React, { useState } from 'react'
import DealTable from './DealTable';
import DealCategoryTable from './DealCategoryTable';
import CreateDealForm from './CreateDealForm';

const tabs = [
  "Ofertas",
  "Categoría",
  "Crear Oferta"
];

const Deal = () => {
  const [activeTab, setActiveTab] = useState("Ofertas");

  return (
    <div>
      <div className='flex gap-4'>
        {tabs.map((item) => 
          <Button onClick={() => setActiveTab(item)}
            variant={activeTab === item ? "contained" : "outlined"}
          >
            {item}
          </Button>
        )}
      </div>
      <div className='mt-5 flex-col justify-center items-center h-[70vh]'>
          {activeTab == "Ofertas" ? <DealTable /> : activeTab === "Categoría" ? ( <DealCategoryTable /> ) : ( 
            <div> 
              <CreateDealForm /> 
            </div> )}
      </div>
    </div>
  );
};


export default Deal