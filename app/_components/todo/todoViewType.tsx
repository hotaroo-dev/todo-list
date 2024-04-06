"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BaseButton from "../common/baseButton";
import { IconList } from "../icons/IconList";
import { IconGrid } from "../icons/IconGrid";
import { cn } from "@/app/_utils/cn";

const TodoViewType: React.FC = () => {
  const searchParams = useSearchParams();
  const viewType = searchParams.get("viewType") ?? "grid";

  return (
    <div className="relative ml-auto hidden sm:block">
      <BaseButton
        outlined={+true}
        className={cn(
          "absolute right-0 rounded-lg active:translate-y-0",
          viewType === "list" && "z-10 bg-jade-900 text-white",
        )}
      >
        <Link
          href={{ pathname: "/", query: { viewType: "list" } }}
          className="h-10 px-2 flex-center"
        >
          <IconList className="text-xl" />
        </Link>
      </BaseButton>
      <BaseButton
        outlined={+true}
        className={cn(
          "absolute right-8 rounded-lg active:translate-y-0",
          viewType === "grid" && "z-10 bg-jade-900 text-white",
        )}
      >
        <Link
          href={{ pathname: "/", query: { viewType: "grid" } }}
          className="h-10 px-2 flex-center"
        >
          <IconGrid className="text-xl" />
        </Link>
      </BaseButton>
    </div>
  );
};

export default TodoViewType;
