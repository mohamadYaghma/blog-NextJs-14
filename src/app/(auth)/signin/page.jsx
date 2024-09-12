import TextField from "@/ui/TextField"

export const metadata={
    title : "ثبت نام" ,
}

export default function SignIn() {
    return (
        <div>
            <h1>ثبت نام</h1>
            <form action="">
                <TextField 
                    lable="نام و نام خانوادگی"
                    name="name"
                    isRequired
                    // className=""
                    // value=""
                    // onChange=""
                />
            </form>
        </div>
    )
}
