import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useAppSelector } from '../../../State/Store';
import DealTable from './DealTable';
import DealCategoryTable from './DealCategoryTable';
import CreateDealForm from './CreateDealForm';

interface TabItem {
  name: string;
  label: string;
}

const tabs: TabItem[] = [
  { name: "Ofertas", label: "Ofertas" },
  { name: "Categorias", label: "Categorías" },
  { name: "CrearOferta", label: "Crear Oferta" }
];

const Deal = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const { adminDeals } = useAppSelector((state) => state);
  const handleActiveTab = (tab: TabItem) => {
    setActiveTab(tab.name);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Ofertas":
        return <DealTable />;
      case "Categorias":
        return <DealCategoryTable />;
      case "CrearOferta":
        return (
          <div className="mt-5 flex flex-col h-[70vh]">
            <CreateDealForm />
          </div>
        );
      default:
        return <DealTable />;
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <Button
            key={tab.name}
            onClick={() => handleActiveTab(tab)}
            variant={activeTab === tab.name ? "contained" : "outlined"}
            color="primary"
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="mt-5">
        {renderContent()}
      </div>
    </div>
  );
};


export default Deal