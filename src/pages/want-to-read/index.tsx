import PageContainer from "@/components/page-container";
import MainContainer from "@/components/main-container";
import { useIntl } from "react-intl";
import messages from "./messages";

export default function WantToRead() {
  const { formatMessage } = useIntl();

  return (
    <MainContainer>
      <PageContainer title={formatMessage(messages.wantToRead)}>
        Reading list
      </PageContainer>
    </MainContainer>
  );
}
