import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Vacancy, SearchParams } from './../../../pages/types/types';


// Начальное состояние
interface VacanciesState {
  all: Vacancy[];
  filtered: Vacancy[];
  total: number;
  currentPage: number;
  pageSize: number;
}

const initialState: VacanciesState = {
  all: [],
  filtered: [],
  total: 0,
  currentPage: 1,
  pageSize: 10
};

// Создание slice
const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setAllVacancies: (state, action: PayloadAction<Vacancy[]>) => {
        // console.log('action.payload:', action.payload);

        state.all = action.payload;
    },

    // Соединить кнопку и экшен поиска
    // Соединить отрисовку скилов с состоянием приложения, соединить изменение набора скилов с обновлением отфильтрованного списка
    // Связать выбор города с обновлением отфильтрованного списка


    filterVacancies: (state, action: PayloadAction<SearchParams>) => {
        let temp: Vacancy[] = [];

        if (action.payload.searchString) {
            temp = state.all.filter((vacancy) => vacancy.name.toLowerCase().includes(action.payload.searchString.toLowerCase()));
        }

        // if (action.payload.skills.length) {
        //     temp = state.filtered.filter((vacancy) => {
        //         return action.payload.skills.some((skill) => vacancy.name.toLowerCase().includes(skill.toLowerCase()));
        //     });
        // }


        state.filtered = temp;
        state.total = temp.length;
    },
  }
});

export const vacanciesActions = vacanciesSlice.actions;
export default vacanciesSlice.reducer;