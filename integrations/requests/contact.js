import { default as instance } from "~integrations/instances/basic";
import { SEND_MAIL } from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";
import { triggerCustomEvent } from "~lib/analytics";

export const sendEmail = async (setStatus, name, mail, subject, message) => {
  triggerCustomEvent("make-contact", {
    name,
    mail,
    subject,
    message,
  });
  return requestWithStatus(setStatus, instance.post, [
    SEND_MAIL,
    { name, mail, subject, message },
  ]);
};
