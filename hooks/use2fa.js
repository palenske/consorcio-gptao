import { useState } from "react";
import { contactTwoFactor, verifyTwoFactor } from "~integrations/requests/2fa";
import { hasError } from "~lib/requests";
import { showApiError } from "~lib/toast";
import { use2fa as use2faLib } from "@labsmaisdigital/dsmaisevo";

const use2fa = ({
  onEventSuccess = () => {},
  setRequestStatus = () => {},
  timeDuration = 180,
}) => {
  const [info, setInfo] = useState();
  const isLocal = process.env.NODE_ENV === "development";

  const requestCode = async () => {
    const res = await contactTwoFactor(setRequestStatus, {
      document: info?.document,
      phone: info?.phone,
      email: info?.email,
    });
    if (hasError(res)) {
      showApiError(res);
    }
  };

  const verifyCode = async code => {
    const res = await verifyTwoFactor(setRequestStatus, {
      document: info?.document,
      code,
    });
    if (hasError(res)) {
      showApiError(res);
      return;
    }
    onEventSuccess(res.data);
    closeModal();
  };

  const { TwoFactorModal, openModal, closeModal } = use2faLib({
    requestCode,
    verifyCode,
    timeDuration,
  });

  const startAuth = async ({ document, email, phone }) => {
    if (isLocal) return onEventSuccess();

    const info = { email, phone };
    if (!email) delete info.email;

    setInfo({ document, email, phone });
    openModal(info);
  };

  return {
    TwoFactorModal,
    startAuth,
  };
};

export default use2fa;
