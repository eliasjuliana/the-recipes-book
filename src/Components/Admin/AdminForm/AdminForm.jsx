import { useForm } from "react-hook-form";
import Input from "../../Inputs/Input";
import TextArea from "../../TextArea/TextArea";
import { generateId } from "../../../helpers/helpers";
import { toast } from "sonner";

const AdminForm = (props) => {
    const{register, handleSubmit: onSubmitRHF, formState: {errors}} = useForm();

    const {setBlogs} = props;

    const handleSubmit = (data) =>{
        console.log(data);
        const newBlog = {...data, id:generateId()}
        
        setBlogs((prev) =>[...prev, newBlog]);

        toast.success('Receta guardada correctamente')
    }

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