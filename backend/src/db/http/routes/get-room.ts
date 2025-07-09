import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { db } from '../../connection.ts';
import { rooms } from '../../schema/rooms.ts';
import { questions } from '../../schema/questions.ts';
import { count, eq } from 'drizzle-orm';

export const getRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    const results = await db
    .select({
        id: rooms.id,
        name: rooms.name,
        createdAt: rooms.createdAt,
        questionsCount: count(questions.id)
    })
    .from(rooms)
    .leftJoin(questions, eq(questions.roomId, rooms.id))
    .groupBy(rooms.id, rooms.name)
    .orderBy(rooms.createdAt);
    return results;
  });
};
