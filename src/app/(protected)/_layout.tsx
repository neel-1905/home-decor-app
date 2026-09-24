import { authClient } from "@/features/auth/lib";
import { LoadingScreen } from "@/shared/components/ui";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <LoadingScreen />;

  if (!session) return <Redirect href={`/`} />;

  return <Stack />;
}
