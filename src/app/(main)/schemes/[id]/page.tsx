import { schemes } from "@/lib/constants";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Banner from "../../_components/Banner";
import ApplyButton from "./ApplyButton";
export default async function page({ params }: { params: { id: string } }) {
  const scheme = schemes.find((item) => item.id == parseInt(params?.id));

  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const userName = user?.email?.split("@")[0]?.toString()?.trim()?.slice(0, 14) || "Peter Tim";

  return (
    <main className="flex min-h-screen flex-col pb-20  bg-white">
      <Banner />
      <div className="flex justify-center items-center p-8 space-x-4">
        <Image src={scheme?.img!} alt={scheme?.title!} />
        <h1 className="text-3xl font-bold text-blue-500">{scheme?.title}</h1>
      </div>
      <div className="text-center p-4 mx-8  bg-green-400 text-white rounded-xl">
        <p>You Are Eligible</p>
      </div>
      <div className="p-6 ">
        <table className="w-full text-left border-collapse text-xs">
          <tbody>
            <tr className="border-b">
              <td className="py-2">Maximum Annual Sales Turnover</td>
              <td className="py-2">RM300,000</td>
              <td className="py-2">
                <div className="bg-green-200 w-6 h-6"></div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Minimum Company Age</td>
              <td className="py-2">1 year</td>
              <td className="py-2">
                <div className="bg-green-200 w-6 h-6"></div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Malaysian Ownership</td>
              <td className="py-2">100% </td>
              <td className="py-2">
                <div className="bg-green-200 w-6 h-6"></div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Who Can Apply</td>
              <td className="py-2">
                Malaysian Registered Companies.
                <br />
                Micro Enterprise
              </td>
              <td className="py-2">
                <div className="bg-green-200 w-6 h-6"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-6">
        <h2 className="text-2xl text-orange-400 font-semibold mb-4">Documents</h2>
        <div className="flex gap-x-2">
          <div className="bg-slate-400 rounded-lg p-6 text-wrap w-1/2">
            <p className="text-wrap w-6"> {userName}</p>
            <a
              href="/Sales_report.xlsx"
              download
              className="mt-4 px-4 py-2 text-white rounded inline-block bg-blue-600 text-xs"
            >
              SalesBook.xlsx
            </a>
          </div>
          <div className="bg-slate-400 rounded-lg p-6 text-wrap w-1/2">
            <p className="text-wrap w-6"> {userName}</p>
            <a
              href="/income-statement.xlsx"
              download
              className="mt-4 px-4 py-2 text-white rounded inline-block bg-blue-600 text-xs"
            >
              IncomeStat.xlsx
            </a>
          </div>
        </div>
      </div>
      <ApplyButton />
    </main>
  );
}
