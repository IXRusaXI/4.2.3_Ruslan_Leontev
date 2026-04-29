import { createSlice, type PayloadAction } from '@reduxjs/toolkit';// предполагаем, что интерфейс Vacancy лежит в types.ts


// Начальное состояние
interface PaginationState {
    activePage: number,
    total: number
}

const initialState: PaginationState = {
    activePage: 1,
    total: 0
};

// Создание slice
const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setTotalPages: (state, action: PayloadAction<number>) => {
        state.total = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
        state.activePage = action.payload
    }
  }
});

export const pageActions = pageSlice.actions;
export default pageSlice.reducer;