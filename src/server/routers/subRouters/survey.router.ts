import { inferRouterOutputs } from "@trpc/server";

import { surveySchema } from "@/data/valids/survey";

import { userProcedure } from "../../procedures";
import { router } from "../../trpc";

export const surveyRouter = router({
  create: userProcedure.input(surveySchema).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.$transaction([
      ctx.prisma.survey.create({
        data: {
          considerTherapy: input.considerTherapy,
          therapistExpectations: input.therapistExpectations,
          physicalHealth: input.physicalHealth,
          eatingHabits: input.eatingHabits,
          emotionalState: input.emotionalState,
          interestOrPleasure: input.interestOrPleasure,
          movingOrSpeaking: input.movingOrSpeaking,
          feelingDown: input.feelingDown,
          sleepingTrouble: input.sleepingTrouble,
          feelingTired: input.feelingTired,
          appetite: input.appetite,
          feelingBad: input.feelingBad,
          troubleConcentrating: input.troubleConcentrating,
          hurtingYourself: input.hurtingYourself,
          impactOnLife: input.impactOnLife,
          intimacyProblems: input.intimacyProblems,
          lastThoughtsOfSuicide: input.lastThoughtsOfSuicide,
          specificPlansForSuicide: input.specificPlansForSuicide,
          receivedTherapy: input.receivedTherapy,
          notSeekingTherapyReasons: input.notSeekingTherapyReasons,
          participatedOnline: input.participatedOnline,
          primaryReason: input.primaryReason,
          comfortWithTechnology: input.comfortWithTechnology,
          user: {
            connect: { id: input.user.id },
          },
        },
      }),
      ctx.prisma.user.update({
        where: {
          id: input.user.id,
        },
        data: {
          gender: input.gender,
          occupation: input.occupation,
          education: input.education,
          age: input.age,
          relationship: input.relationship,
          preferredCommunicationMethod: input.preferredCommunicationMethod,

          hasSurvey: true,
        },
      }),
    ]);
  }),
});

type SurveyRouterOutput = inferRouterOutputs<typeof surveyRouter>;
export type CreateProductResponse = SurveyRouterOutput["create"];
