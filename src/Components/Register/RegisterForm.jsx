import { useForm } from "react-hook-form"
import Input from "../Inputs/Input"
import { useMutation } from "@tanstack/react-query"
import { postUserFn } from "../../api/users"
import Swal from "sweetalert2"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useSession } from "../../stores/useSession"

const RegisterForm = () => {
    //ZUSTAND______________________________________________
    const {login} = useSession();

    //RRD
    const navigate = useNavigate()

    //RHF____________________________________________________
    const {register, formState: {errors}, handleSubmit: onSubmitRHF} = useForm()

    //TQUERY________________________________________________
    const {mutate: postUser} = useMutation({mutationFn: postUserFn, 
                onSuccess: (data)=>{
                    //mensajes de exito
                    Swal.close();
                    toast.success('Bienvenido');

                    //loguear al usuario
                    login({...data, password: undefined});

                    //navegar a home pero logueados
                    navigate('/');
                },
                onError: ()=>{
                    Swal.close();
                    toast.error('Ocurrio un error al registrar el usuario')
                }})

    //HANDLERS
    const handleSubmit = (data) =>{
        Swal.showLoading();
        postUser({...data, isAdmin: false})
    }
  //RENDER________________________________________________
    return (
        <>
        <form onSubmit={onSubmitRHF(handleSubmit)} className="row"> 
        <div className='col-12 col-md-6'> 
        <Input
                register={register} 
                options={{
                    required: true,
                    minLength: 4,
                    maxLength: 30,
                }}
                className=''
                label='Nombre'
                name='firstname'
                placeholder='Ingrese su nombre'
                error = {!!errors?.firstname}
        />
        </div>
        
        <div className='col-12 col-md-6'>
        <Input
                register={register} 
                options={{
                    required: true,
                    minLength: 4,
                    maxLength: 30,
                }}
                className='mt-2 mb-2'
                label='Apellido'
                type='lastname'
                name='lastname'
                placeholder='Ingrese su apellido'
                error = {!!errors?.lastname}
        />
        </div>

        <div className='col-12 col-md-6'> 
        <Input
                register={register} 
                options={{
                    required: true,
                    minLength: 4,
                    maxLength: 30,
                }}
                className=''
                label='Nombre de usuario'
                name='userName'
                placeholder='Ingrese su nombre de usuario'
                error = {!!errors?.userName}
        />
        </div>
        
        <div className='col-12 col-md-6'>
        <Input
                register={register} 
                options={{
                    required: true,
                    minLength: 4,
                    maxLength: 30,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/
                }}
                className='mt-2 mb-2'
                label='Contraseña'
                type='password'
                name='password'
                placeholder='Ingrese su contraseña'
                error = {!!errors?.password}
        />
        </div>

        <button className='btn btn-dark col-12'>Registrarse</button>
        </form>
        </>
  )
}

export default RegisterForm