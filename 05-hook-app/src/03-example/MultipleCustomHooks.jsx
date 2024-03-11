import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    const { data, isLoading } = useFetch("https://pokeapi.co/api/v2/pokemon/1");

    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />
            {isLoading && <p>cargando...</p>}
            <pre>{JSON.stringify(data?.name, null, 2)}</pre>
        </>
    )
}
