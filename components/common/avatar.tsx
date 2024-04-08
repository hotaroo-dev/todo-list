import Image from "next/image";
import { cn } from "@/libs/cn";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<typeof Image>, "src" | "alt"> {
  src?: string;
  alt?: string;
  fallback?: string;
}

const Avatar: React.FC<Props> = (props) => {
  const rounded = "aspect-square w-10 rounded-full";
  return (
    <>
      {props.src ? (
        <Image src={props.src} alt={props.alt || ""} />
      ) : (
        <div
          className={cn(
            rounded,
            "bg-jade-900 font-semibold text-white flex-center",
          )}
        >
          {props.fallback}
        </div>
      )}
    </>
  );
};

export default Avatar;
