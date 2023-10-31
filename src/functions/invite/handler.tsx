import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Resend } from "resend";
import * as React from "react";
import schema from "./schema";
import InviteEmail from "../../../emails/InviteEmail";

const invite: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event,
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { toEmail, tripName, inviteID, inviter } = event.body;

  await resend.sendEmail({
    from: "rendezvous-dev@speclang.dev",
    to: toEmail,
    subject: `You've been invited to ${tripName}`,
    react: (
      <InviteEmail inviteID={inviteID} inviter={inviter} tripName={tripName} />
    ),
  });

  return formatJSONResponse({
    message: `Email sent!`,
    event,
  });
};

export const main = middyfy(invite);
