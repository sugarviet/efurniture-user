import { useMutation } from "@tanstack/react-query";
import { signUp } from "./callers";

export const useSignUp = () => {
    return useMutation(signUp, {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
        }
    })
}