"use client";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Label } from "@/lib/components/ui/label";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import loginUi from "/public/images/loginbg.svg";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [tin, setTin] = useState("");
  const [passport, setPassport] = useState("");
  const [gender, setGender] = useState("male");
  const [msic, setMsic] = useState("");
  const [tax, setTax] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (
      !email ||
      !password ||
      !name ||
      !tin ||
      !passport ||
      !gender ||
      !msic ||
      !tax ||
      !country ||
      !state ||
      !city ||
      !address
    ) {
      toast.error("All the fields are required!");
      return;
    }
    setError("");
    setIsLoading(true);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        tin,
        passport,
        gender,
        msic,
        tax,
        country,
        state,
        city,
        address,
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
    <main className="pb-16">
      <Image src={loginUi} className="ml-auto" alt={""} />
      <div className="w-full rounded-lg flex flex-col  space-y-4 px-6">
        <h2 className="text-4xl font-bold ">Sign Up</h2>
        <p className="text-xs text-gray-500  text-justify">
          Please enter your details to register. This information will be displayed on your invoice
        </p>
      </div>
      <div className="px-6  my-6 ">
        <form className="space-y-4">
          <div className="bg-white rounded-lg p-6 space-y-6">
            <h3 className="font-semibold text-primary">Account Information</h3>
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
            {error && <p className="mb-6 text-red-500">{error}</p>}

            <p className="text-xs text-gray-500  text-justify">
              If you already have an account, please{" "}
              <Link className="underline text-blue-400" href="/login">
                login
              </Link>
            </p>
          </div>

          {/* Vendor section ------------------ */}
          <div className="bg-white rounded-lg p-6 space-y-6">
            <h3 className="font-semibold text-primary">Vendor Details</h3>
            <div>
              <Label htmlFor="email">Name:</Label>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                required
              />
            </div>
            <div className="">
              <Label htmlFor="password">Gender:</Label>
              <select
                className="block w-full border-[0.05rem] p-2 bg-white"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="">
              <Label htmlFor="password">Tin Number:</Label>
              <Input
                onChange={(e) => {
                  setTin(e.target.value);
                }}
                name="tin"
                required
              />
            </div>
            <div className="">
              <Label htmlFor="password">Passport Number:</Label>
              <Input
                onChange={(e) => {
                  setPassport(e.target.value);
                }}
                name="passport"
                required
              />
            </div>
            <div className="">
              <Label htmlFor="password">MSIC Number:</Label>
              <Input
                onChange={(e) => {
                  setMsic(e.target.value);
                }}
                name="msic"
                required
              />
            </div>

            <div className="">
              <Label htmlFor="password">Tax Registration No:</Label>
              <Input
                onChange={(e) => {
                  setTax(e.target.value);
                }}
                name="passport"
                required
              />
            </div>
          </div>
          {/* Vendor address ------------- */}
          <div className="bg-white rounded-lg p-6 space-y-6">
            <h3 className="font-semibold text-primary">Vendor Address</h3>
            <div>
              <Label htmlFor="email">Country:</Label>
              <Input
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                name="country"
                required
              />
            </div>
            <div className="">
              <Label htmlFor="password">State:</Label>
              <Input
                onChange={(e) => {
                  setState(e.target.value);
                }}
                name="state"
                required
              />
            </div>

            <div className="">
              <Label htmlFor="password">City:</Label>
              <Input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                name="city"
                required
              />
            </div>
            <div className="">
              <Label htmlFor="password">Address:</Label>
              <Input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                name="address"
                required
              />
            </div>
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
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
