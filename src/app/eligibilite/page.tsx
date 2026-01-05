"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  ShieldAlert,
  Sparkles
} from "lucide-react";
 
import { trackEvent } from "@/lib/analytics";

type Question = {
  id: string;
  label: string;
  type: "radio" | "multi" | "contact";
  options?: string[];
};

type Memo = {
  intro: string;
  situation: string;
  issues: string;
  need: string;
  conclusion: string;
};

type Answers = Record<string, string | string[]>;
const loadingMessages = [
  "Analyse de votre situation",
  "Identification des enjeux clés",
  "Synthèse en cours",
  "Synthèse prête"
];
const countryDialCodes = [
  { code: "AF", dial: "+93" },
  { code: "AL", dial: "+355" },
  { code: "DZ", dial: "+213" },
  { code: "AS", dial: "+1-684" },
  { code: "AD", dial: "+376" },
  { code: "AO", dial: "+244" },
  { code: "AI", dial: "+1-264" },
  { code: "AQ", dial: "+672" },
  { code: "AG", dial: "+1-268" },
  { code: "AR", dial: "+54" },
  { code: "AM", dial: "+374" },
  { code: "AW", dial: "+297" },
  { code: "AU", dial: "+61" },
  { code: "AT", dial: "+43" },
  { code: "AZ", dial: "+994" },
  { code: "BS", dial: "+1-242" },
  { code: "BH", dial: "+973" },
  { code: "BD", dial: "+880" },
  { code: "BB", dial: "+1-246" },
  { code: "BY", dial: "+375" },
  { code: "BE", dial: "+32" },
  { code: "BZ", dial: "+501" },
  { code: "BJ", dial: "+229" },
  { code: "BM", dial: "+1-441" },
  { code: "BT", dial: "+975" },
  { code: "BO", dial: "+591" },
  { code: "BA", dial: "+387" },
  { code: "BW", dial: "+267" },
  { code: "BR", dial: "+55" },
  { code: "IO", dial: "+246" },
  { code: "VG", dial: "+1-284" },
  { code: "BN", dial: "+673" },
  { code: "BG", dial: "+359" },
  { code: "BF", dial: "+226" },
  { code: "BI", dial: "+257" },
  { code: "KH", dial: "+855" },
  { code: "CM", dial: "+237" },
  { code: "CA", dial: "+1" },
  { code: "CV", dial: "+238" },
  { code: "KY", dial: "+1-345" },
  { code: "CF", dial: "+236" },
  { code: "TD", dial: "+235" },
  { code: "CL", dial: "+56" },
  { code: "CN", dial: "+86" },
  { code: "CX", dial: "+61" },
  { code: "CC", dial: "+61" },
  { code: "CO", dial: "+57" },
  { code: "KM", dial: "+269" },
  { code: "CD", dial: "+243" },
  { code: "CG", dial: "+242" },
  { code: "CK", dial: "+682" },
  { code: "CR", dial: "+506" },
  { code: "CI", dial: "+225" },
  { code: "HR", dial: "+385" },
  { code: "CU", dial: "+53" },
  { code: "CW", dial: "+599" },
  { code: "CY", dial: "+357" },
  { code: "CZ", dial: "+420" },
  { code: "DK", dial: "+45" },
  { code: "DJ", dial: "+253" },
  { code: "DM", dial: "+1-767" },
  { code: "DO", dial: "+1-809" },
  { code: "DO", dial: "+1-829" },
  { code: "DO", dial: "+1-849" },
  { code: "EC", dial: "+593" },
  { code: "EG", dial: "+20" },
  { code: "SV", dial: "+503" },
  { code: "GQ", dial: "+240" },
  { code: "ER", dial: "+291" },
  { code: "EE", dial: "+372" },
  { code: "ET", dial: "+251" },
  { code: "FK", dial: "+500" },
  { code: "FO", dial: "+298" },
  { code: "FJ", dial: "+679" },
  { code: "FI", dial: "+358" },
  { code: "FR", dial: "+33" },
  { code: "GF", dial: "+594" },
  { code: "PF", dial: "+689" },
  { code: "GA", dial: "+241" },
  { code: "GM", dial: "+220" },
  { code: "GE", dial: "+995" },
  { code: "DE", dial: "+49" },
  { code: "GH", dial: "+233" },
  { code: "GI", dial: "+350" },
  { code: "GR", dial: "+30" },
  { code: "GL", dial: "+299" },
  { code: "GD", dial: "+1-473" },
  { code: "GP", dial: "+590" },
  { code: "GU", dial: "+1-671" },
  { code: "GT", dial: "+502" },
  { code: "GG", dial: "+44-1481" },
  { code: "GN", dial: "+224" },
  { code: "GW", dial: "+245" },
  { code: "GY", dial: "+592" },
  { code: "HT", dial: "+509" },
  { code: "HN", dial: "+504" },
  { code: "HK", dial: "+852" },
  { code: "HU", dial: "+36" },
  { code: "IS", dial: "+354" },
  { code: "IN", dial: "+91" },
  { code: "ID", dial: "+62" },
  { code: "IR", dial: "+98" },
  { code: "IQ", dial: "+964" },
  { code: "IE", dial: "+353" },
  { code: "IM", dial: "+44-1624" },
  { code: "IL", dial: "+972" },
  { code: "IT", dial: "+39" },
  { code: "JM", dial: "+1-876" },
  { code: "JP", dial: "+81" },
  { code: "JE", dial: "+44-1534" },
  { code: "JO", dial: "+962" },
  { code: "KZ", dial: "+7" },
  { code: "KE", dial: "+254" },
  { code: "KI", dial: "+686" },
  { code: "KP", dial: "+850" },
  { code: "KR", dial: "+82" },
  { code: "KW", dial: "+965" },
  { code: "KG", dial: "+996" },
  { code: "LA", dial: "+856" },
  { code: "LV", dial: "+371" },
  { code: "LB", dial: "+961" },
  { code: "LS", dial: "+266" },
  { code: "LR", dial: "+231" },
  { code: "LY", dial: "+218" },
  { code: "LI", dial: "+423" },
  { code: "LT", dial: "+370" },
  { code: "LU", dial: "+352" },
  { code: "MO", dial: "+853" },
  { code: "MK", dial: "+389" },
  { code: "MG", dial: "+261" },
  { code: "MW", dial: "+265" },
  { code: "MY", dial: "+60" },
  { code: "MV", dial: "+960" },
  { code: "ML", dial: "+223" },
  { code: "MT", dial: "+356" },
  { code: "MH", dial: "+692" },
  { code: "MQ", dial: "+596" },
  { code: "MR", dial: "+222" },
  { code: "MU", dial: "+230" },
  { code: "YT", dial: "+262" },
  { code: "MX", dial: "+52" },
  { code: "FM", dial: "+691" },
  { code: "MD", dial: "+373" },
  { code: "MC", dial: "+377" },
  { code: "MN", dial: "+976" },
  { code: "ME", dial: "+382" },
  { code: "MS", dial: "+1-664" },
  { code: "MA", dial: "+212" },
  { code: "MZ", dial: "+258" },
  { code: "MM", dial: "+95" },
  { code: "NA", dial: "+264" },
  { code: "NR", dial: "+674" },
  { code: "NP", dial: "+977" },
  { code: "NL", dial: "+31" },
  { code: "NC", dial: "+687" },
  { code: "NZ", dial: "+64" },
  { code: "NI", dial: "+505" },
  { code: "NE", dial: "+227" },
  { code: "NG", dial: "+234" },
  { code: "NU", dial: "+683" },
  { code: "NF", dial: "+672" },
  { code: "MP", dial: "+1-670" },
  { code: "NO", dial: "+47" },
  { code: "OM", dial: "+968" },
  { code: "PK", dial: "+92" },
  { code: "PW", dial: "+680" },
  { code: "PS", dial: "+970" },
  { code: "PA", dial: "+507" },
  { code: "PG", dial: "+675" },
  { code: "PY", dial: "+595" },
  { code: "PE", dial: "+51" },
  { code: "PH", dial: "+63" },
  { code: "PL", dial: "+48" },
  { code: "PT", dial: "+351" },
  { code: "PR", dial: "+1-787" },
  { code: "PR", dial: "+1-939" },
  { code: "QA", dial: "+974" },
  { code: "RE", dial: "+262" },
  { code: "RO", dial: "+40" },
  { code: "RU", dial: "+7" },
  { code: "RW", dial: "+250" },
  { code: "BL", dial: "+590" },
  { code: "SH", dial: "+290" },
  { code: "KN", dial: "+1-869" },
  { code: "LC", dial: "+1-758" },
  { code: "MF", dial: "+590" },
  { code: "PM", dial: "+508" },
  { code: "VC", dial: "+1-784" },
  { code: "WS", dial: "+685" },
  { code: "SM", dial: "+378" },
  { code: "ST", dial: "+239" },
  { code: "SA", dial: "+966" },
  { code: "SN", dial: "+221" },
  { code: "RS", dial: "+381" },
  { code: "SC", dial: "+248" },
  { code: "SL", dial: "+232" },
  { code: "SG", dial: "+65" },
  { code: "SX", dial: "+1-721" },
  { code: "SK", dial: "+421" },
  { code: "SI", dial: "+386" },
  { code: "SB", dial: "+677" },
  { code: "SO", dial: "+252" },
  { code: "ZA", dial: "+27" },
  { code: "SS", dial: "+211" },
  { code: "ES", dial: "+34" },
  { code: "LK", dial: "+94" },
  { code: "SD", dial: "+249" },
  { code: "SR", dial: "+597" },
  { code: "SJ", dial: "+47" },
  { code: "SE", dial: "+46" },
  { code: "CH", dial: "+41" },
  { code: "SY", dial: "+963" },
  { code: "TW", dial: "+886" },
  { code: "TJ", dial: "+992" },
  { code: "TZ", dial: "+255" },
  { code: "TH", dial: "+66" },
  { code: "TL", dial: "+670" },
  { code: "TG", dial: "+228" },
  { code: "TK", dial: "+690" },
  { code: "TO", dial: "+676" },
  { code: "TT", dial: "+1-868" },
  { code: "TN", dial: "+216" },
  { code: "TR", dial: "+90" },
  { code: "TM", dial: "+993" },
  { code: "TC", dial: "+1-649" },
  { code: "TV", dial: "+688" },
  { code: "UG", dial: "+256" },
  { code: "UA", dial: "+380" },
  { code: "AE", dial: "+971" },
  { code: "GB", dial: "+44" },
  { code: "US", dial: "+1" },
  { code: "UY", dial: "+598" },
  { code: "UZ", dial: "+998" },
  { code: "VU", dial: "+678" },
  { code: "VA", dial: "+379" },
  { code: "VE", dial: "+58" },
  { code: "VN", dial: "+84" },
  { code: "VI", dial: "+1-340" },
  { code: "WF", dial: "+681" },
  { code: "YE", dial: "+967" },
  { code: "ZM", dial: "+260" },
  { code: "ZW", dial: "+263" }
];

const getFlagEmoji = (countryCode: string) => {
  if (!countryCode || countryCode.length !== 2) return "";
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
};

const buildQuestions = (answers: Answers): Question[] => {
  const questions: Question[] = [
    {
      id: "intent",
      label: "Pourquoi êtes-vous ici aujourd’hui ?",
      type: "radio",
      options: [
        "Je prépare une expatriation aux Émirats",
        "Je souhaite investir aux Émirats",
        "Je prépare un retour en France",
        "Je souhaite être accompagné sur mes obligations ou déclarations fiscales",
        "Autre situation"
      ]
    }
  ];

  const intent = answers.intent as string | undefined;

  if (intent === "Je prépare une expatriation aux Émirats") {
    questions.push(
      {
        id: "familySituation",
        label: "Quelle est votre situation familiale ?",
        type: "radio",
        options: ["Célibataire", "Marié(e) / en couple", "Marié(e) / en couple avec enfants"]
      },
      {
        id: "immobilierFrance",
        label: "Détenez-vous des biens immobiliers en France ?",
        type: "radio",
        options: [
          "Non",
          "Oui, résidence principale",
          "Oui, investissement locatif",
          "Oui, les deux"
        ]
      },
      {
        id: "actionnaire",
        label: "Êtes-vous actionnaire ou associé de sociétés françaises à plus de 25 % ?",
        type: "radio",
        options: ["Oui", "Non"]
      },
      {
        id: "horizon",
        label: "À quel horizon envisagez-vous votre expatriation ?",
        type: "radio",
        options: ["Moins de 3 mois", "Entre 3 et 6 mois", "Entre 6 et 12 mois", "Plus de 12 mois"]
      }
    );
  }

  if (intent === "Je souhaite investir aux Émirats") {
    questions.push(
      {
        id: "investMode",
        label: "Souhaitez-vous investir :",
        type: "radio",
        options: [
          "À titre personnel",
          "Via une société française (holding ou société existante)",
          "Je ne sais pas encore"
        ]
      },
      {
        id: "investType",
        label: "Quel type d’investissement envisagez-vous principalement ?",
        type: "radio",
        options: ["Immobilier", "Activité ou société", "Les deux"]
      }
    );
  }

  if (intent === "Je prépare un retour en France") {
    questions.push(
      {
        id: "returnHorizon",
        label: "À quel horizon envisagez-vous un retour en France ?",
        type: "radio",
        options: ["Moins de 6 mois", "Entre 6 et 12 mois", "Plus de 12 mois"]
      },
      {
        id: "currentStatus",
        label: "Quelle est votre situation actuelle ?",
        type: "radio",
        options: [
          "Résident fiscal aux Émirats",
          "Résident fiscal hors France et hors Émirats",
          "Situation incertaine"
        ]
      },
      {
        id: "retourElements",
        label: "Conservez-vous ou envisagez-vous :",
        type: "radio",
        options: [
          "Une activité professionnelle",
          "Un patrimoine immobilier",
          "Une société",
          "Plusieurs de ces éléments"
        ]
      }
    );
  }

  if (intent === "Je souhaite être accompagné sur mes obligations ou déclarations fiscales") {
    questions.push(
      {
        id: "obligationCountry",
        label: "Pour quel pays souhaitez-vous être accompagné ?",
        type: "radio",
        options: ["France", "Émirats arabes unis", "Les deux"]
      },
      {
        id: "obligationType",
        label: "Quel type de déclaration souhaitez-vous sécuriser ?",
        type: "radio",
        options: [
          "Déclaration de revenus",
          "Revenus immobiliers",
          "Société ou dividendes",
          "Plusieurs sujets"
        ]
      }
    );
  }

  if (intent === "Autre situation") {
    questions.push({
      id: "otherSituation",
      label: "Quelle situation se rapproche le plus de la vôtre ?",
      type: "radio",
      options: [
        "Situation fiscale incertaine",
        "Plusieurs pays concernés",
        "Besoin d’un avis global",
        "Autre cas spécifique"
      ]
    });
  }

  questions.push({
    id: "contact",
    label: "Vos coordonnées",
    type: "contact"
  });

  return questions;
};

const buildMemo = (answers: Answers): Memo => {
  const intent = answers.intent as string | undefined;
  const details: string[] = [];
  const impacts: string[] = [];
  const asText = (value?: string | string[]) =>
    Array.isArray(value) ? value.join(", ") : value ?? "";

  if (answers.familySituation) {
    details.push(`une situation familiale ${asText(answers.familySituation).toLowerCase()}`);
    if (answers.familySituation === "Marié(e) / en couple avec enfants") {
      impacts.push(
        "La présence d’enfants implique une lecture approfondie du foyer fiscal et des attaches familiales. Cela exige une cohérence stricte entre la situation personnelle, la résidence déclarée et la réalité de vie."
      );
    } else if (answers.familySituation === "Marié(e) / en couple") {
      impacts.push(
        "La situation de couple nécessite d’aligner les critères de résidence fiscale et d’éviter tout décalage entre la résidence déclarée et la réalité du foyer."
      );
    }
  }
  if (answers.immobilierFrance && answers.immobilierFrance !== "Non") {
    details.push(
      `la détention d’un patrimoine immobilier en France (${asText(
        answers.immobilierFrance
      ).toLowerCase()})`
    );
    impacts.push(
      "La détention d’actifs immobiliers en France crée des obligations fiscales continues (revenus, déclarations, conventions) et peut constituer un point de rattachement en matière de résidence. Une gestion non structurée peut exposer à une taxation française maintenue sur ces revenus."
    );
  }
  if (answers.actionnaire === "Oui") {
    details.push("une participation significative dans des sociétés françaises");
    impacts.push(
      "La détention de titres significatifs en France peut déclencher des enjeux d’Exit Tax avant le départ. C’est un point structurant à analyser en amont afin d’éviter des conséquences fiscales non anticipées."
    );
    if (answers.horizon === "Moins de 3 mois") {
      impacts.push(
        "Avec un horizon inférieur à trois mois, la fenêtre de sécurisation est courte. Les démarches liées à la fiscalité de sortie doivent en principe être cadrées en amont (généralement au plus tard 90 jours avant le départ), ce qui implique un point de vigilance urgent."
      );
    }
  }
  if (answers.horizon) {
    details.push(`un horizon d’expatriation ${asText(answers.horizon).toLowerCase()}`);
    impacts.push(
      "L’horizon de départ conditionne la séquence des démarches : certaines formalités doivent être réalisées avant le changement de résidence pour sécuriser la position fiscale."
    );
    if (answers.horizon === "Moins de 3 mois" && answers.actionnaire !== "Oui") {
      impacts.push(
        "Un départ inférieur à trois mois impose un cadrage immédiat des points clés (résidence fiscale, flux et obligations déclaratives) afin d’éviter des décisions prises trop tardivement."
      );
    }
  }
  if (answers.returnHorizon) {
    details.push(`un horizon de retour ${asText(answers.returnHorizon).toLowerCase()}`);
    impacts.push(
      "Le retour en France doit être préparé en amont afin d’anticiper la requalification de la résidence fiscale et la réintégration des revenus dans le cadre français."
    );
  }
  if (answers.currentStatus) {
    details.push(
      `une situation fiscale actuelle définie comme ${asText(
        answers.currentStatus
      ).toLowerCase()}`
    );
    if (answers.currentStatus === "Situation incertaine") {
      impacts.push(
        "Une situation fiscale incertaine nécessite une clarification rapide, car l’absence de cadrage expose à des risques de redressement ou de double imposition."
      );
    }
  }
  if (answers.retourElements) {
    details.push(
      `la présence d’éléments structurants (${asText(answers.retourElements).toLowerCase()})`
    );
    impacts.push(
      "Le maintien d’éléments structurants en France implique de sécuriser la cohérence entre l’activité, le patrimoine et la résidence fiscale."
    );
  }
  if (answers.investMode) {
    details.push(`un mode d’investissement ${asText(answers.investMode).toLowerCase()}`);
    if (asText(answers.investMode).includes("société")) {
      impacts.push(
        "Un investissement via une structure existante implique de vérifier la conformité des flux (dividendes, management fees, remontées) et l’alignement avec la convention fiscale applicable."
      );
    }
  }
  if (answers.investType) {
    details.push(`un investissement orienté ${asText(answers.investType).toLowerCase()}`);
    if (answers.investType === "Immobilier") {
      impacts.push(
        "L’investissement immobilier aux Émirats nécessite de clarifier le régime de détention (personnel vs structure) et les impacts fiscaux de long terme, notamment en cas de retour en France."
      );
    }
  }
  if (answers.obligationCountry) {
    details.push(
      `des obligations déclaratives sur ${asText(answers.obligationCountry).toLowerCase()}`
    );
    impacts.push(
      "Les obligations déclaratives multi-juridictionnelles nécessitent une coordination rigoureuse afin d’assurer la cohérence des déclarations et d’éviter les incohérences fiscales."
    );
    if (answers.obligationCountry === "Les deux") {
      impacts.push(
        "La coexistence d’obligations en France et aux Émirats impose une lecture consolidée des revenus et des actifs afin d’éviter tout risque de double imposition."
      );
    }
  }
  if (answers.obligationType) {
    details.push(
      `des déclarations portant sur ${asText(answers.obligationType).toLowerCase()}`
    );
  }
  if (answers.otherSituation) {
    details.push(`une situation décrite comme ${asText(answers.otherSituation).toLowerCase()}`);
  }

  const detailSentence = details.length
    ? `Vous nous avez indiqué ${details.join(", ").replace(/, ([^,]*)$/, " et $1")}.`
    : "Vous nous avez indiqué une situation nécessitant un cadrage préalable avant toute décision.";

  const intro =
    "Ce mémoire de cadrage fiscal constitue un premier niveau d’analyse, établi à partir des éléments communiqués via le questionnaire. Il vise à formaliser notre compréhension de votre situation globale et à identifier les enjeux structurants nécessitant un accompagnement professionnel.";

  const situation = `${detailSentence} Cette configuration dessine un projet à la fois personnel, patrimonial et fiscal, qui impose une lecture globale et cohérente des décisions à venir.`;

  let intentionParagraph =
    "Votre intention de principe n’a pas été clairement identifiée, ce qui justifie un cadrage préalable avant toute décision.";
  let vigilanceParagraph =
    "Cette typologie de situation soulève des points de vigilance spécifiques, notamment sur la fiscalité liée aux actifs et revenus de source française, les effets d’un changement de résidence fiscale, la gestion des participations ou fonctions exercées, ainsi que les étapes à sécuriser avant toute modification de statut. Ces éléments requièrent une analyse approfondie et une coordination précise pour garantir la cohérence et la pérennité des choix retenus.";

  if (intent === "Je souhaite investir aux Émirats") {
    intentionParagraph =
      "Votre intention de principe consiste à envisager un investissement aux Émirats arabes unis. Ce type de projet soulève des enjeux fiscaux, patrimoniaux et juridiques significatifs, tant en phase de structuration qu’à moyen et long terme. Les modalités d’investissement doivent impérativement être analysées en amont afin d’éviter des choix sous-optimaux ou fiscalement inefficients.";
    vigilanceParagraph =
      "Il ressort fréquemment que la détention des fonds au sein d’une holding ne conduit pas nécessairement à un investissement via cette même structure. Une analyse préalable est indispensable afin de déterminer le schéma le plus efficient, en tenant compte de la fiscalité de sortie, des conventions internationales et des objectifs patrimoniaux globaux. L’étude doit intervenir avant toute décision opérationnelle.";
  } else if (intent === "Je prépare une expatriation aux Émirats") {
    intentionParagraph =
      "Votre intention de principe consiste à préparer une expatriation aux Émirats arabes unis. Ce projet implique de sécuriser la résidence fiscale, les liens conservés en France et la structuration des actifs avant le départ, afin d’assurer la cohérence globale de la situation.";
    vigilanceParagraph =
      "La résidence fiscale repose notamment sur trois critères majeurs : le foyer et le lieu de séjour principal, le centre des intérêts économiques et l’activité professionnelle. L’absence de cohérence entre ces critères et la réalité vécue expose à un risque de remise en cause de la non‑résidence. Il est essentiel de documenter et de sécuriser ces éléments avant l’expatriation.";
  } else if (intent === "Je prépare un retour en France") {
    intentionParagraph =
      "Votre intention de principe consiste à préparer un retour en France. Ce type de trajectoire nécessite d’anticiper les effets fiscaux du changement de résidence et d’aligner les actifs, revenus et structures avec le futur cadre français.";
  } else if (intent === "Je souhaite être accompagné sur mes obligations ou déclarations fiscales") {
    intentionParagraph =
      "Votre intention de principe consiste à sécuriser vos obligations ou déclarations fiscales. Cette démarche requiert une analyse structurée afin de garantir la conformité des positions prises et la cohérence des déclarations entre les juridictions concernées.";
  } else if (intent === "Autre situation") {
    intentionParagraph =
      "Votre intention de principe concerne une situation atypique ou multi-juridictionnelle. Ce type de configuration exige un cadrage global préalable afin d’identifier les risques et les priorités de traitement.";
  }

  const impactsParagraph = impacts.length
    ? `Lecture fiscale et points d’attention : ${impacts.join(" ")}`
    : "Plusieurs éléments déclarés appellent une vigilance particulière et nécessitent un examen dédié.";

  const issues = `Résumé de situation : ${situation}\n\n${intentionParagraph}\n\n${vigilanceParagraph}\n\n${impactsParagraph}`;

  const need =
    "La complexité et l’interdépendance de ces sujets rendent indispensable un accompagnement global, structuré et sécurisé. Une approche fragmentée exposerait la situation à des incohérences ou à des risques évitables. Un pilotage professionnel est requis pour assurer la solidité et la conformité de l’ensemble.";

  const conclusion =
    "La prochaine étape consiste à poursuivre la consultation avec un fiscaliste du cabinet afin de valider les hypothèses, approfondir les enjeux identifiés et construire une stratégie adaptée à votre situation spécifique.";

  return { intro, situation: "", issues, need, conclusion };
};

const buildProposal = (answers: Answers) => {
  const proposals: string[] = [];
  const intent = answers.intent as string | undefined;

  if (intent === "Je prépare une expatriation aux Émirats") {
    proposals.push(
      "Analyse incidence fiscale du départ de France",
      "Structuration pré-expatriation (sociétés, patrimoine, flux)",
      "Convention fiscale France–Émirats et sécurisation opérationnelle"
    );
  }

  if (intent === "Je souhaite investir aux Émirats") {
    proposals.push(
      "Structuration de l’investissement (direct vs société)",
      "Validation fiscale des flux France–Émirats"
    );
  }

  if (intent === "Je prépare un retour en France") {
    proposals.push(
      "Audit de la situation avant retour",
      "Plan d’alignement fiscal et patrimonial"
    );
  }

  if (intent === "Je souhaite être accompagné sur mes obligations ou déclarations fiscales") {
    proposals.push(
      "Sécurisation déclarative France/Émirats",
      "Documentation et cadrage des risques"
    );
  }

  if (intent === "Autre situation") {
    proposals.push("Diagnostic global et cadrage des priorités");
  }

  return proposals;
};

const scoreAnswer = (answers: Answers) => {
  let score = 0;
  const intent = answers.intent as string | undefined;

  if (intent === "Je prépare une expatriation aux Émirats") {
    score += 2;
    if (["Moins de 3 mois", "Entre 3 et 6 mois"].includes(answers.horizon as string)) score += 2;
    if (answers.actionnaire === "Oui") score += 2;
  }

  if (intent === "Je souhaite investir aux Émirats") {
    score += 2;
    if (answers.investType === "Les deux") score += 1;
  }

  if (intent === "Je prépare un retour en France") {
    score += 2;
    if (answers.currentStatus === "Situation incertaine") score += 1;
  }

  if (intent === "Je souhaite être accompagné sur mes obligations ou déclarations fiscales") {
    score += 2;
    if (answers.obligationType === "Plusieurs sujets") score += 1;
  }

  if (intent === "Autre situation") {
    score += 1;
  }

  return score;
};

const buildReferenceId = () => {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `HA-${date}-${rand}`;
};

export default function EligibilitePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState("");
  const [phase, setPhase] = useState<"form" | "loading" | "summary">("form");
  const [memo, setMemo] = useState<Memo | null>(null);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const submittedRef = useRef(false);

  const questions = useMemo(() => buildQuestions(answers), [answers]);
  const totalSteps = questions.length;
  const current = questions[step];
  const sortedDialCodes = useMemo(() => {
    const pinned = ["FR", "AE"];
    const unique = Array.from(
      new Map(countryDialCodes.map((item) => [`${item.code}-${item.dial}`, item])).values()
    );
    return unique.sort((a, b) => {
      const aIndex = pinned.indexOf(a.code);
      const bIndex = pinned.indexOf(b.code);
      if (aIndex !== -1 || bIndex !== -1) {
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      }
      return a.code.localeCompare(b.code);
    });
  }, []);

  const progress = useMemo(() => Math.round(((step + 1) / totalSteps) * 100), [step, totalSteps]);

  useEffect(() => {
    if (step > totalSteps - 1) {
      setStep(totalSteps - 1);
    }
  }, [step, totalSteps]);

  useEffect(() => {
    if (phase !== "loading") return;
    setLoadingIndex(0);

    const timeouts = [
      setTimeout(() => setLoadingIndex(1), 550),
      setTimeout(() => setLoadingIndex(2), 1100),
      setTimeout(() => setLoadingIndex(3), 1550),
      setTimeout(() => {
        setMemo(buildMemo(answers));
        setPhase("summary");
      }, 2200)
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [phase, answers]);

  useEffect(() => {
    if (phase !== "summary" || !memo || submittedRef.current) return;
    submittedRef.current = true;
    submitLead();
  }, [phase, memo]);

  useEffect(() => {
    if (!answers.phoneCountry) {
      setAnswers((prev) => ({
        ...prev,
        phoneCountry: "+33",
        phone: prev.phone ? prev.phone : "+33 "
      }));
    }
  }, [answers.phoneCountry]);

  const validateContact = () => {
    const firstName = (answers.firstName as string) ?? "";
    const lastName = (answers.lastName as string) ?? "";
    const phone = (answers.phone as string) ?? "";
    const email = (answers.email as string) ?? "";

    if (!firstName.trim() || !lastName.trim()) {
      setError("Merci de renseigner votre nom et prénom.");
      return false;
    }
    if (!answers.phoneCountry || !phone.trim()) {
      setError("Merci de renseigner un numéro de téléphone.");
      return false;
    }
    if (!email.trim()) {
      setError("Merci de renseigner votre adresse email.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (current.type === "radio" && !answers[current.id]) {
      setError("Veuillez sélectionner une option.");
      return;
    }

    if (current.type === "multi") {
      const selected = answers[current.id] as string[] | undefined;
      if (!selected || selected.length === 0) {
        setError("Veuillez sélectionner au moins une option.");
        return;
      }
    }

    if (current.type === "contact") {
      if (!validateContact()) return;
    }

    setError("");
    trackEvent("form_step_completed", { step: current.id });

    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const submitLead = async () => {
    const ref = buildReferenceId();
    const score = scoreAnswer(answers);
    const proposals = buildProposal(answers);
    const proposalText = proposals.join(" | ");
    const payload = { ref, score, answers, proposals };

    try {
      await fetch("/api/eligibilite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch {
      // Silent fallback.
    }

    trackEvent("form_submitted", { ref, score });
  };

  const handleAnalyze = () => {
    setError("");
    if (current.type === "contact" && !validateContact()) {
      return;
    }
    setPhase("loading");
    trackEvent("form_submitted");
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Accompagnement</p>
      <h1 className="mt-4 text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
        Démarrer ma consultation
      </h1>
      <p className="mt-4 text-muted">{totalSteps} questions</p>

      <div className="mt-8 glass rounded-3xl p-6">
        {phase === "loading" ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="loader" />
            <p className="text-sm font-semibold text-accent-darkBlue">
              {loadingMessages[loadingIndex]}
            </p>
            <p className="text-xs text-muted">
              Nous interprétons vos réponses pour établir une synthèse personnalisée.
            </p>
            {loadingIndex >= 3 ? (
              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary-600">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-lg">
                  ✨
                </span>
                Résultat prêt
              </div>
            ) : null}
          </div>
        ) : null}

        {phase === "summary" && memo ? (
          <div className="memo-appear">
            <div className="memo-badge">
              <span className="memo-badge-icon">✓</span>
              Analyse finalisée
            </div>
            <div className="mb-6 rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-semibold text-accent-darkBlue">
              L’un de nos fiscalistes va vous rappeler dans les plus brefs délais pour avancer sur votre projet.
            </div>
            <div className="rounded-3xl border border-primary-100 bg-white/80 p-6 shadow-soft">
              <div className="border-b border-primary-100 pb-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center">
                    <img src="/logo.png" alt="Honoré Patrimoine" className="h-28 w-auto sm:h-32" />
                  </div>
                  <div className="text-xs text-muted sm:text-right">
                    <p>
                      Nom & prénom :{" "}
                      {`${answers.firstName ?? ""} ${answers.lastName ?? ""}`.trim() ||
                        "Client Honoré Advisor"}
                    </p>
                  <p>Téléphone : {answers.phone ?? "-"}</p>
                    <p>Email : {answers.email ?? "-"}</p>
                    <p>Date : {new Intl.DateTimeFormat("fr-FR").format(new Date())}</p>
                    <p>Objet : Cadrage préliminaire de votre situation fiscale et patrimoniale</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs font-semibold text-accent-darkBlue">Honoré Patrimoine</p>
                  <p className="mt-1 text-base font-semibold uppercase tracking-[0.2em] text-primary-600">
                    Mémoire de cadrage fiscal
                  </p>
                  <p className="text-sm font-semibold text-accent-darkBlue">
                    Synthèse préliminaire
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted">
                {(() => {
                  const issueParts = memo.issues.split("\n\n");
                  const situationText = `${memo.intro} ${issueParts[0]?.replace("Résumé de situation : ", "") ?? ""}`.trim();
                  const analysisText = issueParts.slice(1).join("\n\n").trim();
                  const supportText = `${memo.need}\n\n${memo.conclusion}`.trim();
                  const blocks = [
                    {
                      title: "Situation du client",
                      text: situationText,
                      icon: ClipboardList,
                      className: "bg-blue-50/70 border-blue-100"
                    },
                    {
                      title: "Analyse fiscale préliminaire",
                      text: analysisText,
                      icon: ShieldAlert,
                      className: "bg-amber-50/70 border-amber-100"
                    },
                    {
                      title: "Accompagnement recommandé",
                      text: supportText,
                      icon: CheckCircle2,
                      className: "bg-emerald-50/70 border-emerald-100"
                    }
                  ];

                  return blocks
                    .filter((block) => block.text.trim())
                    .map((block) => {
                      const Icon = block.icon;
                      return (
                        <div
                          key={block.title}
                          className={`rounded-2xl border px-4 py-4 ${block.className}`}
                        >
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                            <Icon className="h-4 w-4 text-primary-600" />
                            {block.title}
                          </div>
                          {block.text.split("\n\n").map((paragraph) => (
                            <p key={paragraph} className="mt-2">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      );
                    });
                })()}
              </div>

              <div className="mt-8 border-t border-primary-100 pt-4 text-xs text-muted">
                <p>Signature : Roy Masliah – Fiscaliste</p>
                <p>Cabinet Honoré Patrimoine</p>
              </div>
            </div>
          </div>
        ) : null}

        {phase === "form" ? (
          <>
            <div className="flex items-center justify-between text-xs text-muted">
              <span>Étape {step + 1} / {totalSteps}</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-primary-100">
              <div className="h-2 rounded-full bg-primary-600" style={{ width: `${progress}%` }} />
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-accent-darkBlue">{current.label}</p>

              {current.type === "radio" && (
                <div className="mt-4 grid gap-3">
                  {current.options?.map((option) => (
                    <label key={option} className="flex items-center gap-3 rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm text-muted">
                      <input
                        type="radio"
                        name={current.id}
                        value={option}
                        checked={answers[current.id] === option}
                        onChange={() => setAnswers((prev) => ({ ...prev, [current.id]: option }))}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}

              {current.type === "multi" && (
                <div className="mt-4 grid gap-3">
                  {current.options?.map((option) => {
                    const selected = (answers[current.id] ?? []) as string[];
                    const checked = selected.includes(option);
                    return (
                      <label key={option} className="flex items-center gap-3 rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm text-muted">
                        <input
                          type="checkbox"
                          name={current.id}
                          value={option}
                          checked={checked}
                          onChange={() => {
                            const next = checked
                              ? selected.filter((item) => item !== option)
                              : [...selected, option];
                            setAnswers((prev) => ({ ...prev, [current.id]: next }));
                          }}
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              )}

              {current.type === "contact" && (
                <div className="mt-4 grid gap-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Prénom"
                      value={(answers.firstName as string) ?? ""}
                      onChange={(event) =>
                        setAnswers((prev) => ({ ...prev, firstName: event.target.value }))
                      }
                      className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm text-muted"
                    />
                    <input
                      type="text"
                      placeholder="Nom"
                      value={(answers.lastName as string) ?? ""}
                      onChange={(event) =>
                        setAnswers((prev) => ({ ...prev, lastName: event.target.value }))
                      }
                      className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm text-muted"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
                    <select
                      value={(answers.phoneCountry as string) ?? ""}
                      onChange={(event) => {
                        const nextCode = event.target.value;
                        setAnswers((prev) => {
                          const currentPhone = (prev.phone as string) ?? "";
                          const normalized = currentPhone.replace(/^\+\d[\d-]*\s?/, "");
                          return {
                            ...prev,
                            phoneCountry: nextCode,
                            phone: nextCode ? `${nextCode} ${normalized}`.trim() : normalized
                          };
                        });
                      }}
                      className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm text-muted"
                    >
                      {sortedDialCodes.map((item) => (
                        <option key={`${item.code}-${item.dial}`} value={item.dial}>
                          {getFlagEmoji(item.code)} {item.code} {item.dial}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="Numéro de téléphone"
                      value={(answers.phone as string) ?? ""}
                      onChange={(event) =>
                        setAnswers((prev) => ({ ...prev, phone: event.target.value }))
                      }
                      className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm text-muted"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Adresse email"
                    value={(answers.email as string) ?? ""}
                    onChange={(event) =>
                      setAnswers((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="rounded-2xl border border-primary-100 bg-white px-4 py-3 text-sm text-muted"
                  />
                  <p className="text-xs text-muted">
                    J’accepte d’être recontacté par un fiscaliste du cabinet.
                  </p>
                </div>
              )}

              {error && <p className="mt-3 text-xs text-red-600">{error}</p>}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="text-xs font-semibold uppercase tracking-wide text-primary-600"
                disabled={step === 0}
              >
                Retour
              </button>
              {step < totalSteps - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  Continuer
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleAnalyze}
                  className="rounded-full bg-primary-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  Évaluer ma situation
                </button>
              )}
            </div>
          </>
        ) : null}
      </div>

    </section>
  );
}
