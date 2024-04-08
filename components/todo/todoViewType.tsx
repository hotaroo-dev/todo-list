"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/libs/cn";
import { mergeQueryString } from "@/libs/queryString";
import BaseButton from "../common/baseButton";
import { IconList } from "../icons/IconList";
import { IconGrid } from "../icons/IconGrid";

const TodoViewType: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const viewType = searchParams.get("viewType") ?? "grid";
  const createQueryString = useCallback(
    (name: string, value: string) =>
      mergeQueryString(searchParams, name, value),
    [searchParams],
  );

  return (
    <div className="relative ml-auto hidden sm:block">
      <BaseButton
        outlined={+true}
        className={cn(
          "absolute right-0 rounded-lg px-2 active:translate-y-0",
          viewType === "list" && "z-10 bg-jade-900 text-white",
        )}
        onClick={() =>
          router.push(pathname + "?" + createQueryString("viewType", "list"))
        }
      >
        <IconList className="text-xl" />
      </BaseButton>
      <BaseButton
        outlined={+true}
        className={cn(
          "absolute right-8 rounded-lg px-2 active:translate-y-0",
          viewType === "grid" && "z-10 bg-jade-900 text-white",
        )}
        onClick={() =>
          router.push(pathname + "?" + createQueryString("viewType", "grid"))
        }
      >
        <IconGrid className="text-xl" />
      </BaseButton>
    </div>
  );
};

export default TodoViewType;
