import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../connection.ts';
import { schema } from '../../schema/index.ts';
import { generateEmbeddings, transcribeAudio } from '../../services/gemini.ts';

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
    app.post('/rooms/:roomId/audio',
        {
            schema: {
                params: z.object({
                    roomId: z.string()
                })
            }
        },
        async (request, reply) => {
            const { roomId } = request.params

            const audio = await request.file()

            if(!audio){
                throw new Error('Audio is required.')

            }

            const audioBuffer = await audio.toBuffer();

            const audioBase64 = audioBuffer.toString('base64');

            const transcription = await transcribeAudio(
                audioBase64,
                audio.mimetype
            )

            const embeddings = await generateEmbeddings(transcription)

            const result = await db.insert(schema.audioChunks).values({
                roomId,
                transcription,
                embeddings
            }).returning()

            const chunck = result[0]

            if (!chunck){
                throw new Error('Failed to create new audio chunk.')
            }

            return reply.status(201).send({
                chunkId: chunck.id
            })
            
        }
    );
};
 