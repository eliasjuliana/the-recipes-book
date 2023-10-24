import { useForm } from "react-hook-form";
import { useBlog } from "../../../stores/useBlog";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBlogsFn, putBlogsFn } from "../../../api/blogs";

import Input from "../../Inputs/Input";
import TextArea from "../../TextArea/TextArea";

import Swal from "sweetalert2";


const AdminForm = () => {

    // _____________________RHF__________________________________
    const{register, handleSubmit: onSubmitRHF, formState: {errors}, reset, setValue} = useForm();

    // __________________ZUSTAND____________________________________
    const {blog, clearBlog} = useBlog();

    const isEditing = !!blog

    //en caso que este editando un blog
    if(isEditing){
        setValue('title', blog.title);
        setValue('image-url', blog['image-url']);
        setValue('content', blog.content);
    }


    // __________________TQUERY____________________________________

    const queryClient = useQueryClient();

    //mutacion para CREATE(POST)
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

    //mutacion para UPDATE(PUT)
    const {mutate: putBlog} = useMutation({
        mutationFn: putBlogsFn,
        //mensaje de exito
        onSuccess: ()=>{
            Swal.close();
            toast.success('Receta guardada correctamente');

        //resetear el form
        reset();

        //limpiar estado global
        clearBlog();

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

        if(isEditing){
            putBlog({...data, id: blog.id})
        } else{
            postBlog(data);  
        }
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