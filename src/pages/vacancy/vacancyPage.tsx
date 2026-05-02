import { useParams } from "react-router-dom";
import { Vacancy } from "../../widgets/Vacancy/Vacancy"
import { useAppSelector } from "../../store/typedHooks";
import { Container } from "@mantine/core";

function VacancyPage() {
    const { id } = useParams();

    console.log(id);
    const all = useAppSelector(state => state.vacancy.all)
    console.log(all);
    const vacancy = all.find(vacancy => vacancy.id === id)
    console.log(vacancy);
    return (
        vacancy && <Container size="sm" py="lg">
            <Vacancy
                key={id}
                vacancy={vacancy}
            />
        </Container>
        

    )
}

export default VacancyPage
