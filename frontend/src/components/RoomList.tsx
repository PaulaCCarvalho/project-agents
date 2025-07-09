import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRooms } from '@/http/types/useRooms'
import { dayjs } from '@/lib/dayjs'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export const RoomList = () => {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>

        <CardDescription>
          Acesso rápido para as salas criadas recentemente.
        </CardDescription>

        <CardContent className="my-4 flex flex-col gap-3 p-0">
          {isLoading && (
            <p className="flex justify-center p-2 text-muted-foreground text-sm">
              Carregando salas...
            </p>
          )}

          {data?.map((room) => {
            return (
              <Link
                className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
                key={room.id}
                to={`/room/${room.id}`}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{room.name}</h3>

                  <div className="flex items-center gap-2">
                    <Badge className="text-sm" variant="secondary">
                      {dayjs(room.createdAt).toNow()}
                    </Badge>
                    <Badge className="text-sm" variant="secondary">
                      {room.questionsCount} pergunta(s)
                    </Badge>
                  </div>
                </div>

                <span className="flex items-center gap-2 text-sm">
                  Entrar
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            )
          })}
        </CardContent>
      </CardHeader>
    </Card>
  )
}
