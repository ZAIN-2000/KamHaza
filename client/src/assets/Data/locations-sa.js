// src/assets/data/locations-sa.js
// Flat list (simple drop-in with PrimeReact Dropdown)
export const locationsFlat = [
  // Riyadh Region
  { name: "Riyadh", code: "RYD" },
  { name: "Al-Kharj", code: "AKH" },
  { name: "Al-Majma'ah", code: "AMJ" },
  { name: "Al-Dawadmi", code: "ADW" },
  { name: "Al-Diriyah", code: "ADR" },
  { name: "Shaqra", code: "SHA" },
  { name: "Al-Zulfi", code: "AZL" },
  { name: "Afif", code: "AFF" },
  { name: "Al-Quway'iyah", code: "AQW" },

  // Makkah Region
  { name: "Makkah", code: "MEK" },
  { name: "Jeddah", code: "JED" },
  { name: "Taif", code: "TAF" },
  { name: "Rabigh", code: "RBG" },
  { name: "Al-Lith", code: "ALT" },
  { name: "Khulais", code: "KHS" },
  { name: "Al Qunfudhah", code: "QNF" },
  { name: "Umluj", code: "UMJ" },
  { name: "Al Kamel", code: "AKM" },

  // Madinah Region
  { name: "Medina", code: "MED" },
  { name: "Yanbu", code: "YAN" },
  { name: "Badr", code: "BAD" },
  { name: "Al-Ula", code: "ALA" },
  { name: "Khaibar", code: "KBR" },

  // Eastern Province
  { name: "Dammam", code: "DAM" },
  { name: "Khobar", code: "KHB" },
  { name: "Dhahran", code: "DHR" },
  { name: "Al-Ahsa (Hofuf)", code: "AHS" },
  { name: "Qatif", code: "QAT" },
  { name: "Jubail", code: "JUB" },
  { name: "Ras Tanura", code: "RST" },
  { name: "Abqaiq", code: "ABQ" },
  { name: "Al-Khafji", code: "AKF" },
  { name: "Hafr Al-Batin", code: "HAB" },
  { name: "Al Nairyah", code: "ANY" },
  { name: "Qaryat Al Ulya", code: "QAU" },

  // Asir Region
  { name: "Abha", code: "ABH" },
  { name: "Khamis Mushait", code: "KMS" },
  { name: "Bisha", code: "BIS" },
  { name: "Mahayel Asir", code: "MAS" },
  { name: "Tanomah", code: "TNM" },
  { name: "Al-Namas", code: "NMS" },
  { name: "Tathlith", code: "TTL" },
  { name: "Rijal Almaa", code: "RJA" },
  { name: "Sarat Abidah", code: "SAB" },

  // Tabuk Region
  { name: "Tabuk", code: "TBU" },
  { name: "Duba", code: "DBA" },
  { name: "Al-Wajh", code: "AWJ" },
  { name: "Haql", code: "HAQ" },
  { name: "Tayma", code: "TYM" },

  // Hail Region
  { name: "Hail", code: "HIL" },
  { name: "Baqa'a", code: "BAQ" },
  { name: "Al-Ghazalah", code: "GHZ" },
  { name: "Ash Shamli", code: "ASH" },

  // Najran Region
  { name: "Najran", code: "NAJ" },
  { name: "Sharurah", code: "SHR" },
  { name: "Habouna", code: "HBN" },
  { name: "Yadamah", code: "YDM" },

  // Jazan Region
  { name: "Jazan", code: "JZN" },
  { name: "Sabya", code: "SBY" },
  { name: "Abu Arish", code: "ABR" },
  { name: "Samtah", code: "SMT" },
  { name: "Farasan", code: "FRS" },
  { name: "Baish", code: "BSH" },
  { name: "Al Darb", code: "DRB" },

  // Al-Bahah Region
  { name: "Al-Bahah", code: "BAH" },
  { name: "Baljurashi", code: "BLJ" },
  { name: "Al-Mikhwah", code: "MIK" },
  { name: "Qilwah", code: "QLW" },
  { name: "Al Aqiq", code: "AQI" },
  { name: "Al Mandaq", code: "MDQ" },

  // Al-Jawf Region
  { name: "Sakaka", code: "SKK" },
  { name: "Dumat Al-Jandal", code: "DMJ" },
  { name: "Qurayyat", code: "QUR" },
  { name: "Tabarjal", code: "TBJ" },

  // Northern Borders
  { name: "Arar", code: "ARR" },
  { name: "Rafha", code: "RFH" },
  { name: "Turaif", code: "TRF" },
  { name: "Al-Uwayqilah", code: "AWQ" },

  // Al-Qassim Region
  { name: "Buraidah", code: "BRD" },
  { name: "Unaizah", code: "UNZ" },
  { name: "Ar Rass", code: "ARS" },
  { name: "Al Mithnab", code: "MTN" },
  { name: "Al-Bukayriyah", code: "BUK" },
  { name: "Al Badayea", code: "BDY" },
];

// Optional: grouped by region (if you want option groups later)
export const locationsByRegion = [
  { region: "Riyadh", items: locationsFlat.filter(l => ["RYD","AKH","AMJ","ADW","ADR","SHA","AZL","AFF","AQW"].includes(l.code)) },
  { region: "Makkah", items: locationsFlat.filter(l => ["MEK","JED","TAF","RBG","ALT","KHS","QNF","UMJ","AKM"].includes(l.code)) },
  { region: "Madinah", items: locationsFlat.filter(l => ["MED","YAN","BAD","ALA","KBR"].includes(l.code)) },
  { region: "Eastern Province", items: locationsFlat.filter(l => ["DAM","KHB","DHR","AHS","QAT","JUB","RST","ABQ","AKF","HAB","ANY","QAU"].includes(l.code)) },
  { region: "Asir", items: locationsFlat.filter(l => ["ABH","KMS","BIS","MAS","TNM","NMS","TTL","RJA","SAB"].includes(l.code)) },
  { region: "Tabuk", items: locationsFlat.filter(l => ["TBU","DBA","AWJ","HAQ","TYM"].includes(l.code)) },
  { region: "Hail", items: locationsFlat.filter(l => ["HIL","BAQ","GHZ","ASH"].includes(l.code)) },
  { region: "Najran", items: locationsFlat.filter(l => ["NAJ","SHR","HBN","YDM"].includes(l.code)) },
  { region: "Jazan", items: locationsFlat.filter(l => ["JZN","SBY","ABR","SMT","FRS","BSH","DRB"].includes(l.code)) },
  { region: "Al-Bahah", items: locationsFlat.filter(l => ["BAH","BLJ","MIK","QLW","AQI","MDQ"].includes(l.code)) },
  { region: "Al-Jawf", items: locationsFlat.filter(l => ["SKK","DMJ","QUR","TBJ"].includes(l.code)) },
  { region: "Northern Borders", items: locationsFlat.filter(l => ["ARR","RFH","TRF","AWQ"].includes(l.code)) },
  { region: "Al-Qassim", items: locationsFlat.filter(l => ["BRD","UNZ","ARS","MTN","BUK","BDY"].includes(l.code)) },
];