// Get current time in HH:MM format
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};import React, { useState } from 'react';

const ShipShoreChecklist = () => {
const [language, setLanguage] = useState('en'); // Default language is English

// Text translations for all languages
const translations = {
  lv: {
    title: "Kuģa/Krasta Drošības Kontrolsaraksts",
    subtitle: "Sausās beramkravas kuģu iekraušanai vai izkraušanai",
    date: "Datums",
    port: "Osta",
    loading: "Iekraušana",
    unloading: "Izkraušana",
    terminalQuay: "Termināls/Piestātne",
    waterDepth: "Pieejamais ūdens dziļums piestātnē",
    shipsName: "Kuģa nosaukums",
    arrivalDraught: "Ienākšanas iegrime (nolasītā/aprēķinātā)",
    airDraught: "Gaisa iegrime",
    calculatedDepartureDraught: "Aprēķinātā izejošā iegrime",
    checklistItems: [
      "Vai ūdens dziļums piestātnē un gaisa iegrime ir pietiekama operācijām?",
      "Vai pietauvošanās pasākumi ir atbilstoši plūdmaiņu, straumju, laikapstākļu, satiksmes un kuģu iegrimes apstākļiem?",
      "Vai ārkārtas gadījumā kuģis var atstāt piestātni jebkurā laikā?",
      "Vai ir droša piekļuve starp kuģi un krastu?",
      "Vai saskaņotā kuģa/termināla sakaru sistēma darbojas?",
      "Vai operāciju kontaktpersonas ir skaidri identificētas?",
      "Vai ir pietiekams apkalpes skaits uz kuģa un pietiekams personāls terminālā ārkārtas situācijām?",
      "Vai ir paziņots un saskaņots par bunkurēšanas operācijām?",
      "Vai ir paziņots un saskaņots par plānotajiem remontdarbiem piestātnē vai uz kuģa?",
      "Vai ir saskaņota procedūra par ziņošanu un reģistrēšanu par bojājumiem no kravas operācijām?",
      "Vai kuģim ir izsniegtas ostas un termināla noteikumu kopijas, ieskaitot drošības un piesārņojuma prasības un ārkārtas dienestu kontaktinformāciju?",
      "Vai kuģa īpašnieks ir nodrošinājis Kapteini ar kravas īpašībām saskaņā ar SOLAS VI nodaļas prasībām?",
      "Vai atmosfēra ir droša tilpnēs un slēgtajās telpās, kurās var būt nepieciešama piekļuve, vai fumigētās kravas ir identificētas, un vai kuģis un termināls ir vienojušies par atmosfēras monitoringu?",
      "Vai kravas apstrādes iekārtu celtspēja un ceļojuma ierobežojumi katram iekrāvējam/izkrāvējam ir nodoti kuģim/terminālam?",
      "Vai iekraušanas/izkraušanas plāns ir aprēķināts visiem iekraušanas/balasta noņemšanas vai izkraušanas/balastēšanas posmiem?",
      "Vai tilpnes, kurās jāstrādā, ir skaidri identificētas iekraušanas vai izkraušanas plānā, norādot darba secību un kravas partiju, kas jāpārsūta katrā tilpnē?",
      "Vai ir apspriesta vajadzība pēc kravas apgriešanas tilpnēs un vai ir saskaņota metode un apmērs?",
      "Vai gan kuģis, gan termināls saprot un pieņem, ka ja balasta uzņemšanas programma atpaliek no kravas operācijām, būs nepieciešams apturēt kravas operācijas, līdz balasta operācija panāks?",
      "Vai paredzētās procedūras kravas atlieku izņemšanai no tilpnēm izkraušanas laikā ir izskaidrotas kuģim un pieņemtas?",
      "Vai procedūras, lai pielāgotu kravas kuģa galīgo diferenti, ir nolemtas un saskaņotas?",
      "Vai termināls ir informēts par laiku, kas nepieciešams kuģim, lai sagatavotos jūrai pēc kravas darbu pabeigšanas?"
    ],
    ship: "KUĢIS",
    terminal: "TERMINĀLS",
    checklistTitle: "Kontrolsaraksta jautājumi",
    aboveAgreed: "IEPRIEKŠ MINĒTAIS IR SASKAŅOTS:",
    forShip: "Kuģim",
    forTerminal: "Terminālam",
    rank: "Amats",
    positionTitle: "Amats/Nosaukums",
    shipEmail: "Kuģa e-pasta adrese",
    shipName: "Vārds, uzvārds",
    confirmationText: "Aizpildot šo veidlapu un nospiežot pogu \"Iesniegt kontrolsarakstu\", es apstiprinu, ka esmu iepazinies ar visiem iepriekš minētajiem datiem un piekrītu tiem. Pēc iesniegšanas, aizpildītā veidlapa tiks nosūtīta uz abiem norādītajiem e-pastiem.",
    emailInfo: "E-pasti tiks nosūtīti uz:",
    submitButton: "Iesniegt kontrolsarakstu",
    communicationMethod: "Sakaru metode",
    languageField: "Valoda",
    shipContactPersons: "Kuģa kontaktpersonas",
    shoreContactPersons: "Krasta kontaktpersonas",
    location: "Atrašanās vieta",
    time: "Laiks",
    // Contact person translations
    portSafety: "Ostas drošība",
    terminalManager: "Darba vadītājs/Stividors",
    dutyForeman: "Dežūrējošais stividors"
  },
  en: {
    title: "Ship/Shore Safety Checklist",
    subtitle: "For Loading or Unloading Dry Bulk Cargo Carriers",
    date: "Date",
    port: "Port",
    loading: "Loading",
    unloading: "Unloading",
    terminalQuay: "Terminal/Quay",
    waterDepth: "Available depth of water in berth",
    shipsName: "Ship's name",
    arrivalDraught: "Arrival draught (read/calculated)",
    airDraught: "Air draught",
    calculatedDepartureDraught: "Calculated departure draught",
    checklistItems: [
      "Is the depth of water at the berth, and the air draught, adequate for the cargo operations?",
      "Are mooring arrangements adequate for all local effects of tide, current, weather, traffic and craft alongside?",
      "In emergency, is the ship able to leave the berth at any time?",
      "Is there safe access between the ship and the wharf?",
      "Is the agreed ship/terminal communications system operative?",
      "Are the liaison contact persons during operations positively identified?",
      "Are adequate crew on board and adequate staff in the terminal, for emergency?",
      "Have any bunkering operations been advised and agreed?",
      "Have any intended repairs to wharf or ship whilst alongside been advised and agreed?",
      "Has a procedure for reporting and recording damage from cargo operations been agreed?",
      "Has the ship been provided with copies of port and terminal regulations, including safety and pollution requirements and details of emergency services?",
      "Has the shipper provided the Master with the properties of the cargo in accordance with the requirements of Chapter VI of SOLAS?",
      "Is the atmosphere safe in holds and enclosed spaces to which access may be required, have fumigated cargoes been identified, and has the need for monitoring of atmosphere been agreed by ship and terminal?",
      "Have the cargo-handling capacity and any limits of travel for each loader/unloader been passed to the ship/terminal?",
      "Has a loading/unloading plan been calculated for all stages of loading/deballasting or unloading/ballasting?",
      "Have the holds to be worked been clearly identified in the loading or unloading plan, showing the sequence of work, and the grade and tonnage of cargo to be transferred each time the hold is worked?",
      "Has the need for trimming of cargo in the holds been discussed, and have the method and extent been agreed?",
      "Do both ship and terminal understand and accept that if the ballast programme becomes out of step with the cargo operations, it will be necessary to suspend cargo operations until the ballast operation has caught up?",
      "Have the intended procedures for removing cargo residues lodged in the holds while unloading been explained to the ship and accepted?",
      "Have the procedures to adjust the final trim of the loading ship been decided and agreed?",
      "Has the terminal been advised of the time required for the ship to prepare for sea, on completion of cargo work?"
    ],
    ship: "SHIP",
    terminal: "TERMINAL",
    checklistTitle: "Checklist Questions",
    aboveAgreed: "THE ABOVE HAS BEEN AGREED:",
    forShip: "For ship",
    forTerminal: "For terminal",
    rank: "Rank",
    positionTitle: "Position/Title",
    shipEmail: "Ship's email address",
    shipName: "Full name",
    confirmationText: "By filling out this form and clicking the \"Submit Checklist\" button, I confirm that I have read and agree with all the above information. After submission, the completed form will be sent to both provided email addresses.",
    emailInfo: "Emails will be sent to:",
    submitButton: "Submit Checklist",
    communicationMethod: "Communication method",
    languageField: "Language",
    shipContactPersons: "Ship contact persons",
    shoreContactPersons: "Shore contact person(s)",
    location: "Location",
    time: "Time",
    // Contact person translations
    portSafety: "Port Safety",
    terminalManager: "Terminal Manager/Stevedore",
    dutyForeman: "Duty Stevedore"
  },
  ru: {
    title: "Лист контроля безопасности Судно/Берег",
    subtitle: "Для погрузки или выгрузки сухогрузных навалочных судов",
    date: "Дата",
    port: "Порт",
    loading: "Погрузка",
    unloading: "Выгрузка",
    terminalQuay: "Терминал/Причал",
    waterDepth: "Доступная глубина воды у причала",
    shipsName: "Название судна",
    arrivalDraught: "Осадка при прибытии (измеренная/расчетная)",
    airDraught: "Высота надводного борта",
    calculatedDepartureDraught: "Расчетная осадка при отходе",
    checklistItems: [
      "Достаточна ли глубина воды у причала и высота надводного борта для грузовых операций?",
      "Соответствуют ли швартовные устройства всем местным условиям прилива, течения, погоды, движения и судов у причала?",
      "Может ли судно покинуть причал в любое время в случае чрезвычайной ситуации?",
      "Имеется ли безопасный доступ между судном и причалом?",
      "Работает ли согласованная система связи судно/терминал?",
      "Четко ли определены контактные лица по взаимодействию во время операций?",
      "Имеется ли достаточное количество экипажа на борту и персонала на терминале для чрезвычайных ситуаций?",
      "Были ли согласованы и сообщены операции по бункеровке?",
      "Были ли сообщены и согласованы планируемые ремонтные работы на причале или судне во время стоянки?",
      "Была ли согласована процедура сообщения и регистрации повреждений от грузовых операций?",
      "Предоставлены ли судну копии портовых и терминальных правил, включая требования по безопасности и загрязнению, а также данные служб экстренной помощи?",
      "Предоставил ли грузоотправитель капитану информацию о свойствах груза в соответствии с требованиями главы VI СОЛАС?",
      "Является ли атмосфера безопасной в трюмах и закрытых помещениях, к которым может потребоваться доступ, были ли идентифицированы фумигированные грузы, и была ли согласована необходимость мониторинга атмосферы между судном и терминалом?",
      "Были ли переданы судну/терминалу возможности по обработке груза и ограничения движения для каждого погрузчика/разгрузчика?",
      "Был ли рассчитан план погрузки/выгрузки для всех этапов погрузки/дебалластировки или выгрузки/балластировки?",
      "Четко ли определены трюмы, с которыми нужно работать, в плане погрузки или выгрузки, с указанием последовательности работ, а также сорта и тоннажа груза, который должен быть перемещен при каждой работе с трюмом?",
      "Обсуждалась ли необходимость тримминга груза в трюмах, и были ли согласованы метод и объем?",
      "Понимают ли и принимают ли и судно, и терминал, что если программа балластировки отстанет от грузовых операций, будет необходимо приостановить грузовые операции до тех пор, пока балластировка не наверстает отставание?",
      "Были ли объяснены судну и приняты им предполагаемые процедуры по удалению остатков груза из трюмов во время выгрузки?",
      "Были ли определены и согласованы процедуры регулировки окончательной дифферентовки грузового судна?",
      "Был ли терминал проинформирован о времени, необходимом судну для подготовки к выходу в море после завершения грузовых работ?"
    ],
    ship: "СУДНО",
    terminal: "ТЕРМИНАЛ",
    checklistTitle: "Вопросы контрольного листа",
    aboveAgreed: "ВЫШЕУКАЗАННОЕ СОГЛАСОВАНО:",
    forShip: "За судно",
    forTerminal: "За терминал",
    rank: "Должность",
    positionTitle: "Должность/Звание",
    shipEmail: "Электронная почта судна",
    shipName: "Имя, фамилия",
    confirmationText: "Заполняя эту форму и нажимая кнопку \"Отправить контрольный лист\", я подтверждаю, что ознакомился со всей вышеуказанной информацией и согласен с ней. После отправки заполненная форма будет отправлена на оба указанных адреса электронной почты.",
    emailInfo: "Электронные письма будут отправлены по адресам:",
    submitButton: "Отправить контрольный лист",
    communicationMethod: "Метод связи",
    languageField: "Язык",
    shipContactPersons: "Контактные лица судна",
    shoreContactPersons: "Контактное лицо(а) берега",
    location: "Местонахождение",
    time: "Время",
    // Contact person translations
    portSafety: "Безопасность порта",
    terminalManager: "Руководитель работ/Стивидор",
    dutyForeman: "Дежурный стивидор"
  }
};

// Text for active language
const texts = translations[language];

// Terminal berth options
const terminalOptions = [
  { value: 'WT-Terminal DG56', depthValue: '6.5m' },
  { value: 'WT-Terminal DG55A', depthValue: '6.4m' },
  { value: 'WT-Terminal DG55', depthValue: '5.7m' },
  { value: 'WT-Terminal DG54', depthValue: '5.0m' }
];

// Initialize checkboxes with pre-checked items for terminal
const initialCheckboxes = Array(21).fill().map((_, index) => {
  // Pre-checked terminal items for questions 1, 2, 3, 4, 5, 6, 7, 10, 11, 14, 18, 19, 20, 21
  // Note: array is 0-indexed, so we subtract 1 from each question number
  const preCheckedTerminalItems = [0, 1, 2, 3, 4, 5, 6, 9, 10, 13, 17, 18, 19, 20];
  return { 
    ship: false, 
    terminal: preCheckedTerminalItems.includes(index)
  };
});

// Create contact text for the current language
const getShoreContactsText = () => {
  return `${texts.portSafety}: Emīls Pavlovs, tel: 26538622, emils.pavlovs@wt-terminal.lv
${texts.terminalManager}: Rolands Liepa, tel: 27856676, rolands.liepa@inbox.lv
${texts.dutyForeman}: 26 357 333`;
};

// Get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const [formData, setFormData] = useState({
  date: getTodayDate(),
  port: 'Port Riga, Latvia',
  isLoading: true,
  isUnloading: false,
  terminalQuay: 'WT-Terminal DG56',
  waterDepth: '6.5m',
  shipsName: '',
  arrivalDraught: '',
  airDraught: '',
  calculatedDepartureDraught: '',
  communicationMethod: 'VHF/Phone',
  language: 'English/Latvian/Russian',
  shipContactPersons: '',
  contactLocation: 'WT-Terminal',
  shipRank: '',
  shipEmail: '',
  shipName: '',
  checkboxes: initialCheckboxes
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  
  // If changing terminal, also update water depth automatically
  if (name === 'terminalQuay') {
    const selectedTerminal = terminalOptions.find(option => option.value === value);
    if (selectedTerminal) {
      setFormData({
        ...formData,
        terminalQuay: value,
        waterDepth: selectedTerminal.depthValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  } else {
    setFormData({
      ...formData,
      [name]: value
    });
  }
};

const handleCheckboxChange = (index, type) => {
  // Skip if trying to change a pre-checked terminal checkbox
  if (type === 'terminal' && formData.checkboxes[index].terminal) {
    return;
  }
  
  const newCheckboxes = [...formData.checkboxes];
  newCheckboxes[index] = {
    ...newCheckboxes[index],
    [type]: !newCheckboxes[index][type]
  };
  setFormData({
    ...formData,
    checkboxes: newCheckboxes
  });
};

const handleLoadingTypeChange = (type) => {
  if (type === 'loading') {
    setFormData({
      ...formData,
      isLoading: true,
      isUnloading: false
    });
  } else {
    setFormData({
      ...formData,
      isLoading: false,
      isUnloading: true
    });
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validate email
  if (!formData.shipEmail || !formData.shipEmail.includes('@')) {
    alert(language === 'lv' 
      ? 'Lūdzu, ievadiet derīgu e-pasta adresi!' 
      : language === 'en' 
        ? 'Please enter a valid email address!' 
        : 'Пожалуйста, введите действительный адрес электронной почты!');
    return;
  }
  
  // Validate name
  if (!formData.shipName) {
    alert(language === 'lv' 
      ? 'Lūdzu, ievadiet vārdu un uzvārdu!' 
      : language === 'en' 
        ? 'Please enter your full name!' 
        : 'Пожалуйста, введите ваше имя и фамилию!');
    return;
  }
  
  console.log('Form submitted:', formData);
  
  // Simulate email sending notification
  alert(language === 'lv' 
    ? `Veidlapa iesniegta! E-pasti nosūtīti uz: rolands.liepa@wt-terminal.lv un ${formData.shipEmail}` 
    : language === 'en' 
      ? `Form submitted! Emails sent to: rolands.liepa@wt-terminal.lv and ${formData.shipEmail}` 
      : `Форма отправлена! Электронные письма отправлены на: rolands.liepa@wt-terminal.lv и ${formData.shipEmail}`);
};

return (
  <div className="mx-auto p-6 max-w-4xl bg-white rounded shadow">
    {/* Header with Logo and Language Selector */}
    <div className="flex justify-between items-center mb-6">
      <div>
        <img 
          src="https://static.wixstatic.com/media/c6655a_139c7a42f007420388e09d1549da3c1d~mv2.png/v1/fill/w_228,h_53,al_c,lg_1,q_85,enc_avif,quality_auto/c6655a_139c7a42f007420388e09d1549da3c1d~mv2.png" 
          alt="Company Logo" 
          className="h-12 w-auto"
        />
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => setLanguage('en')} 
          className={`px-3 py-1 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLanguage('lv')} 
          className={`px-3 py-1 rounded ${language === 'lv' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          LV
        </button>
        <button 
          onClick={() => setLanguage('ru')} 
          className={`px-3 py-1 rounded ${language === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          RU
        </button>
      </div>
    </div>
    
    <h1 className="text-2xl font-bold mb-6 text-center">{texts.title}</h1>
    <h2 className="text-xl mb-4 text-center">{texts.subtitle}</h2>
    
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.date}</label>
          <input 
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.port}</label>
          <input 
            type="text" 
            name="port"
            value={formData.port}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            readOnly
          />
        </div>
      </div>
      
      <div className="flex space-x-6">
        <div className="flex items-center">
          <input 
            type="radio" 
            id="loading"
            name="operationType"
            checked={formData.isLoading}
            onChange={() => handleLoadingTypeChange('loading')}
            className="h-4 w-4"
          />
          <label htmlFor="loading" className="ml-2">{texts.loading}</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="radio" 
            id="unloading"
            name="operationType"
            checked={formData.isUnloading}
            onChange={() => handleLoadingTypeChange('unloading')}
            className="h-4 w-4"
          />
          <label htmlFor="unloading" className="ml-2">{texts.unloading}</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">{texts.terminalQuay}</label>
        <select 
          name="terminalQuay"
          value={formData.terminalQuay}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
        >
          {terminalOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.waterDepth}</label>
          <input 
            type="text" 
            name="waterDepth"
            value={formData.waterDepth}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            readOnly
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.shipsName}</label>
          <input 
            type="text" 
            name="shipsName"
            value={formData.shipsName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.communicationMethod}</label>
          <input 
            type="text" 
            name="communicationMethod"
            value={formData.communicationMethod}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.languageField}</label>
          <input 
            type="text" 
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.shipContactPersons}</label>
          <input 
            type="text" 
            name="shipContactPersons"
            value={formData.shipContactPersons}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">{texts.shoreContactPersons}</label>
          <textarea 
            name="shoreContactPersons"
            value={getShoreContactsText()}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
            rows="4"
            readOnly
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">{texts.location}</label>
        <input 
          type="text" 
          name="contactLocation"
          value={formData.contactLocation}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <h3 className="text-lg font-medium pt-4">{texts.checklistTitle}</h3>
      
      <div className="space-y-4">
        {texts.checklistItems.map((item, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="flex justify-between items-start">
              <div className="flex-grow">
                <p className="font-medium">{index + 1}. {item}</p>
              </div>
              <div className="flex space-x-4 ml-4">
                <div className="flex flex-col items-center">
                  <span className="text-sm">{texts.ship}</span>
                  <input 
                    type="checkbox"
                    checked={formData.checkboxes[index]?.ship || false}
                    onChange={() => handleCheckboxChange(index, 'ship')}
                    className="h-5 w-5 mt-1"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm">{texts.terminal}</span>
                  <input 
                    type="checkbox"
                    checked={formData.checkboxes[index]?.terminal || false}
                    onChange={() => handleCheckboxChange(index, 'terminal')}
                    className={`h-5 w-5 mt-1 ${formData.checkboxes[index]?.terminal ? 'bg-gray-100' : ''}`}
                    readOnly={formData.checkboxes[index]?.terminal}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <h3 className="text-lg font-medium">{texts.aboveAgreed}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-medium">{texts.forShip}</p>
            <div>
              <label className="block text-sm text-gray-700 mt-2">{texts.rank}</label>
              <input 
                type="text" 
                name="shipRank"
                value={formData.shipRank}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded" 
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mt-2">{texts.shipName}</label>
              <input 
                type="text" 
                name="shipName"
                value={formData.shipName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded" 
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mt-2">{texts.shipEmail}</label>
              <input 
                type="email" 
                name="shipEmail"
                value={formData.shipEmail}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded" 
              />
            </div>
          </div>
          
          <div>
            <p className="font-medium">{texts.forTerminal}</p>
            <div>
              <label className="block text-sm text-gray-700 mt-2">{texts.positionTitle}</label>
              <input 
                type="text" 
                value="Darba vadītājs/Terminal Manager Rolands Liepa" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
                readOnly
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm text-gray-700">{texts.date}</label>
            <input 
              type="date" 
              value={getTodayDate()} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              readOnly 
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-700">{texts.time}</label>
            <input 
              type="time" 
              value={getCurrentTime()} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              readOnly 
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 border rounded">
        <p className="mb-4">{texts.confirmationText}</p>
        <p className="font-medium">{texts.emailInfo}</p>
        <ul className="list-disc ml-5 mt-2">
          <li>rolands.liepa@wt-terminal.lv ({texts.terminalManager})</li>
          <li>{formData.shipEmail} ({formData.shipName})</li>
        </ul>
      </div>
      
      <div className="pt-6">
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded">
          {texts.submitButton}
        </button>
      </div>
    </form>
  </div>
);
};

export default ShipShoreChecklist;