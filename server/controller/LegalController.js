import { policyMail } from "../email/allEmail.js";
import Legal from "../models/Legal.js";

export const addOrUpdateLegal = async (req, res) => {
  try {
    const { privacyPolicy, terms, disclaimer, cancelationPolicy } = req.body;

    let legal = await Legal.findOne();

    if (!legal) {
      legal = new Legal({
        privacyPolicy,
        terms,
        disclaimer,
        cancelationPolicy,
      });
    } else {
      legal.privacyPolicy = privacyPolicy || legal.privacyPolicy;
      legal.terms = terms || legal.terms;
      legal.disclaimer = disclaimer || legal.disclaimer;
      legal.cancelationPolicy = cancelationPolicy || legal.cancelationPolicy;
    }
    let condition;
    if (privacyPolicy) {
      condition = "Privacy Policy";
    } else if (terms) {
      condition = "Terms And Conditions";
    } else if (disclaimer) {
      condition = "Disclaimers";
    } else if (cancelationPolicy) {
      condition = "Cancelation Policy";
    }

    await legal.save();
    await policyMail({ legalPolicy: condition });

    const message = legal.isNew
      ? "Legal document created successfully"
      : "Legal document updated successfully";

    return res.status(200).json({ message });
  } catch (error) {
    console.error("Error in addOrUpdateLegal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getLegal = async (req, res) => {
  try {
    const legal = await Legal.findOne();

    if (!legal) {
      return res.status(404).json({ message: "Legal document not found" });
    }

    return res.status(200).json(legal);
  } catch (error) {
    console.error("Error in getLegal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
