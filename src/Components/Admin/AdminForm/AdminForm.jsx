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
    
        onError: (e)=>{
            Swal.close();
            toast.error(e.message)
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
    
        onError: (e)=>{
            Swal.close();
            toast.error(e.message)
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
    };

    const handleCancelEdition = () =>{
        reset();
        clearBlog();
    }

        //_________________ RENDER__________________________________
  return (
    <div className="my-5 flex justify-center">
    {isEditing && <div className="alert alert-info">Estas editando la receta &quot; <span className="fw-bold">{blog.title}</span>&quot;</div> }
    <form className="w-2/3 bg-neutral-400 rounded-md p-5 flex flex-col content-center" onSubmit={onSubmitRHF(handleSubmit)}>
        <Input 
            register={register} 
            options={{
                required: true,
                minLength: 4,
                maxLength: 30,
            }}
            className='my-2'
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
            className='my-2'
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
            className='my-2'
            name='content'
            placeholder=''
            error = {!!errors.content} />

            <div className="text-end">
                <button type="submit" className="btn btn-danger mt-3">Guardar</button>

                {isEditing && <button type="button" className="ms-2 btn btn-secondary mt-3" onClick={handleCancelEdition}>Cancelar edicion</button>}
            </div>
    </form>
    </div>
  )
}

export default AdminForm