import React from "react";

import SellerRoutes from "../../../Routes/SellerRoutes";
import SellerDrawerList from "../../components/SellerDrawerList/SellerDrawerList";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen">
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
        <SellerDrawerList/>
        </div>
        <div className="p-10 w-full lg:w-[80%]  overflow-y-auto">
          <SellerRoutes />
        </div>
      </section>
    </div>
  );
};

export default SellerDashboard;