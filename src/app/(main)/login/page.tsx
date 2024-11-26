"use client";

import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Label } from "@/lib/components/ui/label";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import loginUi from "/public/images/loginbg.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setError("");
    setIsLoading(true);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data?.error) {
      setError(data.error);
      setIsLoading(false);
    } else if (data?.user) {
      router.push("/");
      router.refresh();
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Image src={loginUi} className="ml-auto" alt={""} />
      <div className="w-full rounded-lg flex flex-col  space-y-4 px-6">
        <h2 className="text-4xl font-bold ">Sign In</h2>
        <p className="text-xs text-gray-500  text-justify">
          If you don&apos;t have an account yet, please{" "}
          <Link className="underline text-blue-400" href="/signup">
            register
          </Link>
        </p>
      </div>
      <div className="px-6  my-6 ">
        <form className="bg-white rounded-lg p-6 space-y-6">
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="">
            <Label htmlFor="password">Password:</Label>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <Button
              className="w-full"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              disabled={isLoading}
            >
              {isLoading && <Loader2 size={16} className="animate-spin" />}
              Sign In
            </Button>
          </div>
          {error && <p className="mb-6 text-red-500">{error}</p>}
        </form>
      </div>
    </main>
  );
}
