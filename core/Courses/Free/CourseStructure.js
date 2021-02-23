import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles.scss";

const CourseStructure = (props) => {
  const coursename = props.match.params.coursename;
  const course = {
    Management_by_Shreya_Mam: [
      { title: "272.2 Data Mart", vid: "Fc9asCWBxPc" },
      { title: "272.1 Data Warehousing", vid: "oqQ2h7cz2Ro" },
      { title: "Retrenchment Strategy", vid: "hmJZK-Ier0s" },
      { title: "Organizational Change Models Part 1", vid: "iEQAtDXpESg" },
    ],
    English: [
      {
        title: "The Age of Johnson(Transition)PART 1",
        vid: "tl41v3TY1XI",
      },
      {
        title: "PURITAN AGE or AGE OF MILTON",
        vid: "24QEW7uXl_c",
      },
      {
        title: "ANGLO SAXON AGE OF ENGLISH LITERATURE",
        vid: "WKAaCYWLA-E",
      },
      {
        title: "ROMANTIC AGE PART 1(MAJOR AND MINOR POETS)",
        vid: "87jbLQcCwf0",
      },
      {
        title: "NTA NET ENGLISH AGE OF TRANSITION PART II",
        vid: "HyAbQfGocw0",
      },
      {
        title: "NTA NET ENGLISH,THE ROMANTIC AGE :PART 2 (THE NOVELISTS)",
        vid: "9zk3mztG1vQ",
      },
      {
        title: "THE REVIVAL OF LEARNING(1450-1550)",
        vid: "COp6Fhj3pI0",
      },
      { title: "ANGLO NORMAN PERIOD", vid: "mb2Pr2ChIRg" },
      {
        title: "NTA NET English ROMANTIC AGE:Part 3( MISCELLANEOUS PROSE)",
        vid: "5dAZCumzDWM",
      },
      { title: "Age of Pope", vid: "9PfFx6md-rQ" },
      {
        title: "ELIZABETHAN AGE:Part 2(Shakespeare+Ben Jonson)",
        vid: "khBtIdPzmQw",
      },
      { title: "AGE OF CHAUCER", vid: "-2I2pbOOTYs" },
      {
        title: "THE AGE OF ELIZABETH :PART 1",
        vid: "5ja4dz29l-I",
      },
      {
        title: "Elizabethan Age:Part 3(Final part)",
        vid: "CjxnCatLzfU",
      },
    ],
    Hindi_By_Shalini_Mam: [
      { title: "नाटक स्कन्दगुप्त(जयशंकर प्रसाद)", vid: "UTD-KSDMoOE" },
      {
        title: "नाटक सिंदूर की होली(लक्ष्मी नारायण लाल)",
        vid: "m5GWmDAWcAY",
      },
      {
        title: "चन्द्रगुप्त नाटक(जयशंकर प्रसाद)",
        vid: "f4YB52nJA08",
      },
      {
        title: "राजभाषा और उनसे सम्बंधित अनुच्छेद",
        vid: "QrLBIIU239M",
      },
      {
        title: "हिंदी साहित्य का इतिहास (इकाई -2)",
        vid: "7shl1IkuWw4",
      },
      {
        title: "हिंदी साहित्य का इतिहास इकाई -2",
        vid: "VaqAdCMUa48",
      },
      {
        title: "हिंदी साहित्य का इतिहास (इकाई -2)",
        vid: "bih_5IXE9Uo",
      },
      {
        title: "हिंदी सहित्य का इतिहास(इकाई-2)",
        vid: "lIjfUWT3nXU",
      },
      {
        title: "हिंदी साहित्य का इतिहास (इकाई-2)",
        vid: "RjbQbxmHTIo",
      },
      { title: "हिंदी भाषा इकाई -1", vid: "c_wBMvqpszE" },
      {
        title: "हिंदी व्याकरण का इतिहास (इकाई-1)",
        vid: "D_h0pLliUzg",
      },
      {
        title: "भाषा का अर्थ एवं परिभाषा (इकाई-1)",
        vid: "kXFFTRa37Ws",
      },
      { title: "हिंदी भाषा (इकाई -1)", vid: "_yag1bx0N-o" },
      {
        title: "हिंदी व्याकरण का इतिहास (इकाई-1)",
        vid: "QEE_yIK3_Hc",
      },
      {
        title: "देवनागिरी लिपि व उसका विकास",
        vid: "WVamMSLlATE",
      },
      { title: "काव्य हेतु एवं प्रयोजन", vid: "MZCDnboi7E0" },
      {
        title: "भारतीय काव्यशास्त्र प्रमुख आचार्य",
        vid: "V_dMuuFLm_0",
      },
      {
        title: "भरत मुनि का रस सम्प्रदाय",
        vid: "zkega7GI8W8",
      },
      {
        title: "ध्वनि, रीति,अलंकार, वक्रोति और औचित्य सम्प्रदाय",
        vid: "jfFiH4UWMMs",
      },
      {
        title: "पाश्चात्य काव्यशात्र(प्लेटो और अरस्तू)",
        vid: "gg3g0C-mhY0",
      },
      { title: "भक्ति काल(निर्गुण शाखा)", vid: "zwJ_gddic00" },
      { title: "भक्तिकाल (इकाई-2)", vid: "G_MeCYnQ5GQ" },
      {
        title: "प्रेममार्गीय शाखा (भक्तिकाल इकाई-2)",
        vid: "yWkFEtM2F54",
      },
      { title: "प्रेममार्गीय शाखा", vid: "19BB8X-chxQ" },
      {
        title: "प्रेममार्गीय शाखा (इकाई-2)",
        vid: "qP9KZVNQb8M",
      },
      {
        title: "सगुण शाखा(प्रमुक सम्प्रदाय)- इकाई-2",
        vid: "CchdimYpH5I",
      },
      {
        title: "कृष्ण भक्ति शाखा भाग-१ (ईकाई-2)",
        vid: "JGYQzqnEhaI",
      },
      {
        title: "कृष्ण भक्ति शाखा भाग-२( सूरदास सम्पूर्ण परिचय)",
        vid: "QbkDE2V85_Q",
      },
      {
        title: "कृष्ण भक्ति शाखाभाग -३ (इकाई-2)",
        vid: "Z5SmUZAgf0k",
      },
      {
        title: "कृष्ण भक्ति शाखा भाग -४(इकाई-२)",
        vid: "mpDmTxK4oUU",
      },
      {
        title: "रामभक्ति शाखा ( भक्तिकाल इकाई-2)",
        vid: "Czug8Gzotdg",
      },
      {
        title: "रामभक्ति शाखा(तुलसीदास सम्पूर्ण परिचय)",
        vid: "RN5Aerw-SL8",
      },
      {
        title: "रामभक्ति शाखा भाग-३(इकाई-2)",
        vid: "ujxwC2IMNqY",
      },
      { title: "रीतिकाल परिचय", vid: "yD2iZCdQ9iE" },
      { title: "रीतिकाल भाग -1( इकाई-2)", vid: "JJUucUCxPPQ" },
      { title: "रीतिकाल भाग -2( इकाई-2)", vid: "nDwsUnNkP_k" },
      { title: "रीतिकाल भाग ३(इकाई-२)", vid: "8D_fG3H2kos" },
      { title: "हिंदी एकांकी", vid: "JHl4mM3iXvU" },
      {
        title: "महत्वपूर्ण उपन्यास और उनका विषय पार्ट -2",
        vid: "8Lphx8Z4oVA",
      },
      {
        title: "प्रमुख महिला कहानी कार और दलित कहानी",
        vid: "7jeTHzf99_8",
      },
      { title: "छायावाद भाग -२(इकाई-२)", vid: "n9Bd7qRub4w" },
      { title: "भारतेंदु युग (इकाई-2)", vid: "jOppQPDzU74" },
      {
        title: "हिंदी पत्रकारिता और अन्य संस्थाए",
        vid: "dFI8u-K7smE",
      },
      {
        title: "महत्वपूर्ण उपन्यास और उनका विषय",
        vid: "1U750_MgR7g",
      },
      {
        title: "यात्रा साहित्य,डायरी,रिपोर्ताज, साक्षात्कार",
        vid: "CovO1FPMniY",
      },
      { title: "आत्मकथा एवं जीवनी", vid: "1aKxA3ENoZU" },
      {
        title: "प्रगतिवादी आलोचना एवं नयी समीक्षा",
        vid: "OFOpFPZSJLU",
      },
      {
        title: "हिंदी निबन्ध के विकास के विभिन्न सोपान",
        vid: "EtLae04LPZ0",
      },
      { title: "हिंदी आलोचना का विकास", vid: "h6Ysc4LAgYI" },
      {
        title: "हिंदी कहानी का विकास भाग-1",
        vid: "CyewDUC3ZWw",
      },
      {
        title: "हिंदी उपन्यास (चतुर्थ उत्थान)",
        vid: "_z9AQ0gK_uc",
      },
      {
        title: "हिंदी उपन्यास (प्रेमचन्दोत्तर युग)",
        vid: "fv9tR3r_aVI",
      },
      {
        title: "हिंदी उपन्यास(प्रेमचन्दोत्तर युग)",
        vid: "-K_NaLiMFHM",
      },
      { title: "समकालीन नाटक और नाटककार", vid: "9f7UCwXgqIw" },
      {
        title: "हिंदी नाटक का विकास (द्विवेदी युग और प्रसाद युग)",
        vid: "wP3i1pOV9Xk",
      },
      { title: "द्विवेदी युग भाग -१", vid: "Qt7FdzOMYZ8" },
      { title: "भारतेंदु युग(इकाई-2)", vid: "swiiNFZ_lBA" },
      {
        title: "गजल विधा और दलित साहित्य",
        vid: "soRxNE8uoRw",
      },
      {
        title: "हिंदी गद्य का विकास (इकाई-2)",
        vid: "oN_taAupKm4",
      },
      {
        title: "साठोत्तरी कविता और प्रमुक कविता आंदोलन",
        vid: "5FilsPzNqkY",
      },
      {
        title: "प्रयोगवाद,प्रपद्यवाद,नई कविता",
        vid: "8jnGho9oynY",
      },
      { title: "प्रगतिवादी युग(इकाई-2)", vid: "6ftq_wGNdNc" },
      { title: "छायावाद भाग -१ (इकाई-२)", vid: "ATHvRf6n8XU" },
      { title: "द्विवेदी युग भाग -2", vid: "c5YG6leKgWo" },
      { title: "समकालीन कहानी", vid: "y2tV_mUW7Po" },
      { title: "आधुनिक काल परिचय", vid: "V368KQFjrl0" },
      {
        title: "एक और द्रोणाचार्य (शंकर शेष जी)",
        vid: "rGuWnlZD3mE",
      },
      {
        title: "नाटक अंजो दीदी( उपेन्द्रनाथ अश्क)",
        vid: "eqR9l9ZjW3E",
      },
      {
        title: "नाटक महाभोज (मन्नू भंडारी)",
        vid: "DNBzTpZ03s8",
      },
      {
        title: "नाटक ध्रुवस्वामिनी(जयशंकर प्रसाद)",
        vid: "3lXUhIlLER8",
      },
      {
        title: "अंधेर नगरी नाटक(भारतेंदु जी)",
        vid: "1MbHYbZjgsQ",
      },
      {
        title: "भारत दुर्दशा (भारतेंदु हरिश्चंद्र जी)",
        vid: "EFdtT57ujdA",
      },
      {
        title: "नाटक अन्धा युग (धर्मवीर भारती)",
        vid: "A_PeUYHegz0",
      },
      {
        title: "आधे अधूरे नाटक(मोहन राकेश)",
        vid: "rBKBxhXJHyU",
      },
      { title: "नाटक आषाढ़ का एक दिन", vid: "5ZCufM-TvcE" },
      {
        title: "बकरी नाटक (सर्वेश्वर दयाल सक्सेना)",
        vid: "CHATXjxV4zE",
      },
      {
        title: "उपन्यास रागदरबारी(श्री लाल शुक्ल)",
        vid: "8hflPSTbdN4",
      },
    ],
    CA: [
      { title: "NIRF RANKING 2020", vid: "DZ29dbbbI_0" },
      { title: "QS World University Rankings 2021", vid: "8WOeMNuN0uk" },
      {
        title:
          "Digital Initiatives in Higher Education-1 || Swayam || Swayamprabha",
        vid: "nA_GTDaWcmE",
      },
      {
        title:
          "Digital Initiatives in Higher Education-2 || NDL India || Virtual Labs",
        vid: "QXnPLJUnl6g",
      },
      {
        title:
          "Digital Initiatives in Higher Education-3 || NDL India || Virtual Labs",
        vid: "kqoCb8VaFu8",
      },
      {
        title: "Current Affairs|| Higher Education|| Study in India Program",
        vid: "gHYv3FJT5LY",
      },
      {
        title: "Current Affairs || Higher Education|| Unnat Bharat Abhiyaan",
        vid: "cahCCrx5uoQ",
      },
    ],
    Concept_Clearing_Series_Paper_1: [
      { title: "Tautology", vid: "xjym1EgNJBk" },
      { title: "Impact Factor", vid: "RwV4a2VBNco" },
      { title: "Emoticon", vid: "K_ejXVqZVg0" },
      { title: "Citation", vid: "lyX1wEBkN9U" },
      { title: "Citation vs Referencing", vid: "Bld1n8MjOhk" },
    ],
    Research_Aptitude: [
      { title: "Descriptive Research", vid: "UCzLbXlHVvQ" },
      { title: "Experimental Research", vid: "M_iO1R6IXvI" },
      { title: "Citation", vid: "lyX1wEBkN9U" },
      { title: "Citation vs Referencing", vid: "Bld1n8MjOhk" },
      { title: "Steps of research process", vid: "aeV72Hm_fKM" },
    ],
    Concept_Clearing_Series: [
      { title: "WTO- Concept || Functions || GATT vs WTO", vid: "2FuO_tup1nI" },
      {
        title: "ASEAN- Association of Southeast Asian Nations",
        vid: "97f4F9_BX4o",
      },
    ],
    Economics_by_Simran_Mam: [
      {
        title: "LEONTIEF INPUT OUTPUT ANALYSIS || MATHEMATICAL ECONOMICS ||",
        vid: "jyKHDLPC1vQ",
      },
      {
        title: "HAWKINS SIMON CONDITIONS OF INPUT OUTPUT ANALYSIS",
        vid: "3SbVK6k1Dbw",
      },
      {
        title: "HOW TO FIND INVERSE OF A MATRIX || MATHEMATICAL ECONOMICS",
        vid: "ILTCuSPaFys",
      },
      {
        title:
          "How to find profit maximizing output|| Profit maximisation numerical example",
        vid: "L-HpIc9Ic6A",
      },
      {
        title: "FUNCTIONS || MATHEMATICAL ECONOMICS || UGC NET ECONOMICS",
        vid: "7nWc8GVzIDA",
      },
      {
        title:
          "LIMITS AND CONTINUITY || MATHEMATICAL ECONOMICS|| UGC NET ECONOMICS",
        vid: "1e7LTju-AKM",
      },
      {
        title: "AUTOREGRESSIVE MODEL || DISTRIBUTED LAGGED MODEL",
        vid: "O602ieHY17o",
      },
      {
        title:
          "IDENTIFICATION PROBLEM ECONOMETRICS in hindi || order conditions",
        vid: "LRy_xU_2iO0",
      },
      {
        title:
          "SIMULTANEOUS EQUATIONS MODEL || RECURSIVE MODELS || ECONOMETRICS",
        vid: "mmLx-GWIpLs",
      },
      {
        title: "ECONOMETRICS BASIC CONCEPTS || ECONOMETRICS FOR UGC NET",
        vid: "_Gam5fv8jDE",
      },
      {
        title:
          "MATHEMATICAL ECONOMICS || NUMERICAL QUESTIONS || UGC NET ECONOMICS",
        vid: "ikRqI-AhiAg",
      },
      {
        title:
          "PROBABILITY CONCEPTS || UGC NET ECONOMICS || Mutually exclusive and independent events||",
        vid: "O7LyGo5ETbE",
      },
      {
        title:
          "THEORY OF SETS || MATHEMATICAL ECONOMICS FOR UGC NET|| LAWS OF SET THEORY",
        vid: "asXuQe7cDTw",
      },
    ],
    Success_Stories: [
      {
        title: "Success Story of Shreya Jha - JRF QUALIFIED",
        vid: "nXnaO1wZd5U",
      },
      {
        title:
          "PhD at IIM || Abhyudaya Anand Mishra - IIM Kashipur convert 2020",
        vid: "5xBkDSEZUSc",
      },
      {
        title:
          "NTA UGC NET Management Success Stories and Preparation strategy By Arshad Hasan || Dive to learn",
        vid: "GnERztY1Ndw",
      },
      {
        title: "CRACKING NTA NET IN ENGLISH LITERATURE:MY SUCCESS STORY",
        vid: "G9ENKatzQ_o",
      },
      {
        title: "कैसे करें नेट की तैयारी || 2021 NTA NET JRF Exam",
        vid: "TGNTxK9qP0Q",
      },
    ],
    Previous_Papers_Paper_1: [
      {
        title: "People and Environment || PYQs || December 2019 || Part 1",
        vid: "nPSBobAqj_4",
      },
      {
        title: "People and Environment || PYQs || December 2019 || Part 2",
        vid: "3u5x_65ML_I",
      },
      {
        title: "People and Environment || PYQs || December 2019 || Part 3",
        vid: "QBnVgVTDTUI",
      },
      {
        title: "Higher Education || PYQs || December 2019 || Part 1",
        vid: "IVo8-g9_mvE",
      },
      { title: "Teaching Aptitude || PYQs || Part-5", vid: "NxsREoaeFJs" },
      { title: "Teaching Aptitude || PYQs || Part-6", vid: "tSS8aAZGqls" },
      { title: "Teaching Aptitude || PYQs || Part-7", vid: "TiguKxE5BBE" },
      { title: "Teaching Aptitude || PYQs || Part-8", vid: "lF4wFPioWYw" },
      { title: "Teaching Aptitude || PYQs || Part-9", vid: "MlMMIYIAUOg" },
      { title: "Teaching Aptitude || PYQs || Part-10", vid: "zfmXJ74wKeU" },
      { title: "Indian Logic || PYQs || Part-11", vid: "ewqDjZnEJcI" },
      { title: "Indian Logic || PYQs || Part-13", vid: "V7DtC0-GQ_o" },
      { title: "Indian Logic || PYQs || Part-12", vid: "L5zVsOGNX08" },
      { title: "Indian Logic || PYQs || Part-14", vid: "L7XOcgDVkUY" },
      {
        title:
          "Previous year questions || Ugc net Paper 1|| Communication|| December 2019",
        vid: "xD3ad6kM9Tg",
      },
    ],
    CTET_EVS_by_Sonu_Mam: [
      {
        title: "1. CTET || EVS || OVERVIEW",
        vid: "PunrexpQOIY",
      },
      {
        title: "2. FAMILY AND FRIENDS- Part 1",
        vid: "Rp6PuxjDqHI",
      },
      {
        title: "3. CTET || plants || flora || EVS",
        vid: "Hgevwcz9zrw",
      },
      {
        title: "4. CTET|| EVS|| PAPER 1 || FAMILY AND FRIENDS PART- 3",
        vid: "Dnkt60RTzTM",
      },
      {
        title:
          "5. CTET|| EVS || PAPER 1|| Fauna-1|| Family and friends- Part 4",
        vid: "oniq69sszYc",
      },
      {
        title: "6. CTET ||EVS|| PAPER 1 ||FAUNA-2 || FAMILY AND FRIENDS PART 5",
        vid: "ny8mlOGL9ps",
      },
      {
        title: "7. CTET|| EVS || PAPER 1 || SHELTER",
        vid: "ERDseK3wq_c",
      },
      {
        title: "8. CTET|| EVS ||PAPER 1 || WATER",
        vid: "Sidr4Rpw-Ag",
      },
      {
        title: "9. CTET|| EVS || PAPER -1 || FOOD- PART 1",
        vid: "MgZGcshg7gQ",
      },
      {
        title: "10. CTET|| EVS|| PAPER-1 || FOOD- PART 2",
        vid: "YlbEz5b1lV0",
      },
      {
        title: "11. CTET|| EVS|| PAPER || FOOD- PART 3",
        vid: "4zhpT_6t8XQ",
      },
      {
        title: "12. CTET|| EVS|| PAPER 1 || FOOD- PART 4",
        vid: "73O2-dK_RC0",
      },
      {
        title: "13. CTET|| EVS|| PAPER 1 || TRAVEL- PART 1",
        vid: "Imf87xjf4zI",
      },
      {
        title: "14.CTET|| EVS|| PAPER 1 || TRAVEL- PART 2|",
        vid: "P3f4m_b0MpU",
      },
      {
        title: "15. CTET|| EVS|| PAPER 1 || TRAVEL- PART 3",
        vid: "PxEA0w31PTo",
      },
      {
        title: "16. CTET|| EVS|| PAPER 1 || TRAVEL- PART 4",
        vid: "ZkmxRdx9hNs",
      },
      {
        title: "17. CTET|| EVS|| PAPER 1 || TRAVEL- PART 5",
        vid: "yy1xIYcddY8",
      },
      {
        title: "18. CTET|| EVS|| PAPER 1 || TRAVEL- PART 6|",
        vid: "pHFIyhP0PYw",
      },
      {
        title: "19. CTET|| EVS|| PAPER 1 || TRAVEL- PART 7",
        vid: "-Egam63X0QI",
      },
      {
        title: "20. CTET|| EVS|| PAPER 1 || THINGS WE MAKE AND DO PART -1",
        vid: "7mMSTjdaPNg",
      },
      {
        title: "21. CTET|| EVS|| PAPER 1 || THINGS WE MAKE AND DO PART -2 ||",
        vid: "zfkr7KPqY4Y",
      },
      {
        title: "22. CTET|| || PAPER 2 || EVS PEDAGOGY - PART -1",
        vid: "2Q_sKnEnrMY",
      },
      {
        title: "22. CTET|| || PAPER 2 || EVS PEDAGOGY - PART -2",
        vid: "YngEBM_g_Z0",
      },
      {
        title: "24. CTET|| || PAPER 2 || EVS PEDAGOGY - PART -3",
        vid: "zYbOLpL955M",
      },
      {
        title: "25. CTET|| || PAPER 2 || EVS PEDAGOGY - PART -4",
        vid: "P_TAOMjP3KY",
      },
      {
        title: "26. CTET|| || PAPER 1 || EVS PEDAGOGY - PART -3",
        vid: "dCWorX_CEpE",
      },
      {
        title: "27. Continuous Comprehensive Evaluation || CCE",
        vid: "pIpRx_iiZSY",
      },
      {
        title:
          "28. Aspects of CCE|| Formative Evaluation || Summative Evaluation",
        vid: "oqhD6n9aEVc",
      },
      {
        title:
          "30. PARADIGMS|| CRITERION OF ASSESSMENT|| TOOLS & TECHNIQUES OF LEARNING",
        vid: "FNvVh4IPUBU",
      },
      {
        title: "31. CTET|| || PAPER 1 || EVS PEDAGOGY - PART -10",
        vid: "_aaEQ6GFEvU",
      },
      {
        title: "32. CTET|| || PAPER 1 || EVS PEDAGOGY - PART -11",
        vid: "-r-gFk2qgpU",
      },
      {
        title: "33. Teaching Materials and aids",
        vid: "uFPBN47HsWI",
      },
      {
        title:
          "34. Advantages and insights of Experimentation/ Practical work|| EVS PEDAGOGY|",
        vid: "NcB_SBY4xdg",
      },
      {
        title: "35. IMPORTANCE || ADVANTAGE || DISADVANTAGES OF DISCUSSION",
        vid: "oWAQFyUGD2s",
      },
      {
        title: "36. # APPROACH OF CONCEPT# DIFFERENT TYPES OF APPROACHES",
        vid: "p6RXjbLt87I",
      },
      {
        title: "37. EVS PREVIOUS YEAR QUESTIONS",
        vid: "9sl2HZuqgiQ",
      },
      {
        title:
          "38. CTET MATHEMATICS SYLLABUS CONTENT & PEDAGOGICAL ISSUES PAPER 1& PAPER 2",
        vid: "Yk6VwmQqP2c",
      },
      {
        title: "39. CTET MATHS NUMBERS || UNITS || UNIT DIGIT OF POWE",
        vid: "i965wLArS6g",
      },
      {
        title: "40. CTET|| MATHEMATICS ||HCF||LCM",
        vid: "3_hrCqetZjs",
      },
      {
        title:
          "41. CTET|| MATHEMATICS ||BASIC CONCEPT OF #WORK​& TIME ||EXPLANATION WITH DIFFERENT CASES",
        vid: "beElvtKg3m0",
      },
      {
        title:
          "42. LEARNING THEORY OF JEAN PIAGET|| COGNITIVE DEVELOPMENT THEORY",
        vid: "WJIzzIpUBmI",
      },
      {
        title:
          "43. LEARNING THEORY OF JEAN PIAGET|| COGNITIVE DEVELOPMENT THEORY|| PART -2",
        vid: "09kWI5-mI98",
      },
      {
        title: "Edgar Dale Cone of learning",
        vid: "HEavBXA5lms",
      },
      {
        title: "HOWARD GARDNER THEORY OF MULTIPLE INTELLIGENCE PART- 1",
        vid: "QNMdBdN3pao",
      },
      {
        title: "HOWARD GARDNER # THEORY OFMULTIPLE INTELLIGENCE PART _2",
        vid: "w30SeioFK1g",
      },
    ],
    Indian_Logic: [
      { title: "Vyapti", vid: "wde9dpAAHtE" },
      { title: "Hetvabhasas VVimportant", vid: "AUbGU7a8K-s" },
      { title: "Arthpatti -Anuplabhi (full)", vid: "Z6kS32Iuwrc" },
      { title: "Upmana -Pramana(full)", vid: "w4gx6Vl07Og" },
      { title: "Shabda -Pramana", vid: "-PH3dMI_4QM" },
      { title: "Pratyaksha -pramana full", vid: "-KNuA4DjU7U" },
      { title: "Basics of Logic", vid: "Xv8sFSWkcNg" },
      { title: "Indian Logic - Overview", vid: "LDYT39HJ23U" },
      { title: "Indian Logic || PYQs || Part-11", vid: "ewqDjZnEJcI" },
      { title: "Indian Logic || PYQs || Part-12", vid: "L5zVsOGNX08" },
      { title: "Indian Logic || PYQs || Part-13", vid: "V7DtC0-GQ_o" },
      { title: "Indian Logic Most Expected MCQs Part 1", vid: "OPtfUOIUeFU" },
      { title: "Indian Logic Most Expected MCQs Part 2", vid: "6YHxVLZ2pnE" },
      { title: "Indian Logic Most Expected MCQs Part 3", vid: "B3U65vB-AI4" },
      { title: "Indian Logic Most Expected MCQs Part 4", vid: "xXp_zTkEp8s" },
      { title: "Indian Logic || PYQs || Part-14", vid: "L7XOcgDVkUY" },
      { title: "Anuman -Praman (full)", vid: "d_ZDLX7dDi4" },
    ],
    Economics_by_Neha_Bohat_Mam: [
      {
        title: "Asymmetric Information & Market Failure (Public Economics)",
        vid: "09tWys4SOA4",
      },
      {
        title:
          "Law of Public Finance & Principle of Maximum Social Advantage(Topic-2)",
        vid: "sSMg1nB3Zv4",
      },
      {
        title:
          "Important Theories of Public Expenditure #Public_Economics​ (Topic-7)",
        vid: "j0DcjbElgqA",
      },
      {
        title:
          "Public Revenu, Direct, Indirect Taxes #Topic​-10 (#Public​ #Economics​)",
        vid: "NAKzqV4fI8I",
      },
      {
        title: "MICRO ECONOMICS || PYQs || PART-1",
        vid: "OGyLUor75kI",
      },
      {
        title: "MICRO ECONOMICS || PYQ || PART-2",
        vid: "JICxXiJWNy0",
      },
      {
        title: "MICRO ECONOMICS ||PYQ PART-3 ||",
        vid: "63W51ZsQSrU",
      },
    ],
    Unit_10_Management_Paid: [
      { title: "Entrepreneurship- Overview", vid: "4-7ZFMHMdc8" },
      { title: "Intrapreneurship", vid: "LLT4uHkzVaY" },
      {
        title:
          "Skill India | Ministry of Skill Development and Entrepreneurship",
        vid: "PNldK1TvpYQ",
      },
      { title: "Women Entrepreneurship|| Various Schemes", vid: "GdpAO22Bgu8" },
      { title: "Rural Entrepreneurship", vid: "RBZxDseT5Qo" },
      {
        title: "Entrepreneurship | Previous year questions |Updated Syllabus",
        vid: "jCKjAhCNZVA",
      },
      { title: "Entrepreneurship process", vid: "kgMxVJKHzL4" },
      {
        title: "Business Plan and Feasibility Analysis -Entrepreneurship",
        vid: "jFzbpg5dYk8",
      },
      { title: "Innovations in Business", vid: "RUByz3Uwunw" },
      {
        title: "Management and Commerce | Most Expected MCQs -Part 1",
        vid: "kkYyUGYn4Is",
      },
      {
        title: "Management and Commerce | Most Expected MCQs -Part 2",
        vid: "4QVf7LkRBE4",
      },
      {
        title: "Management and Commerce | Most Expected MCQs -Part 3",
        vid: "urZ2ukWPUX0",
      },
      {
        title: "Sickness in Small Industries – Reasons and Rehabilitation",
        vid: "oZJqlLM0yq8",
      },
      { title: "Financial Institutions- part 1", vid: "Esju_EEBsPw" },
      { title: "Commercial banks with recent PSB Merger", vid: "SvwtB05TbHI" },
      { title: "Entrepreneurial Theories- 1", vid: "riPeNPzzD5Q" },
      { title: "Entrepreneurial Theories- 2", vid: "EAxyWogxG18" },
    ],
    BCOM_Business_Low: [
      { title: "Indian Contract Act 1872 || Lecture 1", vid: "6-AuV_8Ztds" },
      { title: "Indian Contract Act 1872 || Lecture 2", vid: "t--4uP1LDkk" },
      { title: "Indian Contract Act 1872 || Lecture 3", vid: "1vZGg2YUdUI" },
      { title: "Indian Contract Act 1872 || Lecture 4", vid: "NlUf48YYidk" },
      { title: "Indian Contract Act 1872 || Lecture 5", vid: "wJ5T2IQBEgE" },
      { title: "Indian Contract Act 1872 || Lecture 7", vid: "5MzBTtvD3Jg" },
      { title: "Indian Contract Act 1872 || Lecture 6", vid: "t5acUdELXKQ" },
      {
        title: "Indian Contract Act 1872 || Free Consent|| Lecture 6",
        vid: "AZRNRt7bf2c",
      },
      {
        title: "Indian Contract Act 1872 || Coercion|| Lecture 8",
        vid: "vil2nibojzw",
      },
    ],
    Factories_Act_1948: [
      { title: "1. Factory [section 2(m)]", vid: "S8uAA5cXGVE" },
      { title: "2. Manufacturing process [section 2(k)]", vid: "VgNC_tpVLtc" },
      { title: "3. Some More Definitions", vid: "UZTsD85mQ-Y" },
      { title: "4. Health Provisions[Sec.11-20]", vid: "GbDwRrayjY4" },
      { title: "4. Safety of Worker[Sec.21-41]", vid: "DOaDavezMY0" },
    ],
    Home_Science_by_Deeksha_Mam: [
      {
        title: "NTA NET HOME SCIENCE, (important topic series, part-3)",
        vid: "PVMz2h25bLU",
      },
      {
        title: "NTA NET- HOME SCIENCE , Important topic series (part -2)",
        vid: "t1k10qFv0O0",
      },
      {
        title: "NTA NET, HOME SCIENCE( Important topic series (part -1)",
        vid: "WD25chLTcic",
      },
      {
        title:
          "NTA NET HOME SCIENCE, Important topic series (Part-4) , Milk Processing",
        vid: "1BK7b71oyPA",
      },
      {
        title:
          "NTA NET(HOME SCIENCE), Important topic series part-5, Nutritional composition and types of milk",
        vid: "srQXEJUJug8",
      },
      {
        title: "UGC NTA NET/JRF, TGT, PGT, GIC LECTURER HOME SCIENCE QUIZ",
        vid: "5qIMpTAcZUg",
      },
      {
        title:
          "HOME SCIENCE QUIZ -2 (Nutrition and Dietetics) NTA NET/JRF, TGT, PGT, GIC lecturer",
        vid: "eOcbnK_oc0M",
      },
      {
        title:
          "Home Science Special Quiz series (food science ) for NTA UGC NET/JRF, tgt, pgt, UPPSC GIC lecturer,",
        vid: "UmA_9D3PYwk",
      },
    ],
    PYQ_SERIES_Economics: [
      { title: "MICRO ECONOMICS || PYQs || PART-1", vid: "OGyLUor75kI" },
      { title: "MICRO ECONOMICS || PYQ || PART-2", vid: "JICxXiJWNy0" },
      { title: "MICRO ECONOMICS ||PYQ PART-3 ||", vid: "63W51ZsQSrU" },
      { title: "PYQ || ENVIRONMENT ECONOMICS|| Part-1", vid: "zFE1ceqpGao" },
      {
        title: "PYQ || Environmental Economics || Part- 2",
        vid: "xuzaGAqLH5A",
      },
      { title: "PYQ || ENVIRONMENTAL ECONOMICS|| PART-3", vid: "fM1fPdbuc_I" },
      {
        title: "PYQ Series|| Environmental Economics|| Part-4",
        vid: "cofmKd32u7w",
      },
      {
        title: "PYQ|| SERIES ENVIRONMENTAL ECONOMICS||PART-5",
        vid: "YW-K7g0wYJE",
      },
    ],
    Institutions_of_Higher_Learning_in_Ancient_India: [
      {
        title: "UNIQUE FEATURES OF ANCIENT INDIAN INSTITUTES",
        vid: "https://youtu.be/CY4FFbZxB_A",
      },
      { title: "VikramShila university", vid: "https://youtu.be/5Qz1QU2_DCI" },
    ],
  };

  const [vid, setUid] = useState(course[coursename][0].vid);
  const [title, setTitle] = useState(course[coursename][0].title);
  const [counter, setCounter] = useState(0);

  const renderVideo = () => {
    return (
      <div>
        <div className="video-container">
          <div className="card">
            <iframe
              style={{
                width: "100%",
                height: "300px",
              }}
              src={"//www.youtube.com/embed/" + vid + "?rel=0"}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <p className="card-text  text-center">{title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-md-5 py-3">
      <div className="container">
        <div className="row gy-2">
          <h1 className="text-center course_heading mb-4">{coursename}</h1>
          <div className="col-lg-6 col-12">{renderVideo()}</div>
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-header">Playlist - </div>
              <div className="freeCourseScroll">
                <ul className="list-group list-group-flush">
                  {course[coursename].map((item, index) => {
                    return (
                      <li
                        className={
                          counter == index
                            ? "list-group-item myvideo_title"
                            : "list-group-item myvideo_title2"
                        }
                        key={index}
                      >
                        <Link
                          to="#!"
                          onClick={() => {
                            setUid(item.vid);
                            setTitle(item.title);
                            setCounter(index);
                          }}
                          className="collection-item myvideo_title_link text-white"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStructure;
