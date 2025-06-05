import yup from "@/lib/yup";
import { userApi } from "@/services/userApiService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

type FormValues = yup.InferType<typeof schema>;

export const useHooks = () => {
  const router = useRouter();

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data: FormValues) => {

    try{
      const correctAccount = await userApi.getAccount(data.username);
      if(!correctAccount) return
      if(correctAccount.data.username === data.username && data.password === correctAccount.data.password)
        router.push("/Homepage/page?page=dashboard");
      else{
        router.push('/')
      }
    }catch{
      alert('WRONG SEND KA BOI')
    }
    // if (data.username == "user" && data.password == "test") {
    //   router.push("/Homepage/page?page=dashboard");
    // } else {
    //   console.log("error");
    // }
  };
  return {
    control,
    handleSubmit,
    login: handleSubmit(handleLogin),
  };
};
