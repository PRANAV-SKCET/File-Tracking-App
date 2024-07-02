import { useContext } from "react";
import { AuthContext } from "./context";
export default function RejectedApplications()
{
    const {officeMail} = useContext(AuthContext);
    return (
        <div>
            <h1>Rejected Applications</h1>
        </div>
    );
}