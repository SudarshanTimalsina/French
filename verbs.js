/* =========================================================================
   VERBS.JS — all the data for the conjugation trainer lives here.
   Edit this file to add, remove, or change verbs. The app (index.html)
   never needs to change when you do.
   ========================================================================= */

/* -------------------------------------------------------------------------
   PRONOUNS
   The 9 subject pronouns the app can quiz you on. "label" is what's shown
   on screen. Don't remove keys — verbs below must have a form for each one.
   ------------------------------------------------------------------------- */
const PRONOUNS = [
  { key: "je",    label: "je"    },
  { key: "tu",    label: "tu"    },
  { key: "il",    label: "il"    },
  { key: "elle",  label: "elle"  },
  { key: "on",    label: "on"    },
  { key: "nous",  label: "nous"  },
  { key: "vous",  label: "vous"  },
  { key: "ils",   label: "ils"   },
  { key: "elles", label: "elles" },
];

/* -------------------------------------------------------------------------
   TENSES
   Each verb below must have a conjugations block for each tense key here.
   Want a new tense (e.g. "le futur proche")? Add it here, then add a
   matching block to every verb.
   ------------------------------------------------------------------------- */
const TENSES = [
  { key: "present",              label: "Présent de l'Indicatif"  },
  { key: "passeCompose",         label: "Le Passé Composé"        },
  { key: "imparfait",            label: "L'Imparfait"             },
  { key: "futurSimple",          label: "Le Futur Simple"         },
  { key: "conditionnelPresent",  label: "Le Conditionnel Présent" },
  { key: "plusQueParfait",       label: "Le Plus-que-parfait"     },
  { key: "futurProche",          label: "Le Futur Proche"         },
];

/* -------------------------------------------------------------------------
   NAMES
   Used when "replace pronouns with names" is switched on.
   il/on  -> a random "m" name      elle -> a random "f" name
   ils    -> two random names (any) elles -> two random "f" names
   Add as many as you like — gender must be "m" or "f".
   ------------------------------------------------------------------------- */
const NAMES = [
  { name: "Marc",    gender: "m" },
  { name: "Julien",  gender: "m" },
  { name: "Thomas",  gender: "m" },
  { name: "Nicolas", gender: "m" },
  { name: "Antoine", gender: "m" },
  { name: "Hugo",    gender: "m" },
  { name: "Louis",   gender: "m" },
  { name: "Lucas",   gender: "m" },
  { name: "Sophie",  gender: "f" },
  { name: "Claire",  gender: "f" },
  { name: "Léa",     gender: "f" },
  { name: "Emma",    gender: "f" },
  { name: "Chloé",   gender: "f" },
  { name: "Manon",   gender: "f" },
  { name: "Camille", gender: "f" },
];

/* -------------------------------------------------------------------------
   VERBS
   Store only the conjugated VERB FORM for each pronoun — no pronoun in the
   string. For le passé composé, include the auxiliary + past participle,
   with agreement already applied for il/elle/ils/elles
   (e.g. "est allé" for il, "est allée" for elle).

   That's it — 5 to start. Copy the commented block at the very bottom to
   add your own.
   ------------------------------------------------------------------------- */
const VERBS = [
  {
    infinitive: "parler",
    english: "to speak",
    conjugations: {
      present: {
        je: "parle", tu: "parles", il: "parle", elle: "parle", on: "parle",
        nous: "parlons", vous: "parlez", ils: "parlent", elles: "parlent",
      },
      passeCompose: {
        je: "ai parlé", tu: "as parlé", il: "a parlé", elle: "a parlé", on: "a parlé",
        nous: "avons parlé", vous: "avez parlé", ils: "ont parlé", elles: "ont parlé",
      },
      imparfait: {
        je: "parlais", tu: "parlais", il: "parlait", elle: "parlait", on: "parlait",
        nous: "parlions", vous: "parliez", ils: "parlaient", elles: "parlaient",
      },
      futurSimple: {
        je: "parlerai", tu: "parleras", il: "parlera", elle: "parlera", on: "parlera",
        nous: "parlerons", vous: "parlerez", ils: "parleront", elles: "parleront",
      },
      conditionnelPresent: {
        je: "parlerais", tu: "parlerais", il: "parlerait", elle: "parlerait", on: "parlerait",
        nous: "parlerions", vous: "parleriez", ils: "parleraient", elles: "parleraient",
      },
      plusQueParfait: {
        je: "avais parlé", tu: "avais parlé", il: "avait parlé", elle: "avait parlé", on: "avait parlé",
        nous: "avions parlé", vous: "aviez parlé", ils: "avaient parlé", elles: "avaient parlé",
      },
      futurProche: {
        je: "vais parler", tu: "vas parler", il: "va parler", elle: "va parler", on: "va parler",
        nous: "allons parler", vous: "allez parler", ils: "vont parler", elles: "vont parler",
      },
    },
  },

  {
    infinitive: "finir",
    english: "to finish",
    conjugations: {
      present: {
        je: "finis", tu: "finis", il: "finit", elle: "finit", on: "finit",
        nous: "finissons", vous: "finissez", ils: "finissent", elles: "finissent",
      },
      passeCompose: {
        je: "ai fini", tu: "as fini", il: "a fini", elle: "a fini", on: "a fini",
        nous: "avons fini", vous: "avez fini", ils: "ont fini", elles: "ont fini",
      },
      imparfait: {
        je: "finissais", tu: "finissais", il: "finissait", elle: "finissait", on: "finissait",
        nous: "finissions", vous: "finissiez", ils: "finissaient", elles: "finissaient",
      },
      futurSimple: {
        je: "finirai", tu: "finiras", il: "finira", elle: "finira", on: "finira",
        nous: "finirons", vous: "finirez", ils: "finiront", elles: "finiront",
      },
      conditionnelPresent: {
        je: "finirais", tu: "finirais", il: "finirait", elle: "finirait", on: "finirait",
        nous: "finirions", vous: "finiriez", ils: "finiraient", elles: "finiraient",
      },
      plusQueParfait: {
        je: "avais fini", tu: "avais fini", il: "avait fini", elle: "avait fini", on: "avait fini",
        nous: "avions fini", vous: "aviez fini", ils: "avaient fini", elles: "avaient fini",
      },
      futurProche: {
        je: "vais finir", tu: "vas finir", il: "va finir", elle: "va finir", on: "va finir",
        nous: "allons finir", vous: "allez finir", ils: "vont finir", elles: "vont finir",
      },
    },
  },

  {
    infinitive: "être",
    english: "to be",
    conjugations: {
      present: {
        je: "suis", tu: "es", il: "est", elle: "est", on: "est",
        nous: "sommes", vous: "êtes", ils: "sont", elles: "sont",
      },
      passeCompose: {
        je: "ai été", tu: "as été", il: "a été", elle: "a été", on: "a été",
        nous: "avons été", vous: "avez été", ils: "ont été", elles: "ont été",
      },
      imparfait: {
        je: "étais", tu: "étais", il: "était", elle: "était", on: "était",
        nous: "étions", vous: "étiez", ils: "étaient", elles: "étaient",
      },
      futurSimple: {
        je: "serai", tu: "seras", il: "sera", elle: "sera", on: "sera",
        nous: "serons", vous: "serez", ils: "seront", elles: "seront",
      },
      conditionnelPresent: {
        je: "serais", tu: "serais", il: "serait", elle: "serait", on: "serait",
        nous: "serions", vous: "seriez", ils: "seraient", elles: "seraient",
      },
      plusQueParfait: {
        je: "avais été", tu: "avais été", il: "avait été", elle: "avait été", on: "avait été",
        nous: "avions été", vous: "aviez été", ils: "avaient été", elles: "avaient été",
      },
      futurProche: {
        je: "vais être", tu: "vas être", il: "va être", elle: "va être", on: "va être",
        nous: "allons être", vous: "allez être", ils: "vont être", elles: "vont être",
      },
    },
  },

  {
    infinitive: "avoir",
    english: "to have",
    conjugations: {
      present: {
        je: "ai", tu: "as", il: "a", elle: "a", on: "a",
        nous: "avons", vous: "avez", ils: "ont", elles: "ont",
      },
      passeCompose: {
        je: "ai eu", tu: "as eu", il: "a eu", elle: "a eu", on: "a eu",
        nous: "avons eu", vous: "avez eu", ils: "ont eu", elles: "ont eu",
      },
      imparfait: {
        je: "avais", tu: "avais", il: "avait", elle: "avait", on: "avait",
        nous: "avions", vous: "aviez", ils: "avaient", elles: "avaient",
      },
      futurSimple: {
        je: "aurai", tu: "auras", il: "aura", elle: "aura", on: "aura",
        nous: "aurons", vous: "aurez", ils: "auront", elles: "auront",
      },
      conditionnelPresent: {
        je: "aurais", tu: "aurais", il: "aurait", elle: "aurait", on: "aurait",
        nous: "aurions", vous: "auriez", ils: "auraient", elles: "auraient",
      },
      plusQueParfait: {
        je: "avais eu", tu: "avais eu", il: "avait eu", elle: "avait eu", on: "avait eu",
        nous: "avions eu", vous: "aviez eu", ils: "avaient eu", elles: "avaient eu",
      },
      futurProche: {
        je: "vais avoir", tu: "vas avoir", il: "va avoir", elle: "va avoir", on: "va avoir",
        nous: "allons avoir", vous: "allez avoir", ils: "vont avoir", elles: "vont avoir",
      },
    },
  },

  {
    infinitive: "aller",
    english: "to go",
    conjugations: {
      present: {
        je: "vais", tu: "vas", il: "va", elle: "va", on: "va",
        nous: "allons", vous: "allez", ils: "vont", elles: "vont",
      },
      passeCompose: {
        je: "suis allé", tu: "es allé", il: "est allé", elle: "est allée", on: "est allé",
        nous: "sommes allés", vous: "êtes allés", ils: "sont allés", elles: "sont allées",
      },
      imparfait: {
        je: "allais", tu: "allais", il: "allait", elle: "allait", on: "allait",
        nous: "allions", vous: "alliez", ils: "allaient", elles: "allaient",
      },
      futurSimple: {
        je: "irai", tu: "iras", il: "ira", elle: "ira", on: "ira",
        nous: "irons", vous: "irez", ils: "iront", elles: "iront",
      },
      conditionnelPresent: {
        je: "irais", tu: "irais", il: "irait", elle: "irait", on: "irait",
        nous: "irions", vous: "iriez", ils: "iraient", elles: "iraient",
      },
      plusQueParfait: {
        je: "étais allé", tu: "étais allé", il: "était allé", elle: "était allée", on: "était allé",
        nous: "étions allés", vous: "étiez allés", ils: "étaient allés", elles: "étaient allées",
      },
      futurProche: {
        je: "vais aller", tu: "vas aller", il: "va aller", elle: "va aller", on: "va aller",
        nous: "allons aller", vous: "allez aller", ils: "vont aller", elles: "vont aller",
      },
    },
  },
/* ==================== 1. ÊTRE ==================== */
{
  infinitive: "être",
  english: "to be",
  conjugations: {
    present: {
      je: "suis", tu: "es", il: "est", elle: "est", on: "est",
      nous: "sommes", vous: "êtes", ils: "sont", elles: "sont",
    },
    passeCompose: {
      je: "ai été", tu: "as été", il: "a été", elle: "a été", on: "a été",
      nous: "avons été", vous: "avez été", ils: "ont été", elles: "ont été",
    },
    imparfait: {
      je: "étais", tu: "étais", il: "était", elle: "était", on: "était",
      nous: "étions", vous: "étiez", ils: "étaient", elles: "étaient",
    },
    futurSimple: {
      je: "serai", tu: "seras", il: "sera", elle: "sera", on: "sera",
      nous: "serons", vous: "serez", ils: "seront", elles: "seront",
    },
    conditionnelPresent: {
      je: "serais", tu: "serais", il: "serait", elle: "serait", on: "serait",
      nous: "serions", vous: "seriez", ils: "seraient", elles: "seraient",
    },
    plusQueParfait: {
      je: "avais été", tu: "avais été", il: "avait été", elle: "avait été", on: "avait été",
      nous: "avions été", vous: "aviez été", ils: "avaient été", elles: "avaient été",
    },
    futurProche: {
      je: "vais être", tu: "vas être", il: "va être", elle: "va être", on: "va être",
      nous: "allons être", vous: "allez être", ils: "vont être", elles: "vont être",
    },
  },
},

/* ==================== 2. AVOIR ==================== */
{
  infinitive: "avoir",
  english: "to have",
  conjugations: {
    present: {
      je: "ai", tu: "as", il: "a", elle: "a", on: "a",
      nous: "avons", vous: "avez", ils: "ont", elles: "ont",
    },
    passeCompose: {
      je: "ai eu", tu: "as eu", il: "a eu", elle: "a eu", on: "a eu",
      nous: "avons eu", vous: "avez eu", ils: "ont eu", elles: "ont eu",
    },
    imparfait: {
      je: "avais", tu: "avais", il: "avait", elle: "avait", on: "avait",
      nous: "avions", vous: "aviez", ils: "avaient", elles: "avaient",
    },
    futurSimple: {
      je: "aurai", tu: "auras", il: "aura", elle: "aura", on: "aura",
      nous: "aurons", vous: "aurez", ils: "auront", elles: "auront",
    },
    conditionnelPresent: {
      je: "aurais", tu: "aurais", il: "aurait", elle: "aurait", on: "aurait",
      nous: "aurions", vous: "auriez", ils: "auraient", elles: "auraient",
    },
    plusQueParfait: {
      je: "avais eu", tu: "avais eu", il: "avait eu", elle: "avait eu", on: "avait eu",
      nous: "avions eu", vous: "aviez eu", ils: "avaient eu", elles: "avaient eu",
    },
    futurProche: {
      je: "vais avoir", tu: "vas avoir", il: "va avoir", elle: "va avoir", on: "va avoir",
      nous: "allons avoir", vous: "allez avoir", ils: "vont avoir", elles: "vont avoir",
    },
  },
},

/* ==================== 3. ALLER ==================== */
{
  infinitive: "aller",
  english: "to go",
  conjugations: {
    present: {
      je: "vais", tu: "vas", il: "va", elle: "va", on: "va",
      nous: "allons", vous: "allez", ils: "vont", elles: "vont",
    },
    passeCompose: {
      je: "suis allé", tu: "es allé", il: "est allé", elle: "est allée", on: "est allé",
      nous: "sommes allés", vous: "êtes allé", ils: "sont allés", elles: "sont allées",
    },
    imparfait: {
      je: "allais", tu: "allais", il: "allait", elle: "allait", on: "allait",
      nous: "allions", vous: "alliez", ils: "allaient", elles: "allaient",
    },
    futurSimple: {
      je: "irai", tu: "iras", il: "ira", elle: "ira", on: "ira",
      nous: "irons", vous: "irez", ils: "iront", elles: "iront",
    },
    conditionnelPresent: {
      je: "irais", tu: "irais", il: "irait", elle: "irait", on: "irait",
      nous: "irions", vous: "iriez", ils: "iraient", elles: "iraient",
    },
    plusQueParfait: {
      je: "étais allé", tu: "étais allé", il: "était allé", elle: "était allée", on: "était allé",
      nous: "étions allés", vous: "étiez allé", ils: "étaient allés", elles: "étaient allées",
    },
    futurProche: {
      je: "vais aller", tu: "vas aller", il: "va aller", elle: "va aller", on: "va aller",
      nous: "allons aller", vous: "allez aller", ils: "vont aller", elles: "vont aller",
    },
  },
},

/* ==================== 4. FAIRE ==================== */
{
  infinitive: "faire",
  english: "to do / to make",
  conjugations: {
    present: {
      je: "fais", tu: "fais", il: "fait", elle: "fait", on: "fait",
      nous: "faisons", vous: "faites", ils: "font", elles: "font",
    },
    passeCompose: {
      je: "ai fait", tu: "as fait", il: "a fait", elle: "a fait", on: "a fait",
      nous: "avons fait", vous: "avez fait", ils: "ont fait", elles: "ont fait",
    },
    imparfait: {
      je: "faisais", tu: "faisais", il: "faisait", elle: "faisait", on: "faisait",
      nous: "faisions", vous: "faisiez", ils: "faisaient", elles: "faisaient",
    },
    futurSimple: {
      je: "ferai", tu: "feras", il: "fera", elle: "fera", on: "fera",
      nous: "ferons", vous: "ferez", ils: "feront", elles: "feront",
    },
    conditionnelPresent: {
      je: "ferais", tu: "ferais", il: "ferait", elle: "ferait", on: "ferait",
      nous: "ferions", vous: "feriez", ils: "feraient", elles: "feraient",
    },
    plusQueParfait: {
      je: "avais fait", tu: "avais fait", il: "avait fait", elle: "avait fait", on: "avait fait",
      nous: "avions fait", vous: "aviez fait", ils: "avaient fait", elles: "avaient fait",
    },
    futurProche: {
      je: "vais faire", tu: "vas faire", il: "va faire", elle: "va faire", on: "va faire",
      nous: "allons faire", vous: "allez faire", ils: "vont faire", elles: "vont faire",
    },
  },
},

/* ==================== 5. DIRE ==================== */
{
  infinitive: "dire",
  english: "to say / to tell",
  conjugations: {
    present: {
      je: "dis", tu: "dis", il: "dit", elle: "dit", on: "dit",
      nous: "disons", vous: "dites", ils: "disent", elles: "disent",
    },
    passeCompose: {
      je: "ai dit", tu: "as dit", il: "a dit", elle: "a dit", on: "a dit",
      nous: "avons dit", vous: "avez dit", ils: "ont dit", elles: "ont dit",
    },
    imparfait: {
      je: "disais", tu: "disais", il: "disait", elle: "disait", on: "disait",
      nous: "disions", vous: "disiez", ils: "disaient", elles: "disaient",
    },
    futurSimple: {
      je: "dirai", tu: "diras", il: "dira", elle: "dira", on: "dira",
      nous: "dirons", vous: "direz", ils: "diront", elles: "diront",
    },
    conditionnelPresent: {
      je: "dirais", tu: "dirais", il: "dirait", elle: "dirait", on: "dirait",
      nous: "dirions", vous: "diriez", ils: "diraient", elles: "diraient",
    },
    plusQueParfait: {
      je: "avais dit", tu: "avais dit", il: "avait dit", elle: "avait dit", on: "avait dit",
      nous: "avions dit", vous: "aviez dit", ils: "avaient dit", elles: "avaient dit",
    },
    futurProche: {
      je: "vais dire", tu: "vas dire", il: "va dire", elle: "va dire", on: "va dire",
      nous: "allons dire", vous: "allez dire", ils: "vont dire", elles: "vont dire",
    },
  },
},

/* ==================== 6. POUVOIR ==================== */
{
  infinitive: "pouvoir",
  english: "can / to be able to",
  conjugations: {
    present: {
      je: "peux", tu: "peux", il: "peut", elle: "peut", on: "peut",
      nous: "pouvons", vous: "pouvez", ils: "peuvent", elles: "peuvent",
    },
    passeCompose: {
      je: "ai pu", tu: "as pu", il: "a pu", elle: "a pu", on: "a pu",
      nous: "avons pu", vous: "avez pu", ils: "ont pu", elles: "ont pu",
    },
    imparfait: {
      je: "pouvais", tu: "pouvais", il: "pouvait", elle: "pouvait", on: "pouvait",
      nous: "pouvions", vous: "pouviez", ils: "pouvaient", elles: "pouvaient",
    },
    futurSimple: {
      je: "pourrai", tu: "pourras", il: "pourra", elle: "pourra", on: "pourra",
      nous: "pourrons", vous: "pourrez", ils: "pourront", elles: "pourront",
    },
    conditionnelPresent: {
      je: "pourrais", tu: "pourrais", il: "pourrait", elle: "pourrait", on: "pourrait",
      nous: "pourrions", vous: "pourriez", ils: "pourraient", elles: "pourraient",
    },
    plusQueParfait: {
      je: "avais pu", tu: "avais pu", il: "avait pu", elle: "avait pu", on: "avait pu",
      nous: "avions pu", vous: "aviez pu", ils: "avaient pu", elles: "avaient pu",
    },
    futurProche: {
      je: "vais pouvoir", tu: "vas pouvoir", il: "va pouvoir", elle: "va pouvoir", on: "va pouvoir",
      nous: "allons pouvoir", vous: "allez pouvoir", ils: "vont pouvoir", elles: "vont pouvoir",
    },
  },
},

/* ==================== 7. VOULOIR ==================== */
{
  infinitive: "vouloir",
  english: "to want",
  conjugations: {
    present: {
      je: "veux", tu: "veux", il: "veut", elle: "veut", on: "veut",
      nous: "voulons", vous: "voulez", ils: "veulent", elles: "veulent",
    },
    passeCompose: {
      je: "ai voulu", tu: "as voulu", il: "a voulu", elle: "a voulu", on: "a voulu",
      nous: "avons voulu", vous: "avez voulu", ils: "ont voulu", elles: "ont voulu",
    },
    imparfait: {
      je: "voulais", tu: "voulais", il: "voulait", elle: "voulait", on: "voulait",
      nous: "voulions", vous: "vouliez", ils: "voulaient", elles: "voulaient",
    },
    futurSimple: {
      je: "voudrai", tu: "voudras", il: "voudra", elle: "voudra", on: "voudra",
      nous: "voudrons", vous: "voudrez", ils: "voudront", elles: "voudront",
    },
    conditionnelPresent: {
      je: "voudrais", tu: "voudrais", il: "voudrait", elle: "voudrait", on: "voudrait",
      nous: "voudrions", vous: "voudriez", ils: "voudraient", elles: "voudraient",
    },
    plusQueParfait: {
      je: "avais voulu", tu: "avais voulu", il: "avait voulu", elle: "avait voulu", on: "avait voulu",
      nous: "avions voulu", vous: "aviez voulu", ils: "avaient voulu", elles: "avaient voulu",
    },
    futurProche: {
      je: "vais vouloir", tu: "vas vouloir", il: "va vouloir", elle: "va vouloir", on: "va vouloir",
      nous: "allons vouloir", vous: "allez vouloir", ils: "vont vouloir", elles: "vont vouloir",
    },
  },
},

/* ==================== 8. SAVOIR ==================== */
{
  infinitive: "savoir",
  english: "to know",
  conjugations: {
    present: {
      je: "sais", tu: "sais", il: "sait", elle: "sait", on: "sait",
      nous: "savons", vous: "savez", ils: "savent", elles: "savent",
    },
    passeCompose: {
      je: "ai su", tu: "as su", il: "a su", elle: "a su", on: "a su",
      nous: "avons su", vous: "avez su", ils: "ont su", elles: "ont su",
    },
    imparfait: {
      je: "savais", tu: "savais", il: "savait", elle: "savait", on: "savait",
      nous: "savions", vous: "saviez", ils: "savaient", elles: "savaient",
    },
    futurSimple: {
      je: "saurai", tu: "sauras", il: "saura", elle: "saura", on: "saura",
      nous: "saurons", vous: "saurez", ils: "sauront", elles: "sauront",
    },
    conditionnelPresent: {
      je: "saurais", tu: "saurais", il: "saurait", elle: "saurait", on: "saurait",
      nous: "saurions", vous: "sauriez", ils: "sauraient", elles: "sauraient",
    },
    plusQueParfait: {
      je: "avais su", tu: "avais su", il: "avait su", elle: "avait su", on: "avait su",
      nous: "avions su", vous: "aviez su", ils: "avaient su", elles: "avaient su",
    },
    futurProche: {
      je: "vais savoir", tu: "vas savoir", il: "va savoir", elle: "va savoir", on: "va savoir",
      nous: "allons savoir", vous: "allez savoir", ils: "vont savoir", elles: "vont savoir",
    },
  },
},

/* ==================== 9. VENIR ==================== */
{
  infinitive: "venir",
  english: "to come",
  conjugations: {
    present: {
      je: "viens", tu: "viens", il: "vient", elle: "vient", on: "vient",
      nous: "venons", vous: "venez", ils: "viennent", elles: "viennent",
    },
    passeCompose: {
      je: "suis venu", tu: "es venu", il: "est venu", elle: "est venue", on: "est venu",
      nous: "sommes venus", vous: "êtes venu", ils: "sont venus", elles: "sont venues",
    },
    imparfait: {
      je: "venais", tu: "venais", il: "venait", elle: "venait", on: "venait",
      nous: "venions", vous: "veniez", ils: "venaient", elles: "venaient",
    },
    futurSimple: {
      je: "viendrai", tu: "viendras", il: "viendra", elle: "viendra", on: "viendra",
      nous: "viendrons", vous: "viendrez", ils: "viendront", elles: "viendront",
    },
    conditionnelPresent: {
      je: "viendrais", tu: "viendrais", il: "viendrait", elle: "viendrait", on: "viendrait",
      nous: "viendrions", vous: "viendriez", ils: "viendraient", elles: "viendraient",
    },
    plusQueParfait: {
      je: "étais venu", tu: "étais venu", il: "était venu", elle: "était venue", on: "était venu",
      nous: "étions venus", vous: "étiez venu", ils: "étaient venus", elles: "étaient venues",
    },
    futurProche: {
      je: "vais venir", tu: "vas venir", il: "va venir", elle: "va venir", on: "va venir",
      nous: "allons venir", vous: "allez venir", ils: "vont venir", elles: "vont venir",
    },
  },
},

/* ==================== 10. PRENDRE ==================== */
{
  infinitive: "prendre",
  english: "to take",
  conjugations: {
    present: {
      je: "prends", tu: "prends", il: "prend", elle: "prend", on: "prend",
      nous: "prenons", vous: "prenez", ils: "prennent", elles: "prennent",
    },
    passeCompose: {
      je: "ai pris", tu: "as pris", il: "a pris", elle: "a pris", on: "a pris",
      nous: "avons pris", vous: "avez pris", ils: "ont pris", elles: "ont pris",
    },
    imparfait: {
      je: "prenais", tu: "prenais", il: "prenait", elle: "prenait", on: "prenait",
      nous: "prenions", vous: "preniez", ils: "prenaient", elles: "prenaient",
    },
    futurSimple: {
      je: "prendrai", tu: "prendras", il: "prendra", elle: "prendra", on: "prendra",
      nous: "prendrons", vous: "prendrez", ils: "prendront", elles: "prendront",
    },
    conditionnelPresent: {
      je: "prendrais", tu: "prendrais", il: "prendrait", elle: "prendrait", on: "prendrait",
      nous: "prendrions", vous: "prendriez", ils: "prendraient", elles: "prendraient",
    },
    plusQueParfait: {
      je: "avais pris", tu: "avais pris", il: "avait pris", elle: "avait pris", on: "avait pris",
      nous: "avions pris", vous: "aviez pris", ils: "avaient pris", elles: "avaient pris",
    },
    futurProche: {
      je: "vais prendre", tu: "vas prendre", il: "va prendre", elle: "va prendre", on: "va prendre",
      nous: "allons prendre", vous: "allez prendre", ils: "vont prendre", elles: "vont prendre",
    },
  },
},

/* ==================== 11. METTRE ==================== */
{
  infinitive: "mettre",
  english: "to put / to place",
  conjugations: {
    present: {
      je: "mets", tu: "mets", il: "met", elle: "met", on: "met",
      nous: "mettons", vous: "mettez", ils: "mettent", elles: "mettent",
    },
    passeCompose: {
      je: "ai mis", tu: "as mis", il: "a mis", elle: "a mis", on: "a mis",
      nous: "avons mis", vous: "avez mis", ils: "ont mis", elles: "ont mis",
    },
    imparfait: {
      je: "mettais", tu: "mettais", il: "mettait", elle: "mettait", on: "mettait",
      nous: "mettions", vous: "mettiez", ils: "mettaient", elles: "mettaient",
    },
    futurSimple: {
      je: "mettrai", tu: "mettras", il: "mettra", elle: "mettra", on: "mettra",
      nous: "mettrons", vous: "mettrez", ils: "mettront", elles: "mettront",
    },
    conditionnelPresent: {
      je: "mettrais", tu: "mettrais", il: "mettrait", elle: "mettrait", on: "mettrait",
      nous: "mettrions", vous: "mettriez", ils: "mettraient", elles: "mettraient",
    },
    plusQueParfait: {
      je: "avais mis", tu: "avais mis", il: "avait mis", elle: "avait mis", on: "avait mis",
      nous: "avions mis", vous: "aviez mis", ils: "avaient mis", elles: "avaient mis",
    },
    futurProche: {
      je: "vais mettre", tu: "vas mettre", il: "va mettre", elle: "va mettre", on: "va mettre",
      nous: "allons mettre", vous: "allez mettre", ils: "vont mettre", elles: "vont mettre",
    },
  },
},

/* ==================== 12. VOIR ==================== */
{
  infinitive: "voir",
  english: "to see",
  conjugations: {
    present: {
      je: "vois", tu: "vois", il: "voit", elle: "voit", on: "voit",
      nous: "voyons", vous: "voyez", ils: "voient", elles: "voient",
    },
    passeCompose: {
      je: "ai vu", tu: "as vu", il: "a vu", elle: "a vu", on: "a vu",
      nous: "avons vu", vous: "avez vu", ils: "ont vu", elles: "ont vu",
    },
    imparfait: {
      je: "voyais", tu: "voyais", il: "voyait", elle: "voyait", on: "voyait",
      nous: "voyions", vous: "voyiez", ils: "voyaient", elles: "voyaient",
    },
    futurSimple: {
      je: "verrai", tu: "verras", il: "verra", elle: "verra", on: "verra",
      nous: "verrons", vous: "verrez", ils: "verront", elles: "verront",
    },
    conditionnelPresent: {
      je: "verrais", tu: "verrais", il: "verrait", elle: "verrait", on: "verrait",
      nous: "verrions", vous: "verriez", ils: "verraient", elles: "verraient",
    },
    plusQueParfait: {
      je: "avais vu", tu: "avais vu", il: "avait vu", elle: "avait vu", on: "avait vu",
      nous: "avions vu", vous: "aviez vu", ils: "avaient vu", elles: "avaient vu",
    },
    futurProche: {
      je: "vais voir", tu: "vas voir", il: "va voir", elle: "va voir", on: "va voir",
      nous: "allons voir", vous: "allez voir", ils: "vont voir", elles: "vont voir",
    },
  },
},

/* ==================== 13. BOIRE ==================== */
{
  infinitive: "boire",
  english: "to drink",
  conjugations: {
    present: {
      je: "bois", tu: "bois", il: "boit", elle: "boit", on: "boit",
      nous: "buvons", vous: "buvez", ils: "boivent", elles: "boivent",
    },
    passeCompose: {
      je: "ai bu", tu: "as bu", il: "a bu", elle: "a bu", on: "a bu",
      nous: "avons bu", vous: "avez bu", ils: "ont bu", elles: "ont bu",
    },
    imparfait: {
      je: "buvais", tu: "buvais", il: "buvait", elle: "buvait", on: "buvait",
      nous: "buvions", vous: "buviez", ils: "buvaient", elles: "buvaient",
    },
    futurSimple: {
      je: "boirai", tu: "boiras", il: "boira", elle: "boira", on: "boira",
      nous: "boirons", vous: "boirez", ils: "boiront", elles: "boiront",
    },
    conditionnelPresent: {
      je: "boirais", tu: "boirais", il: "boirait", elle: "boirait", on: "boirait",
      nous: "boirions", vous: "boiriez", ils: "boiraient", elles: "boiraient",
    },
    plusQueParfait: {
      je: "avais bu", tu: "avais bu", il: "avait bu", elle: "avait bu", on: "avait bu",
      nous: "avions bu", vous: "aviez bu", ils: "avaient bu", elles: "avaient bu",
    },
    futurProche: {
      je: "vais boire", tu: "vas boire", il: "va boire", elle: "va boire", on: "va boire",
      nous: "allons boire", vous: "allez boire", ils: "vont boire", elles: "vont boire",
    },
  },
},

/* ==================== 14. DORMIR ==================== */
{
  infinitive: "dormir",
  english: "to sleep",
  conjugations: {
    present: {
      je: "dors", tu: "dors", il: "dort", elle: "dort", on: "dort",
      nous: "dormons", vous: "dormez", ils: "dorment", elles: "dorment",
    },
    passeCompose: {
      je: "ai dormi", tu: "as dormi", il: "a dormi", elle: "a dormi", on: "a dormi",
      nous: "avons dormi", vous: "avez dormi", ils: "ont dormi", elles: "ont dormi",
    },
    imparfait: {
      je: "dormais", tu: "dormais", il: "dormait", elle: "dormait", on: "dormait",
      nous: "dormions", vous: "dormiez", ils: "dormaient", elles: "dormaient",
    },
    futurSimple: {
      je: "dormirai", tu: "dormiras", il: "dormira", elle: "dormira", on: "dormira",
      nous: "dormirons", vous: "dormirez", ils: "dormiront", elles: "dormiront",
    },
    conditionnelPresent: {
      je: "dormirais", tu: "dormirais", il: "dormirait", elle: "dormirait", on: "dormirait",
      nous: "dormirions", vous: "dormiriez", ils: "dormiraient", elles: "dormiraient",
    },
    plusQueParfait: {
      je: "avais dormi", tu: "avais dormi", il: "avait dormi", elle: "avait dormi", on: "avait dormi",
      nous: "avions dormi", vous: "aviez dormi", ils: "avaient dormi", elles: "avaient dormi",
    },
    futurProche: {
      je: "vais dormir", tu: "vas dormir", il: "va dormir", elle: "va dormir", on: "va dormir",
      nous: "allons dormir", vous: "allez dormir", ils: "vont dormir", elles: "vont dormir",
    },
  },
},

/* ==================== 15. PARTIR ==================== */
{
  infinitive: "partir",
  english: "to leave",
  conjugations: {
    present: {
      je: "pars", tu: "pars", il: "part", elle: "part", on: "part",
      nous: "partons", vous: "partez", ils: "partent", elles: "partent",
    },
    passeCompose: {
      je: "suis parti", tu: "es parti", il: "est parti", elle: "est partie", on: "est parti",
      nous: "sommes partis", vous: "êtes parti", ils: "sont partis", elles: "sont parties",
    },
    imparfait: {
      je: "partais", tu: "partais", il: "partait", elle: "partait", on: "partait",
      nous: "partions", vous: "partiez", ils: "partaient", elles: "partaient",
    },
    futurSimple: {
      je: "partirai", tu: "partiras", il: "partira", elle: "partira", on: "partira",
      nous: "partirons", vous: "partirez", ils: "partiront", elles: "partiront",
    },
    conditionnelPresent: {
      je: "partirais", tu: "partirais", il: "partirait", elle: "partirait", on: "partirait",
      nous: "partirions", vous: "partiriez", ils: "partiraient", elles: "partiraient",
    },
    plusQueParfait: {
      je: "étais parti", tu: "étais parti", il: "était parti", elle: "était partie", on: "était parti",
      nous: "étions partis", vous: "étiez parti", ils: "étaient partis", elles: "étaient parties",
    },
    futurProche: {
      je: "vais partir", tu: "vas partir", il: "va partir", elle: "va partir", on: "va partir",
      nous: "allons partir", vous: "allez partir", ils: "vont partir", elles: "vont partir",
    },
  },
},

/* ==================== 16. SORTIR ==================== */
{
  infinitive: "sortir",
  english: "to go out / to leave",
  conjugations: {
    present: {
      je: "sors", tu: "sors", il: "sort", elle: "sort", on: "sort",
      nous: "sortons", vous: "sortez", ils: "sortent", elles: "sortent",
    },
    passeCompose: {
      je: "suis sorti", tu: "es sorti", il: "est sorti", elle: "est sortie", on: "est sorti",
      nous: "sommes sortis", vous: "êtes sorti", ils: "sont sortis", elles: "sont sorties",
    },
    imparfait: {
      je: "sortais", tu: "sortais", il: "sortait", elle: "sortait", on: "sortait",
      nous: "sortions", vous: "sortiez", ils: "sortaient", elles: "sortaient",
    },
    futurSimple: {
      je: "sortirai", tu: "sortiras", il: "sortira", elle: "sortira", on: "sortira",
      nous: "sortirons", vous: "sortirez", ils: "sortiront", elles: "sortiront",
    },
    conditionnelPresent: {
      je: "sortirais", tu: "sortirais", il: "sortirait", elle: "sortirait", on: "sortirait",
      nous: "sortirions", vous: "sortiriez", ils: "sortiraient", elles: "sortiraient",
    },
    plusQueParfait: {
      je: "étais sorti", tu: "étais sorti", il: "était sorti", elle: "était sortie", on: "était sorti",
      nous: "étions sortis", vous: "étiez sorti", ils: "étaient sortis", elles: "étaient sorties",
    },
    futurProche: {
      je: "vais sortir", tu: "vas sortir", il: "va sortir", elle: "va sortir", on: "va sortir",
      nous: "allons sortir", vous: "allez sortir", ils: "vont sortir", elles: "vont sortir",
    },
  },
},

/* ==================== 17. ÉCRIRE ==================== */
{
  infinitive: "écrire",
  english: "to write",
  conjugations: {
    present: {
      je: "écris", tu: "écris", il: "écrit", elle: "écrit", on: "écrit",
      nous: "écrivons", vous: "écrivez", ils: "écrivent", elles: "écrivent",
    },
    passeCompose: {
      je: "ai écrit", tu: "as écrit", il: "a écrit", elle: "a écrit", on: "a écrit",
      nous: "avons écrit", vous: "avez écrit", ils: "ont écrit", elles: "ont écrit",
    },
    imparfait: {
      je: "écrivais", tu: "écrivais", il: "écrivait", elle: "écrivait", on: "écrivait",
      nous: "écrivions", vous: "écriviez", ils: "écrivaient", elles: "écrivaient",
    },
    futurSimple: {
      je: "écrirai", tu: "écriras", il: "écrira", elle: "écrira", on: "écrira",
      nous: "écrirons", vous: "écrirez", ils: "écriront", elles: "écriront",
    },
    conditionnelPresent: {
      je: "écrirais", tu: "écrirais", il: "écrirait", elle: "écrirait", on: "écrirait",
      nous: "écririons", vous: "écririez", ils: "écriraient", elles: "écriraient",
    },
    plusQueParfait: {
      je: "avais écrit", tu: "avais écrit", il: "avait écrit", elle: "avait écrit", on: "avait écrit",
      nous: "avions écrit", vous: "aviez écrit", ils: "avaient écrit", elles: "avaient écrit",
    },
    futurProche: {
      je: "vais écrire", tu: "vas écrire", il: "va écrire", elle: "va écrire", on: "va écrire",
      nous: "allons écrire", vous: "allez écrire", ils: "vont écrire", elles: "vont écrire",
    },
  },
},

/* ==================== 18. LIRE ==================== */
{
  infinitive: "lire",
  english: "to read",
  conjugations: {
    present: {
      je: "lis", tu: "lis", il: "lit", elle: "lit", on: "lit",
      nous: "lisons", vous: "lisez", ils: "lisent", elles: "lisent",
    },
    passeCompose: {
      je: "ai lu", tu: "as lu", il: "a lu", elle: "a lu", on: "a lu",
      nous: "avons lu", vous: "avez lu", ils: "ont lu", elles: "ont lu",
    },
    imparfait: {
      je: "lisais", tu: "lisais", il: "lisait", elle: "lisait", on: "lisait",
      nous: "lisions", vous: "lisiez", ils: "lisaient", elles: "lisaient",
    },
    futurSimple: {
      je: "lirai", tu: "liras", il: "lira", elle: "lira", on: "lira",
      nous: "lirons", vous: "lirez", ils: "liront", elles: "liront",
    },
    conditionnelPresent: {
      je: "lirais", tu: "lirais", il: "lirait", elle: "lirait", on: "lirait",
      nous: "lirions", vous: "liriez", ils: "liraient", elles: "liraient",
    },
    plusQueParfait: {
      je: "avais lu", tu: "avais lu", il: "avait lu", elle: "avait lu", on: "avait lu",
      nous: "avions lu", vous: "aviez lu", ils: "avaient lu", elles: "avaient lu",
    },
    futurProche: {
      je: "vais lire", tu: "vas lire", il: "va lire", elle: "va lire", on: "va lire",
      nous: "allons lire", vous: "allez lire", ils: "vont lire", elles: "vont lire",
    },
  },
},

/* ==================== 19. APPRENDRE ==================== */
{
  infinitive: "apprendre",
  english: "to learn",
  conjugations: {
    present: {
      je: "apprends", tu: "apprends", il: "apprend", elle: "apprend", on: "apprend",
      nous: "apprenons", vous: "apprenez", ils: "apprennent", elles: "apprennent",
    },
    passeCompose: {
      je: "ai appris", tu: "as appris", il: "a appris", elle: "a appris", on: "a appris",
      nous: "avons appris", vous: "avez appris", ils: "ont appris", elles: "ont appris",
    },
    imparfait: {
      je: "apprenais", tu: "apprenais", il: "apprenait", elle: "apprenait", on: "apprenait",
      nous: "apprenions", vous: "appreniez", ils: "apprenaient", elles: "apprenaient",
    },
    futurSimple: {
      je: "apprendrai", tu: "apprendras", il: "apprendra", elle: "apprendra", on: "apprendra",
      nous: "apprendrons", vous: "apprendrez", ils: "apprendront", elles: "apprendront",
    },
    conditionnelPresent: {
      je: "apprendrais", tu: "apprendrais", il: "apprendrait", elle: "apprendrait", on: "apprendrait",
      nous: "apprendrions", vous: "apprendriez", ils: "apprendraient", elles: "apprendraient",
    },
    plusQueParfait: {
      je: "avais appris", tu: "avais appris", il: "avait appris", elle: "avait appris", on: "avait appris",
      nous: "avions appris", vous: "aviez appris", ils: "avaient appris", elles: "avaient appris",
    },
    futurProche: {
      je: "vais apprendre", tu: "vas apprendre", il: "va apprendre", elle: "va apprendre", on: "va apprendre",
      nous: "allons apprendre", vous: "allez apprendre", ils: "vont apprendre", elles: "vont apprendre",
    },
  },
},

/* ==================== 20. COMPRENDRE ==================== */
{
  infinitive: "comprendre",
  english: "to understand",
  conjugations: {
    present: {
      je: "comprends", tu: "comprends", il: "comprend", elle: "comprend", on: "comprend",
      nous: "comprenons", vous: "comprenez", ils: "comprennent", elles: "comprennent",
    },
    passeCompose: {
      je: "ai compris", tu: "as compris", il: "a compris", elle: "a compris", on: "a compris",
      nous: "avons compris", vous: "avez compris", ils: "ont compris", elles: "ont compris",
    },
    imparfait: {
      je: "comprenais", tu: "comprenais", il: "comprenait", elle: "comprenait", on: "comprenait",
      nous: "comprenions", vous: "compreniez", ils: "comprenaient", elles: "comprenaient",
    },
    futurSimple: {
      je: "comprendrai", tu: "comprendras", il: "comprendra", elle: "comprendra", on: "comprendra",
      nous: "comprendrons", vous: "comprendrez", ils: "comprendront", elles: "comprendront",
    },
    conditionnelPresent: {
      je: "comprendrais", tu: "comprendrais", il: "comprendrait", elle: "comprendrait", on: "comprendrait",
      nous: "comprendrions", vous: "comprendriez", ils: "comprendraient", elles: "comprendraient",
    },
    plusQueParfait: {
      je: "avais compris", tu: "avais compris", il: "avait compris", elle: "avait compris", on: "avait compris",
      nous: "avions compris", vous: "aviez compris", ils: "avaient compris", elles: "avaient compris",
    },
    futurProche: {
      je: "vais comprendre", tu: "vas comprendre", il: "va comprendre", elle: "va comprendre", on: "va comprendre",
      nous: "allons comprendre", vous: "allez comprendre", ils: "vont comprendre", elles: "vont comprendre",
    },
  },
},

/* ==================== 21. CONNAÎTRE ==================== */
{
  infinitive: "connaître",
  english: "to know / to be familiar with",
  conjugations: {
    present: {
      je: "connais", tu: "connais", il: "connaît", elle: "connaît", on: "connaît",
      nous: "connaissons", vous: "connaissez", ils: "connaissent", elles: "connaissent",
    },
    passeCompose: {
      je: "ai connu", tu: "as connu", il: "a connu", elle: "a connu", on: "a connu",
      nous: "avons connu", vous: "avez connu", ils: "ont connu", elles: "ont connu",
    },
    imparfait: {
      je: "connaissais", tu: "connaissais", il: "connaissait", elle: "connaissait", on: "connaissait",
      nous: "connaissions", vous: "connaissiez", ils: "connaissaient", elles: "connaissaient",
    },
    futurSimple: {
      je: "connaîtrai", tu: "connaîtras", il: "connaîtra", elle: "connaîtra", on: "connaîtra",
      nous: "connaîtrons", vous: "connaîtrez", ils: "connaîtront", elles: "connaîtront",
    },
    conditionnelPresent: {
      je: "connaîtrais", tu: "connaîtrais", il: "connaîtrait", elle: "connaîtrait", on: "connaîtrait",
      nous: "connaîtrions", vous: "connaîtriez", ils: "connaîtraient", elles: "connaîtraient",
    },
    plusQueParfait: {
      je: "avais connu", tu: "avais connu", il: "avait connu", elle: "avait connu", on: "avait connu",
      nous: "avions connu", vous: "aviez connu", ils: "avaient connu", elles: "avaient connu",
    },
    futurProche: {
      je: "vais connaître", tu: "vas connaître", il: "va connaître", elle: "va connaître", on: "va connaître",
      nous: "allons connaître", vous: "allez connaître", ils: "vont connaître", elles: "vont connaître",
    },
  },
},

/* ==================== 22. CROIRE ==================== */
{
  infinitive: "croire",
  english: "to believe",
  conjugations: {
    present: {
      je: "crois", tu: "crois", il: "croit", elle: "croit", on: "croit",
      nous: "croyons", vous: "croyez", ils: "croient", elles: "croient",
    },
    passeCompose: {
      je: "ai cru", tu: "as cru", il: "a cru", elle: "a cru", on: "a cru",
      nous: "avons cru", vous: "avez cru", ils: "ont cru", elles: "ont cru",
    },
    imparfait: {
      je: "croyais", tu: "croyais", il: "croyait", elle: "croyait", on: "croyait",
      nous: "croyions", vous: "croyiez", ils: "croyaient", elles: "croyaient",
    },
    futurSimple: {
      je: "croirai", tu: "croiras", il: "croira", elle: "croira", on: "croira",
      nous: "croirons", vous: "croirez", ils: "croiront", elles: "croiront",
    },
    conditionnelPresent: {
      je: "croirais", tu: "croirais", il: "croirait", elle: "croirait", on: "croirait",
      nous: "croirions", vous: "croiriez", ils: "croiraient", elles: "croiraient",
    },
    plusQueParfait: {
      je: "avais cru", tu: "avais cru", il: "avait cru", elle: "avait cru", on: "avait cru",
      nous: "avions cru", vous: "aviez cru", ils: "avaient cru", elles: "avaient cru",
    },
    futurProche: {
      je: "vais croire", tu: "vas croire", il: "va croire", elle: "va croire", on: "va croire",
      nous: "allons croire", vous: "allez croire", ils: "vont croire", elles: "vont croire",
    },
  },
},

/* ==================== 23. DEVOIR ==================== */
{
  infinitive: "devoir",
  english: "must / to have to",
  conjugations: {
    present: {
      je: "dois", tu: "dois", il: "doit", elle: "doit", on: "doit",
      nous: "devons", vous: "devez", ils: "doivent", elles: "doivent",
    },
    passeCompose: {
      je: "ai dû", tu: "as dû", il: "a dû", elle: "a dû", on: "a dû",
      nous: "avons dû", vous: "avez dû", ils: "ont dû", elles: "ont dû",
    },
    imparfait: {
      je: "devais", tu: "devais", il: "devait", elle: "devait", on: "devait",
      nous: "devions", vous: "deviez", ils: "devaient", elles: "devaient",
    },
    futurSimple: {
      je: "devrai", tu: "devras", il: "devra", elle: "devra", on: "devra",
      nous: "devrons", vous: "devrez", ils: "devront", elles: "devront",
    },
    conditionnelPresent: {
      je: "devrais", tu: "devrais", il: "devrait", elle: "devrait", on: "devrait",
      nous: "devrions", vous: "devriez", ils: "devraient", elles: "devraient",
    },
    plusQueParfait: {
      je: "avais dû", tu: "avais dû", il: "avait dû", elle: "avait dû", on: "avait dû",
      nous: "avions dû", vous: "aviez dû", ils: "avaient dû", elles: "avaient dû",
    },
    futurProche: {
      je: "vais devoir", tu: "vas devoir", il: "va devoir", elle: "va devoir", on: "va devoir",
      nous: "allons devoir", vous: "allez devoir", ils: "vont devoir", elles: "vont devoir",
    },
  },
},

/* ==================== 24. TENIR ==================== */
{
  infinitive: "tenir",
  english: "to hold",
  conjugations: {
    present: {
      je: "tiens", tu: "tiens", il: "tient", elle: "tient", on: "tient",
      nous: "tenons", vous: "tenez", ils: "tiennent", elles: "tiennent",
    },
    passeCompose: {
      je: "ai tenu", tu: "as tenu", il: "a tenu", elle: "a tenu", on: "a tenu",
      nous: "avons tenu", vous: "avez tenu", ils: "ont tenu", elles: "ont tenu",
    },
    imparfait: {
      je: "tenais", tu: "tenais", il: "tenait", elle: "tenait", on: "tenait",
      nous: "tenions", vous: "teniez", ils: "tenaient", elles: "tenaient",
    },
    futurSimple: {
      je: "tiendrai", tu: "tiendras", il: "tiendra", elle: "tiendra", on: "tiendra",
      nous: "tiendrons", vous: "tiendrez", ils: "tiendront", elles: "tiendront",
    },
    conditionnelPresent: {
      je: "tiendrais", tu: "tiendrais", il: "tiendrait", elle: "tiendrait", on: "tiendrait",
      nous: "tiendrions", vous: "tiendriez", ils: "tiendraient", elles: "tiendraient",
    },
    plusQueParfait: {
      je: "avais tenu", tu: "avais tenu", il: "avait tenu", elle: "avait tenu", on: "avait tenu",
      nous: "avions tenu", vous: "aviez tenu", ils: "avaient tenu", elles: "avaient tenu",
    },
    futurProche: {
      je: "vais tenir", tu: "vas tenir", il: "va tenir", elle: "va tenir", on: "va tenir",
      nous: "allons tenir", vous: "allez tenir", ils: "vont tenir", elles: "vont tenir",
    },
  },
},

/* ==================== 25. ATTENDRE ==================== */
{
  infinitive: "attendre",
  english: "to wait",
  conjugations: {
    present: {
      je: "attends", tu: "attends", il: "attend", elle: "attend", on: "attend",
      nous: "attendons", vous: "attendez", ils: "attendent", elles: "attendent",
    },
    passeCompose: {
      je: "ai attendu", tu: "as attendu", il: "a attendu", elle: "a attendu", on: "a attendu",
      nous: "avons attendu", vous: "avez attendu", ils: "ont attendu", elles: "ont attendu",
    },
    imparfait: {
      je: "attendais", tu: "attendais", il: "attendait", elle: "attendait", on: "attendait",
      nous: "attendions", vous: "attendiez", ils: "attendaient", elles: "attendaient",
    },
    futurSimple: {
      je: "attendrai", tu: "attendras", il: "attendra", elle: "attendra", on: "attendra",
      nous: "attendrons", vous: "attendrez", ils: "attendront", elles: "attendront",
    },
    conditionnelPresent: {
      je: "attendrais", tu: "attendrais", il: "attendrait", elle: "attendrait", on: "attendrait",
      nous: "attendrions", vous: "attendriez", ils: "attendraient", elles: "attendraient",
    },
    plusQueParfait: {
      je: "avais attendu", tu: "avais attendu", il: "avait attendu", elle: "avait attendu", on: "avait attendu",
      nous: "avions attendu", vous: "aviez attendu", ils: "avaient attendu", elles: "avaient attendu",
    },
    futurProche: {
      je: "vais attendre", tu: "vas attendre", il: "va attendre", elle: "va attendre", on: "va attendre",
      nous: "allons attendre", vous: "allez attendre", ils: "vont attendre", elles: "vont attendre",
    },
  },
},

/* ==================== 26. VIVRE ==================== */
{
  infinitive: "vivre",
  english: "to live",
  conjugations: {
    present: {
      je: "vis", tu: "vis", il: "vit", elle: "vit", on: "vit",
      nous: "vivons", vous: "vivez", ils: "vivent", elles: "vivent",
    },
    passeCompose: {
      je: "ai vécu", tu: "as vécu", il: "a vécu", elle: "a vécu", on: "a vécu",
      nous: "avons vécu", vous: "avez vécu", ils: "ont vécu", elles: "ont vécu",
    },
    imparfait: {
      je: "vivais", tu: "vivais", il: "vivait", elle: "vivait", on: "vivait",
      nous: "vivions", vous: "viviez", ils: "vivaient", elles: "vivaient",
    },
    futurSimple: {
      je: "vivrai", tu: "vivras", il: "vivra", elle: "vivra", on: "vivra",
      nous: "vivrons", vous: "vivrez", ils: "vivront", elles: "vivront",
    },
    conditionnelPresent: {
      je: "vivrais", tu: "vivrais", il: "vivrait", elle: "vivrait", on: "vivrait",
      nous: "vivrions", vous: "vivriez", ils: "vivraient", elles: "vivraient",
    },
    plusQueParfait: {
      je: "avais vécu", tu: "avais vécu", il: "avait vécu", elle: "avait vécu", on: "avait vécu",
      nous: "avions vécu", vous: "aviez vécu", ils: "avaient vécu", elles: "avaient vécu",
    },
    futurProche: {
      je: "vais vivre", tu: "vas vivre", il: "va vivre", elle: "va vivre", on: "va vivre",
      nous: "allons vivre", vous: "allez vivre", ils: "vont vivre", elles: "vont vivre",
    },
  },
},

/* ==================== 27. MOURIR ==================== */
{
  infinitive: "mourir",
  english: "to die",
  conjugations: {
    present: {
      je: "meurs", tu: "meurs", il: "meurt", elle: "meurt", on: "meurt",
      nous: "mourons", vous: "mourez", ils: "meurent", elles: "meurent",
    },
    passeCompose: {
      je: "suis mort", tu: "es mort", il: "est mort", elle: "est morte", on: "est mort",
      nous: "sommes morts", vous: "êtes mort", ils: "sont morts", elles: "sont mortes",
    },
    imparfait: {
      je: "mourais", tu: "mourais", il: "mourait", elle: "mourait", on: "mourait",
      nous: "mourions", vous: "mouriez", ils: "mouraient", elles: "mouraient",
    },
    futurSimple: {
      je: "mourrai", tu: "mourras", il: "mourra", elle: "mourra", on: "mourra",
      nous: "mourrons", vous: "mourrez", ils: "mourront", elles: "mourront",
    },
    conditionnelPresent: {
      je: "mourrais", tu: "mourrais", il: "mourrait", elle: "mourrait", on: "mourrait",
      nous: "mourrions", vous: "mourriez", ils: "mourraient", elles: "mourraient",
    },
    plusQueParfait: {
      je: "étais mort", tu: "étais mort", il: "était mort", elle: "était morte", on: "était mort",
      nous: "étions morts", vous: "étiez mort", ils: "étaient morts", elles: "étaient mortes",
    },
    futurProche: {
      je: "vais mourir", tu: "vas mourir", il: "va mourir", elle: "va mourir", on: "va mourir",
      nous: "allons mourir", vous: "allez mourir", ils: "vont mourir", elles: "vont mourir",
    },
  },
},

/* ==================== 28. NAÎTRE ==================== */
{
  infinitive: "naître",
  english: "to be born",
  conjugations: {
    present: {
      je: "nais", tu: "nais", il: "naît", elle: "naît", on: "naît",
      nous: "naissons", vous: "naissez", ils: "naissent", elles: "naissent",
    },
    passeCompose: {
      je: "suis né", tu: "es né", il: "est né", elle: "est née", on: "est né",
      nous: "sommes nés", vous: "êtes né", ils: "sont nés", elles: "sont nées",
    },
    imparfait: {
      je: "naissais", tu: "naissais", il: "naissait", elle: "naissait", on: "naissait",
      nous: "naissions", vous: "naissiez", ils: "naissaient", elles: "naissaient",
    },
    futurSimple: {
      je: "naîtrai", tu: "naîtras", il: "naîtra", elle: "naîtra", on: "naîtra",
      nous: "naîtrons", vous: "naîtrez", ils: "naîtront", elles: "naîtront",
    },
    conditionnelPresent: {
      je: "naîtrais", tu: "naîtrais", il: "naîtrait", elle: "naîtrait", on: "naîtrait",
      nous: "naîtrions", vous: "naîtriez", ils: "naîtraient", elles: "naîtraient",
    },
    plusQueParfait: {
      je: "étais né", tu: "étais né", il: "était né", elle: "était née", on: "était né",
      nous: "étions nés", vous: "étiez né", ils: "étaient nés", elles: "étaient nées",
    },
    futurProche: {
      je: "vais naître", tu: "vas naître", il: "va naître", elle: "va naître", on: "va naître",
      nous: "allons naître", vous: "allez naître", ils: "vont naître", elles: "vont naître",
    },
  },
},

/* ==================== 29. VENIR ==================== */
{
  infinitive: "revenir",
  english: "to come back",
  conjugations: {
    present: {
      je: "reviens", tu: "reviens", il: "revient", elle: "revient", on: "revient",
      nous: "revenons", vous: "revenez", ils: "reviennent", elles: "reviennent",
    },
    passeCompose: {
      je: "suis revenu", tu: "es revenu", il: "est revenu", elle: "est revenue", on: "est revenu",
      nous: "sommes revenus", vous: "êtes revenu", ils: "sont revenus", elles: "sont revenues",
    },
    imparfait: {
      je: "revenais", tu: "revenais", il: "revenait", elle: "revenait", on: "revenait",
      nous: "revenions", vous: "reveniez", ils: "revenaient", elles: "revenaient",
    },
    futurSimple: {
      je: "reviendrai", tu: "reviendras", il: "reviendra", elle: "reviendra", on: "reviendra",
      nous: "reviendrons", vous: "reviendrez", ils: "reviendront", elles: "reviendront",
    },
    conditionnelPresent: {
      je: "reviendrais", tu: "reviendrais", il: "reviendrait", elle: "reviendrait", on: "reviendrait",
      nous: "reviendrions", vous: "reviendriez", ils: "reviendraient", elles: "reviendraient",
    },
    plusQueParfait: {
      je: "étais revenu", tu: "étais revenu", il: "était revenu", elle: "était revenue", on: "était revenu",
      nous: "étions revenus", vous: "étiez revenu", ils: "étaient revenus", elles: "étaient revenues",
    },
    futurProche: {
      je: "vais revenir", tu: "vas revenir", il: "va revenir", elle: "va revenir", on: "va revenir",
      nous: "allons revenir", vous: "allez revenir", ils: "vont revenir", elles: "vont revenir",
    },
  },
},

/* ==================== 30. VENIR — ATTENTION: DIRE ==================== */
{
  infinitive: "parler",
  english: "to speak / to talk",
  conjugations: {
    present: {
      je: "parle", tu: "parles", il: "parle", elle: "parle", on: "parle",
      nous: "parlons", vous: "parlez", ils: "parlent", elles: "parlent",
    },
    passeCompose: {
      je: "ai parlé", tu: "as parlé", il: "a parlé", elle: "a parlé", on: "a parlé",
      nous: "avons parlé", vous: "avez parlé", ils: "ont parlé", elles: "ont parlé",
    },
    imparfait: {
      je: "parlais", tu: "parlais", il: "parlait", elle: "parlait", on: "parlait",
      nous: "parlions", vous: "parliez", ils: "parlaient", elles: "parlaient",
    },
    futurSimple: {
      je: "parlerai", tu: "parleras", il: "parlera", elle: "parlera", on: "parlera",
      nous: "parlerons", vous: "parlerez", ils: "parleront", elles: "parleront",
    },
    conditionnelPresent: {
      je: "parlerais", tu: "parlerais", il: "parlerait", elle: "parlerait", on: "parlerait",
      nous: "parlerions", vous: "parleriez", ils: "parleraient", elles: "parleraient",
    },
    plusQueParfait: {
      je: "avais parlé", tu: "avais parlé", il: "avait parlé", elle: "avait parlé", on: "avait parlé",
      nous: "avions parlé", vous: "aviez parlé", ils: "avaient parlé", elles: "avaient parlé",
    },
    futurProche: {
      je: "vais parler", tu: "vas parler", il: "va parler", elle: "va parler", on: "va parler",
      nous: "allons parler", vous: "allez parler", ils: "vont parler", elles: "vont parler",
    },
  },
},

/* ==================== 31. AIMER ==================== */
{
  infinitive: "aimer",
  english: "to like / to love",
  conjugations: {
    present: {
      je: "aime", tu: "aimes", il: "aime", elle: "aime", on: "aime",
      nous: "aimons", vous: "aimez", ils: "aiment", elles: "aiment",
    },
    passeCompose: {
      je: "ai aimé", tu: "as aimé", il: "a aimé", elle: "a aimé", on: "a aimé",
      nous: "avons aimé", vous: "avez aimé", ils: "ont aimé", elles: "ont aimé",
    },
    imparfait: {
      je: "aimais", tu: "aimais", il: "aimait", elle: "aimait", on: "aimait",
      nous: "aimions", vous: "aimiez", ils: "aimaient", elles: "aimaient",
    },
    futurSimple: {
      je: "aimerai", tu: "aimeras", il: "aimera", elle: "aimera", on: "aimera",
      nous: "aimerons", vous: "aimerez", ils: "aimeront", elles: "aimeront",
    },
    conditionnelPresent: {
      je: "aimerais", tu: "aimerais", il: "aimerait", elle: "aimerait", on: "aimerait",
      nous: "aimerions", vous: "aimeriez", ils: "aimeraient", elles: "aimeraient",
    },
    plusQueParfait: {
      je: "avais aimé", tu: "avais aimé", il: "avait aimé", elle: "avait aimé", on: "avait aimé",
      nous: "avions aimé", vous: "aviez aimé", ils: "avaient aimé", elles: "avaient aimé",
    },
    futurProche: {
      je: "vais aimer", tu: "vas aimer", il: "va aimer", elle: "va aimer", on: "va aimer",
      nous: "allons aimer", vous: "allez aimer", ils: "vont aimer", elles: "vont aimer",
    },
  },
},

/* ==================== 32. DONNER ==================== */
{
  infinitive: "donner",
  english: "to give",
  conjugations: {
    present: {
      je: "donne", tu: "donnes", il: "donne", elle: "donne", on: "donne",
      nous: "donnons", vous: "donnez", ils: "donnent", elles: "donnent",
    },
    passeCompose: {
      je: "ai donné", tu: "as donné", il: "a donné", elle: "a donné", on: "a donné",
      nous: "avons donné", vous: "avez donné", ils: "ont donné", elles: "ont donné",
    },
    imparfait: {
      je: "donnais", tu: "donnais", il: "donnait", elle: "donnait", on: "donnait",
      nous: "donnions", vous: "donniez", ils: "donnaient", elles: "donnaient",
    },
    futurSimple: {
      je: "donnerai", tu: "donneras", il: "donnera", elle: "donnera", on: "donnera",
      nous: "donnerons", vous: "donnerez", ils: "donneront", elles: "donneront",
    },
    conditionnelPresent: {
      je: "donnerais", tu: "donnerais", il: "donnerait", elle: "donnerait", on: "donnerait",
      nous: "donnerions", vous: "donneriez", ils: "donneraient", elles: "donneraient",
    },
    plusQueParfait: {
      je: "avais donné", tu: "avais donné", il: "avait donné", elle: "avait donné", on: "avait donné",
      nous: "avions donné", vous: "aviez donné", ils: "avaient donné", elles: "avaient donné",
    },
    futurProche: {
      je: "vais donner", tu: "vas donner", il: "va donner", elle: "va donner", on: "va donner",
      nous: "allons donner", vous: "allez donner", ils: "vont donner", elles: "vont donner",
    },
  },
},

/* ==================== 33. DEMANDER ==================== */
{
  infinitive: "demander",
  english: "to ask",
  conjugations: {
    present: {
      je: "demande", tu: "demandes", il: "demande", elle: "demande", on: "demande",
      nous: "demandons", vous: "demandez", ils: "demandent", elles: "demandent",
    },
    passeCompose: {
      je: "ai demandé", tu: "as demandé", il: "a demandé", elle: "a demandé", on: "a demandé",
      nous: "avons demandé", vous: "avez demandé", ils: "ont demandé", elles: "ont demandé",
    },
    imparfait: {
      je: "demandais", tu: "demandais", il: "demandait", elle: "demandait", on: "demandait",
      nous: "demandions", vous: "demandiez", ils: "demandaient", elles: "demandaient",
    },
    futurSimple: {
      je: "demanderai", tu: "demanderas", il: "demandera", elle: "demandera", on: "demandera",
      nous: "demanderons", vous: "demanderez", ils: "demanderont", elles: "demanderont",
    },
    conditionnelPresent: {
      je: "demanderais", tu: "demanderais", il: "demanderait", elle: "demanderait", on: "demanderait",
      nous: "demanderions", vous: "demanderiez", ils: "demanderaient", elles: "demanderaient",
    },
    plusQueParfait: {
      je: "avais demandé", tu: "avais demandé", il: "avait demandé", elle: "avait demandé", on: "avait demandé",
      nous: "avions demandé", vous: "aviez demandé", ils: "avaient demandé", elles: "avaient demandé",
    },
    futurProche: {
      je: "vais demander", tu: "vas demander", il: "va demander", elle: "va demander", on: "va demander",
      nous: "allons demander", vous: "allez demander", ils: "vont demander", elles: "vont demander",
    },
  },
},

/* ==================== 34. TROUVER ==================== */
{
  infinitive: "trouver",
  english: "to find",
  conjugations: {
    present: {
      je: "trouve", tu: "trouves", il: "trouve", elle: "trouve", on: "trouve",
      nous: "trouvons", vous: "trouvez", ils: "trouvent", elles: "trouvent",
    },
    passeCompose: {
      je: "ai trouvé", tu: "as trouvé", il: "a trouvé", elle: "a trouvé", on: "a trouvé",
      nous: "avons trouvé", vous: "avez trouvé", ils: "ont trouvé", elles: "ont trouvé",
    },
    imparfait: {
      je: "trouvais", tu: "trouvais", il: "trouvait", elle: "trouvait", on: "trouvait",
      nous: "trouvions", vous: "trouviez", ils: "trouvaient", elles: "trouvaient",
    },
    futurSimple: {
      je: "trouverai", tu: "trouveras", il: "trouvera", elle: "trouvera", on: "trouvera",
      nous: "trouverons", vous: "trouverez", ils: "trouveront", elles: "trouveront",
    },
    conditionnelPresent: {
      je: "trouverais", tu: "trouverais", il: "trouverait", elle: "trouverait", on: "trouverait",
      nous: "trouverions", vous: "trouveriez", ils: "trouveraient", elles: "trouveraient",
    },
    plusQueParfait: {
      je: "avais trouvé", tu: "avais trouvé", il: "avait trouvé", elle: "avait trouvé", on: "avait trouvé",
      nous: "avions trouvé", vous: "aviez trouvé", ils: "avaient trouvé", elles: "avaient trouvé",
    },
    futurProche: {
      je: "vais trouver", tu: "vas trouver", il: "va trouver", elle: "va trouver", on: "va trouver",
      nous: "allons trouver", vous: "allez trouver", ils: "vont trouver", elles: "vont trouver",
    },
  },
},

/* ==================== 35. PENSER ==================== */
{
  infinitive: "penser",
  english: "to think",
  conjugations: {
    present: {
      je: "pense", tu: "penses", il: "pense", elle: "pense", on: "pense",
      nous: "pensons", vous: "pensez", ils: "pensent", elles: "pensent",
    },
    passeCompose: {
      je: "ai pensé", tu: "as pensé", il: "a pensé", elle: "a pensé", on: "a pensé",
      nous: "avons pensé", vous: "avez pensé", ils: "ont pensé", elles: "ont pensé",
    },
    imparfait: {
      je: "pensais", tu: "pensais", il: "pensait", elle: "pensait", on: "pensait",
      nous: "pensions", vous: "pensiez", ils: "pensaient", elles: "pensaient",
    },
    futurSimple: {
      je: "penserai", tu: "penseras", il: "pensera", elle: "pensera", on: "pensera",
      nous: "penserons", vous: "penserez", ils: "penseront", elles: "penseront",
    },
    conditionnelPresent: {
      je: "penserais", tu: "penserais", il: "penserait", elle: "penserait", on: "penserait",
      nous: "penserions", vous: "penseriez", ils: "penseraient", elles: "penseraient",
    },
    plusQueParfait: {
      je: "avais pensé", tu: "avais pensé", il: "avait pensé", elle: "avait pensé", on: "avait pensé",
      nous: "avions pensé", vous: "aviez pensé", ils: "avaient pensé", elles: "avaient pensé",
    },
    futurProche: {
      je: "vais penser", tu: "vas penser", il: "va penser", elle: "va penser", on: "va penser",
      nous: "allons penser", vous: "allez penser", ils: "vont penser", elles: "vont penser",
    },
  },
},

/* ==================== 36. TRAVAILLER ==================== */
{
  infinitive: "travailler",
  english: "to work",
  conjugations: {
    present: {
      je: "travaille", tu: "travailles", il: "travaille", elle: "travaille", on: "travaille",
      nous: "travaillons", vous: "travaillez", ils: "travaillent", elles: "travaillent",
    },
    passeCompose: {
      je: "ai travaillé", tu: "as travaillé", il: "a travaillé", elle: "a travaillé", on: "a travaillé",
      nous: "avons travaillé", vous: "avez travaillé", ils: "ont travaillé", elles: "ont travaillé",
    },
    imparfait: {
      je: "travaillais", tu: "travaillais", il: "travaillait", elle: "travaillait", on: "travaillait",
      nous: "travaillions", vous: "travailliez", ils: "travaillaient", elles: "travaillaient",
    },
    futurSimple: {
      je: "travaillerai", tu: "travailleras", il: "travaillera", elle: "travaillera", on: "travaillera",
      nous: "travaillerons", vous: "travaillerez", ils: "travailleront", elles: "travailleront",
    },
    conditionnelPresent: {
      je: "travaillerais", tu: "travaillerais", il: "travaillerait", elle: "travaillerait", on: "travaillerait",
      nous: "travaillerions", vous: "travailleriez", ils: "travailleraient", elles: "travailleraient",
    },
    plusQueParfait: {
      je: "avais travaillé", tu: "avais travaillé", il: "avait travaillé", elle: "avait travaillé", on: "avait travaillé",
      nous: "avions travaillé", vous: "aviez travaillé", ils: "avaient travaillé", elles: "avaient travaillé",
    },
    futurProche: {
      je: "vais travailler", tu: "vas travailler", il: "va travailler", elle: "va travailler", on: "va travailler",
      nous: "allons travailler", vous: "allez travailler", ils: "vont travailler", elles: "vont travailler",
    },
  },
},

/* ==================== 37. JOUER ==================== */
{
  infinitive: "jouer",
  english: "to play",
  conjugations: {
    present: {
      je: "joue", tu: "joues", il: "joue", elle: "joue", on: "joue",
      nous: "jouons", vous: "jouez", ils: "jouent", elles: "jouent",
    },
    passeCompose: {
      je: "ai joué", tu: "as joué", il: "a joué", elle: "a joué", on: "a joué",
      nous: "avons joué", vous: "avez joué", ils: "ont joué", elles: "ont joué",
    },
    imparfait: {
      je: "jouais", tu: "jouais", il: "jouait", elle: "jouait", on: "jouait",
      nous: "jouions", vous: "jouiez", ils: "jouaient", elles: "jouaient",
    },
    futurSimple: {
      je: "jouerai", tu: "joueras", il: "jouera", elle: "jouera", on: "jouera",
      nous: "jouerons", vous: "jouerez", ils: "joueront", elles: "joueront",
    },
    conditionnelPresent: {
      je: "jouerais", tu: "jouerais", il: "jouerait", elle: "jouerait", on: "jouerait",
      nous: "jouerions", vous: "joueriez", ils: "joueraient", elles: "joueraient",
    },
    plusQueParfait: {
      je: "avais joué", tu: "avais joué", il: "avait joué", elle: "avait joué", on: "avait joué",
      nous: "avions joué", vous: "aviez joué", ils: "avaient joué", elles: "avaient joué",
    },
    futurProche: {
      je: "vais jouer", tu: "vas jouer", il: "va jouer", elle: "va jouer", on: "va jouer",
      nous: "allons jouer", vous: "allez jouer", ils: "vont jouer", elles: "vont jouer",
    },
  },
},

/* ==================== 38. MARCHER ==================== */
{
  infinitive: "marcher",
  english: "to walk",
  conjugations: {
    present: {
      je: "marche", tu: "marches", il: "marche", elle: "marche", on: "marche",
      nous: "marchons", vous: "marchez", ils: "marchent", elles: "marchent",
    },
    passeCompose: {
      je: "ai marché", tu: "as marché", il: "a marché", elle: "a marché", on: "a marché",
      nous: "avons marché", vous: "avez marché", ils: "ont marché", elles: "ont marché",
    },
    imparfait: {
      je: "marchais", tu: "marchais", il: "marchait", elle: "marchait", on: "marchait",
      nous: "marchions", vous: "marchiez", ils: "marchaient", elles: "marchaient",
    },
    futurSimple: {
      je: "marcherai", tu: "marcheras", il: "marchera", elle: "marchera", on: "marchera",
      nous: "marcherons", vous: "marcherez", ils: "marcheront", elles: "marcheront",
    },
    conditionnelPresent: {
      je: "marcherais", tu: "marcherais", il: "marcherait", elle: "marcherait", on: "marcherait",
      nous: "marcherions", vous: "marcheriez", ils: "marcheraient", elles: "marcheraient",
    },
    plusQueParfait: {
      je: "avais marché", tu: "avais marché", il: "avait marché", elle: "avait marché", on: "avait marché",
      nous: "avions marché", vous: "aviez marché", ils: "avaient marché", elles: "avaient marché",
    },
    futurProche: {
      je: "vais marcher", tu: "vas marcher", il: "va marcher", elle: "va marcher", on: "va marcher",
      nous: "allons marcher", vous: "allez marcher", ils: "vont marcher", elles: "vont marcher",
    },
  },
},

/* ==================== 39. ÉCOUTER ==================== */
{
  infinitive: "écouter",
  english: "to listen",
  conjugations: {
    present: {
      je: "écoute", tu: "écoutes", il: "écoute", elle: "écoute", on: "écoute",
      nous: "écoutons", vous: "écoutez", ils: "écoutent", elles: "écoutent",
    },
    passeCompose: {
      je: "ai écouté", tu: "as écouté", il: "a écouté", elle: "a écouté", on: "a écouté",
      nous: "avons écouté", vous: "avez écouté", ils: "ont écouté", elles: "ont écouté",
    },
    imparfait: {
      je: "écoutais", tu: "écoutais", il: "écoutait", elle: "écoutait", on: "écoutait",
      nous: "écoutions", vous: "écoutiez", ils: "écoutaient", elles: "écoutaient",
    },
    futurSimple: {
      je: "écouterai", tu: "écouteras", il: "écoutera", elle: "écoutera", on: "écoutera",
      nous: "écouterons", vous: "écouterez", ils: "écouteront", elles: "écouteront",
    },
    conditionnelPresent: {
      je: "écouterais", tu: "écouterais", il: "écouterait", elle: "écouterait", on: "écouterait",
      nous: "écouterions", vous: "écouteriez", ils: "écouteraient", elles: "écouteraient",
    },
    plusQueParfait: {
      je: "avais écouté", tu: "avais écouté", il: "avait écouté", elle: "avait écouté", on: "avait écouté",
      nous: "avions écouté", vous: "aviez écouté", ils: "avaient écouté", elles: "avaient écouté",
    },
    futurProche: {
      je: "vais écouter", tu: "vas écouter", il: "va écouter", elle: "va écouter", on: "va écouter",
      nous: "allons écouter", vous: "allez écouter", ils: "vont écouter", elles: "vont écouter",
    },
  },
},

/* ==================== 40. REGARDER ==================== */
{
  infinitive: "regarder",
  english: "to watch / to look at",
  conjugations: {
    present: {
      je: "regarde", tu: "regardes", il: "regarde", elle: "regarde", on: "regarde",
      nous: "regardons", vous: "regardez", ils: "regardent", elles: "regardent",
    },
    passeCompose: {
      je: "ai regardé", tu: "as regardé", il: "a regardé", elle: "a regardé", on: "a regardé",
      nous: "avons regardé", vous: "avez regardé", ils: "ont regardé", elles: "ont regardé",
    },
    imparfait: {
      je: "regardais", tu: "regardais", il: "regardait", elle: "regardait", on: "regardait",
      nous: "regardions", vous: "regardiez", ils: "regardaient", elles: "regardaient",
    },
    futurSimple: {
      je: "regarderai", tu: "regarderas", il: "regardera", elle: "regardera", on: "regardera",
      nous: "regarderons", vous: "regarderez", ils: "regarderont", elles: "regarderont",
    },
    conditionnelPresent: {
      je: "regarderais", tu: "regarderais", il: "regarderait", elle: "regarderait", on: "regarderait",
      nous: "regarderions", vous: "regarderiez", ils: "regarderaient", elles: "regarderaient",
    },
    plusQueParfait: {
      je: "avais regardé", tu: "avais regardé", il: "avait regardé", elle: "avait regardé", on: "avait regardé",
      nous: "avions regardé", vous: "aviez regardé", ils: "avaient regardé", elles: "avaient regardé",
    },
    futurProche: {
      je: "vais regarder", tu: "vas regarder", il: "va regarder", elle: "va regarder", on: "va regarder",
      nous: "allons regarder", vous: "allez regarder", ils: "vont regarder", elles: "vont regarder",
    },
  },
},

/* ==================== 41. ACHETER ==================== */
{
  infinitive: "acheter",
  english: "to buy",
  conjugations: {
    present: {
      je: "achète", tu: "achètes", il: "achète", elle: "achète", on: "achète",
      nous: "achetons", vous: "achetez", ils: "achètent", elles: "achètent",
    },
    passeCompose: {
      je: "ai acheté", tu: "as acheté", il: "a acheté", elle: "a acheté", on: "a acheté",
      nous: "avons acheté", vous: "avez acheté", ils: "ont acheté", elles: "ont acheté",
    },
    imparfait: {
      je: "achetais", tu: "achetais", il: "achetait", elle: "achetait", on: "achetait",
      nous: "achetions", vous: "achetiez", ils: "achetaient", elles: "achetaient",
    },
    futurSimple: {
      je: "achèterai", tu: "achèteras", il: "achètera", elle: "achètera", on: "achètera",
      nous: "achèterons", vous: "achèterez", ils: "achèteront", elles: "achèteront",
    },
    conditionnelPresent: {
      je: "achèterais", tu: "achèterais", il: "achèterait", elle: "achèterait", on: "achèterait",
      nous: "achèterions", vous: "achèteriez", ils: "achèteraient", elles: "achèteraient",
    },
    plusQueParfait: {
      je: "avais acheté", tu: "avais acheté", il: "avait acheté", elle: "avait acheté", on: "avait acheté",
      nous: "avions acheté", vous: "aviez acheté", ils: "avaient acheté", elles: "avaient acheté",
    },
    futurProche: {
      je: "vais acheter", tu: "vas acheter", il: "va acheter", elle: "va acheter", on: "va acheter",
      nous: "allons acheter", vous: "allez acheter", ils: "vont acheter", elles: "vont acheter",
    },
  },
},

/* ==================== 42. VENDRE ==================== */
{
  infinitive: "vendre",
  english: "to sell",
  conjugations: {
    present: {
      je: "vends", tu: "vends", il: "vend", elle: "vend", on: "vend",
      nous: "vendons", vous: "vendez", ils: "vendent", elles: "vendent",
    },
    passeCompose: {
      je: "ai vendu", tu: "as vendu", il: "a vendu", elle: "a vendu", on: "a vendu",
      nous: "avons vendu", vous: "avez vendu", ils: "ont vendu", elles: "ont vendu",
    },
    imparfait: {
      je: "vendais", tu: "vendais", il: "vendait", elle: "vendait", on: "vendait",
      nous: "vendions", vous: "vendiez", ils: "vendaient", elles: "vendaient",
    },
    futurSimple: {
      je: "vendrai", tu: "vendras", il: "vendra", elle: "vendra", on: "vendra",
      nous: "vendrons", vous: "vendrez", ils: "vendront", elles: "vendront",
    },
    conditionnelPresent: {
      je: "vendrais", tu: "vendrais", il: "vendrait", elle: "vendrait", on: "vendrait",
      nous: "vendrions", vous: "vendriez", ils: "vendraient", elles: "vendraient",
    },
    plusQueParfait: {
      je: "avais vendu", tu: "avais vendu", il: "avait vendu", elle: "avait vendu", on: "avait vendu",
      nous: "avions vendu", vous: "aviez vendu", ils: "avaient vendu", elles: "avaient vendu",
    },
    futurProche: {
      je: "vais vendre", tu: "vas vendre", il: "va vendre", elle: "va vendre", on: "va vendre",
      nous: "allons vendre", vous: "allez vendre", ils: "vont vendre", elles: "vont vendre",
    },
  },
},

/* ==================== 43. CHOISIR ==================== */
{
  infinitive: "choisir",
  english: "to choose",
  conjugations: {
    present: {
      je: "choisis", tu: "choisis", il: "choisit", elle: "choisit", on: "choisit",
      nous: "choisissons", vous: "choisissez", ils: "choisissent", elles: "choisissent",
    },
    passeCompose: {
      je: "ai choisi", tu: "as choisi", il: "a choisi", elle: "a choisi", on: "a choisi",
      nous: "avons choisi", vous: "avez choisi", ils: "ont choisi", elles: "ont choisi",
    },
    imparfait: {
      je: "choisissais", tu: "choisissais", il: "choisissait", elle: "choisissait", on: "choisissait",
      nous: "choisissions", vous: "choisissiez", ils: "choisissaient", elles: "choisissaient",
    },
    futurSimple: {
      je: "choisirai", tu: "choisiras", il: "choisira", elle: "choisira", on: "choisira",
      nous: "choisirons", vous: "choisirez", ils: "choisiront", elles: "choisiront",
    },
    conditionnelPresent: {
      je: "choisirais", tu: "choisirais", il: "choisirait", elle: "choisirait", on: "choisirait",
      nous: "choisirions", vous: "choisiriez", ils: "choisiraient", elles: "choisiraient",
    },
    plusQueParfait: {
      je: "avais choisi", tu: "avais choisi", il: "avait choisi", elle: "avait choisi", on: "avait choisi",
      nous: "avions choisi", vous: "aviez choisi", ils: "avaient choisi", elles: "avaient choisi",
    },
    futurProche: {
      je: "vais choisir", tu: "vas choisir", il: "va choisir", elle: "va choisir", on: "va choisir",
      nous: "allons choisir", vous: "allez choisir", ils: "vont choisir", elles: "vont choisir",
    },
  },
},

/* ==================== 44. FINIR ==================== */
{
  infinitive: "finir",
  english: "to finish",
  conjugations: {
    present: {
      je: "finis", tu: "finis", il: "finit", elle: "finit", on: "finit",
      nous: "finissons", vous: "finissez", ils: "finissent", elles: "finissent",
    },
    passeCompose: {
      je: "ai fini", tu: "as fini", il: "a fini", elle: "a fini", on: "a fini",
      nous: "avons fini", vous: "avez fini", ils: "ont fini", elles: "ont fini",
    },
    imparfait: {
      je: "finissais", tu: "finissais", il: "finissait", elle: "finissait", on: "finissait",
      nous: "finissions", vous: "finissiez", ils: "finissaient", elles: "finissaient",
    },
    futurSimple: {
      je: "finirai", tu: "finiras", il: "finira", elle: "finira", on: "finira",
      nous: "finirons", vous: "finirez", ils: "finiront", elles: "finiront",
    },
    conditionnelPresent: {
      je: "finirais", tu: "finirais", il: "finirait", elle: "finirait", on: "finirait",
      nous: "finirions", vous: "finiriez", ils: "finiraient", elles: "finiraient",
    },
    plusQueParfait: {
      je: "avais fini", tu: "avais fini", il: "avait fini", elle: "avait fini", on: "avait fini",
      nous: "avions fini", vous: "aviez fini", ils: "avaient fini", elles: "avaient fini",
    },
    futurProche: {
      je: "vais finir", tu: "vas finir", il: "va finir", elle: "va finir", on: "va finir",
      nous: "allons finir", vous: "allez finir", ils: "vont finir", elles: "vont finir",
    },
  },
},

/* ==================== 45. OUVRIR ==================== */
{
  infinitive: "ouvrir",
  english: "to open",
  conjugations: {
    present: {
      je: "ouvre", tu: "ouvres", il: "ouvre", elle: "ouvre", on: "ouvre",
      nous: "ouvrons", vous: "ouvrez", ils: "ouvrent", elles: "ouvrent",
    },
    passeCompose: {
      je: "ai ouvert", tu: "as ouvert", il: "a ouvert", elle: "a ouvert", on: "a ouvert",
      nous: "avons ouvert", vous: "avez ouvert", ils: "ont ouvert", elles: "ont ouvert",
    },
    imparfait: {
      je: "ouvrais", tu: "ouvrais", il: "ouvrait", elle: "ouvrait", on: "ouvrait",
      nous: "ouvrions", vous: "ouvriez", ils: "ouvraient", elles: "ouvraient",
    },
    futurSimple: {
      je: "ouvrirai", tu: "ouvriras", il: "ouvrira", elle: "ouvrira", on: "ouvrira",
      nous: "ouvrirons", vous: "ouvrirez", ils: "ouvriront", elles: "ouvriront",
    },
    conditionnelPresent: {
      je: "ouvrirais", tu: "ouvrirais", il: "ouvrirait", elle: "ouvrirait", on: "ouvrirait",
      nous: "ouvririons", vous: "ouvririez", ils: "ouvriraient", elles: "ouvriraient",
    },
    plusQueParfait: {
      je: "avais ouvert", tu: "avais ouvert", il: "avait ouvert", elle: "avait ouvert", on: "avait ouvert",
      nous: "avions ouvert", vous: "aviez ouvert", ils: "avaient ouvert", elles: "avaient ouvert",
    },
    futurProche: {
      je: "vais ouvrir", tu: "vas ouvrir", il: "va ouvrir", elle: "va ouvrir", on: "va ouvrir",
      nous: "allons ouvrir", vous: "allez ouvrir", ils: "vont ouvrir", elles: "vont ouvrir",
    },
  },
},

/* ==================== 46. FERMeR ==================== */
{
  infinitive: "fermer",
  english: "to close",
  conjugations: {
    present: {
      je: "ferme", tu: "fermes", il: "ferme", elle: "ferme", on: "ferme",
      nous: "fermons", vous: "fermez", ils: "ferment", elles: "ferment",
    },
    passeCompose: {
      je: "ai fermé", tu: "as fermé", il: "a fermé", elle: "a fermé", on: "a fermé",
      nous: "avons fermé", vous: "avez fermé", ils: "ont fermé", elles: "ont fermé",
    },
    imparfait: {
      je: "fermais", tu: "fermais", il: "fermait", elle: "fermait", on: "fermait",
      nous: "fermions", vous: "fermiez", ils: "fermaient", elles: "fermaient",
    },
    futurSimple: {
      je: "fermerai", tu: "fermeras", il: "fermera", elle: "fermera", on: "fermera",
      nous: "fermerons", vous: "fermerez", ils: "fermeront", elles: "fermeront",
    },
    conditionnelPresent: {
      je: "fermerais", tu: "fermerais", il: "fermerait", elle: "fermerait", on: "fermerait",
      nous: "fermerions", vous: "fermeriez", ils: "fermeraient", elles: "fermeraient",
    },
    plusQueParfait: {
      je: "avais fermé", tu: "avais fermé", il: "avait fermé", elle: "avait fermé", on: "avait fermé",
      nous: "avions fermé", vous: "aviez fermé", ils: "avaient fermé", elles: "avaient fermé",
    },
    futurProche: {
      je: "vais fermer", tu: "vas fermer", il: "va fermer", elle: "va fermer", on: "va fermer",
      nous: "allons fermer", vous: "allez fermer", ils: "vont fermer", elles: "vont fermer",
    },
  },
},

/* ==================== 47. PORTER ==================== */
{
  infinitive: "porter",
  english: "to carry / to wear",
  conjugations: {
    present: {
      je: "porte", tu: "portes", il: "porte", elle: "porte", on: "porte",
      nous: "portons", vous: "portez", ils: "portent", elles: "portent",
    },
    passeCompose: {
      je: "ai porté", tu: "as porté", il: "a porté", elle: "a porté", on: "a porté",
      nous: "avons porté", vous: "avez porté", ils: "ont porté", elles: "ont porté",
    },
    imparfait: {
      je: "portais", tu: "portais", il: "portait", elle: "portait", on: "portait",
      nous: "portions", vous: "portiez", ils: "portaient", elles: "portaient",
    },
    futurSimple: {
      je: "porterai", tu: "porteras", il: "portera", elle: "portera", on: "portera",
      nous: "porterons", vous: "porterez", ils: "porteront", elles: "porteront",
    },
    conditionnelPresent: {
      je: "porterais", tu: "porterais", il: "porterait", elle: "porterait", on: "porterait",
      nous: "porterions", vous: "porteriez", ils: "porteraient", elles: "porteraient",
    },
    plusQueParfait: {
      je: "avais porté", tu: "avais porté", il: "avait porté", elle: "avait porté", on: "avait porté",
      nous: "avions porté", vous: "aviez porté", ils: "avaient porté", elles: "avaient porté",
    },
    futurProche: {
      je: "vais porter", tu: "vas porter", il: "va porter", elle: "va porter", on: "va porter",
      nous: "allons porter", vous: "allez porter", ils: "vont porter", elles: "vont porter",
    },
  },
},

/* ==================== 48. ARRIVER ==================== */
{
  infinitive: "arriver",
  english: "to arrive",
  conjugations: {
    present: {
      je: "arrive", tu: "arrives", il: "arrive", elle: "arrive", on: "arrive",
      nous: "arrivons", vous: "arrivez", ils: "arrivent", elles: "arrivent",
    },
    passeCompose: {
      je: "suis arrivé", tu: "es arrivé", il: "est arrivé", elle: "est arrivée", on: "est arrivé",
      nous: "sommes arrivés", vous: "êtes arrivé", ils: "sont arrivés", elles: "sont arrivées",
    },
    imparfait: {
      je: "arrivais", tu: "arrivais", il: "arrivait", elle: "arrivait", on: "arrivait",
      nous: "arrivions", vous: "arriviez", ils: "arrivaient", elles: "arrivaient",
    },
    futurSimple: {
      je: "arriverai", tu: "arriveras", il: "arrivera", elle: "arrivera", on: "arrivera",
      nous: "arriverons", vous: "arriverez", ils: "arriveront", elles: "arriveront",
    },
    conditionnelPresent: {
      je: "arriverais", tu: "arriverais", il: "arriverait", elle: "arriverait", on: "arriverait",
      nous: "arriverions", vous: "arriveriez", ils: "arriveraient", elles: "arriveraient",
    },
    plusQueParfait: {
      je: "étais arrivé", tu: "étais arrivé", il: "était arrivé", elle: "était arrivée", on: "était arrivé",
      nous: "étions arrivés", vous: "étiez arrivé", ils: "étaient arrivés", elles: "étaient arrivées",
    },
    futurProche: {
      je: "vais arriver", tu: "vas arriver", il: "va arriver", elle: "va arriver", on: "va arriver",
      nous: "allons arriver", vous: "allez arriver", ils: "vont arriver", elles: "vont arriver",
    },
  },
},

/* ==================== 49. RESTER ==================== */
{
  infinitive: "rester",
  english: "to stay",
  conjugations: {
    present: {
      je: "reste", tu: "restes", il: "reste", elle: "reste", on: "reste",
      nous: "restons", vous: "restez", ils: "restent", elles: "restent",
    },
    passeCompose: {
      je: "suis resté", tu: "es resté", il: "est resté", elle: "est restée", on: "est resté",
      nous: "sommes restés", vous: "êtes resté", ils: "sont restés", elles: "sont restées",
    },
    imparfait: {
      je: "restais", tu: "restais", il: "restait", elle: "restait", on: "restait",
      nous: "restions", vous: "restiez", ils: "restaient", elles: "restaient",
    },
    futurSimple: {
      je: "resterai", tu: "resteras", il: "restera", elle: "restera", on: "restera",
      nous: "resterons", vous: "resterez", ils: "resteront", elles: "resteront",
    },
    conditionnelPresent: {
      je: "resterais", tu: "resterais", il: "resterait", elle: "resterait", on: "resterait",
      nous: "resterions", vous: "resteriez", ils: "resteraient", elles: "resteraient",
    },
    plusQueParfait: {
      je: "étais resté", tu: "étais resté", il: "était resté", elle: "était restée", on: "était resté",
      nous: "étions restés", vous: "étiez resté", ils: "étaient restés", elles: "étaient restées",
    },
    futurProche: {
      je: "vais rester", tu: "vas rester", il: "va rester", elle: "va rester", on: "va rester",
      nous: "allons rester", vous: "allez rester", ils: "vont rester", elles: "vont rester",
    },
  },
},

/* ==================== 50. TOMBER ==================== */
{
  infinitive: "tomber",
  english: "to fall",
  conjugations: {
    present: {
      je: "tombe", tu: "tombes", il: "tombe", elle: "tombe", on: "tombe",
      nous: "tombons", vous: "tombez", ils: "tombent", elles: "tombent",
    },
    passeCompose: {
      je: "suis tombé", tu: "es tombé", il: "est tombé", elle: "est tombée", on: "est tombé",
      nous: "sommes tombés", vous: "êtes tombé", ils: "sont tombés", elles: "sont tombées",
    },
    imparfait: {
      je: "tombais", tu: "tombais", il: "tombait", elle: "tombait", on: "tombait",
      nous: "tombions", vous: "tombiez", ils: "tombaient", elles: "tombaient",
    },
    futurSimple: {
      je: "tomberai", tu: "tomberas", il: "tombera", elle: "tombera", on: "tombera",
      nous: "tomberons", vous: "tomberez", ils: "tomberont", elles: "tomberont",
    },
    conditionnelPresent: {
      je: "tomberais", tu: "tomberais", il: "tomberait", elle: "tomberait", on: "tomberait",
      nous: "tomberions", vous: "tomberiez", ils: "tomberaient", elles: "tomberaient",
    },
    plusQueParfait: {
      je: "étais tombé", tu: "étais tombé", il: "était tombé", elle: "était tombée", on: "était tombé",
      nous: "étions tombés", vous: "étiez tombé", ils: "étaient tombés", elles: "étaient tombées",
    },
    futurProche: {
      je: "vais tomber", tu: "vas tomber", il: "va tomber", elle: "va tomber", on: "va tomber",
      nous: "allons tomber", vous: "allez tomber", ils: "vont tomber", elles: "vont tomber",
    },
  },
},



  /* ==================== COPY THIS BLOCK TO ADD A VERB ====================
  {
    infinitive: "manger",
    english: "to eat",
    conjugations: {
      present: {
        je: "mange", tu: "manges", il: "mange", elle: "mange", on: "mange",
        nous: "mangeons", vous: "mangez", ils: "mangent", elles: "mangent",
      },
      passeCompose: {
        je: "ai mangé", tu: "as mangé", il: "a mangé", elle: "a mangé", on: "a mangé",
        nous: "avons mangé", vous: "avez mangé", ils: "ont mangé", elles: "ont mangé",
      },
      imparfait: {
        je: "mangeais", tu: "mangeais", il: "mangeait", elle: "mangeait", on: "mangeait",
        nous: "mangions", vous: "mangiez", ils: "mangeaient", elles: "mangeaient",
      },
      futurSimple: {
        je: "mangerai", tu: "mangeras", il: "mangera", elle: "mangera", on: "mangera",
        nous: "mangerons", vous: "mangerez", ils: "mangeront", elles: "mangeront",
      },
      conditionnelPresent: {
        je: "mangerais", tu: "mangerais", il: "mangerait", elle: "mangerait", on: "mangerait",
        nous: "mangerions", vous: "mangeriez", ils: "mangeraient", elles: "mangeraient",
      },
      plusQueParfait: {
        je: "avais mangé", tu: "avais mangé", il: "avait mangé", elle: "avait mangé", on: "avait mangé",
        nous: "avions mangé", vous: "aviez mangé", ils: "avaient mangé", elles: "avaient mangé",
      },
      futurProche: {
        je: "vais manger", tu: "vas manger", il: "va manger", elle: "va manger", on: "va manger",
        nous: "allons manger", vous: "allez manger", ils: "vont manger", elles: "vont manger",
      },
    },
  },
  ========================================================================= */
];
