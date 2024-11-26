import connectMongo from "@db/connectDb";
import userModel, { IUser } from "@db/models/user.model";

export async function createUser(user: IUser) {
  try {
    await connectMongo();
    const newUser: IUser = await userModel.create(user);

    return { data: newUser };
  } catch (err: any) {
    console.error("create_user_error: ", err?.message);
    return { error: err };
  }
}
