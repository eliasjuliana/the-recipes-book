const API_URL = import.meta.env.VITE_API_URL;

export const postLoginFn = async (formData) => {
    const response = await fetch(`${API_URL}/users`);

    if(!response.ok){
        throw new Error('Ocurrio un error al registrar un usuario');
    }

    const users = await response.json();

    const foundUser = users.find((item)=> item.username === formData.username && item.password === formData.password);

    if(!foundUser){
        throw new Error ('Usuario o contrasenia no validos')
    }

    return {...foundUser, password: undefined};
}
