import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { db } from '../../connection.ts';
import { rooms } from '../../schema/rooms.ts';

export const getRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    const results = await db
    .select({
        id: rooms.id,
        name: rooms.name,
        
    })
    .from(rooms)
    .orderBy(rooms.createdAt);
    return results;
  });
};
