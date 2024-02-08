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

    const token = sessionStorage.getItem('token');

    const response = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    });

    const resData = await response.json();

    if(!response.ok) {
        throw new Error(resData.message || 'Ocurrio un error al guardar la receta')
    }

    if(!response.ok){
        throw new Error('Ocurrio un error al agregar un blog')
    }
}

export const putBlogsFn = async (data) =>{
    const token = sessionStorage.getItem('token');

    const response = await fetch(`${API_URL}/blogs/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify({...data, id: undefined}),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error(resData.message || 'Ocurrio un error al editar la receta')
    }
}

export const deleteBlogFn = async (blogId)=>{
    const token = sessionStorage.getItem('token');

    const response = await fetch(`${API_URL}/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    const resData = await response.json();

    if(!response.ok){
        throw new Error(resData.message || 'Ocurrio un error al eliminar la receta')
    }
}

export const getBlogByIdFn = async (id) =>{
    const response = await fetch(`${API_URL}/blogs/${id}`);

    if(!response.ok) {
        throw new Error('Ocurrio un error al traer las recetas')
    }

    const data = await response.json();

    return data;
}