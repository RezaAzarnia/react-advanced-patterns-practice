import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../zustand/store";

export const useDispatchAction: () => AppDispatch = useDispatch;

export const useSelect: TypedUseSelectorHook<RootState> = useSelector;
