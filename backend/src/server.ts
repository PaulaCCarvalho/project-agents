import { fastify } from "fastify";
import { fastifyCors } from '@fastify/cors';
import { fastifyMultipart } from '@fastify/multipart';
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { env } from "./env.ts";
import { getRoomRoute } from './db/http/routes/get-room.ts';
import { createRoomRoute } from './db/http/routes/create-room.ts';
import { getRoomQuestionsRoute } from './db/http/routes/get-room-questions.ts';
import { createQuestionRoute } from './db/http/routes/create-question.ts';
import { uploadAudioRoute } from './db/http/routes/upload-audio.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
})

app.register(fastifyMultipart)
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
    return 'OK'
})

app.register(getRoomRoute)
app.register(createRoomRoute)
app.register(getRoomQuestionsRoute)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({ port: env.PORT })
