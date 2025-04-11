'use server'
import { signIn } from "@/auth";
export const LogInCredentials = async (formdata: FormData) => {
    try {
        const email = formdata.get('email');
        const password = formdata.get('password');

        let response = await signIn('credentials', {
            email,
            password,
            redirect: false
        });

        if (response?.error) {
            throw new Error(response.error);
        }
        
        return { status: 'success', error: '' };
    } catch (error) {
        return { status: 'failed', error: (error as Error).message };
    }
};
