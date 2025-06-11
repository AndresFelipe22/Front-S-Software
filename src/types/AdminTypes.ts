// Tipos auxiliares para slices de administración
import { HomeCategory } from './HomeTypes';
import { Deal } from './DealTypes';
import { Coupon } from './couponTypes';

export interface HomeCategoryState {
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
  categoryUpdated: boolean;
}

export interface DealsState {
  deals: Deal[];
  loading: boolean;
  error: string | null;
  dealCreated: boolean;
  dealUpdated: boolean;
}

export interface CouponState {
  coupons: Coupon[];
  cart: any | null;
  loading: boolean;
  error: string | null;
  couponCreated: boolean;
  couponApplied: boolean;
}
