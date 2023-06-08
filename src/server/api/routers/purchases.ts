import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, purchaseProcedure } from "~/server/api/trpc";

export const purchaseRouter = createTRPCRouter({
  purchase: purchaseProcedure
    .input(z.object({ amount: z.number() }))
    .mutation(async ({ input, ctx }) => {
      try {
        const stripe = ctx.stripe;
        const paymentIntent = await stripe.paymentIntents.create({
          amount: input.amount * 100,
          currency: "cad",
          payment_method_types: ["card"],
        });
        // console.log("Succes?", paymentIntent);
        if (paymentIntent.client_secret === null)
          throw new TRPCError({ code: "NOT_FOUND" });
        return paymentIntent.client_secret;
      } catch (error) {
        console.error("Stripe Error:", error);
        throw new Error("Failed to create payment intent");
      }
    }),
});
