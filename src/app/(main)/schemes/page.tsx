import { schemes } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-orange-400 my-8">Schemes</h1>
      <div className="flex flex-col space-y-8">
        {schemes.map((scheme) => {
          return (
            <Link
              href={`/schemes/${scheme.id}`}
              className="flex p-4 shadow-lg bg-white space-x-6 rounded-md"
              key={scheme.title}
            >
              <Image width={70} src={scheme.img} alt={scheme.title} />
              <h4 className="text-xl font-semibold">{scheme.title}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
