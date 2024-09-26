import PageContainer from "@/components/page-container";
import MainContainer from "@/components/main-container";
import { useIntl } from "react-intl";
import messages from "./messages";

export default function FinishedReading() {
  const { formatMessage } = useIntl();

  return (
    <MainContainer>
      <PageContainer title={formatMessage(messages.finishedReading)}>
        Finished list
      </PageContainer>
    </MainContainer>
  );
}