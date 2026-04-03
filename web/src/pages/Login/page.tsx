import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useHooks } from "./hooks";
import InputField from "@/components/InputField";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const LoginPage = () => {
  const { control, login } = useHooks();
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          bgcolor: "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.35)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
        }}
      >
        <Stack spacing={3} component="form" onSubmit={login}>
          <Stack spacing={1} alignItems="center" textAlign="center">
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 2,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(15, 118, 110, 0.35)",
              }}
            >
              <FitnessCenterIcon sx={{ fontSize: 32 }} />
            </Box>
            <Typography variant="h4" component="h1" sx={{ fontFamily: '"Inknut Antiqua", Georgia, serif' }}>
              FitTrack
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sign in to continue to your workouts
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <InputField control={control} name="username" label="Username" />
            <InputField
              control={control}
              name="password"
              label="Password"
              type="password"
            />
          </Stack>
          <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
            Sign in
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};
export default LoginPage;
