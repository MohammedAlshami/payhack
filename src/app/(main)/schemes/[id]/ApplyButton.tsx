"use client";

import { Button } from "@/lib/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ApplyButton() {
  const router = useRouter();
  return (
    <div className="mx-6 my-8 flex">
      <Button
        onClick={() => {
          toast.success("Successfully Applied");
          router.push("/");
        }}
        className="w-full"
      >
        Apply
      </Button>
    </div>
  );
}
