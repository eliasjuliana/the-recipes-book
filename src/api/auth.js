import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

export const postLoginFn = async (formData) => {
    // me conecto al endpoint /auth/login porque asi esta en el backend (chequear la doc del readme del back)
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
        }
    });

    const data = await response.json();

    if(!response.ok){
        const message = data.message;
        throw new Error (message || 'Ocurrio un error al loguearse')
    }

//guardo el token que viene de data.data
    const token = data.data

    sessionStorage.setItem('token', token); 

    const userData = jwtDecode(token).user;

    return userData;

    // saco todo esto porque ahora se maneja con el backend
    // if(!response.ok){
    //     throw new Error('Ocurrio un error al registrar un usuario');
    // }

    // const users = await response.json();

    // const foundUser = users.find((item)=> item.username === formData.username && item.password === formData.password);

    // if(!foundUser){
    //     throw new Error ('Usuario o contrasenia no validos')
    // }

    // return {...foundUser, password: undefined};
}
