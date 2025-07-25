import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Description } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
    { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
    { name: "Packed", description: "Item Packed in Dispatch Warehouse", value: "CONFIRMED" },
    { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
    { name: "Arriving", description: "by 16 Jul - 18 Jul", value: "ARRIVING" },
    { name: "Arrived", description: "by 16 Jul - 18 Jul", value: "DELIVERED" }
];

const canceledStep = [
    { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
    { name: "Order Canceled", description: "on Thu, 11 Jul", value: "CANCELLED" },

];

// Calcula el paso actual según el estado de la orden
function getCurrentStep(status: string, stepsArr: typeof steps) {
  const idx = stepsArr.findIndex(step => step.value === status);
  return idx === -1 ? 0 : idx;
}

interface OrderStepperProps {
  orderStatus: string;
}

const OrderStepper: React.FC<OrderStepperProps> = ({ orderStatus }) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  // Calcula el paso actual según el estado de la orden
  const currentStep = getCurrentStep(orderStatus, statusStep);

  return (
    <Box className="mx-auto my-10">
      {statusStep.map((step, index) => (
        <div key={step.value} className="flex px-4">
          <div className="flex flex-col items-center">
            <Box
              sx={{ zIndex: -1 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                index <= currentStep
                  ? "bg-gray-200 text-teal-500"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {step.value === orderStatus ? (
                <CheckCircleIcon />
              ) : (
                <FiberManualRecordIcon sx={{ zIndex: -1 }} />
              )}
            </Box>
            {index < statusStep.length - 1 && (
              <div
                className={`border h-20 w-[2px] ${
                  index < currentStep
                    ? "bg-primary-color"
                    : "bg-gray-300 text-gray-600"
                }`}
              ></div>
            )}
          </div>
          <div className="ml-2 w-full">
            <div
              className={`${
                step.value === orderStatus
                  ? "bg-primary-color p-2 text-white font-medium rounded-md -translate-y-3"
                  : ""
              } ${
                orderStatus === "CANCELLED" && step.value === orderStatus
                  ? "bg-red-500"
                  : ""
              } w-full`}
            >
              <p>{step.name}</p>
              <p
                className={`${
                  step.value === orderStatus ? "text-gray-200" : "text-gray-500"
                } text-xs`}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default OrderStepper;
