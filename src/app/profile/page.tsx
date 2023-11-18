"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";

export default function ProfilePage() {
    const router = useRouter();
    const Logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout Success");
            router.push("/login");
            
        } catch (error: any) {
            console.log(error);
            toast.error(error.message);   
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>Profile</h1>
            <h3>profile Page</h3>
            <button onClick={Logout} className="p-2 bg-orange-500 rounded m-4">
                logout
            </button>
        </div>
    )
}