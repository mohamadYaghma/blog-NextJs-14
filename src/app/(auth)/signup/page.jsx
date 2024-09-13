"use client"
import Button from '@/ui/Button';
import RHFTextField from '@/ui/RHFTextField'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from '@/context/AuthContext';
import SpinnerMini from '@/ui/SpinnerMini';


const schema = yup
  .object({
    name: yup.string().min(5 ,"نام و نام خانوادگی نامعتبر میباشد").max(30 ,"نام و نام خانوادگی نامعتبر میباشد"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("  رمزعبور الزامی است"),
  }).required();

export default function SignUp() {
    
    const {register,
        handleSubmit,
        formState: { errors , isLoading },} = useForm({
        resolver: yupResolver(schema),
        mode:"onTouched"
    });

    const { signup } = useAuth();
    const onSubmit = async (values) => {
        await signup(values);
      };

    return (
        <div>
            <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ثبت نام</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <RHFTextField 
                    label="نام و نام خانوادگی"
                    name="name"
                    register={register} 
                    isRequired
                    errors={errors}
                />
                <RHFTextField 
                    label="ایمیل"
                    name="email"
                    register={register} 
                    dir="ltr"
                    isRequired
                    errors={errors}
                />
                <RHFTextField 
                    label="رمز عبور"
                    name="password"
                    register={register} 
                    type="password"
                    dir="ltr"
                    isRequired
                    errors={errors}
                />
                <div className="text-center flex flex-col justify-center items-center ">
                    {
                        isLoading ? (<SpinnerMini  />) : (
                            <Button type="submit" variant="primary" className="w-full">تایید</Button>

                        )
                    }
                </div>
            </form>
        </div>
    )
}
