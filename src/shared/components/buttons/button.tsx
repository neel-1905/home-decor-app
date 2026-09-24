import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const buttonVariants = cva(
  // 1. Removed active:opacity-90 from here to prevent style conflicts
  "flex-row items-center justify-center rounded-full px-4 py-3",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        outline: "border border-border bg-transparent",
        ghost: "bg-transparent",
        destructive: "bg-destructive",
      },
      size: {
        sm: "px-3 py-2 rounded-full",
        md: "px-4 py-3 rounded-full",
        lg: "px-6 py-4 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const textVariants = cva("font-semibold text-center", {
  variants: {
    variant: {
      default: "text-foreground-secondary",
      secondary: "text-foreground",
      outline: "text-primary",
      ghost: "text-primary",
      destructive: "text-destructive-foreground",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ButtonProps
  extends TouchableOpacityProps, VariantProps<typeof buttonVariants> {
  label?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
  activeOpacity?: number; // Optional prop if you want to override it later
}

export function Button({
  label,
  variant,
  size,
  disabled,
  loading,
  className,
  textClassName,
  children,
  activeOpacity = 0.7, // 2. Set a reliable default native opacity fade
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={activeOpacity} // 3. Let React Native handle the fade natively
      className={cn(
        buttonVariants({ variant, size }),
        isDisabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size={28} />
      ) : (
        <Text className={cn(textVariants({ variant, size }), textClassName)}>
          {label || children}
        </Text>
      )}
    </TouchableOpacity>
  );
}
