export const HISTORIES_FILE = "./histories.json";
export const LATEST_FILE = "./latest.json";
export const SUMMARY_FILE = "./summary.json";
export const TEST_REPORTS_FILE = "./testreports.json";
export const HOTSPOT_HISTORIES_FILE = "./hotspots_histories.json";
export const HOTSPOT_LATEST_FILE = "./hotspots.json";

export const ORIGIN = "https://dashboard.kerala.gov.in/covid";
export const INDEX_PAGE = `${ORIGIN}/index.php`;
export const DAILYREPORTING_PAGE =
  `${ORIGIN}/dailyreporting-view-public-districtwise.php`;
export const QUARANTINED_PAGE = `${ORIGIN}/quarantined-datewise.php`;
export const TESTING_PAGE = `${ORIGIN}/testing-view-public.php`;
export const HOTSPOTS_PAGE = `${ORIGIN}/tpr-classification.php`;
export const VACCINATION_PAGE = `${ORIGIN}/vaccination.php`;
export const VAC_HISTORIES_FILE = "./vaccination_histories.json";
export const VAC_LATEST_FILE = "./vaccination_latest.json";
export const VAC_SUMMARY_FILE = "./vaccination_summary.json";

export const DEFAULT_HEADERS: Record<string, string> = {
  "Origin": ORIGIN,
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0",
  "Accept":
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "Accept-Language": "en-GB,en;q=0.5",
  "Connection": "keep-alive",
};

export const DATE_REGEX = /\d\d-\d\d-\d\d\d\d/;

export enum District {
  TVM = "Thiruvananthapuram",
  KLM = "Kollam",
  PTA = "Pathanamthitta",
  ALP = "Alappuzha",
  KTM = "Kottayam",
  IDK = "Idukki",
  EKM = "Ernakulam",
  TSR = "Thrissur",
  PKD = "Palakkad",
  MPM = "Malappuram",
  KKD = "Kozhikode",
  WYD = "Wayanad",
  KNR = "Kannur",
  KGD = "Kasaragod",
}

export const GEO_LSG: Record<District, string[]> = {
  [District.ALP]: [
    "Edathwa",
    "Mannancherry",
    "Alappuzha (M)",
    "Purakkad",
    "Thanneermukkam",
    "Kayamkulam (M)",
    "Palamel",
    "MavelikkaraThekkekara",
    "Muhamma",
    "Mannar",
    "ChennithalaThriperunthura",
    "Chettikulangara",
    "Thazhakkara",
    "Thiruvanvandoor",
    "Pandanadu",
    "Budhannur",
    "Puliyoor",
    "Cheriyanad",
    "Ala",
    "Venmony",
    "Bharanikavu",
    "Vallikunnam",
    "MavelikkaraThamarakulam",
    "Chunakkara",
    "Nooranadu",
    "Arattupuzha",
    "Pulinkunnu",
    "Cheruthana",
    "Pattanakkad",
    "Chennam Pallipuram",
    "Mavelikkara (M)",
    "Chengannur (M)",
    "Pathiyoor",
    "Chingoli",
    "Cheppad",
    "Devikulangara",
    "Kandalloor",
    "Muthukulam",
    "Karuvatta",
    "Thrikkunnapuzha",
    "Kumarapuram",
    "Karthikapalli",
    "Pallipad",
    "Veeyapuram",
    "Harippad (M)",
    "Punnapra South",
    "Ambalappuzha North",
    "Mulakuzha",
    "Krishnapuram",
    "Ambalappuzha South",
    "Neelamperoor",
    "Veliyanad",
    "Kavalam",
    "Muttar",
    "Kainakari",
    "Nedumudi",
    "Champakkulam",
    "Thakazhi",
    "Thalavadi",
    "Kadakkarapalli",
    "Cherthala South",
    "Kanjikkuzhi",
    "Mararikulam North",
    "Aroor",
    "Ezhupunna",
    "Kodamthuruthu",
    "Kuthiyathodu",
    "Thuravoor",
    "Vayalar",
    "Perumpalam",
    "Arukutty",
    "Panavally",
    "Thaikattussery",
    "Ramankari",
    "Mararikulam South",
    "Cherthala (M)",
    "Aryad",
    "Punnapra North",
  ],
  [District.EKM]: [
    "Asamannur",
    "Avoly",
    "Ayyampuzha",
    "Chellanam",
    "Chendamangalam",
    "Chengamanadu",
    "Cheranallur",
    "Chittattukara",
    "Choornikkara",
    "Chottanikara",
    "Edakkattuvayal",
    "Edathala",
    "Arakkuzha",
    "Ayavana",
    "Aiykkaranadu",
    "Alangad",
    "Aluva (M)",
    "Amballur",
    "Angamali (M)",
    "Edavavanakad",
    "Elanji",
    "Kumbalam",
    "Elankunnapuzha",
    "Kuttampuzha",
    "Eloor (M)",
    "Kuzhuppilly",
    "Ezhikkara",
    "Malayattoor Neeleeswaram",
    "Maneedu",
    "Manjallur",
    "Manjapra",
    "Kadamakkudy",
    "Kadungalloor",
    "Kalady",
    "Kalamasseri (M)",
    "Kalloorkkad",
    "Kanjoor",
    "Karukutty",
    "Karumaloor",
    "Kavalangad",
    "Keerampara",
    "Keezhmadu",
    "Kizhakkambalam",
    "Kochi (C)",
    "Koothattukulam (M)",
    "Koovappady",
    "Kothamangalam (M)",
    "Kottappady",
    "Kottuvally",
    "Kumbalangy",
    "Kunnathunad",
    "Kunnukara",
    "Marad (M)",
    "Marady",
    "Mazhuvannur",
    "Mookkannoor",
    "Mudakkuzha",
    "Mulanthuruthy",
    "Mulavukadu",
    "Muvattupuzha (M)",
    "Nayarambalam",
    "Nedumbassery",
    "Nellikuzhy",
    "Njarakkal",
    "Okkal",
    "Paingottoor",
    "Payipra",
    "Palakuzha",
    "Pallarimangalam",
    "Pallippuram",
    "Pampakkuda",
    "Parakkadavu",
    "North Paravoor (M)",
    "Perumbavoor (M)",
    "Pindimana",
    "Piravom (M)",
    "Poothrika",
    "Pothanikkad",
    "Puthenvelikara",
    "Ramamangalam",
    "Rayamangalam",
    "Sreemoolanagaram",
    "Thirumaradi",
    "Thiruvaniyoor",
    "Thrikkakkara (M)",
    "Thrippunithura (M)",
    "Thuravoor",
    "Udayamperoor",
    "Vadakkekara",
    "Vadavucode Puthenkurissu",
    "Valakom",
    "Varapetty",
    "Varapuzha",
    "Vazhakkulam",
    "Vengola",
    "Vengoor",
  ],
  [District.IDK]: [
    "Edamalakkudi",
    "Kanthalloor",
    "Mankulam",
    "Marayoor",
    "Munnar",
    "Santhanpara",
    "Erattayar",
    "Kanchiyar",
    "Upputhara",
    "Vandanmedu",
    "Kattappana (M)",
    "Karunapuram",
    "Nedumkandam",
    "Pampadumpara",
    "Rajakkad",
    "Rajakumari",
    "Senapathi",
    "Udumpanchola",
    "Edavetti",
    "Karinkunnam",
    "Kumaramangalam",
    "Manakkad",
    "Muttom",
    "Purappuzha",
    "Thodupuzha (M)",
    "Adimali",
    "Bysonvalley",
    "Konnathadi",
    "Pallivasal",
    "Vellathooval",
    "Elappara",
    "Kokkayar",
    "Kumili",
    "Peerumedu",
    "Peruvanthanam",
    "Vandiperiyar",
    "Chinnakkanal",
    "Devikulam",
    "Vattavada",
    "Alakode",
    "Karimannur",
    "Kodikulam",
    "Kudayathoor",
    "Udumpannoor",
    "Vannappuram",
    "Velliyamattam",
    "Arakkulam",
    "Idukki- Kanjikkuzhi",
    "Kamakshi",
    "Mariyapuram",
    "Vathikudi",
    "Vazhathoppu",
    "Ayyappankovil",
    "Chakkupallam",
  ],
  [District.KNR]: [
    "Kolayad",
    "Ulikkal",
    "Payyavoor",
    "Eruvessi",
    "Malapattom",
    "Sreekandapuram (M)",
    "Naduvil",
    "Mattool",
    "Ramanthali",
    "Cherupuzha",
    "Pariyaram",
    "Madayi",
    "Cherukunnu",
    "Udayagiri",
    "Mayyil",
    "Ezhome",
    "Kolacheri",
    "Kunjimangalam",
    "Kadannapalli-Panapuzha",
    "Karivalloor-Peralam",
    "Payyannur (M)",
    "Kankole Alapadamba",
    "Eramam-Kuttoor",
    "Peringom-Vayakkara",
    "Alakode",
    "Chengalayi",
    "Chapparapadavu",
    "Kurumathur",
    "Pattuvam",
    "Anthoor (M)",
    "Kannapuram",
    "Irikkur",
    "Padiyoor",
    "Kottiyoor",
    "Kanichar",
    "Mattannoor (M)",
    "Muzhakkunnu",
    "Peravoor",
    "Aralam",
    "Ayyankunnu",
    "Payam",
    "Iritty (M)",
    "Thillankeri",
    "Muzhuppilangad",
    "Kalyasseri",
    "Pappinisseri",
    "Chirakkal",
    "Narath",
    "Kuttiatoor",
    "Valapattanam",
    "Azheeikkode",
    "Peralasseri",
    "Dharmadom",
    "Kadamboor",
    "Chembilod",
    "Anjarakandi",
    "Munderi",
    "Koodali",
    "Keezhalloor",
    "Mangattidam",
    "Chittariparambu",
    "Vengad",
    "Pinarayi",
    "Cheruthazham",
    "New Mahe",
    "Panoor (M)",
    "Pannyannoor",
    "Thriprangottur",
    "Pattiom",
    "Mokeri",
    "Kuthuparambu (M)",
    "Kelakom",
    "Kunnothuparambu",
    "Thalasseri (M)",
    "Eranjoli",
    "Chokli",
    "Kottayam",
    "Thaliparambu (M)",
    "Kannur (C)",
    "Malur",
    "Kathiroor",
  ],
  [District.KGD]: [
    "Ajanur",
    "Balal",
    "Bedadka",
    "Chemmanad",
    "Chengala",
    "Cheruvathur",
    "East Eleri",
    "Enmakaje",
    "Kallar",
    "Karaduka",
    "Kayyur-Chimeni",
    "Kinanur-Karindalam",
    "Kodom-Belur",
    "Kumbala",
    "Kumbadaje",
    "Kuttikol",
    "Madhur",
    "Madikai",
    "Mangalpady",
    "Manjeswaram",
    "Mogral-Puthur",
    "Meencha",
    "Nileswaram (M)",
    "Paivalike",
    "Pallikkara",
    "Pananthadi",
    "Pilicode",
    "Pullur-Periya",
    "Puthige",
    "Uduma",
    "Vorkady",
    "West Eleri",
    "Beloor",
    "Delampadi",
    "Badiyaduka",
    "Muliyar",
    "Thrikkarippur",
    "Kanjangad (M)",
    "Kasaragod (M)",
    "Padanna",
    "Valiyaparampa",
  ],
  [District.KLM]: [
    "Kummil",
    "Poothakulam",
    "Nilamel",
    "Paravoor (M)",
    "Chirakkara",
    "Chithara",
    "Kadakkal",
    "Kalluvathukkal",
    "Mayyanad",
    "Chathanoor",
    "Chadayamangalam",
    "Adichanalloor",
    "Velinalloor",
    "Ittiva",
    "Pooyappalli",
    "Thrikkovilvattom",
    "Alayamon",
    "Kollam (C)",
    "Elamadu",
    "Kottankara",
    "Nedumpana",
    "Elampalloor",
    "Neendakara",
    "Kareepra",
    "Veliyam",
    "Anchal",
    "Thrikkaruva",
    "Ummannoor",
    "Edamulakkal",
    "Thekkumbhagam",
    "Kulathupuzha",
    "Eroor",
    "Chavara",
    "Kundara",
    "Perayam",
    "Ezhukone",
    "Perinadu",
    "Panayam",
    "Pathanapuram",
    "Muntrothuruthu",
    "Karavaloor",
    "Vettikkavala",
    "Kottarakkara (M)",
    "Melila",
    "East Kallada",
    "Thevalakkara",
    "West Kallada",
    "Neduvathoor",
    "Panmana",
    "Pavithreswaram",
    "Mynagappally",
    "Mylam",
    "Sasthamkotta",
    "Karunagappally (M)",
    "Thalavoor",
    "Kulakkada",
    "Pattazhi",
    "Kunnathur",
    "Sooranadu South",
    "Thodiyoor",
    "Aryankavu",
    "Kulasekharapuram",
    "Pattazhi Vadakkekkara",
    "Poruvazhy",
    "Clappana",
    "Thenmala",
    "Alappad",
    "Thazhava",
    "Ochira",
    "Sooranadu North",
    "Piravanthoor",
    "Vilakudi",
    "Punaloor (M)",
  ],
  [District.KTM]: [
    "Pampadi",
    "Payippad",
    "Thalanad",
    "Thalappalam",
    "Theekoyi",
    "Thiruvarppu",
    "Thrikodithanam",
    "Aymanam",
    "Akalakunnam",
    "Athirampuzha",
    "Ayarkunnam",
    "Bharananganam",
    "Erumeli",
    "Kadanad",
    "Kaduthuruthy",
    "Kanakari",
    "Kangazha",
    "Kanjirapally",
    "Karoor",
    "Karukachal",
    "Kidangoor",
    "Kooroppada",
    "Kozhuvanal",
    "Marangattupilly",
    "Meenachil",
    "Meenadam",
    "Mundakkayam",
    "Nedumkunnam",
    "Pallikkathodu",
    "Kumarakom",
    "Kuravilangad",
    "Kurichi",
    "Madapally",
    "Manjoor",
    "TV Puram",
    "Udayanapuram",
    "Uzhavoor",
    "Vakathanam",
    "Vazhappally",
    "Vazhoor",
    "Vechoor",
    "Veliyannoor",
    "Vellavoor",
    "Vijayapuram",
    "Arpookkara",
    "Panachikkad",
    "Manimala",
    "Maravanthuruth",
    "Chirakadav",
    "Elikkulam",
    "Erattupetta (M)",
    "Ettumanoor (M)",
    "Koottikkal",
    "Koruthodu",
    "Manarkadu",
    "Melukavu",
    "Mulakulam",
    "Moonnilavu",
    "Mutholi",
    "Parathodu",
    "Poonjar",
    "Poonjar Thekkekara",
    "Puthupalli",
    "Thidanad",
    "Vaikom (M)",
    "Kallara (Vaikom)",
    "Thalayazham",
    "Kottayam (M)",
    "Njeezhoor",
    "Velloor",
    "Thalayolaparambu",
    "Changanassery (M)",
    "Pala (M)",
    "Neendoor",
    "Kadaplamattam",
    "Chempu",
    "Ramapuram",
  ],
  [District.KKD]: [
    "Koorachundu",
    "Kuruvattur",
    "Madavoor",
    "Maniyur",
    "Maruthonkara",
    "Mavoor",
    "Meppayur",
    "Moodadi",
    "Mukkam (M)",
    "Nadapuram",
    "Naduvannur",
    "Nanmanda",
    "Purameri",
    "Ramanattukara (M)",
    "Thalakulathur",
    "Thamarassery",
    "Thikkodi",
    "Thiruvallur",
    "Thuneri",
    "Kunnamangalam",
    "Atholi",
    "Ayancheri",
    "Azhiyur",
    "Balusseri",
    "Changaroth",
    "Chathamangalam",
    "Chelannur",
    "Chemancherry",
    "Chengottukavu",
    "Cherode",
    "Cheruvannur",
    "Edacheri",
    "Eramala",
    "Feroke (M)",
    "Kakkodi",
    "Kakkur",
    "Karassery",
    "Kavilumpara",
    "Kayakkodi",
    "Kayanna",
    "Keezhariyur",
    "Kizhakkoth",
    "Koduvalli (M)",
    "Koyilandi (M)",
    "Koodaranji",
    "Koothali",
    "Kottur",
    "Kunnummal",
    "Narikkuni",
    "Narippatta",
    "Nochad",
    "Olavanna",
    "Omassery",
    "Onchiyam",
    "Panangad",
    "Perambra",
    "Perumanna",
    "Peruvayal",
    "Thurayur",
    "Ulliyeri",
    "Unnikkulam",
    "Vadakara (M)",
    "Valayam",
    "Vanimal",
    "Velom",
    "Villiyappally",
    "Kutyadi",
    "Thiruvambadi",
    "Kodancheri",
    "Kattipara",
    "Arikkulam",
    "Chakkittapara",
    "Chekkyad",
    "Kodiyathur",
    "Kozhikkode (C)",
    "Payyoli (M)",
    "Kadalundi",
    "Puthuppadi",
  ],
  [District.MPM]: [
    "Vattamkulam",
    "Pothukallu",
    "Perumpadappu",
    "Veliyamcod",
    "Elamkulam",
    "Athavanad",
    "Marancherri",
    "Edappal",
    "Nannammukku",
    "Alamkod",
    "Aliparambu",
    "Kuruva",
    "Thazhekkod",
    "Angadippuram",
    "Perinthalmanna (M)",
    "Pulamanthol",
    "Purathur",
    "Moorkanad",
    "Irimbiliyam",
    "Valancherri (M)",
    "Edayoor",
    "Thirurangadi (M)",
    "Vallikunnu",
    "Munniyoor",
    "ARNagar",
    "Peruvalloor",
    "Ponmundam",
    "Ozhur",
    "Parappur",
    "Melattur",
    "Thrikkalangod",
    "Thiruvaali",
    "Kalikavu",
    "Wandoor",
    "Vengara",
    "Marakkara",
    "Ponmala",
    "Ponnani (M)",
    "Kalady",
    "Thriprangod",
    "Thirunavaya",
    "Mangalam",
    "Niramaruthoor",
    "Vettom",
    "Thirur (M)",
    "Cheriyamundam",
    "Thalakkad",
    "Perumannaklari",
    "Valavannoor",
    "Kalpakamcherri",
    "Kottakkal (M)",
    "Edarikkod",
    "Thanalur",
    "Parappanangadi (M)",
    "Nannambra",
    "Thennala",
    "Thenjippalam",
    "Chelambra",
    "Kannamangalam",
    "Pallikkal",
    "Kondotty (M)",
    "Pulikkal",
    "Kuzhimanna",
    "Muthuvalloor",
    "Cherukavu",
    "Vazhakkad",
    "Edappatta",
    "Vettathur",
    "Edavanna",
    "Poroor",
    "Pandikkadu",
    "Karuvarakundu",
    "Chokkadu",
    "Mambadu",
    "Kodoor",
    "Puzhakkattiri",
    "Makkaraparambu",
    "Keezhattur",
    "Koottilangadi",
    "Oorakam",
    "Morayoor",
    "Malappuram (M)",
    "Pookkottur",
    "Anakkayam",
    "Manjeri (M)",
    "Pulpatta",
    "Cheekkod",
    "Kavanoor",
    "Keezhuparambu",
    "Urangattiri",
    "Moothedam",
    "Vazhikkadavu",
    "Chaliyar",
    "Nilambur (M)",
    "Amarambalam",
    "Karulayi",
    "Edakkara",
    "Chungathara",
    "Thuvvoor",
    "Mankada",
    "Thanur (M)",
    "Areekkod",
    "Kuttippuram",
    "Thavanoor",
    "Vazhayoor",
    "Othukkungal",
  ],
  [District.PKD]: [
    "Perumatti",
    "Pallasana",
    "Koduvayoor",
    "Puthunagaram",
    "Peruvembu",
    "Kodumbu",
    "Thenkurissi",
    "Kannadi",
    "Mathur",
    "Alathur",
    "Melarcode",
    "Kavassery",
    "Tharur",
    "Peringottukurissi",
    "Erimayur",
    "Kuzhalmannam",
    "Kottayi",
    "Chittoor-Thathamangalam (M)",
    "Polpulli",
    "Nalleppilli",
    "Eruthempathi",
    "Vadakarapathy",
    "Elappulli",
    "Puthusseri",
    "Marutharoad",
    "Palakkad (M)",
    "Parali",
    "Mundoor",
    "Karimba",
    "Thenkara",
    "Agali",
    "Nellaya",
    "Chalavara",
    "Cherppulassery (M)",
    "Vellinezhi",
    "Sreekrishnapuram",
    "Karimpuzha",
    "Kanjirappuzha",
    "Karakurissi",
    "Mannarkkad (M)",
    "Kumaramputhoor",
    "Alanalloor",
    "Lekkidiperoor",
    "Mannoor",
    "Keralassery",
    "Ambalappara",
    "Thachanattukara",
    "Anakkara",
    "Kappur",
    "Chalissery",
    "Pattithara",
    "Paruthoor",
    "Thrithala",
    "Nagalasserry",
    "Thirumittakode",
    "Muthuthala",
    "Pattambi (M)",
    "Thiruvengappura",
    "Ongalloor",
    "Koppam",
    "Vilayoor",
    "Vallappuzha",
    "Pattancherry",
    "Ottappalam (M)",
    "Thachampara",
    "Kozhinjampara",
    "Muthalamada",
    "Kadampazhippuram",
    "Vadavannoor",
    "Kollengodu",
    "Kulukkalloor",
    "Kizhakkanchery",
    "Sholayur",
    "Puthur",
    "Kottoppadam",
    "Malampuzha",
    "Vandazhi",
    "Ayiloor",
    "Nelliyampathi",
    "Elavancheri",
    "Nenmara",
    "Kuthannoor",
    "Pirayiri",
    "Puthupariyaram",
    "Mankara",
    "Kongadu",
    "Vadakkancherri",
    "Kannambra",
    "Puthukkode",
    "Shornur (M)",
    "Vaniyamkulam",
    "Ananganadi",
    "Pookkottukavu",
    "Trikkadeeri",
    "Akathethara",
  ],
  [District.PTA]: [
    "Vechuchira",
    "Mallappalli",
    "Anikkad",
    "Adoor (M)",
    "Aranmula",
    "Aruvappulam",
    "Ayiroor",
    "Chenneerkara",
    "Cherukol",
    "Chittar",
    "Enadimangalam",
    "Erathu",
    "Eraviperoor",
    "Ezhumattoor",
    "Ezhamkulam",
    "Elanthoor",
    "Kadampanadu",
    "Kadapra",
    "Kalanjoor",
    "Kallooppara",
    "Kaviyoor",
    "Kodumon",
    "Koipram",
    "Konni",
    "Kottanadu",
    "Kottangal",
    "Kozhancherry",
    "Kulanada",
    "Kunnamthanam",
    "Kuttoor",
    "Malayalappuzha",
    "Mallappuzhassery",
    "Mezhuveli",
    "Mylapra",
    "Naranammoozhi",
    "Naranganam",
    "Nedumpram",
    "Niranam",
    "Omalloor",
    "Pallikkal",
    "Pandalam Thekkekara",
    "Pandalam (M)",
    "Pathanamthitta (M)",
    "Peringara",
    "Pramadam",
    "Puramattom",
    "Ranni Pazhavangadi",
    "Ranni Perunnadu",
    "Seethathodu",
    "Thannithode",
    "Thiruvalla (M)",
    "Thottapuzhassery",
    "Thumpamon",
    "Vadasserikkara",
    "Vallikkode",
    "Ranni",
    "Ranni Angadi",
    "Naranammoozhi",
  ],
  [District.TVM]: [
    "Karumkulam",
    "Kanjiramkulam",
    "Athiyannoor",
    "Venganoor",
    "Madavoor",
    "Karavaram",
    "Nagaroor",
    "Navayikkulam",
    "Pulimathu",
    "Kilimanoor",
    "Pallikkal",
    "Pazhayakunnummel",
    "Kattakada",
    "Poovachal",
    "Aryanad",
    "Vellanad",
    "Uzhamalakkal",
    "Tholikkodu",
    "Balaramapuram",
    "Pallichal",
    "Malayinkeezhu",
    "Maranalloor",
    "Kalliyoor",
    "Vilappil",
    "Vilavoorkal",
    "Karode",
    "Parassala",
    "Ottasekharamangalam",
    "Kallikkad",
    "Chirayinkeezhu",
    "Anchuthengu",
    "Vakkam",
    "Mudakkal",
    "Manampoor",
    "Vettoor",
    "Varkala (M)",
    "Cherunniyoor",
    "Ottoor",
    "Edava",
    "Chemmaruthi",
    "Elakamon",
    "Aruvikkara",
    "Anad",
    "Panavoor",
    "Vembayam",
    "Nedumangad (M)",
    "Peringammala",
    "Nanniyodu",
    "Manikkal",
    "Nellanadu",
    "Pangod",
    "Kallara",
    "Kadinamkulam",
    "Pothencodu",
    "Mangalapuram",
    "Kottukal",
    "Vellarada",
    "Kadakkavoor",
    "Kizhuvilam",
    "Karakulam",
    "Pullampara",
    "Vamanpuram",
    "Azhoor",
    "Neyyattinkara (M)",
    "Vithura",
    "Attingal (M)",
    "Andoorkonam",
    "Thiruvananthapuram (C)",
    "Amboori",
    "Poovar",
    "Chenkal",
    "Thirupuram",
    "Kulathoor",
    "Kollayil",
    "Kunnathukal",
    "Perumkadavila",
    "Aryancodu",
    "Kuttichal",
  ],
  [District.TSR]: [
    "Edavilangadu",
    "Valappad",
    "Chelakkara",
    "Thalikkulam",
    "Eriyad",
    "Vadanappilly",
    "Kodungalloor (M)",
    "Mathilakam",
    "Perinjanam",
    "Sreenarayanapuram",
    "Engandiyoor",
    "Chavakkad (M)",
    "Kaipamangalam",
    "Edathiruthy",
    "Puttoor",
    "Alagappa Nagar",
    "Nadathara",
    "Adat",
    "Thrissur (C)",
    "Madakkathara",
    "Veloor",
    "Kadangode",
    "Erumapetty",
    "Thannyam",
    "Kandanasseri",
    "Tholoor",
    "Punnayoorkkulam",
    "Vadakkekkadu",
    "Guruvayur (M)",
    "Kunnamkulam (M)",
    "Kattakambal",
    "Kadavalloor",
    "Porkkulam",
    "Chowannoor",
    "Orumanayoor",
    "Mullasseri",
    "Pavaratty",
    "Elavally",
    "Kaiparambu",
    "Kuzhur",
    "Poyya",
    "Puthenchira",
    "Annamanada",
    "Kadukutty",
    "Koratty",
    "Pariyaram",
    "Athirappilli",
    "Muriyad",
    "Chalakkudi (M)",
    "Kodassery",
    "Mattathoor",
    "Mala",
    "Aloor",
    "Vellangalloor",
    "Poomangalam",
    "Padiyoor",
    "Kattoor",
    "Karalam",
    "Cherppu",
    "Paralam",
    "Chazhoor",
    "Anthikkad",
    "Velookkara",
    "Iringalakkuda (M)",
    "Parappukkara",
    "Nenmanikkara",
    "Puthukkad",
    "Varantharappilli",
    "Thrikoor",
    "Vallachira",
    "Avinisseri",
    "Desamangalam",
    "Varavoor",
    "Mulloorkkara",
    "Vadakkancherri (M)",
    "Mulankunnathukavu",
    "Panancheri",
    "Thekkumkara",
    "Pazhayannoor",
    "Thiruvilwamala",
    "Kondazhy",
    "Vallathol Nagar",
    "Panjal",
    "Avanoor",
    "Arimpoor",
    "Kolazhi",
    "Choondal",
    "Punnayoor",
    "Kadappuram",
    "Nattika",
    "Kodakara",
    "Manaloor",
    "Meloor",
    "Venkidangu",
  ],
  [District.WYD]: [
    "Kottathara",
    "Vengapalli",
    "Padinjarathara",
    "Thariyod",
    "Muttil",
    "Pozhuthana",
    "Meppadi",
    "Vythiri",
    "Kalpatta (M)",
    "Mupainad",
    "Sulthan Bathery (M)",
    "Mananthavady (M)",
    "Noolpuzha",
    "Meenangadi",
    "Ambalavayal",
    "Nenmeni",
    "Pulpalli",
    "Mullankolli",
    "Panamaram",
    "Kaniyampatta",
    "Poothadi",
    "Edavaka",
    "Thondernadu",
    "Thirunelli",
    "Thavinjal",
    "Vellamunda",
  ],
};
