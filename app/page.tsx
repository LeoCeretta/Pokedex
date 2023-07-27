async function getData(pokemons: string) {
  const maxPokemons = 251
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  } 
  return res.json()

}

export default async function Home( {
  params: {pokemons},
}: {
  params: { pokemons: string}
}) {

  const data = await getData(pokemons)
  data.results.forEach((item: { id: any }, index: number) => {
    item.id = index + 1  
  });
  
  return (
    <main>
      <h1>Olá PokeNext</h1>
    </main>
  )
}
