import dbConnect from "./mongooseConnect";
import AppUser from "../models/userModel";

export const getOrCreateUser = async ({ email }) => {
  await dbConnect();
  let user = await AppUser.findOne({ email });
  if (!user) {
    user = new AppUser({
      email,
    });
    await user.save();
  }
  return user;
};