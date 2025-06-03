import React from "react";
import { Card, CardContent, Typography, Divider } from '@mui/material';

// Usa un mock o simplemente muestra un mensaje si no hay productos
const Profile = () => {
  // Elimina cualquier referencia a Redux Toolkit
  // const products = useAppSelector((state: any) => state.sellerProduct?.products || []);
  const products: any[] = [];

  return (
    <div className="p-6">
      <Card className="mb-6">
        <CardContent>
          <Typography variant="h5" className="font-bold mb-2">Perfil del Vendedor</Typography>
          <Divider className="my-2" />
          <Typography variant="subtitle1">Productos publicados: {products.length}</Typography>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Aquí podrías mostrar productos mock si lo deseas */}
        {products.length === 0 && <Typography variant="body2">No hay productos publicados.</Typography>}
      </div>
    </div>
  );
};

export default Profile;