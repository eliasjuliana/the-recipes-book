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
        throw new Error('Ocurrio un error al agregar un blog')
    }
}

export const putBlogsFn = async (data) =>{
    const response = await fetch(`${API_URL}/blogs/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if(!response.ok){
        throw new Error('Ocurrio un error al agregar un blog')
    }
}

export const deleteBlogFn = async (blogId)=>{

    const response = await fetch(`${API_URL}/blogs/${blogId}`, {
        method: 'DELETE'
    })

    if(!response.ok){
        throw new Error('Ocurrio un error al eliminar un blog')
    }

}