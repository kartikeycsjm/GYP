'use server'

import { Connect } from "@/db/Connection";
import User from "@/db/models/UserSchema";
import bcrypt from 'bcryptjs'
import { transporter } from "@/emailConfig";
export const SignUp = async (formData: FormData) => {
    const name = formData.get('firstName') + ' ' + formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
        await Connect()
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('You are already registered please login')
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            email,
            name,
            password: hashedpassword,
            provider: 'CREDENTIALS'
        })
        await transporter.sendMail({
            from: 'kartikeymishracsjm@gmail.com',
            to: email,
            subject: 'Verify your email on GYP',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                  <a href="${process.env.WEBSITE_DOMAIN}/verify/${newUser._id}">
                    Verify Your Email
                  </a>
                </div>
              `,
            text: `You are welcome on Get Your Profile`,
        });
        return {
            status: 'success',
            message: 'You are registered, now check your Email to verify then login'
        }
    } catch (error) {
        return {
            status: 'failed',
            message: (error as Error).message
        }
    }
}