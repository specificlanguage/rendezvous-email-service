# Rendezvous Email Service

> sends emails for the [Rendezvous backend](https://github.com/specificlanguage/RendezvousBackend)

This basically just sends emails that are needed through the Rendezvous service. They are rendered and sent through this only. It's separated because rendering templates in React does take a long time, so it's just separated out like this.

Only thing that needs to be done is to fill out the .env, with IS_DEV and a FRONTEND_URL parameter.

Once that's done, you can deploy to [serverless](https://www.serverless.com/) via the `sls deploy` command.
