import { useForm } from "react-hook-form";
import Input from "../../Inputs/Input";
import TextArea from "../../TextArea/TextArea";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBlogsFn } from "../../../api/blogs";
import Swal from "sweetalert2";

const AdminForm = () => {

    // _____________________RHF__________________________________
    const{register, handleSubmit: onSubmitRHF, formState: {errors}, reset} = useForm();

    // __________________TQUERY____________________________________

    const queryClient = useQueryClient();

    const {mutate: postBlog} = useMutation({
        mutationFn: postBlogsFn,
        //mensaje de exito
        onSuccess: ()=>{
            Swal.close();
            toast.success('Receta guardada correctamente');
        //resetear el form
        reset();

        //recargar galeria con cards
        queryClient.invalidateQueries('blogs')
        },
    
        onError: ()=>{
            Swal.close();
            toast.error('Ocurrio un error al guardar la receta')
        }
    })

    // __________________HANDLERS____________________________________

    const handleSubmit = (data) =>{
        Swal.showLoading();
        postBlog(data);        
    }

        //_________________ RENDER__________________________________
  return (
    <form className="card" onSubmit={onSubmitRHF(handleSubmit)}>
        <Input 
            register={register} 
            options={{
                required: true,
                minLength: 4,
                maxLength: 30,
            }}
            className=''
            label='Titulo'
            name='title'
            placeholder='Receta'
            error = {!!errors.title} />

        <Input 
            register={register} 
            options={{
                required: true,
                minLength: 4,
                pattern: /\.(jpeg|jpg|gif|png|bmp|svg|webp|tiff)$/i
            }}
            className='mt-2'
            label='Imagen'
            name='image-url'
            type='url'
            placeholder='url de imagen'
            error = {!!errors['image-url']}/>

        <TextArea
            register={register} 
            options={{
                required: true,
                minLength: 4,
                maxLength: 3000,
            }}
            className='mt-2'
            label='Contenido del blog'
            name='content'
            placeholder=''
            error = {!!errors.content} />

            <div className="text-end">
                <button type="submit" className="btn btn-danger mt-3">Guardar</button>
            </div>
    </form>
  )
}

export default AdminForm