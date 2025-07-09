import { fastifyCors } from '@fastify/cors';
import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { env } from "./env.ts";
import { getRoomRoute } from './db/http/routes/get-room.ts';
import { createRoomRoute } from './db/http/routes/create-room.ts';
import { getRoomQuestionsRoute } from './db/http/routes/get-room-questions.ts';
import { createQuestionsRoute } from './db/http/routes/create-questions.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
    return 'OK'
})

app.register(getRoomRoute)
app.register(createRoomRoute)
app.register(getRoomQuestionsRoute)
app.register(createQuestionsRoute)

app.listen({ port: env.PORT })
