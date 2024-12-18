import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { IntlProvider } from "react-intl";

const ProviderWithDefaults: FunctionComponent = ({ children }: PropsWithChildren) => (
  <IntlProvider locale={"en"}>
    {children}
  </IntlProvider>
);

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: ProviderWithDefaults, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
