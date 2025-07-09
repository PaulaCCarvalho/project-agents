import { Navigate, useParams } from "react-router-dom"

type RoomParams = {
    roomId: string
}
export const Room = () => {
    const { roomId } = useParams<RoomParams>()

    if (!roomId) {
        return <Navigate to="/" replace/>
    }

    return <div>Room Details</div>
}