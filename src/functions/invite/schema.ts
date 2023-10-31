export default {
  type: "object",
  properties: {
    toEmail: { type: "string" },
    tripName: { type: "string" },
    inviter: { type: "string" },
    inviteID: { type: "string" },
  },
  required: ["toEmail", "tripName", "inviter", "inviteID"],
} as const;
