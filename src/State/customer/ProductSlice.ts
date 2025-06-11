import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from"../../config/api";
import { Product } from "../../types/ProductTypes";
import { RootState } from '../Store';

const API_URL = "/products";
export const fetchProductById = createAsyncThunk<Product,number>("products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get( `${API_URL}/${productId}`);
    
      const data=response.data;
      console.log("Product details data: ", data);
      return data
    } catch (error: any) {
      console.log("error: ", error);
    rejectWithValue(error.message);
    }
  }
)

export const searchProduct = createAsyncThunk("products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/search`,  {
        params: { 
            query 
        },
      });

      const data=response.data;
      console.log("search product data", data)
      return data
    } catch (error: any) {
      console.log("error ", error)
      rejectWithValue(error.mesaage)
    }
  }
)

export const fetchAllProduct=createAsyncThunk<any,any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {

    try {
      const response = await api.get('/products' ,{
        params:{
          ...params,
          pageNumber: params.pageNumber || 0
        }
      });
      const data=response.data;
      console.log("All product data:" , data)
      return data
    } catch (error: any) {
        console.log("error " +  error);
       // rejectWithValue(error.message);
     }
    }
)

 interface ProductState {
  product: Product | null;
  products: Product[];
  paginatedProducts: any;
  totalPages:number;
  loading: boolean;
  error: string | null | any;
  searchProduct:Product[]
}

const initialState: ProductState = {
  product: null,
  products: [],
  paginatedProducts: null,
  totalPages: 1,
  loading: false,
  error: null,
  searchProduct: []
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(
      searchProduct.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.searchProduct = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to search products";
    });

    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.paginatedProducts = action.payload;
        state.products = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
        console.log("-----", action.payload.totalPages);
      }
    );
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch products";
    });
  },
});

// Create async thunks for API calls
export const getAllProducts = createAsyncThunk<
  any,
  {
    category?: string;
    brand?:string;
    color?: string;
    size?: string;
    minPrice?: number;
    maxPrice?: number;
    minDiscount?: number;
    sort?: string;
    stock?: string;
    pageNumber?: number;
  }
>("products/getAllProducts", async (params, { rejectWithValue }) => {
  try {
    const response = await api.get<any>(API_URL, {
      params: {
        ...params,
        pageNumber: params.pageNumber || 0,
      },
    });
    console.log("all products ", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error ", error.response);
    return rejectWithValue(error.response.data);
  }
});


export default productSlice.reducer;

// Define selector functions
export const selectProduct = (state: RootState) => state.product.product;
export const selectProducts = (state: RootState) => state.product.products;
export const selectPaginatedProducts = (state: RootState) =>
  state.product.paginatedProducts;
export const selectProductLoading = (state: RootState) =>
  state.product.loading;
export const selectProductError = (state: RootState) => state.product.error;