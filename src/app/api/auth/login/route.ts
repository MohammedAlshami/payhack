import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      throw new Error(error.message);
    }

    // // check if mongodb user exists. if not then create one
    // const response = await getUserBySupabaseId(data?.user?.id);
    // if (!response?.data) {
    //   console.error("creating_mongo_user_after_signing_in");

    //   const user: IUserCreate = {
    //     name: data.user?.email?.split("@")[0] || "user",
    //     email: data.user?.email!,
    //     supabaseUserId: data.user.id,
    //   };
    //   const createUserResponse = await createUser(user);
    //   if (createUserResponse?.data) {
    //     console.error("mongo_user_created_after_signing_in");
    //   }
    // }

    revalidatePath("/", "layout");

    return Response.json({ user: data?.user });
  } catch (err: any) {
    console.error(`login_api_error: `, err?.message);
    return Response.json({ error: err?.message }, { status: 500 });
  }
}
