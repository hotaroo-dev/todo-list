import { cn } from "@/app/_utils/cn";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  radius?: "rounded" | "full";
  outlined?: number;
}

const BaseButton: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex h-10 items-center justify-center transition-all active:translate-y-0.5",
        props.radius === "full" ? "aspect-square rounded-full" : "rounded-md",
        props.outlined && "border border-stone-300",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
