import { useForm } from 'react-hook-form'
import Input from '../Inputs/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useSession } from '../../stores/useSession';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import { postLoginFn } from '../../api/auth';

const LoginForm = () => {
    //ZUSTAND______________________________________________
    const {login} = useSession();

    //RRD
     const navigate = useNavigate()
    
    //RHF___________________________________________________
    const {register, formState: {errors}, handleSubmit: onSubmitRHF} = useForm();

    //TQUERY________________________________________________
    const {mutate: postLogin} = useMutation({mutationFn: postLoginFn, 
        onSuccess: (data)=>{
            //mensajes de exito
            Swal.close();
            toast.success('Bienvenido');

            //loguear al usuario
            login(data);

            //navegar a home pero logueados
            navigate('/');
        },
        onError: (err)=>{
            Swal.close();
            toast.error(err.message)
        }})
  //HANDLERS________________________________________________
    const handleSubmit = (data) =>{
        Swal.showLoading();
        postLogin(data);
    }
  
    //RENDER________________________________________________
    return (
        <form onSubmit={onSubmitRHF(handleSubmit)}>
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
                placeholder='Ingrese nombre de usuario'
                error = {!!errors?.userName}
        />

            <Input
                register={register} 
                options={{
                    required: true,
                    minLength: 4,
                    maxLength: 30,
                }}
                className='mt-2 mb-2'
                label='Contraseña'
                type='password'
                name='password'
                placeholder='Ingrese su contrasenia'
                error = {!!errors?.userName}
        />

        <button className='btn btn-dark w-100'>Ingresar</button>
        <p className='mt-4 mb-0'>¿Sos nuevo? <Link to={"/register"}>Registrate acá</Link></p>
    </form>


  )
}

export default LoginForm