import { useForm } from "react-hook-form";
import './Shipping.css'
import useAuth from './../../hooks/useAuth';
export default function Shipping() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="shipping-form">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="Phone" defaultValue="" {...register("phone")} />
                    <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}
