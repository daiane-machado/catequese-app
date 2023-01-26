

export default function Catechism( { data }: any) {
  const catechism = data.map((catechism : any) => {
    catechism.id = catechism.ref.id
    delete catechism.ref
    return catechism

  })

  return catechism

}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3001/api/catechism/catechism')
  const { data } = await res.json()
  
  return { props: data}
} 