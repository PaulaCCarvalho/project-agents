import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { db } from '../../connection.ts';
import { z } from 'zod/v4';
import { questions } from '../../schema/questions.ts';
import { desc, eq } from 'drizzle-orm';

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms/:roomId/questions', {
    schema: {
        params: z.object({
            roomId: z.string()
        })
    }
  }, async (request) => {
    const {roomId} = request.params

    const result = await db
        .select({
            id: questions.id,
            question: questions.question,
            answer: questions.awswer,
            createdAt: questions.createdAt
        })
        .from(questions)
        .where(eq(questions.roomId, roomId))
        .orderBy(desc(questions.createdAt))

    return result;
  });
};
