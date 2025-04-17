'use server'

import { auth } from "@/auth";
import { Connect } from "@/db/Connection";
import ProfileSchema from "@/db/models/ProfileSchema";

export const fetchProfile = async (username:string) => {
    try {
      // Connect to the database
      console.log(username);
      
      await Connect();
      // Fetch the profile
      const profile = await ProfileSchema.findOne({ username }).lean();
  
      // If no profile found, return an error
      if (!profile) {
        return { success: false, error: "Profile not found" };
      }
      console.log(profile);
      const data=JSON.stringify(profile)
      return { success: true,data};
    } catch (error) {
      console.error("Error fetching profile:", error);
      return { success: false, error: "Internal server error" };
    }
  };