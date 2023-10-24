const API_URL = import.meta.env.VITE_API_URL

export const getBlogsFn = async () =>{
    const response = await fetch(`${API_URL}/blogs`);
  
    if(!response.ok){
      throw new Error('Ocurrio un error al traer los blogs')
    }
    const data = await response.json();
  
    return data
  }
  

export const postBlogsFn = async (data) =>{
    const response = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if(!response.ok){
        throw new Error('Ocurrio un error al agregar un blogs')
    }
}