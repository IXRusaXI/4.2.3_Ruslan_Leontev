import { useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks"
import { filterActions } from "../../store/slices/filter/filterSlice"


export function useQueryParams() {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    function getVacancyById(id: string) {
        const all = useAppSelector(state => state.vacancy.all)
        return all.find((vacancy) => vacancy.id === id)
    }

    function updateSearchString(inputSearchString?: string) {
        const stateSearchString = useAppSelector(state => state.filter.searchString)
        const searchString = searchParams.get('searchString')

        if (inputSearchString) {
            dispatch(filterActions.setSearchString(inputSearchString))
            updateParams('searchString', inputSearchString)
            return
        }

        if (searchString) {
            dispatch(filterActions.setSearchString(searchString))
        } else if (stateSearchString) {
            updateParams('searchString', stateSearchString)
        }
    }

    function updateSkills() {

    }

    function updateCity() {

    }

    function updateParams(paramName: string, paramValue: any) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(paramName, paramValue);
        setSearchParams(newParams);
    }
 
    return {
        getVacancyById,
        updateSearchString,
        updateSkills,
        updateCity
    }
}
