
export default function router (){


  const del = async (data : any) => {
    try {
      const res = await fetch(`http://localhost:3001/api/catechism/catechism`, {
        method: 'DELETE',
        body: JSON.stringify({
          data: data.id,
        }),
      });
      if (res.status === 200) {
       
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
    }
  }
}