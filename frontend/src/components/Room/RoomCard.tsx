import { useRoom } from "@/contexts/RoomContext";
import IRoom from "@/interfaces/IRoom";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import Avatar from "react-avatar";
import { ImExit } from "react-icons/im";

function RoomCard({ room, users }: { room: IRoom; users: string[] }) {
  const { roomId } = useParams();
  const { myRooms, setMyRooms } = useRoom();
  return (
    <Link
      href={`chat/${room.id}`}
      className={`flex group relative gap-3 items-center p-2 flex-col sm:flex-row ${
        room.id === roomId ? "bg-gray-100" : ""
      }`}
    >
      <div>
        {room.id === "1" ? (
          <Image
            src="/images/globe.jpg"
            height={50}
            width={50}
            style={{
              objectFit: "cover",
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
            alt="profile"
          />
        ) : (
          // <Avatar
          //   name={room.title}
          //   round={true}
          //   size="50"
          //   className="text-sm"
          // />
          <Image
            src="/images/globe.jpg"
            height={50}
            width={50}
            style={{
              objectFit: "cover",
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
            alt="profile"
          />
        )}
      </div>
      <div className="hidden sm:block">
        <p className="font-medium line-clamp-1">{room.title}</p>
        <p className="text-sm text-slate-400">
          <span className="text-xs">🟢</span> {users.length} online
        </p>
      </div>
      {room.id !== "1" && (
        <span
          className="absolute items-center justify-center hidden p-2 bg-red-500 rounded-full right-3 group-hover:flex hover:bg-red-700"
          onClick={() => {
            setMyRooms(myRooms.filter((r) => r.id != room.id));
          }}
        >
          <ImExit className="text-white" />
        </span>
      )}
    </Link>
  );
}

export default RoomCard;
