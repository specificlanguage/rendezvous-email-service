import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface InviteEmailProps {
  inviter: string;
  tripName: string;
  inviteID: string;
}

export default function InviteEmail(props: InviteEmailProps) {
  const { inviter = "Hello", tripName = "TestName", inviteID = "123" } = props;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2B.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-normal">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join <strong>{tripName}</strong> trip on{" "}
              <strong>Rendezvous</strong>
            </Heading>
            <Text>
              You've been invited to a trip by <strong>{inviter}</strong>!
              <br />
              Click below to join <strong>{tripName}</strong>!
            </Text>
            <Section className="flex justify-center">
              <Button
                href={
                  process.env.IS_DEV
                    ? `http://localhost:5173/invite/${inviteID}`
                    : `${process.env.FRONTEND_URL}/invite/${inviteID}`
                }
                className={
                  "bg-purple-500 rounded text-white text-[12px] px-4 py-2 text-lg font-semibold no-underline text-center"
                }
              >
                Join trip
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
