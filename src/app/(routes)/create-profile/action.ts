'use server'
import { auth } from "@/auth";
import { Connect } from "@/db/Connection";
import { UserProfile } from "@/Types";
import ProfileSchema from "@/db/models/ProfileSchema";
import User from "@/db/models/UserSchema";


export const saveProfile = async (data: UserProfile) => {
  try {
    await Connect();

    const session = await auth();
    const email = session?.user?.email;

    if (!email) {
      return { success: false, error: "User not authenticated" };
    }

    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, error: "User not found" };
    }

    const id = user._id;
    let firstName = data.lastName.trim();
    let lastName = data.firstName.trim();

    let username: string = "";
    let isUnique = false;
    const existing = await
      ProfileSchema.findOne({ id });

    if (existing) {
      await ProfileSchema.updateOne({ id }, { $set: { ...data } });
    } else {

      while (!isUnique) {
        const tempUsername =
          `${lastName}${firstName}${Math.floor(10000 + Math.random() * 90000)}`;
        const exists = await
          ProfileSchema.findOne({ username: tempUsername });
        if (!exists) {
          username = tempUsername;
          isUnique = true;
        }
      }
      await ProfileSchema.create({
        ...data,
        id,
        username,
      });
    }

    return { success: true, username };
  } catch (error) {
    console.log("Error saving profile:", error);
    return { success: false, error: "Internal Server Error" };
  }
};



export const fetchProfile = async () => {
  try {
    // Connect to the database
    await Connect();

    // Get the current session
    const session = await auth();
    const email = session?.user?.email;

    if (!email) {
      return { success: false, error: "User not authenticated" };
    }

    // Find the user from the email
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    const id = user._id;

    // Fetch the profile
    const profile = await ProfileSchema.findOne({ id }).lean();

    // If no profile found, return an error
    if (!profile) {
      return { success: false, error: "Profile not found" };
    }
    console.log(profile);
    const data = JSON.stringify(profile)
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching profile:", error);
    return { success: false, error: "Internal server error" };
  }
};

