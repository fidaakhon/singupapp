export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>Profile</h1>
            <h3>profile Page <span className="p-2 bg-orange-500 rounded ml-2">{params.id}</span> </h3>
        </div>
    )
}