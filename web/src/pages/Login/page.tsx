import { Button, Stack } from "@mui/material";
import { useHooks } from "./hooks";
import InputField from "@/components/InputField";

const LoginPage = () => {
  const { control, login } = useHooks();
  return (
    <Stack
      sx={{
        background: "#FED16A",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        top: 0,
      }}
    >
      <form onSubmit={login}>
        <InputField control={control} name="username" label="Username" />
        <InputField
          control={control}
          name="password"
          label="Password"
          type="password"
        />
        <Button type="submit"> Sign In</Button>
      </form>
    </Stack>
  );
};
export default LoginPage;
