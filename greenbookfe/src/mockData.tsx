const mockData = [
  {
    companyName: "ABANCA Corporación Bancaria, S. A.",
    country: "Spain",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Abanca_External%20Review%20Report.pdf",
  },
  {
    companyName: "ABN AMRO (2015)",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ABN_AMRO_2015_External%20review%20report.pdf",
  },
  {
    companyName: "ABN AMRO (2016)",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ABN_AMRO_2016_External%20Review%20report.pdf",
  },
  {
    companyName: "AC Energy Finance Supra-national",
    country: "Philippines",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/AC%20Energy_External%20Review%20Report.pdf",
  },
  {
    companyName: "Acea S.p.A",
    country: "Italy",
    sector: "Utility",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Acea_External%20Review%20Report.pdf",
  },
  {
    companyName: "ACS SCE",
    country: "Spain",
    sector: "Corporate-Infrastructure",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ACS-SCE_External%20Review%20Report.pdf",
  },
  {
    companyName: "Activia Properties Inc.",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Activia%20Properties_External%20Review%20Report.pdf",
  },
  {
    companyName: "Adani Green Energy",
    country: "India",
    sector: "Corporate-Energy",
    reviewer: "KPMG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Adani_External%20Review%20Report.PDF",
  },
  {
    companyName: "ADIF - Alta Velocidad",
    country: "Spain",
    sector: "Corporate-Infrastructure",
    reviewer: "CICERO/ENSO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ADIF-AV_External%20Review%20Report-140717.pdf",
  },
  {
    companyName: "Advance Residence Investment Corporation",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ARIC_External%20Review%20Report.pdf",
  },
  {
    companyName: "Advanced SolTech Sweden AB",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Advanced%20Soltech_External%20Review%20Report.pdf",
  },
  {
    companyName: "AEDAS Homes",
    country: "Spain",
    sector: "Corporate-Real Estate",
    reviewer: "S&P Global Ratings",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/AEDAS%20Homes_External%20Review%20Report.pdf",
  },
  {
    companyName: "AEON Financial Service",
    country: "Japan",
    sector: "Financial Institution",
  },
  {
    companyName: "Aeroporti di Roma S.p.A.",
    country: "Italy",
    sector: "Corporate-Transportation",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ADR_External%20Review%20Report.pdf",
  },
  {
    companyName: "Africa Finance Corporation",
    country: "Nigeria",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/AFC_External%20Review%20Report.pdf",
  },
  {
    companyName: "African Development Bank",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/AfDB_External%20Review%20report.pdf",
  },
  {
    companyName: "Agder Energi ",
    country: "Norway",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Agder%20energi_External%20Review%20Report.pdf",
  },
  {
    companyName: "Agence Française de Développement (AFD) (2014)",
    country: "France",
    sector: "Agency",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/AFD_External%20Review%20Report.PDF",
  },
  {
    companyName: "Agence Française de Développement (AFD) (2017)",
    country: "France",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/AFD_2017_External%20Review%20Report.PDF",
  },
  {
    companyName: "Agricultural Bank of China ltd.",
    country: "China",
    sector: "Financial Institution",
    reviewer: "Deloitte",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ABC_External%20Review%20report.pdf",
  },
  {
    companyName: "Agricultural Development Bank of China",
    country: "China",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ADBC_External%20Review%20Report.pdf",
  },
  {
    companyName: "AgriNurture Inc.",
    country: "Philippines",
    sector: "Corporate-agri food",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/AgriNurture_External%20Review%20Report.pdf",
  },
  {
    companyName: "Akademiska Hus",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Akademiska_External%20Review%20Report.pdf",
  },
  {
    companyName: "Akershus Energi",
    country: "Norway",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/AkershusEnergi_External%20Review%20Report.pdf",
  },
  {
    companyName: "ALD Automotive",
    country: "France",
    sector: "Corporate-Consumer services",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ALD%20Automotive_External%20Review%20Report.pdf",
  },
  {
    companyName: "Alimentation Couche-Tard Inc.",
    country: "Canada",
    sector: "Corporate-Consumer services",
    reviewer: "ISS-ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/couchetard_External%20Review%20Report.pdf",
  },
  {
    companyName: "Alliander NV (2016)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Alliander_External%20Review%20Report.pdf",
  },
  {
    companyName: "Alliander NV (2019)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Alliander_External%20Review%20Report_2019.pdf",
  },
  {
    companyName: "Alliander NV (2020)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Alliander_External%20Review%20Report_2020-.pdf",
  },
  {
    companyName: "Alperia SpA",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/alperia_External%20Review%20Report.pdf",
  },
  {
    companyName: "Alpha Trains",
    country: "Luxembourg",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Alpha%20Trains_External%20Review%20Report.pdf",
  },
  {
    companyName: "American Municipal Power (Combined hydro projects)",
    country: "US",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/amp_combined%20hydro%20projects_External%20Review%20report.pdf",
  },
  {
    companyName: "American Municipal Power (Meldahl hydro)",
    country: "US",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/amp_meldahl%20hydo_External%20Review%20report.pdf",
  },
  {
    companyName: "ANA HOLDINGS INC.",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Ana-Holdings-inc_External-Review-Report.pdf",
  },
  {
    companyName: "Analog Devices, Inc.",
    country: "US",
    sector: "Corporate-Consumer services",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Analog%20Devices_External%20Review%20Report.pdf",
  },
  {
    companyName: "Anglian Water",
    country: "UK",
    sector: "Corporate-Infrastructure",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Anglian%20Water_External%20Review%20Report%20090817.pdf",
  },
  {
    companyName: "Apple Inc. (2016)",
    country: "US",
    sector: "Corporate-Consumer goods",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Apple_External%20Review%20Report.pdf",
  },
  {
    companyName: "Apple Inc. (2019)",
    country: "US",
    sector: "Corporate-Consumer goods",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Apple_External%20Review%20Report_2019.pdf",
  },
  {
    companyName: "Aquafin (2015)",
    country: "Belgium",
    sector: "Corporate-Infrastructure",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Aquafin_External%20Review%20Report.pdf",
  },
  {
    companyName: "Aquafin (2020)",
    country: "Belgium",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Aquafin_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Arab Republic of Egypt",
    country: "Egypt",
    sector: "Sovereign",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Egypt_External%20Review%20Report.pdf",
  },
  {
    companyName: "Arçelik A.Ş.",
    country: "Turkey",
    sector: "Corporate-Consumer services",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ar%C3%A7elik_External%20Review%20Report.pdf",
  },
  {
    companyName: "Arendals Fossekompani ASA",
    country: "Norway",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Arendals_External%20Review%20Report.pdf",
  },
  {
    companyName: "ARKEMA",
    country: "France",
    sector: "Corporate-Industry",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Arkema_External%20Review%20Report.pdf",
  },
  {
    companyName: "Arthaland Corporation",
    country: "Philippines",
    sector: "Corporate-Real Estate",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ARTHALAND_External%20Review%20Report.pdf",
  },
  {
    companyName: "Arwidsro Fastighets",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Arwidsro_External%20Review%20Report.pdf",
  },
  {
    companyName: "Asahi Holdings, Inc.",
    country: "Japan",
    sector: "Corporate-Industry",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Asahi_External%20Review%20Report.pdf",
  },
  {
    companyName: "Asian Development Bank (ADB)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ADB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Assicurazioni Generali ",
    country: "Italy",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Assicurazioni%20Generali_External%20Review%20Report.pdf",
  },
  {
    companyName: "Atenor s.a",
    country: "Belgium",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Atenor_External%20Review%20Report.pdf",
  },
  {
    companyName: "Atlantica",
    country: "UK",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Atlantica_External%20Review%20Report.pdf",
  },
  {
    companyName: "Atrium Ljungberg",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "file:///C:\\Users\\SBenrejdal\\anna.mayilyan\\AppData\\Local\\Temp\\www.icmagroup.org\\Emails\\icma-vcards\\Atrium%20Ljungberg_External%20Review%20Report.pdf",
  },
  {
    companyName: "Auckland Council",
    country: "New Zealand",
    sector: "Municipal",
    reviewer: "E&Y",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Auckland%20Council_External%20Review%20Report.pdf",
  },
  {
    companyName: "Audax Renovables",
    country: "Spain",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/AUDAX%20Renovables_External%20Review%20Report.pdf",
  },
  {
    companyName: "Australia and New Zealand Banking Group Limited (ANZ)",
    country: "Australia",
    sector: "Financial Institution",
    reviewer: "E&Y",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ANZ%20Bank_External%20Review%20Report%20%28green%29.pdf",
  },
  {
    companyName: "AutoWallis Nyrt",
    country: "Hungary",
    sector: "Corporate-Transportation",
  },
  {
    companyName: "Axpo Holding AG",
    country: "Switzerland",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Axpo_External%20Review%20Report.pdf",
  },
  {
    companyName: "Banca Popolare di Sondrio",
    country: "Italy",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/banca-popolare-di-sondrio_External%20Review%20Report.pdf",
  },
  {
    companyName: "Banco Atlántida",
    country: "Honduras",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Banco%20Atlantida_External%20Review%20Report.pdf",
  },
  {
    companyName: "Banco Davivienda ",
    country: "Colombia",
    sector: "Financial Institution",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Banco-Davivienda_Market-Information-Template.pdf",
  },
  {
    companyName: "Banco de Bogotá S.A.",
    country: "Colombia",
    sector: "Financial Institution",
    reviewer: "Ernst & Young",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Banco%20de%20Bogot%C3%A1_External%20Review%20Report.pdf",
  },
  {
    companyName: "Banco de Comercio Exterior de Colombia S.A.",
    country: "Colombia",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Bancoldex_External%20Review%20Report%20GB.pdf",
  },
  {
    companyName: "Banco Mercantil del Norte S.A. ",
    country: "Mexico",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Banorte_External%20Review%20Report.pdf",
  },
  {
    companyName: "Banco Nacional de Desenvolvimento Economicô e Social (BNDES)",
    country: "Brazil",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/BNDES_External%20Review%20Report.pdf",
  },
  {
    companyName: "Bancolombia (2016)",
    country: "Colombia",
    sector: "Financial Institution",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Bancolombia_Market-Information-Template_131216.pdf",
  },
  {
    companyName: "Bancolombia (2018)",
    country: "Colombia",
    sector: "Financial Institution",
    reviewer: "Deloitte",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Bancocolombia_External%20Review%20Report_%202018.pdf",
  },
  {
    companyName: "Bangkok Mass Transit System PCL (BTS) (2019)",
    country: "Thailand",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BTSG%20%282019%29%20External%20review%20Report.pdf",
  },
  {
    companyName: "Bangkok Mass Transit System PCL (BTS) (2020)",
    country: "Thailand",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BTSG%20%282020%29%20External%20Review%20Report.pdf",
  },
  {
    companyName: "Bangkok Mass Transit System PCL (BTS) (2021)",
    country: "Thailand",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BTSG%20%282021%29_External%20Review%20Report.pdf",
  },
  {
    companyName: "Bank of China (2017)",
    country: "China",
    sector: "Financial Institution",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/BOC_Market%20Information%20template%203108.pdf",
  },
  {
    companyName: "Bank of China (2018)",
    country: "China",
    sector: "Financial Institution",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BoC_2018_%20Market%20Information%20Template.pdf",
  },
  {
    companyName: "Bank of the Philippine Islands",
    country: "Philippines",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BPI_External%20Review%20Report.pdf",
  },
  {
    companyName: "Bankinter, S.A. (2019)",
    country: "Spain",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Bankinter_External%20Review%20Report.pdf",
  },
  {
    companyName: "Bankinter, S.A. (2021)",
    country: "Spain",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Bankinter_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Barclays PLC",
    country: "UK",
    sector: "Financial Institution",
    reviewer: "CARBON TRUST",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Barclays_External%20Review%20Report.pdf",
  },
  {
    companyName: "Baromfi-Coop Kft",
    country: "Hungary",
    sector: "Corporate-agri food",
  },
  {
    companyName: "Baseload Capital ",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Baseload%20Capital_External%20Review%20Report.pdf",
  },
  {
    companyName: "BASF",
    country: "Germany",
    sector: "Corporate-Industry",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BASF_External%20Review%20Report.pdf",
  },
  {
    companyName: "BayWa",
    country: "Germany",
    sector: "Corporate-Industry",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BayWa_External%20Review%20Report.pdf",
  },
  {
    companyName: "Bazalgette Finance plc (Tideway)",
    country: "UK",
    sector: "Corporate-Infrastructure",
    reviewer: "S&P Global Ratings",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Bazalgette%20Finance_External%20Review%20Report.pdf",
  },
  {
    companyName: "BBVA Bancomer ",
    country: "Mexico",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BBVA%20Bancomer_External%20Review%20Report.pdf",
  },
  {
    companyName: "BBVA SA",
    country: "Spain",
    sector: "Financial Institution",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/BBVA%20SDG_External%20Review%20Report2.pdf",
  },
  {
    companyName: "Beijing Capital Group",
    country: "China",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BCG_External%20Review%20Report.pdf",
  },
  {
    companyName: "Belfius",
    country: "Belgium",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Belfius_External%20Review%20Report.pdf",
  },
  {
    companyName: "Berlin Hyp AG (2016)",
    country: "Germany",
    sector: "Corporate-Real Estate",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/BerlinHyp_External%20Review%20Report_201704.pdf",
  },
  {
    companyName: "Berlin Hyp AG (2018)",
    country: "Germany",
    sector: "Corporate-Real Estate",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BerlinHyp%202018_External%20Review%20Report.pdf",
  },
  {
    companyName: "Berlin Hyp AG (2019)",
    country: "Germany",
    sector: "Corporate-Real Estate",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BerlinHyp_External%20Review%20Report_2019.pdf",
  },
  {
    companyName: "Berlin Hyp AG (2020)",
    country: "Germany",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BerlinHyp_External%20Review%20Report_2020.pdf",
  },
  {
    companyName: "Berlin Hyp AG (2021)",
    country: "Germany",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BerlinHyp_External%20Review%20Report_2021.pdf",
  },
  {
    companyName: "Besqab AB",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Besqab%20Market_Information_Template.pdf",
  },
  {
    companyName: "BKS Bank AG (2018)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "rfu",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BKS_Green_Bond_External%20Review%20Report.pdf",
  },
  {
    companyName: "BKS Bank AG (2021)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "rfu",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BKS_Green_Bond_External%20Review%20Report_2021.pdf",
  },
  {
    companyName: "BKW AG",
    country: "Switzerland",
    sector: "Corporate-Infrastructure",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BKW_External%20Review%20Report.pdf",
  },
  {
    companyName: "Blackstone Property Partners Europe Holdings",
    country: "Luxembourg",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Blackstone_External%20Review%20Report.pdf",
  },
  {
    companyName: "Bloom Energy Corporation",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Bloom%20Energy_External%20Review%20Report.pdf",
  },
  {
    companyName: "BNP Paribas (2016)",
    country: "France",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/BNP%20Paribas_External%20Review%20Report.pdf",
  },
  {
    companyName: "BNP Paribas (2018)",
    country: "France",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BNPP%202018_External%20Review%20Report.pdf",
  },
  {
    companyName: "BNP Paribas (2019)",
    country: "France",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BNPP%202019_External%20Review%20Report.pdf",
  },
  {
    companyName: "BPCE",
    country: "France",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/BPCE_External%20Review%20Report.pdf",
  },
  {
    companyName: "Bpifrance",
    country: "France",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/BpiFrance_External%20Review%20Report.pdf",
  },
  {
    companyName: "Brage Finans AS",
    country: "Norway",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Brage%20Finans_External%20Review%20Report.pdf",
  },
  {
    companyName: "Brookfield Renewable (2018)",
    country: "Canada",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Brookfield%20Renewable_External%20Review%20Report.pdf",
  },
  {
    companyName: "Brookfield Renewable (2019)",
    country: "Canada",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Brookfield%20Renewable_External%20Review%20Report%20%282019%29.pdf",
  },
  {
    companyName: "Brookfield Renewable (2020)",
    country: "Canada",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Brookfield%20Renewable_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Caisse de dépôt et placement du Québec",
    country: "Canada",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/caisse-depot-quebec_External%20Review%20Report.pdf",
  },
  {
    companyName: "Caisse des Dépôts",
    country: "France",
    sector: "Agency",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/CdC_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "California Community Choice Financing Authority (East Bay Community Energy and Silicon Valley Clean Energy)",
    country: "US",
    sector: "Agency",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/California%20CCFA_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "California Infrastructure and Economic Development Bank (CalSTRS)",
    country: "US",
    sector: "MDB",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Cal%20IEDB_External%20Review%20Report.pdf",
  },
  {
    companyName: "CAMPO Co., Ltd. ",
    country: "Japan",
    sector: "Utility",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Campo_External%20Review%20Report.pdf",
  },
  {
    companyName: "Canada Pension Plan Investment Board (2018)",
    country: "Canada",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CPPIB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Canada Pension Plan Investment Board (2021)",
    country: "Canada",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CPPIB_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Canadian Imperial Bank of Commerce",
    country: "Canada",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CIBC_External%20Review%20Report_Green%20bonds.pdf",
  },
  {
    companyName: "Canadian Solar Infrastructure Fund, Inc.",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Canadian%20Solar_External%20Review%20Report.pdf",
  },
  {
    companyName: "Canadian Solar Project",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CSP_External%20Review%20Report.pdf",
  },
  {
    companyName: "Canary Wharf Group Investment Holding PLC",
    country: "UK",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Canarywharf_External%20Review%20Report.pdf",
  },
  {
    companyName: "Caruna",
    country: "Finland",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Caruna_External%20Review%20Report.pdf",
  },
  {
    companyName: "Castellum AB",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Castellum_External%20Review%20Report.pdf",
  },
  {
    companyName: "Catena AB",
    country: "Sweden",
    sector: "Corporate-Transportation",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Catena_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ceetrus",
    country: "France",
    sector: "Corporate-Real Estate",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Ceetrus_External%20Review%20Report.pdf",
  },
  {
    companyName: "Central American Bank for Economic Integration (CABEI)",
    country: "Supra-national",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CABEI_External%20Review%20Report.pdf",
  },
  {
    companyName: "Central Japan Railway Company",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/JRcentral_External%20Review%20Report.pdf",
  },
  {
    companyName: "Central Nippon Expressway Company (Climate Resilience)",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NEXCO_External%20Review%20Report.pdf",
  },
  {
    companyName: "Central Nippon Expressway Company Limited (2020)",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NEXCO_External%20Review%20Report%202020.pdf",
  },
  {
    companyName:
      "Central Puget Sound Regional Transit Authority (Sound Transit)",
    country: "US",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Sound%20Transit_External%20Review%20Report.pdf",
  },
  {
    companyName: "China Construction Bank (HK Branch)",
    country: "Hong Kong",
    sector: "Financial Institution",
    reviewer: "E&Y",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CCB_HK_External%20Review%20Report.pdf",
  },
  {
    companyName: "China Construction Bank (Luxembourg Branch)",
    country: "Luxembourg",
    sector: "Financial Institution",
    reviewer: "E&Y",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CCB_Lux_External%20Review%20Report.pdf",
  },
  {
    companyName: "China Everbright Bank",
    country: "China",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CEB-China_External%20Review%20Report.pdf",
  },
  {
    companyName: "Cibus Nordic Real Estate AB",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Cibus_External%20Review%20Report.pdf",
  },
  {
    companyName: "Citi Group",
    country: "US",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Citigroup_External%20Review%20Report.pdf",
  },
  {
    companyName: "City Developments Limited",
    country: "Singapore",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/City%20Developments%20Limited_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Berkeley, California (series A)",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Berkeley_External%20Review%20Report_green.pdf",
  },
  {
    companyName: "City of Berkeley, California (series B)",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Berkeley%20series%20B_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Boston",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Boston_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Cape Town",
    country: "South Africa",
    sector: "Municipal",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Cape%20Town_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Edmonds",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Edmonds_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Gainesville",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Gainesville_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Gothenburg",
    country: "Sweden",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Gothenburg_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Lund",
    country: "Sweden",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/City%20of%20Lund_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Minneapolis (2018)",
    country: "US",
    sector: "Municipal",
  },
  {
    companyName: "City of Minneapolis (2019)",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Minneapolis_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Oslo",
    country: "Norway",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/City%20of%20Oslo_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Paris",
    country: "France",
    sector: "Municipal",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/City%20of%20Paris_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Reykjavik",
    country: "Iceland",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Reykjavik_External%20Review%20report.pdf",
  },
  {
    companyName:
      "City of Seattle (Municipal Light and Power Improvement Revenue Bonds, 2020)",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Seattle_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "City of Seattle (Water System Improvement and Refunding Revenue Bonds, 2021)",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Seattle_External%20Review%20Report_Water%20System.pdf",
  },
  {
    companyName:
      "City of Tacoma, Washington (Electric System Revenue Bonds, Series 2021)",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Tacoma_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Vancouver",
    country: "Canada",
    sector: "Municipal",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vancouver_External%20Review%20Report.pdf",
  },
  {
    companyName: "City of Västerås",
    country: "Sweden",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/V%C3%A4ster%C3%A5s%20Stad_External%20Review%20Report.pdf",
  },
  {
    companyName: "Citycon",
    country: "Finland",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/citycon_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ciudad de México (CDMX)",
    country: "Mexico",
    sector: "Municipal",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Ciudad%20de%20M%C3%A9xico_External%20Review%20Report.pdf",
  },
  {
    companyName: "Clearway Energy Operating LLC",
    country: "US",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Clearway%20Energy_External%20Review%20report.pdf",
  },
  {
    companyName: "CNP Assurance",
    country: "France",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CNP%20Assurances_External%20Review%20Report.pdf",
  },
  {
    companyName: "CODIC International",
    country: "Belgium",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Codic_External%20Review%20Report.pdf",
  },
  {
    companyName: "Columbus Energy S.A.",
    country: "Poland",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Columbus_External%20Review%20Report.pdf",
  },
  {
    companyName: "Commerzbank",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Commerzbank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Compagnie de Phalsbourg",
    country: "France",
    sector: "Corporate-Real Estate",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Compagnie%20de%20Phalsbourg_External%20Review%20Report.PDF",
  },
  {
    companyName: "Concord New Energy",
    country: "China",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Concord_External%20Review%20Report.pdf",
  },
  {
    companyName: "Connecticut Green Bank (2020)",
    country: "US",
    sector: "Financial Institution",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Connecticut%20GB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Connecticut Green Bank (Series 2019-1)",
    country: "US",
    sector: "Financial Institution",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Connecticut%20Green%20Bank_2019_External%20Review%20Report.pdf",
  },
  {
    companyName: "Consorcio Transmantaro S.A.",
    country: "Peru",
    sector: "Corporate-Energy",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Consorcio%20Transmantaro_External%20Review%20Report.pdf",
  },
  {
    companyName: "Continuum Green Energy",
    country: "India",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Continuum_External%20Review%20Report.pdf",
  },
  {
    companyName: "Corem Property Group",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Corem_Market_Information_Template.pdf",
  },
  {
    companyName: "Corporación Andina de Fomento (CAF)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CAF_External%20Review%20Report_green.pdf",
  },
  {
    companyName: "Covivio",
    country: "France",
    sector: "Corporate-Real Estate",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Covivio_External%20Review%20Report.pdf",
  },
  {
    companyName: "Crédit Agricole (2016)",
    country: "France",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/CACIB_green%20notes_External%20Review%20report.pdf",
  },
  {
    companyName: "Crédit Agricole (2018)",
    country: "France",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Cr%C3%A9dit%20Agricole%20Group_External%20Review%20Report.pdf",
  },
  {
    companyName: "Crédit Agricole (2019)",
    country: "France",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Cr%C3%A9dit%20Agricole_External%20Review%20Report_2019%2010.PDF",
  },
  {
    companyName: "Crédit Agricole next bank (Suisse) SA",
    country: "Switzerland",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Cr%C3%A9dit%20Agricole%20next%20bank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Credit Suisse",
    country: "Switzerland",
    sector: "Financial Institution",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Credit%20Suisse_External%20Review%20Report.pdf",
  },
  {
    companyName: "CSOLAR IV West, LLC",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/CSolar_External%20Review%20Report.pdf",
  },
  {
    companyName: "CTP",
    country: "Czech Republic",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/CTP_External%20Review%20Report.pdf",
  },
  {
    companyName: "CyrusOne Inc",
    country: "US",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/cyrus_External%20Review%20Report.pdf",
  },
  {
    companyName: "Daiken Corporation",
    country: "Japan",
    sector: "Corporate-Consumer goods",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daiken%20Corporation_External%20Review%20Report.pdf",
  },
  {
    companyName: "Daimler AG",
    country: "Germany",
    sector: "Corporate-Transportation",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daimler_External%20Review%20Report.pdf",
  },
  {
    companyName: "Daio Paper Corporation (2018)",
    country: "Japan",
    sector: "Corporate-Consumer goods",
    reviewer: "DNV GL",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daio%20Paper_External%20Review%20Report.pdf",
  },
  {
    companyName: "Daiwa Energy & Infrastructure Co. Ltd.",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daiwa%20E%26I_External%20Review%20Report.pdf",
  },
  {
    companyName: "Daiwa House Industry Co., Ltd. ",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daiwa%20House_External%20review%20Report.pdf",
  },
  {
    companyName: "Daiwa House REIT (2019)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daiwa%20House%20REIT_External%20Review%20Report.pdf",
  },
  {
    companyName: "Daiwa House REIT (2021)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daiwa%20House%20REIT_External%20Review%20Report_2021.pdf",
  },
  {
    companyName: "Daiwa Securities Group",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Daiwa%20SG_External%20Review%20Report.pdf",
  },
  {
    companyName: "Damu Entrepreneurship Development Fund JSC",
    country: "Kazakhstan",
    sector: "Agency",
    reviewer: "AIFC Green Finance Centre",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Damu%20Fund_External%20Review%20Report.pdf",
  },
  {
    companyName: "Dana Inc.",
    country: "US",
    sector: "Corporate-Technology",
    reviewer: "S&P Global Ratings",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Dana_External%20Review%20Report.pdf",
  },
  {
    companyName: "Danske Bank (2019)",
    country: "Denmark",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Danske%20Bank_External%20Review%20report.pdf",
  },
  {
    companyName: "Danske Bank (2021)",
    country: "Denmark",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Danske%20Bank_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "De Volksbank ",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/de-Volksbank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Derichebourg",
    country: "France",
    sector: "Corporate-Industry",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Derichebourg_External%20Review%20Report.pdf",
  },
  {
    companyName: "Deutsche Bank AG",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Deutsche%20Bank_External%20Review%20Report.PDF",
  },
  {
    companyName: "Deutsche Hypothekenbank AG (2017)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Deutsche%20Hypo_External%20Review%20Report%203108.pdf",
  },
  {
    companyName: "Deutsche Hypothekenbank AG (2020)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Deutsche%20Hypo_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Deutsche Kreditbank (DKB) (2016)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research ",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/DKB_External%20Review%20Report_150916.pdf",
  },
  {
    companyName: "Deutsche Kreditbank (DKB) (2017)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research ",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/DKB_2017_External%20Review%20report.pdf",
  },
  {
    companyName: "Deutsche Kreditbank (DKB) (2020)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/DKB_External%20Review%20Report%202020%20Green.pdf",
  },
  {
    companyName: "Deutsche Wohnen SE Group",
    country: "Germany",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Deutsche%20Wohnen_External%20Review%20Report.pdf",
  },
  {
    companyName: "Development Bank of Japan (DBJ)",
    country: "Japan",
    sector: "MDB",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/DBJ_Green%20bond_External%20review%20report_211116.pdf",
  },
  {
    companyName: "Development Bank of Southern Africa ",
    country: "South Africa",
    sector: "MDB",
    reviewer: "CARBON TRUST",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/DBSA_External%20Review%20Report.pdf",
  },
  {
    companyName: "Dexin China Holdings Company Limited",
    country: "China",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Dexin_External%20Review%20Report.pdf",
  },
  {
    companyName: "Digital Realty",
    country: "US",
    sector: "Corporate-Technology",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Digital%20Realty_External%20Review%20Report.pdf",
  },
  {
    companyName: "Diös",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Dios_External%20Review%20Report.pdf",
  },
  {
    companyName: "District of Columbia Water & Sewer",
    country: "US",
    sector: "Utility",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/DC%20Water_External%20Review%20Report.pdf",
  },
  {
    companyName: "Dublin Unified School District",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Dublin_External%20Review%20Report.pdf",
  },
  {
    companyName: "DZ BANK AG",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "S&P Global Ratings",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/DZ%20Bank_External%20Review%20Report.pdf",
  },
  {
    companyName: "E.ON (2019)",
    country: "Germany",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/E.ON_External%20Review%20Report.pdf",
  },
  {
    companyName: "E.ON (2021)",
    country: "Germany",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/E.ON_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "East Renewable AB",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/East%20Renewable_External%20Review%20Report.pdf",
  },
  {
    companyName: "Eco Research Institute",
    country: "Japan",
    sector: "Corporate-Industry",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Eco%20Research%20Institute_External%20Review%20Report.pdf",
  },
  {
    companyName: "EDF",
    country: "France",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/EDF_External%20Review%20report.pdf",
  },
  {
    companyName: "Electricity Supply Board (ESB)",
    country: "Ireland",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ESB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Electrolux ",
    country: "Sweden",
    sector: "Corporate-Consumer goods",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Electrolux_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ellaktor Value PLC",
    country: "Greece",
    sector: "Corporate-Infrastructure",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Ellaktor_External%20Review%20Report.pdf",
  },
  {
    companyName: "Empresas CMPC S.A. (CMPC)",
    country: "Chile",
    sector: "Corporate-Consumer goods",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/CMPC-External%20review%20Report.pdf",
  },
  {
    companyName: "EnBW",
    country: "Germany",
    sector: "Corporate-Energy",
    reviewer: "ISS-oekom",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/EnBW_External%20Review%20Report.pdf",
  },
  {
    companyName: "ENEL Finance Supra-national (2017)",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Enel%20Group_External%20Review%20Report.pdf",
  },
  {
    companyName: "ENEL Finance Supra-national (2018)",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Enel%202018_External%20Review%20Report.pdf",
  },
  {
    companyName: "Energias de Portugal Group (EDP)",
    country: "Portugal",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EDP-External%20Review%20Report.pdf",
  },
  {
    companyName: "Energy Development Corporation (EDC)",
    country: "Philippines",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EDC%20Philippines_External%20Review%20Report.pdf",
  },
  {
    companyName: "ENGIE (2014)",
    country: "France",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Engie_External%20Review%20report.pdf",
  },
  {
    companyName: "ENGIE (January 2018)",
    country: "France",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Engie_Jan%202018_External%20Review%20Report.pdf",
  },
  {
    companyName: "ENGIE (March 2017)",
    country: "France",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Engie_March%202017_External%20Review%20Report.pdf",
  },
  {
    companyName: "ENGIE (September 2017)",
    country: "France",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Engie_Sept%202017_External%20Review%20Report.pdf",
  },
  {
    companyName: "Entra Eiendom ASA (Entra)",
    country: "Norway",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Entra_External%20Review%20Report.pdf",
  },
  {
    companyName: "EUROFIMA",
    country: "Switzerland",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Eurofima-External%20Review%20Report_2018.pdf",
  },
  {
    companyName:
      "European Bank for Reconstruction and Development (EBRD) - Climate Resilience Bonds 2019",
    country: "Supra-national",
    sector: "MDB",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EBRD_CRB_Market%20Information%20Template_2019.pdf",
  },
  {
    companyName:
      "European Bank for Reconstruction and Development (EBRD) - Environmental Sustainability Bonds 2019",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/EBRD_External%20Review%20Report_150916.pdf",
  },
  {
    companyName:
      "European Bank for Reconstruction and Development (EBRD) - Green Transition Bonds 2019",
    country: "Supra-national",
    sector: "MDB",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EBRD_GTB_Market%20Information%20Template_2019.pdf",
  },
  {
    companyName: "European Energy A/S",
    country: "Denmark",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/European%20Energy_External%20Review%20Report.pdf",
  },
  {
    companyName: "European Investment Bank (EIB) - CABs (2015)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "KPMG",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/EIB_External%20Review%20Form%20%26%20CAB%20Statement.pdf",
  },
  {
    companyName: "European Investment Bank (EIB) - CABs (2016)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "KPMG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EIB_CAB%20statement%202016.pdf",
  },
  {
    companyName: "European Investment Bank (EIB) - CABs (2017)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "KPMG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EIB_CAB%20statement%202017.pdf",
  },
  {
    companyName: "European Investment Bank (EIB) - CABs (2018)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "KPMG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EIB_CAB%20statement%202018.pdf",
  },
  {
    companyName: "European Investment Bank (EIB) - CABs (2019)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "KPMG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EIB_CAB%20statement%202019.pdf",
  },
  {
    companyName: "Export Development Canada",
    country: "Canada",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/EDC_External%20Review%20Report.pdf",
  },
  {
    companyName: "Export-Import Bank of Korea (KEXIM)",
    country: "Korea",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/KEXIM_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fabege",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Fabege_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fairfax County Economic Development Authority",
    country: "US",
    sector: "Agency",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Fairfax_External%20Review%20Report.pdf",
  },
  {
    companyName: "Falck Renewables",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/FALCK_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fannie Mae (2018)",
    country: "US",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Fannie%20Mae_%20External%20Review%20Report.pdf",
  },
  {
    companyName: "Fannie Mae (2020)",
    country: "US",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Fannie%20Mae_External%20Review%20Report_2020.pdf",
  },
  {
    companyName: "Fastighets AB Balder",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Balder_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fastpartner",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Fastpartner_External%20Review%20Report.pdf",
  },
  {
    companyName: "Faurecia",
    country: "France",
    sector: "Corporate-Transportation",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Faurecia_External%20Review%20Report.pdf",
  },
  {
    companyName: "FCC Servicios Medio Ambiente Holding ",
    country: "Spain",
    sector: "Corporate-Industry",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/FCC%20Medio%20Ambiente_External%20Review%20Report.pdf",
  },
  {
    companyName: "Federal Government of Nigeria",
    country: "Nigeria",
    sector: "Sovereign",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Nigeria_External%20Review%20Report%202019.pdf",
  },
  {
    companyName: "Federal Republic of Germany",
    country: "Germany",
    sector: "Sovereign",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Germany_External%20Review%20Report.pdf",
  },
  {
    companyName: "Federal State of Hessen",
    country: "Germany",
    sector: "Municipal",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hessen_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ferrovie dello Stato Italiane SpA",
    country: "Italy",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Ferrovie_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fibria Overseas Finance Ltd",
    country: "Brazil",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Fibria_External%20Review%20Report.pdf",
  },
  {
    companyName: "First Abu Dhabi Bank (2018)",
    country: "UAE",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/NBAD-External%20Review%20report.pdf",
  },
  {
    companyName: "First Abu Dhabi Bank (2019)",
    country: "UAE",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/NBAD-External%20Review%20report.pdf",
  },
  {
    companyName: "First Abu Dhabi Bank (2020)",
    country: "UAE",
    sector: "Financial Institution",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/FAB_2020_%20Market%20Information%20Template.pdf",
  },
  {
    companyName: "First Capital REIT",
    country: "Canada",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/first%20capital_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fluvius System Operator",
    country: "Belgium",
    sector: "Utility",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/fluvius_External%20Review%20Report.pdf",
  },
  {
    companyName: "Forbright Bank",
    country: "US",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/forbright_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fortum Värme",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Fortum_External%20Review%20Report.pdf",
  },
  {
    companyName: "Freddie Mac",
    country: "US",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Freddie%20Mac_External%20Review%20Report.pdf",
  },
  {
    companyName: "Fuyo General Lease Co., Ltd",
    country: "Japan",
    sector: "Corporate-consumer services",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Fuyo-General-Lease_External-Review-Report.pdf",
  },
  {
    companyName: "Gas Natural Fenosa",
    country: "Spain",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Gas%20Natural%20Fenosa_External%20Review%20Report.pdf",
  },
  {
    companyName: "Genova Property Group AB",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Genova_External%20Review%20Report.pdf",
  },
  {
    companyName: "Georgia Global Utilities",
    country: "Georgia",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Georgia%20Global%20Utilities_External%20Review%20Report.pdf",
  },
  {
    companyName: "GetLink S.E",
    country: "France",
    sector: "Corporate-Infrastructure",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/GetLink%20SE_External%20Review%20Report.pdf",
  },
  {
    companyName: "Global Invest Agrotech",
    country: "Spain",
    sector: "Corporate-agri food",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/GIA_External%20Review%20Report.pdf",
  },
  {
    companyName: "Globalworth",
    country: "Guernsey",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Globalworth_External%20Review%20Report.pdf",
  },
  {
    companyName: "GLP J-REIT",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/GLP%20J-REIT_External%20Review%20Report2.pdf",
  },
  {
    companyName: "Government of the United Kingdom",
    country: "UK",
    sector: "Sovereign",
    reviewer: "V.E",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/UK_External%20Review%20Report.pdf",
  },
  {
    companyName: "GPSS Holdings, Inc.",
    country: "Japan",
    sector: "Corporate-Energy",
  },
  {
    companyName: "Granite REIT",
    country: "Canada",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Granite%20REIT_External%20Review%20Report.pdf",
  },
  {
    companyName: "Green Lucca S.p.A.",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Greenlucca_External%20Review%20Report.pdf",
  },
  {
    companyName: "Greenko Group",
    country: "India",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/greenkogroup_External%20review%20report.pdf",
  },
  {
    companyName: "Groupama Group",
    country: "France",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/groupama_External%20Review%20Report.pdf",
  },
  {
    companyName: "Growthpoint",
    country: "South Africa",
    sector: "Corporate-Real Estate",
    reviewer: "KPMG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Growthpoint_External%20Review%20Report.pdf",
  },
  {
    companyName: "Grupo Aeroportuario del Centro Norte (OMA)",
    country: "Mexico",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/OMA_External%20Review%20Report.pdf",
  },
  {
    companyName: "Grupo Pestana SGPS",
    country: "Portugal",
    sector: "Corporate-Tourism",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Grupo%20Pestana%20SGPS_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hafslund Eco AS",
    country: "Norway",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hafslund_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hamburger Hochbahn AG",
    country: "Germany",
    sector: "Corporate-Transportation",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hamburger%20Hochbahn_External%20Review%20Report.pdf",
  },
  {
    companyName: "Handelsbanken",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Handelsbanken_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hanjin Supra-national Corp.",
    country: "US",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hanjin_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hankyu Hanshin REIT, Inc.",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/HHR_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hannon Armstrong",
    country: "US",
    sector: "Utility",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hannon%20Armstrong_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hanwha Energy USA",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hanwha_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hanwha Solutions",
    country: "South Korea",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hanwha%202021_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hawaiian Electric Company Inc. ",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hawaiian%20Electric_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hemfosa Fastigheter AB",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hemfosa_External%20Review%20Report.pdf",
  },
  {
    companyName: "HERA",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hera_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hitachi Capital (UK) PLC",
    country: "UK",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hitatchi%20Capital_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Hitachi Capital Corporation (Rating and Investment Information)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hitachi-Capital_External%20Review%20Report%20%28R%26I%29.pdf",
  },
  {
    companyName: "Hitachi Capital Corporation (Sustainalytics)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Hitachi-Capital_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hitachi Zosen Corporation",
    country: "Japan",
    sector: "Corporate-Industry",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hitachi%20Zosen_External%20Review%20Report.pdf",
  },
  {
    companyName: "HKSAR Government",
    country: "Hong Kong",
    sector: "Municipal",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hong%20Kong_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hokuriku Electric Power",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hokuriku_External%20Review%20Report.pdf",
  },
  {
    companyName: "Home Invest Belgium ",
    country: "Belgium",
    sector: "Corporate-Real Estate",
  },
  {
    companyName: "Honda Finance",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Honda%20Finance%202020_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hong Kong and China Gas Company Limited (Towngas Group)",
    country: "Hong Kong",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/HKCG_External%20Review%20Report.pdf",
  },
  {
    companyName: "HSBC",
    country: "UK",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/HSBC_External%20Review%20report.pdf",
  },
  {
    companyName: "Hudson Solar Japan",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hudson_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hudson Yards Infrastructure Corporation",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hudson%20Yards_External%20Review%20Report.pdf",
  },
  {
    companyName: "humm group limited (ex Flexigroup)",
    country: "Australia",
    sector: "Financial Institution",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/FLEXI_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hypo Vorarlberg Bank AG",
    country: "Austria",
    sector: "Financial Institution",
    reviewer: "oekom research ",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hypo%20Vorarlberg_External%20Review%20Report.pdf",
  },
  {
    companyName: "Hysan",
    country: "Hong Kong",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Hysan_External%20Review%20Report.pdf",
  },
  {
    companyName: "Iberdrola (December 2016)",
    country: "Spain",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Iberdrola_External%20Review%20Report.pdf",
  },
  {
    companyName: "Iberdrola (June 2018)",
    country: "Spain",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Iberdrola_June%202018_External%20Review%20report.pdf",
  },
  {
    companyName: "Iberdrola (March 2017)",
    country: "Spain",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Iberdrola%20March2017_External%20Review%20Report.pdf",
  },
  {
    companyName: "Iberdrola (September 2017)",
    country: "Spain",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Iberdrola_Sept-2017_External-Review-report.pdf",
  },
  {
    companyName: "Icade S.A",
    country: "France",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ICADE_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ile-de-France Mobilités",
    country: "France",
    sector: "Utility",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IDFM_External%20Review%20Report.pdf",
  },
  {
    companyName: "Indian Renewable Energy Development Agency Limited’s (IREDA)",
    country: "India",
    sector: "Corporate-Energy",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Indian%20Renewable%20Energy%20Development%20Agency_External%20Review%20Report.pdf",
  },
  {
    companyName: "Indiana Finance Authority ",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Indiana%20FA_External%20Review%20Report.pdf",
  },
  {
    companyName: "Industrial and Commercial Bank of China",
    country: "China",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ICBC_External%20Review%20Report.pdf",
  },
  {
    companyName: "Industrial Bank of China",
    country: "China",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IBC_External%20Review%20Report.pdf",
  },
  {
    companyName: "ING Bank NV (2017)",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ING%20Bank%20N.V.%20-%20External-Review%20Report.pdf",
  },
  {
    companyName: "ING Bank NV (2020)",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ING_2020_External%20Review%20Report.pdf",
  },
  {
    companyName: "Innogy SE",
    country: "Germany",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/innogy_External%20Review%20Report.pdf",
  },
  {
    companyName: "Instituto de Crédito Oficial (ICO)",
    country: "Spain",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ICO_External%20Review%20Report%20%28green%20bonds%29.pdf",
  },
  {
    companyName: "International Finance Corporation (IFC)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/IFC%20External-Review-report.pdf",
  },
  {
    companyName: "Intesa Sanpaolo",
    country: "Italy",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Intesa%20Sanpaolo_%20External%20Review%20Report.pdf",
  },
  {
    companyName: "Invesco Office J-REIT",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Invesco%20Office%20J-REIT_External%20Review%20Report.pdf",
  },
  {
    companyName: "IREN S.p.A. (2017)",
    country: "Italy",
    sector: "Utility",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IREN_External%20Review%20Report.pdf",
  },
  {
    companyName: "IREN S.p.A. (2018)",
    country: "Italy",
    sector: "Utility",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IREN_External%20Review%20Report.pdf",
  },
  {
    companyName: "IREN S.p.A. (2019)",
    country: "Italy",
    sector: "Utility",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IREN_External%20Review%20Report%202019.pdf",
  },
  {
    companyName: "IREN S.p.A. (2020)",
    country: "Italy",
    sector: "Utility",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IREN%202020_External%20Review%20Report.pdf",
  },
  {
    companyName: "IREN S.p.A. (2021)",
    country: "Italy",
    sector: "Utility",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IREN%202021_External%20Review%20Report.pdf",
  },
  {
    companyName: "Islamic Development Bank",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/IsDB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Íslandsbanki ",
    country: "Iceland",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/I%CC%81slandsbanki_External%20Review%20Report.pdf",
  },
  {
    companyName: "ITOCHU",
    country: "Japan",
    sector: "Corporate-consumer services",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ITOCHU_External%20Review%20Report.pdf",
  },
  {
    companyName: "JACCS CO., LTD. ",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/JACCS_External%20Review%20Report.pdf",
  },
  {
    companyName: "Jain Irrigation Systems Ltd.",
    country: "India",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/jain_irrigation_External%20Review%20Report.pdf",
  },
  {
    companyName: "Japan Bank for International Cooperation",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/JBIC_External%20Review%20Report.pdf",
  },
  {
    companyName: "Japan Excellent, Inc.",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Japan-Excellent_External%20Review%20Report.pdf",
  },
  {
    companyName: "Japan Finance Organization for Municipalities (JFM)",
    country: "Japan",
    sector: "Agency",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/JFM_External%20Review%20Report.pdf",
  },
  {
    companyName: "Japan Hotel REIT Investment Corporation ",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/JHR_External%20Review%20Report.pdf",
  },
  {
    companyName: "Japan Housing Finance Agency (JHF)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Japan%20Housing%20Finance%20Agency_External%20Review%20report%20%28Japanese%29.pdf",
  },
  {
    companyName: "Japan Prime Realty Investment Corporation",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/JPRI_External%20Review%20Report.pdf",
  },
  {
    companyName: "Japan Real Estate Investment (JRE) ",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Japan%20Real%20Estate_External%20Review%20Report.pdf",
  },
  {
    companyName: "Johnson Controls Supra-national plc",
    country: "Ireland",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Johnson_External%20Review%20Report.pdf",
  },
  {
    companyName: "JSW Hydro Energy",
    country: "India",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/jsw-hydro-energy_External%20Review%20Report.pdf",
  },
  {
    companyName: "K2A (Knaust & Andersson Fastigheter AB (publ))",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/K2A_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Kaiser Foundation Hospitals / California Health Facilities Financing Authority (2017)",
    country: "US",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Kaiser%20Foundation%20Hospitals_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Kaiser Foundation Hospitals / California Health Facilities Financing Authority (2021)",
    country: "US",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kaiser%20Foundation%20Hospitals_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Kajima Corporation",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kajima_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kanagawa Prefecture",
    country: "Japan",
    sector: "Municipal",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kanagawapref_Exrernal%20Review%20Report.pdf",
  },
  {
    companyName: "KANEKA Corporation",
    country: "Japan",
    sector: "Corporate-consumer services",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kaneka_External%20Review%20Report.pdf",
  },
  {
    companyName: "KBC",
    country: "Belgium",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/KBC_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kenedix Office Investment Corporation (2018)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kenedix%20Office%20Investment_External%20review%20Report%20-%20Sustainalytics.pdf",
  },
  {
    companyName: "Kenedix Office Investment Corporation (2019)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kenedix%20Office%20Investment_External%20review%20Report%20-%20Japan%20Credit%20Rating%20Agency.pdf",
  },
  {
    companyName: "Kensington Mortgages (Finsbury Square 2021-1 Green)",
    country: "UK",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/kensington_External%20Review%20Report_green%202021.pdf",
  },
  {
    companyName: "KfW (2016)",
    country: "Germany",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/KfW_external%20Review%20Report.pdf",
  },
  {
    companyName: "KfW (2020)",
    country: "Germany",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/KfW_External%20Review%20Report%202019.pdf",
  },
  {
    companyName: "King County",
    country: "US",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/King%20County_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kingdom of Belgium",
    country: "Belgium",
    sector: "Sovereign",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kingdom%20of%20Belgium_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kingdom of Denmark",
    country: "Denmark",
    sector: "Sovereign",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Denmark_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kingdom of Hungary",
    country: "Hungary",
    sector: "Sovereign",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Hungary_Exterbal%20Review%20Report.pdf",
  },
  {
    companyName: "Kingdom of Spain",
    country: "Spain",
    sector: "Sovereign",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/kingdom%20of%20Spain_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kingdom of Sweden",
    country: "Sweden",
    sector: "Sovereign",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sweden_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kingdom of the Netherlands",
    country: "Netherlands",
    sector: "Sovereign",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Netherlands_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kirin Holdings Company, Limited (2020)",
    country: "Japan",
    sector: "Corporate-Consumer goods",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kirin-holdings_External%20Review%20Report.pdf",
  },
  {
    companyName: "Klabin S.A",
    country: "Brazil",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Klabin_External%20Review%20Report.pdf",
  },
  {
    companyName: "Klövern (Publ.) (2018)",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/klovern_External%20Review%20Report.pdf",
  },
  {
    companyName: "Klövern (Publ.) (2020)",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Klovern_External%20Review%20Report_2020.pdf",
  },
  {
    companyName: "Kojamo plc",
    country: "Finland",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kojamo_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kommunalbanken KBN ",
    country: "Norway",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Kommunalbanken_External%20Review%20Report_150916.pdf",
  },
  {
    companyName: "KommuneKredit",
    country: "Denmark",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/KommuneKredit_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kommuninvest i Sverige AB",
    country: "Sweden",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Kommuninvest_External%20Review%20Report_150916.pdf",
  },
  {
    companyName: "Konan Ultra Power (2019)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Konan%20Ultra%20Power_External%20Review%20Report.pdf",
  },
  {
    companyName: "Konan Ultra Power (2020)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Konan%202020_External%20Review%20Report.pdf",
  },
  {
    companyName: "Korea Development Bank",
    country: "Korea",
    sector: "MDB",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/KDB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Korea Electric Power Corporation ",
    country: "Korea",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/KEPCO_External%20Review%20Report.pdf",
  },
  {
    companyName: "Korea Midland Power",
    country: "Korea",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Korea%20Midland%20Power_External%20Review%20Report.pdf",
  },
  {
    companyName: "Korea Water Resources Corporation",
    country: "Korea",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/K-Water_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kraftwerke Oberhasli AG",
    country: "Switzerland",
    sector: "Utility",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/KWO_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kutxabank",
    country: "Spain",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/kutxabank_External%20Review%20Report%20%28Green%29pdf.pdf",
  },
  {
    companyName: "KWG Group Holdings Limited",
    country: "Hong Kong",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/kwg-group-holdings_External%20Review%20Report.pdf",
  },
  {
    companyName: "Kyushu Railway Company (Rating and Investment Information)",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kyushu%20Railway_External%20Review%20Report_R%26I.pdf",
  },
  {
    companyName: "Kyushu Railway Company (Sustainalytics)",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Kyushu_External%20Review%20Report.pdf",
  },
  {
    companyName: "La Poste Group",
    country: "France",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/La%20Poste_External%20Review%20Report.pdf",
  },
  {
    companyName: "Landesbank Baden-Württemberg (LBBW) ",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/LBBW_External%20Review%20Report.pdf",
  },
  {
    companyName: "Landsbankinn",
    country: "Iceland",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Landsbankinn_External%20Review%20Report.pdf",
  },
  {
    companyName: "Landshypotek Bank AB",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Landhypotek%20bank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Landwirtschaftliche Rentenbank",
    country: "Germany",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Rentenbank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Lantmännen",
    country: "Sweden",
    sector: "Corporate-agri food",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/lantmannen_External%20Review%20Report.pdf",
  },
  {
    companyName: "Latvenergo (2015)",
    country: "Latvia",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Latvenergo%20AS_External%20Review%20Report.pdf",
  },
  {
    companyName: "Latvenergo (2020)",
    country: "Latvia",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Latvenergo_External%20Review%20Report.pdf",
  },
  {
    companyName: "LeasePlan",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/LeasePlan_External%20Review%20Report.pdf",
  },
  {
    companyName: "Liberty Power",
    country: "Canada",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Liberty%20Power_External%20Review%20report.pdf",
  },
  {
    companyName: "Lietuvos Energija",
    country: "Lithuania",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Lietuvos%20Energija_External%20Review%20Report.pdf",
  },
  {
    companyName: "Link Reit",
    country: "Hong Kong",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/link_reit_External%20Review%20Report.pdf",
  },
  {
    companyName: "Looop Inc.",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Looop_External%20Review%20Report.pdf",
  },
  {
    companyName: "Lyse AS",
    country: "Norway",
    sector: "Corporate-Infrastructure",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Lyse_External%20Review%20Report.pdf",
  },
  {
    companyName: "Macquarie Group",
    country: "Australia",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Macquarie_External%20Review%20Report.pdf",
  },
  {
    companyName: "Manulife",
    country: "Canada",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Manulife_External%20Review%20Report.pdf",
  },
  {
    companyName: "Marui Group",
    country: "Japan",
    sector: "Corporate-consumer services",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Marui_External%20Review%20Report.pdf",
  },
  {
    companyName: "Matexi Group NV",
    country: "Belgium",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/MATEXI_External%20Review%20Report.pdf",
  },
  {
    companyName: "mBank S.A. Group ",
    country: "Poland",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/mBank_External%20Review%20Report.pdf",
  },
  {
    companyName: "MEIDENSHA CORPORATION",
    country: "Japan",
    sector: "Corporate-Technology",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Meidensha_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mexico City Airport Trust",
    country: "Mexico",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Mexico%20City%20Airport_External%20Review%20report.pdf",
  },
  {
    companyName: "Midsummer",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Midsummer_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mie Prefecture",
    country: "Japan",
    sector: "Municipal",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Miep_External%20Review%20Report.pdf",
  },
  {
    companyName: "Milwaukee Metropolitan Sewerage District (2020A bonds)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Milwaukee%20Metropolitan_External%20Review%20Report.pdf",
  },
  {
    companyName: "Milwaukee Metropolitan Sewerage District (Series 2020D)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Milwaukee%202020D_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mitsubishi Electric Credit Corporation ",
    country: "Japan",
    sector: "Corporate-Technology",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsubishi%20ECC_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mitsubishi Estate",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsubishi-Estate_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mitsubishi Heavy Industries (2020)",
    country: "Japan",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsubishi%20Heavy%20Industries_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mitsubishi Heavy Industries (2021)",
    country: "Japan",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsubishi-Heavy-Industries_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Mitsubishi UFJ Financial Group (2016)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Mitsubishi%20UFJ_External%20review%20report.pdf",
  },
  {
    companyName: "Mitsubishi UFJ Financial Group (2018)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/MUFG_External%20Review%20Report%202018.pdf",
  },
  {
    companyName: "Mitsubishi UFJ Lease and Finance",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsubishi-UFJ-Lease-and-Finance_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mitsubishi UFJ Trust and Banking Corporation",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/DREAM%20GTBR_MUTB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mitsui Fudosan Co., Ltd. (2018)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsui%20Fudosan_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mitsui Fudosan Co., Ltd. (2020)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsui%20Fudosan_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Mitsui O.S.K. Lines, Ltd.",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mitsui_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mizuho Financial Group, Inc. (2017)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mizuho_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mizuho Financial Group, Inc. (2020)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mizuho_External%20Review%20Report_2020.pdf",
  },
  {
    companyName: "Modern Land (China)",
    country: "China",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO/ENSO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Modern%20Land_External%20Review%20Report.pdf",
  },
  {
    companyName: "Monash University",
    country: "Australia",
    sector: "Utility",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Monash%20University_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mori Hills REIT Investment Corporation",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mori%20Hills%20REIT_External%20Review%20Report.pdf",
  },
  {
    companyName: "MORIBUILDINGCo., Ltd.",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/MORI%20BUILDING_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mosaic Solar Loans 2017-1 LLC",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Mosaic-Solar_External%20Review%20Report.pdf",
  },
  {
    companyName: "Mowi ASA",
    country: "Norway",
    sector: "Corporate-agri food",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mowi_External%20Review%20Report.pdf",
  },
  {
    companyName: "MTR Corporation Ltd. ",
    country: "Hong Kong",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/MTR_External-Review-Report.pdf",
  },
  {
    companyName: "Münchener Hypothekenbank eG",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Mun%20Hypo_External%20Review%20Report_2021.pdf",
  },
  {
    companyName: "Munich Re",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Munich%20Re_External%20Review%20Report.pdf",
  },
  {
    companyName: "Municipality Credit Iceland Plc",
    country: "Iceland",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/MCI_External%20Review%20Report.pdf",
  },
  {
    companyName: "Municipality Finance plc (MuniFin)",
    country: "Finland",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Munifin_External%20Review%20Report_Green.pdf",
  },
  {
    companyName: "Nacional Financiera, Sociedad Nacional de Crédito (Nafin)",
    country: "Mexico",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/nafin_External%20Review%20report.pdf",
  },
  {
    companyName: "National Australia Bank Limited (NAB)",
    country: "Australia",
    sector: "Financial Institution",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/NAB%20UK%20External%20Review%20Report%20.pdf",
  },
  {
    companyName: "National Bank of Greece",
    country: "Greece",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NB%20Greece_External%20Review%20Report.pdf",
  },
  {
    companyName: "National Grid PLC",
    country: "UK",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/National%20Grid_External%20Review%20Report.pdf",
  },
  {
    companyName: "National Power Company of Iceland (Landsvirkjun)",
    country: "Iceland",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Landsvirkjun-External%20Review%20Report.pdf",
  },
  {
    companyName: "Natwest (Royal Bank of Scotland Group) plc (2020)",
    country: "UK",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RBS_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Nedbank",
    country: "South Africa",
    sector: "Financial Institution",
    reviewer: "CARBON TRUST",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Nedbank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Neutral Fuels LLC",
    country: "UK",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/neutral%20fuels_External%20Review%20Report.pdf",
  },
  {
    companyName: "New Energy Investments",
    country: "Poland",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NEI_External%20Review%20Report.pdf",
  },
  {
    companyName: "New South Wales Treasury Corporation ",
    country: "Australia",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NSW_External%20Review%20Report.pdf",
  },
  {
    companyName: "New World Development",
    country: "Hong Kong",
    sector: "Corporate-Real Estate",
    reviewer: "HKQAA",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NWD_External%20Review%20Report.pdf",
  },
  {
    companyName: "New York MTA",
    country: "US",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NY%20MTA_Verification%20letter.pdf",
  },
  {
    companyName: "New York Power Authority ",
    country: "US",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NYPA_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nidec Corporation",
    country: "Japan",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Nidec%20Corporation_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nippon Yusen Kabushiki Kaisha (NYK)",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NYK_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nippon Yusen Kabushikikaisha - NYK Line (transition bonds)",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NYK%20Line_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nobina AB",
    country: "Sweden",
    sector: "Corporate-Transportation",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Nobina_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nomura Real Estate Master Fund, Inc. ",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NREMF_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nomura Research Institute (NRI)",
    country: "Japan",
    sector: "Corporate-Consumer services",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRI_External%20Review%20Report.pdf",
  },
  {
    companyName: "NORD/LB Luxembourg S.A.",
    country: "Luxembourg",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NORD-LB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nordea Bank AB (2017)",
    country: "Finland",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Nordea_External%20Review%20Report.pdf",
  },
  {
    companyName: "Nordea Bank AB (2020)",
    country: "Finland",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Nordea_2020_Exernal%20Review%20Report.pdf",
  },
  {
    companyName: "Nordic Investment Bank (NIB)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NIB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Norfolk Southern Corporation",
    country: "US",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/norfolk-southern_External%20Review%20Report.pdf",
  },
  {
    companyName: "NorgesGruppen",
    country: "Norway",
    sector: "Corporate-Consumer goods",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Norgesgruppen_External%20Review%20Report.pdf",
  },
  {
    companyName: "North American Development Bank",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NADB_External%20Review%20Report.pdf",
  },
  {
    companyName: "North Texas Municipal Water District",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NorthTexas_External%20Review%20Report.pdf",
  },
  {
    companyName: "Northland Power",
    country: "Canada",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/northland%20Power_External%20Review%20Report.pdf",
  },
  {
    companyName: "Novelis Inc",
    country: "US",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Novelis_External%20Review%20Report.pdf",
  },
  {
    companyName: "NP3 Fastigheter",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NP3_External%20Review%20Report.pdf",
  },
  {
    companyName: "NRW.BANK (2015)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_External%20Review%20Report%202015.pdf",
  },
  {
    companyName: "NRW.BANK (2016)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_External%20Review%20Report_2016.pdf",
  },
  {
    companyName: "NRW.BANK (2017)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_External%20Review%20Report-2017%203108.pdf",
  },
  {
    companyName: "NRW.BANK (2018)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_External%20Review%20Report-2018.pdf",
  },
  {
    companyName: "NRW.BANK (2019 - May)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_External%20Review%20Report-2019.pdf",
  },
  {
    companyName: "NRW.BANK (2019 - October)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_External%20Review%20Report_October%202019.pdf",
  },
  {
    companyName: "NRW.BANK (2020)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_External%20Review%20Report_2020.pdf",
  },
  {
    companyName: "NRW.BANK (2021)",
    country: "Germany",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NRW.BANK_2021_External%20Review%20Report.pdf",
  },
  {
    companyName: "NTT Group",
    country: "Japan",
    sector: "Corporate-Telecom",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/NTT_External%20Review%20Report.pdf",
  },
  {
    companyName: "NWB",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/NWB_External%20Review%20Report_200916.pdf",
  },
  {
    companyName: "Obayashi Corporation",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Obayashi_External%20Review%20Report.pdf",
  },
  {
    companyName: "Obvion N.V. (Green Storm 2017)",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Obvion_External%20Review%20Report.pdf",
  },
  {
    companyName: "Odakyu Electric Railway ",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Odakyu%20Electric%20Railway%20_External%20Review%20Report%20-%20Japan%20Credit%20Rating%20Agency.pdf",
  },
  {
    companyName: "Odakyu Electric Railway ",
    country: "Japan",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Odakyu%20Electric%20Railway%20_External%20Review%20Report%20-%20Sustainalytics.pdf",
  },
  {
    companyName: "Odd Molly International AB",
    country: "Sweden",
    sector: "Corporate-Consumer goods",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Odd%20Molly_External%20Review%20Report.pdf",
  },
  {
    companyName: "Offentliga Hus",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Offentliga%20Hus_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ohio State University",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Ohio%20State%20University_External%20Review%20Report.pdf",
  },
  {
    companyName: "Okuibuki Kanko",
    country: "Japan",
    sector: "Corporate-Tourism",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Okuibuki_External%20Review%20Report.pdf",
  },
  {
    companyName: "OMEGA ENERGIA",
    country: "Brazil",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Omega_External%20Review%20Report.PDF",
  },
  {
    companyName: "Ontario Power Generation",
    country: "Canada",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/OPG_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ontario Teachers’ Pension Plan Board",
    country: "Canada",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/OTPP_External%20Review%20Report.pdf",
  },
  {
    companyName: "OP Financial Group ",
    country: "Finland",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/OP_External%20Review%20Report.pdf",
  },
  {
    companyName: "Orient Corporation",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Orient%20Corp_External%20Review%20Report.pdf",
  },
  {
    companyName: "ORIX Corporation",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ORIX_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Orix JREIT Inc.",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Orix%20JREIT%20Inc._External%20Review%20Report.pdf",
  },
  {
    companyName: "Orkla",
    country: "Norway",
    sector: "Corporate-Consumer goods",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Orkla_External%20Review%20Report.pdf",
  },
  {
    companyName: "Orsted",
    country: "Denmark",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/orsted_External%20Review%20Report.pdf",
  },
  {
    companyName: "Owens-Illinois, Inc. ",
    country: "US",
    sector: "Corporate-Consumer goods",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Owens-Illinois_External%20Review%20Report.pdf",
  },
  {
    companyName: "Oxley Holdings Limited",
    country: "Singapore",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Oxley_External%20Review%20Report.pdf",
  },
  {
    companyName: "PACE Funding 2020-1",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/PACE%20Funding_External%20review%20Report.pdf",
  },
  {
    companyName: "Pakistan Water & Power Development Authority ",
    country: "Pakistan",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Pakistan%20Water_External%20Review%20Report.pdf",
  },
  {
    companyName: "Paprec Group (2017)",
    country: "France",
    sector: "Corporate-Consumer services",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Paprec_External%20Review%20Report.pdf",
  },
  {
    companyName: "Paprec Group (2021)",
    country: "France",
    sector: "Corporate-Consumer services",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Paprec%20Group_External%20Review%20Report.pdf",
  },
  {
    companyName: "Paragon",
    country: "UK",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Paragon_External%20Review%20Report.pdf",
  },
  {
    companyName: "Park City, Utah",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Park%20City_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Park City, Utah (Water Revenue and Refunding Bonds, Series 2021)",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Park%20City_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Pays de la Loire",
    country: "France",
    sector: "Municipal",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Pays%20Loire_External%20Review%20Report.pdf",
  },
  {
    companyName: "Peab AB",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/peab_External%20Review%20Report.pdf",
  },
  {
    companyName: "Penta-Ocean Construction Co., Ltd.",
    country: "Japan",
    sector: "Corporate-Infrastructure",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Penta-Ocean_External%20Review%20Report.pdf",
  },
  {
    companyName: "Pepper",
    country: "Australia",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Pepper_External%20Review%20Report.pdf",
  },
  {
    companyName: "PepsiCo, Inc. ",
    country: "US",
    sector: "Corporate-Consumer goods",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/PepsiCo_External%20Review%20Report.pdf",
  },
  {
    companyName: "PKO Bank Hipoteczny SA",
    country: "Poland",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/PKO-Bank-Hipoteczny_External%20Review%20Report.pdf",
  },
  {
    companyName: "PORR AG",
    country: "Austria",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/PORR_External%20Review%20Report.pdf",
  },
  {
    companyName: "Porsche",
    country: "Germany",
    sector: "Corporate-Transportation",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Porsche_External%20Review%20Report.pdf",
  },
  {
    companyName: "Port of Los Angeles",
    country: "US",
    sector: "Corporate-Infrastructure",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Port%20of%20LA_External-Review-Report.pdf",
  },
  {
    companyName: "Portland General Electric",
    country: "US",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/portland%20GE_External%20Review%20Report.pdf",
  },
  {
    companyName: "PostNL",
    country: "Netherlands",
    sector: "Corporate-Consumer services",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/PostNL_External%20Review%20Report.pdf",
  },
  {
    companyName: "Prologis (2018)",
    country: "Supra-national",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Prologis_External%20Review%20Report.pdf",
  },
  {
    companyName: "Prologis (2020)",
    country: "Supra-national",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Prologis_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Province of Ontario",
    country: "Canada",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Province%20of%20Ontario%20-%20External%20Review%20Report_011216.pdf",
  },
  {
    companyName: "Province of Québec",
    country: "Canada",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Quebec_External%20Review%20Report%20%282%29.pdf",
  },
  {
    companyName: "Provincia de Jujuy",
    country: "Argentina",
    sector: "Municipal",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Province%20of%20Jujuy_External%20Review%20Report.pdf",
  },
  {
    companyName: "PT Sarana Multi Infrastruktur (Persero)",
    country: "Indonesia",
    sector: "Corporate-Infrastructure",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/PTSMI_External%20Review%20Report.pdf",
  },
  {
    companyName: "PTT Public Company Limited",
    country: "Thailand",
    sector: "Corporate-Energy",
    reviewer: "DNV GL",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/PTT_External%20Review%20Report.pdf",
  },
  {
    companyName: "QuadReal",
    country: "Canada",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/QuadReal_External%20Review%20Report.pdf",
  },
  {
    companyName: "Rabobank",
    country: "Netherlands",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Rabobank_External%20Review%20report.pdf",
  },
  {
    companyName: "Raiffeisen Bank Czech Republic",
    country: "Czech Republic",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Czech%20raiffeisen_External%20Review%20Report.pdf",
  },
  {
    companyName: "Raiffeisen Bank Romania",
    country: "Romania",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RB%20Romania_External%20Review%20Report.pdf",
  },
  {
    companyName: "Raiffeisen Bank Supra-national",
    country: "Austria",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RBI_External%20Review%20Report.pdf",
  },
  {
    companyName: "RATP",
    country: "France",
    sector: "Utility",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/RATP_External%20Review%20Report.pdf",
  },
  {
    companyName: "Redes Energéticas Nacionais SGPS S.A.",
    country: "Portugal",
    sector: "Utility",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/REN_External%20review%20Report.pdf",
  },
  {
    companyName: "Region Skane",
    country: "Sweden",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Region%20Skane_External%20Review%20Report.pdf",
  },
  {
    companyName: "Regional Transportation District (Colorado)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RTD%20Colorado_External%20Review%20Report.pdf",
  },
  {
    companyName: "Renewable Energy Group, Inc",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/reg_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Renewable Japan Co. RJ Renewable Energy Project Bond III Trust Certificates (2018)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewable%20Japan_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Renewable Japan Co. RJ Renewable Energy Project Bond IX Trust Certificate/ABL (2021)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewable%20Japan_External%20Review%20Report%202021-2v2.pdf",
  },
  {
    companyName:
      "Renewable Japan Co. RJ Renewable Energy Project Bond V Trust Certificate/ABL (2019)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewable%20Japan%202019_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Renewable Japan Co. RJ Renewable Energy Project Bond VII Trust Certificate/ABL (2020)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewable%20Japan%202020_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Renewable Japan Co. RJ Renewable Energy Project Bond VIII Trust Certificate/ABL (2021)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewable%20Japan%202021_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Renewable Japan Co. RJ Renewable Energy Project Bond VIII X Trust Certificate/ABL (PV Power Plant, Yagi-cho and Sonobe-cho, Nantan-shi) ",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewable%20Japan%202021%20Sep_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Renewable Japan Co. RJ Renewable Energy Project Bond XI Trust ",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewable%20Japan%202022_External%20Review%20Report.pdf",
  },
  {
    companyName: "Renewi plc ",
    country: "UK",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renewi_External%20Review%20Report.pdf",
  },
  {
    companyName: "RENOVA, Inc. (2020)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RENOVA_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "RENOVA, Inc. (Unsecured Bonds)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Renova_External%20Review%20Report.pdf",
  },
  {
    companyName: "Repower AG",
    country: "Switzerland",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Repower_External%20Review%20Report.pdf",
  },
  {
    companyName: "Repsol",
    country: "Spain",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Repsol_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic and Canton of Geneva",
    country: "Switzerland",
    sector: "Municipal",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Geneva_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of Chile",
    country: "Chile",
    sector: "Sovereign",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Republic%20of%20Chile_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of Fiji",
    country: "Fiji",
    sector: "Sovereign",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Fiji-External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of France",
    country: "France",
    sector: "Sovereign",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/France_External%20Review%20Report.PDF",
  },
  {
    companyName: "Republic of France (2018 update)",
    country: "France",
    sector: "Sovereign",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/France_External%20Review%20Report%202018.PDF",
  },
  {
    companyName: "Republic of France (2019 update)",
    country: "France",
    sector: "Sovereign",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/France_2019_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of France (2021)",
    country: "France",
    sector: "Sovereign",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/France_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Republic of Indonesia",
    country: "Indonesia",
    sector: "Sovereign",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Indonesia_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of Ireland",
    country: "Ireland",
    sector: "Sovereign",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Ireland_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of Italy",
    country: "Italy",
    sector: "Sovereign",
    reviewer: "V.E",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Italy_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of Lithuania",
    country: "Lithuania",
    sector: "Sovereign",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Lithuania_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of Poland",
    country: "Poland",
    sector: "Sovereign",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Poland_External%20Review%20Report.pdf",
  },
  {
    companyName: "Republic of Serbia",
    country: "Serbia",
    sector: "Sovereign",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Serbia_External%20Review%20Report.pdf",
  },
  {
    companyName: "Reykjavik Energy",
    country: "Iceland",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Reykjavik%20Energy_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ricoh Leasing Company (2018)",
    country: "Japan",
    sector: "Corporate-Consumer services",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/KMF/Ricoh%20Leasing_External%20Review%20Report.pdf",
  },
  {
    companyName: "Ricoh Leasing Company (2019)",
    country: "Japan",
    sector: "Corporate-Consumer services",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Ricoh%20Leasing_External%20Review%20Report%202019.pdf",
  },
  {
    companyName: "Rikshem",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Rikshem_External%20Review%20Report.pdf",
  },
  {
    companyName: "Rio Can",
    country: "Canada",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RioCan_External%20Review%20Report.pdf",
  },
  {
    companyName: "Rio Energy",
    country: "Brazil",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Rio%20Energy_External%20Review%20report.pdf",
  },
  {
    companyName: "Rizal Commercial Banking Corporation (RCBC) ",
    country: "Philippines",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RCBC_External%20Review%20Report.pdf",
  },
  {
    companyName: "Royal Schiphol Group",
    country: "Netherlands",
    sector: "Corporate-Infrastructure",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/assets/Uploads/Schipol_External-Review-Report.PDF",
  },
  {
    companyName: "Rumo S.A.",
    country: "Brazil",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Rumo_External%20Review%20Report.pdf",
  },
  {
    companyName: "RWE",
    country: "Germany",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/RWE_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Sacramento Municipal Utility district (2019 Series G Green Bonds)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sacramento_2019_External%20Review%20Report.PDF",
  },
  {
    companyName:
      "Sacramento Municipal Utility district (2020 Series H Serial Bonds)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sacramento_2020_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "San Diego Unified School District (San Diego County, California)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/San%20Diego%20USD_External%20Review%20Report.pdf",
  },
  {
    companyName: "San Francisco Public Utilities Commission",
    country: "US",
    sector: "Utility",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SFPUC_External%20Review%20Report.pdf",
  },
  {
    companyName: "SATO",
    country: "Finland",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SATO_External%20Review%20Report.pdf",
  },
  {
    companyName: "Saudi Electricity ",
    country: "Saudi Arabia",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Saudi%20Electricity_External%20Review%20Report.pdf",
  },
  {
    companyName: "SBAB Bank AB",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SBAB%20Bank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Scatec ASA",
    country: "Norway",
    sector: "Corporate-Infrastructure",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Scatec_Market%20Information%20Template.pdf",
  },
  {
    companyName: "Scatec Solar ASA",
    country: "Norway",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Scatec%20Solar_External%20Review%20Report.pdf",
  },
  {
    companyName: "Schaeffler Group",
    country: "Germany",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Schaeffler_External%20Review%20Report.pdf",
  },
  {
    companyName: "Scotiabank",
    country: "Canada",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Scotiabank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Segi Astana",
    country: "Malaysia",
    sector: "Corporate-Real Estate",
    reviewer: "RAM",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Segi_Astana%20_%20External%20Review%20Report.pdf",
  },
  {
    companyName: "Seibu Holdings Inc.",
    country: "Japan",
    sector: "Corporate-Consumer services",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Seibu_External%20Review%20Report.pdf",
  },
  {
    companyName: "Seiko Epson Corporation (2019)",
    country: "Japan",
    sector: "Corporate-Technology",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Epson_External%20Review%20Report.pdf",
  },
  {
    companyName: "Seiko Epson Corporation (2020)",
    country: "Japan",
    sector: "Corporate-Technology",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Seiko%20Epson_External%20Review%20Report%20R%26I.pdf",
  },
  {
    companyName: "Sekisui House Reit",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sekisui%20House%20Reit_External%20Review%20Report.pdf",
  },
  {
    companyName: "Senko Group Holdings Co., Ltd.",
    country: "Japan",
    sector: "Corporate-Consumer services",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Senko_External%20Review%20Report.pdf",
  },
  {
    companyName: "SFIL Group",
    country: "France",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SFIL_External%20Review%20Report_Green_2019.pdf",
  },
  {
    companyName: "SHIMIZU CORPORATION",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SHIMIZU_External%20Review%20Report.pdf",
  },
  {
    companyName: "SID Bank",
    country: "Slovenia",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SID%20bank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sinar Kamiri",
    country: "Malaysia",
    sector: "Corporate-Energy",
    reviewer: "RAM",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sinar%20Kamiri%20_%20External%20Review%20report.pdf",
  },
  {
    companyName: "Sindicatum Renewable Energy Company Pte",
    country: "Singapore",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sindicatum_External%20Review%20Report.pdf",
  },
  {
    companyName: "Skandinaviska Enskilda Banken (SEB)",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO/ENSO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SEB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Skanska",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Skanska_External%20Review%20Report.pdf",
  },
  {
    companyName: "SNAM",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SNAM_External%20Review%20Report.pdf",
  },
  {
    companyName: "SNCF (2021)",
    country: "France",
    sector: "Agency",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SNCF%202021_External%20Review%20Report.pdf",
  },
  {
    companyName: "SNCF Réseau (2016)",
    country: "France",
    sector: "Corporate-Transportation",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SNCF%20RESEAU_External%20Review%20Report.pdf",
  },
  {
    companyName: "SNCF Réseau (2017)",
    country: "France",
    sector: "Corporate-Transportation",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SNCF%20RESEAU_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sociedade Bioelétrica do Mondego",
    country: "Portugal",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sociedade%20Bioeletrica%20do%20Mondego_External%20Review%20Report%202019.pdf",
  },
  {
    companyName: "Société du Grand Paris",
    country: "France",
    sector: "Municipal",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Societe%20Grand%20Paris_External%20Review%20Report.pdf",
  },
  {
    companyName: "Société Générale",
    country: "France",
    sector: "Financial Institution",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SG_External%20Review%20Report.pdf",
  },
  {
    companyName: "Södra Skogägarna",
    country: "Sweden",
    sector: "Corporate-Industry",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/S%C3%B6dra_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sogn Fjordane Energi (SFE)",
    country: "Norway",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SFE_External%20Review%20Report.pdf",
  },
  {
    companyName: "Soilbuild Group",
    country: "Singapore",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Soilbuild_External%20Review%20Report.pdf",
  },
  {
    companyName: "South Bayside Waste Management Authority",
    country: "US",
    sector: "Agency",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SBWMA_External%20Review%20Report.pdf",
  },
  {
    companyName: "South Central Connecticut Regional Water Authority",
    country: "US",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/South%20Central%20Connecticut%20RWA_External%20Review%20Report.pdf",
  },
  {
    companyName: "Southern Ohio Port Authority (PureCycle: Ohio LLC)",
    country: "US",
    sector: "Corporate-Industry",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Southern%20Ohio%20Port%20Authority_External%20Review%20Report.pdf",
  },
  {
    companyName: "Southern Power",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "Deloitte",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Southern%20Power_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sparbanken Skåne",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sparbanken%20Skane_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sparbanken Västra Mälardalen",
    country: "Sweden",
    sector: "Financial Institution",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sparbanken%20V%C3%A4stra%20M%C3%A4lardalen_Market_Information_Template.pdf",
  },
  {
    companyName: "SpareBank 1 Boligkreditt ",
    country: "Norway",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SpareBank-1_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sparebanken Sogn og Fjordane",
    country: "Norway",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SSF_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sparebanken Vest",
    country: "Norway",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sparebanken_External%20Review%20Report.pdf",
  },
  {
    companyName: "Specialfastigheter Sverige AB",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Specialfastigheter-External%20Review%20Report.pdf",
  },
  {
    companyName: "SSE plc",
    country: "UK",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SSE_External%20Review%20Report.pdf",
  },
  {
    companyName: "Star Energy Geothermal (Wayang Windu) Ltd",
    country: "Indonesia",
    sector: "Corporate-Energy",
    reviewer: "CARBON TRUST",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Star%20Energy_External%20Review%20Report.pdf",
  },
  {
    companyName: "State of Baden-Württemberg",
    country: "Germany",
    sector: "Municipal",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/State%20of%20Baden-Wurttemberg_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "State of Connecticut",
    country: "US",
    sector: "Municipal",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/State%20of%20Connecticut_External%20Review%20Report.pdf",
  },
  {
    companyName: "Stavmat Kft",
    country: "Hungary",
    sector: "Corporate-Real Estate",
  },
  {
    companyName: "Stedin Group",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Stedin_External%20Review%20Report.pdf",
  },
  {
    companyName: "Stena Metall AB",
    country: "Sweden",
    sector: "Corporate-Industry",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Stenal%20Metall_External%20Review%20Report.pdf",
  },
  {
    companyName: "Stockholm County Council",
    country: "Sweden",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SCC_External%20Review%20report_150916.pdf",
  },
  {
    companyName: "Stockholm Exergi",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Stockholm%20Exergi_External%20Review%20Report.pdf",
  },
  {
    companyName: "Stockholms Kooperativa Bostadsförening (SKB)",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SKB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Stora Enso",
    country: "Finland",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Stora%20Enso_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sumitomo Mitsui Financial Group, Inc (2017)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SMFG_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sumitomo Mitsui Financial Group, Inc (2018)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SMFG_External%20Review%20Report_2018.pdf",
  },
  {
    companyName: "Sumitomo Mitsui Trust Bank (2018)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SMTB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sumitomo Mitsui Trust Bank (2021)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sumitomo%20Mitsui%202021_External%20Review%20Report.pdf",
  },
  {
    companyName: "Summit Industrial Income REIT",
    country: "Canada",
    sector: "Corporate-Real Estate",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Summit%20Industrial%20Income%20REIT_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sunndal Sparebanken",
    country: "Norway",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sunndal%20Sparebank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Sunrun Inc. ",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Sunrun_External%20Review%20Report.pdf",
  },
  {
    companyName: "Suzano Papel e Celulose S.A.",
    country: "Brazil",
    sector: "Corporate-Industry",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Suzano_External%20Review%20Report.pdf",
  },
  {
    companyName: "Svenska Cellulosa Aktiebolaget SCA",
    country: "Sweden",
    sector: "Corporate-Consumer goods",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/SCA_External%20Review%20Report.pdf",
  },
  {
    companyName: "Swedavia",
    country: "Sweden",
    sector: "Corporate-Transportation",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/swedavia_External%20Review%20Report.pdf",
  },
  {
    companyName: "Swedbank AB",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Swedbank_External%20Review%20Report.docx.pdf",
  },
  {
    companyName: "Swedish Export Credit (SEK)",
    country: "Sweden",
    sector: "Agency",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/SEK_External%20Review%20Report.pdf",
  },
  {
    companyName: "Swire Properties",
    country: "Hong Kong",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Swire%20Properties_External%20Review%20Report.pdf",
  },
  {
    companyName: "Swiss Life",
    country: "Switzerland",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Swiss-Life_External%20Review%20Report.pdf",
  },
  {
    companyName: "Swiss Prime Site",
    country: "Switzerland",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Swissprime_External%20Review%20Report.pdf",
  },
  {
    companyName: "Swisscom",
    country: "Switzerland",
    sector: "Corporate-Telecom",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Swisscom_External%20Review%20Report.pdf",
  },
  {
    companyName: "SYCTOM",
    country: "France",
    sector: "Utility",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Syctom_External%20Review%20Report.pdf",
  },
  {
    companyName: "Synthesis Analytics",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Synthesis%20Analytics_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tadau Energy",
    country: "Malaysia",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Tadau%20Energy_External%20Review%20Report.pdf",
  },
  {
    companyName: "Takasago Thermal Engineering Co., Ltd.",
    country: "Japan",
    sector: "Corporate-Technology",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Takasago%20Thermal_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tatra Banka",
    country: "Slovakia",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Tatra%20Banka_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tennessee Valley Authority ",
    country: "US",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TVA_External%20Review%20Report.pdf",
  },
  {
    companyName: "TenneT (2016)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/TenneT_External%20Review%20Report.pdf",
  },
  {
    companyName: "TenneT (2017)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TenneT_External%20Review%20Report%202017.pdf",
  },
  {
    companyName: "TenneT (2018)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TenneT_External%20Review%20Report%202018.pdf",
  },
  {
    companyName: "TenneT (2019)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TenneT_External%20Review%20Report%202019.pdf",
  },
  {
    companyName: "TenneT (2020)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TenneT_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "TenneT (2021)",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TenneT_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Terna",
    country: "Italy",
    sector: "Corporate-Energy",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Terna_External%20Review%20Report%202019.PDF",
  },
  {
    companyName: "Thames Water",
    country: "UK",
    sector: "Utility",
    reviewer: "DNV GL",
  },
  {
    companyName: "The Conservation Fund",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/The%20Conservation%20Fund_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tianjin Rail Transit Group",
    country: "China",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TianjinRailGreenBond_External%20Review%20Report.pdf",
  },
  {
    companyName: "Toda Corporation (2018)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Toda_External%20Review%20Report.pdf",
  },
  {
    companyName: "Toda Corporation (July 2020)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Toda_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Toda Corporation (September 2020)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TD_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tokyo Century ",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Tokyo-Century_External-Review-Report.pdf",
  },
  {
    companyName: "Tokyo Gas Co., Ltd.",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Tokyo%20Gas_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tokyo Metropolitan Government",
    country: "Japan",
    sector: "Municipal",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/TMG_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Tokyo Tatemono",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Tokyo%20Tatemono_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tokyu Fudosan Holdings",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ToTokyu-Fudosan_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tokyu Land Capital Management Inc. (2020)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Tokyu%20Land_External%20Review%20Report%20.pdf",
  },
  {
    companyName: "Tokyu Land Capital Management Inc. (2021)",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Tokyu%20Land_2021_External%20Review%20Report.pdf",
  },
  {
    companyName: "Toronto-Dominion Bank",
    country: "Canada",
    sector: "Financial Institution",
    reviewer: "DNV",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/TD%20Bank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Town of Wareham",
    country: "US",
    sector: "Municipal",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Wareham_External%20Review%20Report.pdf",
  },
  {
    companyName: "Toyota Finance Corporation (2019)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Tokyo-Century_External-Review-Report.pdf",
  },
  {
    companyName: "Toyota Finance Corporation (2020)",
    country: "Japan",
    sector: "Financial Institution",
    reviewer: "Rating and Investment Information",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Toyota%20FC%202020_External%20Review%20Report.pdf",
  },
  {
    companyName: "Toyota Motor Credit Corporation (2017)",
    country: "US",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Toyota%20Finance_External%20Review%20Report.pdf",
  },
  {
    companyName: "Toyota Motor Credit Corporation (2020)",
    country: "US",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Toyota%202020_External%20Review%20Report.pdf",
  },
  {
    companyName: "Toyota Motor Credit Corporation (2021)",
    country: "US",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Toyota%20motor_External%20Review%20Report%202021.pdf",
  },
  {
    companyName: "Transport for London",
    country: "UK",
    sector: "Utility",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Transport%20for%20London_External%20Review%20Report.pdf",
  },
  {
    companyName: "Tritax EuroBox plc",
    country: "UK",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/tritax-eurobox_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Tualatin Hills Park & Recreation District (Washington County, Oregon)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Tualatin_External%20Review%20Report.pdf",
  },
  {
    companyName: "UBI Banca",
    country: "Italy",
    sector: "Financial Institution",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Ubibanca_External%20Review%20Report.pdf",
  },
  {
    companyName: "UBS",
    country: "Switzerland",
    sector: "Financial Institution",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/UBS_External%20Review%20Report.pdf",
  },
  {
    companyName: "United Urban Investment Corporation",
    country: "Japan",
    sector: "Corporate-Real Estate",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/UUIC_External%20Review%20Report.pdf",
  },
  {
    companyName: "UPM",
    country: "Finland",
    sector: "Corporate-Technology",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/UPM_External%20Review%20Report.pdf",
  },
  {
    companyName: "Uppsalahem",
    country: "Sweden",
    sector: "Municipal",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Uppsalahem_%20External%20Review%20Report.pdf",
  },
  {
    companyName: "Vacse",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO/ENSO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Vacse_External%20Review%20%20Report.pdf",
  },
  {
    companyName: "Vajda Papír Kft",
    country: "Hungary",
    sector: "Corporate-Consumer goods",
    reviewer: "SustainAdvisory",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vajda-Papir_External%20Review%20Report.pdf",
  },
  {
    companyName: "Varbergs Sparbank",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Varbergs%20Sparbank_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vasakronan",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Vasakronan_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vattenfall",
    country: "Sweden",
    sector: "Corporate-Energy",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vattenfall_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vena Energy (2019)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vena%20Energy_External%20Review%20Report%202019.pdf",
  },
  {
    companyName: "Vena Energy (2020)",
    country: "Japan",
    sector: "Corporate-Energy",
    reviewer: "Japan Credit Rating Agency",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vena%20Energy_External%20Review%20Report_2020.pdf",
  },
  {
    companyName: "Verbund AG",
    country: "Austria",
    sector: "Corporate-Energy",
    reviewer: "oekom research",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/VERBUND_External%20Review%20Report.pdf",
  },
  {
    companyName: "Verizon",
    country: "US",
    sector: "Corporate-Telecom",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Verizon_External%20Review%20Report.pdf",
  },
  {
    companyName:
      "Vermont Educational and Health Buildings Financing Agency (VEHBFA)",
    country: "US",
    sector: "Agency",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/uvmmc_External%20Review%20report.pdf",
  },
  {
    companyName: "Vestas Wind Systems A/S",
    country: "Denmark",
    sector: "Corporate-Energy",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vestas_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vesteda",
    country: "Netherlands",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vesteda_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vestel",
    country: "Turkey",
    sector: "Corporate-Technology",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vestel_Market%20Information%20Template.pdf",
  },
  {
    companyName: "VGP NV",
    country: "Belgium",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/VGP_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vía Célere SL",
    country: "Spain",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/V%C3%ADa%20C%C3%A9lere_External%20Review%20Report.pdf",
  },
  {
    companyName: "VIA Outlets",
    country: "Netherlands",
    sector: "Corporate-Real Estate",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/VIAOutlets_External%20Review%20Report.pdf",
  },
  {
    companyName: "VINCI",
    country: "France",
    sector: "Corporate-Infrastructure",
    reviewer: "VIGEO EIRIS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vinci_External%20Review%20Report.pdf",
  },
  {
    companyName: "Virgin Trains USA",
    country: "US",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Virgin%20Trains_External%20Review%20Report.pdf",
  },
  {
    companyName: "Visa Inc.",
    country: "US",
    sector: "Corporate-Consumer services",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Visa_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vivint Solar Inc",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vivint_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vodafone ",
    country: "UK",
    sector: "Corporate-Telecom",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vodafone_External%20Review%20Report.pdf",
  },
  {
    companyName: "Volkswagen",
    country: "Germany",
    sector: "Corporate-Transportation",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Volkswagen_External%20Review%20Report%202020.pdf",
  },
  {
    companyName: "Volvo Group",
    country: "Sweden",
    sector: "Corporate-Transportation",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Volvo-group_Exernal%20Review%20Report.pdf",
  },
  {
    companyName: "Volvofinans Bank AB (2017)",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/Volvofinans_External%20Review%20Report.pdf",
  },
  {
    companyName: "Volvofinans Bank AB (2019)",
    country: "Sweden",
    sector: "Financial Institution",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Volvofinans_External%20Review%20Report_2019.pdf",
  },
  {
    companyName: "Vonore Fiber Products LLC",
    country: "US",
    sector: "Corporate-Industry",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vonore%20Fiber%20Products_External%20Review%20Report.pdf",
  },
  {
    companyName: "Vonovia",
    country: "Germany",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Vonovia_External%20Review%20Report.pdf",
  },
  {
    companyName: "Wallenstam",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Wallenstam_External%20Review%20Report.pdf",
  },
  {
    companyName: "Washington Metropolitan Area Transit Authority (WMATA)",
    country: "US",
    sector: "Utility",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Washington%20Metro_External%20Review%20Report.pdf",
  },
  {
    companyName: "Wästbygg",
    country: "Sweden",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/wastbygg_External%20Review%20Report.pdf",
  },
  {
    companyName: "Water Wheel Green Securities Corporation B.V.",
    country: "Netherlands",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Water%20Wheel_External%20Review%20Report.pdf",
  },
  {
    companyName: "Welltower Inc.",
    country: "US",
    sector: "Corporate-Healthcare",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Welltower_External%20Review%20Report.pdf",
  },
  {
    companyName: "West County Facilities Financing Authority",
    country: "US",
    sector: "Agency",
    reviewer: "Kestrel Verifiers",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/West%20County%20FFA_External%20Review%20Report.pdf",
  },
  {
    companyName: "White Peak",
    country: "China",
    sector: "Corporate-Real Estate",
    reviewer: "CICERO",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/White%20Peak_External%20Review%20Report.pdf",
  },
  {
    companyName: "Workspace Group PLC",
    country: "UK",
    sector: "Corporate-Real Estate",
    reviewer: "DNV",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Workspace_External%20Review%20Report.pdf",
  },
  {
    companyName: "World Bank (IBRD)",
    country: "Supra-national",
    sector: "MDB",
    reviewer: "CICERO",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/World%20Bank%20%28IBRD%29_External%20Review%20report.pdf",
  },
  {
    companyName: "Wuhan Metro Group Co., Ltd.",
    country: "China",
    sector: "Corporate-Transportation",
    reviewer: "Moody's Investors Service",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Wuhan%20Metro_External%20Review%20Report.pdf",
  },
  {
    companyName: "Xiaomi Corporation",
    country: "China",
    sector: "Corporate-Consumer goods",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/xiaomi_External%20Review%20Report.pdf",
  },
  {
    companyName: "Xior Student Housing N.V.",
    country: "Belgium",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Xior_External%20Review%20Report.pdf",
  },
  {
    companyName: "Yango Group",
    country: "China",
    sector: "Corporate-Real Estate",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Yango_External%20Review%20Report.pdf",
  },
  {
    companyName: "YES BANK Ltd",
    country: "India",
    sector: "Financial Institution",
    reviewer: "KPMG",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/YES%20BANK-%20External%20Review%20report_101116.pdf",
  },
  {
    companyName: "Ygrene Energy Fund",
    country: "US",
    sector: "Corporate-Energy",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "http://www.icmagroup.org/Emails/icma-vcards/ygrene_External%20Review%20report.pdf",
  },
  {
    companyName: "Z Holdings Corporation",
    country: "Japan",
    sector: "Corporate-Consumer services",
    reviewer: "SUSTAINALYTICS",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Z%20holdings-corporation_External%20Review%20Report.pdf",
  },
  {
    companyName: "Zhenro Properties Group Ltd.",
    country: "China",
    sector: "Corporate-Real Estate",
    reviewer: "S&P Global Ratings",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/Zhenro%20Properties_External%20Review%20Report.pdf",
  },
  {
    companyName: "Zürcher Kantonalbank (2018)",
    country: "Switzerland",
    sector: "Financial Institution",
    reviewer: "oekom research",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ZKB_External%20Review%20Report.pdf",
  },
  {
    companyName: "Zürcher Kantonalbank (2019)",
    country: "Switzerland",
    sector: "Financial Institution",
    reviewer: "ISS-oekom",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ZKB_External%20Review%20Report_2019.PDF",
  },
  {
    companyName: "Zürcher Kantonalbank (2020)",
    country: "Switzerland",
    sector: "Financial Institution",
    reviewer: "ISS ESG",
    reviewLink:
      "https://www.icmagroup.org/Emails/icma-vcards/ZKB_External%20Review%20Report%20%282020%29.pdf",
  },
];

export default mockData;