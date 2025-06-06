import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/api";
import { Product } from "../../types/ProductTypes";

// Obtiene todos los productos del vendedor autenticado.
export const fetchSellerProducts = createAsyncThunk<Product[], any>(
  "/sellers/fetchSellerProducts",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/product", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const data = response.data;
      return data;
    } catch (error) {
      console.log("error --", error);
      throw error;
    }
  }
);

// Crea un nuevo producto para el vendedor autenticado.
export const createProduct = createAsyncThunk<Product, {request:any, jwt:string | null }>(
        "/sellerProduct/createProduct",
    async (args, { rejectWithValue }) => {
    const { request, jwt } = args;
    try {
        const response = await api.post(`/sellers/product`, request, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
        });
        return response.data;
    } catch (error) {
        console.log("error - - -", error);
        throw error;
    }
    }

)
interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
}

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSellerProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchSellerProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ocurrió un error al cargar los productos del vendedor';
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ocurrió un error al crear el producto';
    });


  }
});

export default sellerProductSlice.reducer;