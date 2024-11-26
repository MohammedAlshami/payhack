// import { createUser } from "@/lib/db/services/users.service";
import { createUser } from "@/lib/db/services/user.service";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const {
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
    } = await req.json();
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (data?.user) {
      const user = {
        name: name,
        email: data.user.email!,
        supabaseUserId: data.user.id,
      };
      const response = await createUser({
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
        supabaseId: data?.user.id,
        email,
      });
      if (response?.error) {
        throw new Error("Unable to create mongo user!");
      }
    } else {
      throw new Error("Unable to create supabase user!");
    }

    revalidatePath("/", "layout");

    return Response.json({ user: data?.user });
  } catch (err: any) {
    console.error(`signup_api_error: `, err?.message);
    return Response.json({ error: err?.message }, { status: 500 });
  }
}
