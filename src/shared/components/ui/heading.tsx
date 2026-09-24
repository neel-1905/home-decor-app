import { cn } from "@/shared/utils";
import { AppText } from "./app-text";

export const Heading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <AppText
      variant="semibold"
      className={cn("text-xl text-primary", className)}
    >
      {text}
    </AppText>
  );
};
