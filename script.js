/*
  New Logistic Solutions website script
  Handles multilingual support, updating text content and placeholders based on the selected language.
  Default language is English (en). Users can switch between English (en), Russian (ru), Kazakh (kz) and Chinese (zh)
  by clicking the corresponding language button in the header.
*/

// Translation dictionary
const translations = {
  en: {
    navServices: 'Services',
    navAbout: 'About',
    navWhy: 'Why Us',
    navFacts: 'Facts',
    navContact: 'Contact',
    heroTitle: 'Reliable logistics partner',
    heroSubtitle: 'Rail & multimodal solutions for your business',
    heroCTA: 'Request a quote',
    statYearsNumber: '3+',
    statYearsLabel: 'Years on the market',
    statContainersNumber: '1800+',
    statContainersLabel: 'Containers per month',
    statRoutesNumber: '100+',
    statRoutesLabel: 'Railway routes',
    statOnTimeNumber: '98%',
    statOnTimeLabel: 'On‑time shipments',
    servicesTitle: 'Our Services',
    serviceRailTitle: 'Rail Transportation',
    serviceRailDesc: 'Domestic and international rail freight across Kazakhstan, CIS, China and Europe.',
    serviceContainerTitle: 'Container & Multimodal',
    serviceContainerDesc: 'Flexible container and multimodal solutions integrating rail, road and sea transport.',
    serviceWagonTitle: 'Wagons & Platforms',
    serviceWagonDesc: 'Provision of flatcars and rail wagons for your cargo needs.',
    serviceCustomsTitle: 'Customs & Terminals',
    serviceCustomsDesc: 'Customs clearance and terminal handling to simplify border crossings.',
    serviceConsultingTitle: 'Consulting & Outsourcing',
    serviceConsultingDesc: 'Expert advice and outsourced logistics management to optimise your supply chain.',

    // Detailed service points for the Services section
    serviceRailPoint1: 'Domestic and international freight across Kazakhstan, CIS, China and Europe',
    serviceRailPoint2: 'Stable schedules & competitive rates',
    serviceRailPoint3: 'Safe and reliable deliveries',
    serviceContainerPoint1: 'Flexible container & multimodal logistics integrating rail, road & sea',
    serviceContainerPoint2: 'Door-to-door solutions from origin to destination',
    serviceContainerPoint3: 'Secure handling & real-time monitoring',
    serviceWagonPoint1: 'Provision of flatcars and rail wagons for diverse cargo',
    serviceWagonPoint2: 'Own & leased fleets with regular maintenance',
    serviceWagonPoint3: 'Tracking & maintenance support throughout transit',
    serviceCustomsPoint1: 'Customs clearance & brokerage services',
    serviceCustomsPoint2: 'Terminal handling & cargo storage',
    serviceCustomsPoint3: 'Efficient assistance for seamless border crossing',
    serviceConsultingPoint1: 'Logistics consulting & network optimization',
    serviceConsultingPoint2: 'Full logistics outsourcing & management',
    serviceConsultingPoint3: 'Route analysis & cost reduction strategies',
    aboutTitle: 'About Us',
    aboutParagraph1: 'We help companies reduce costs and accelerate deliveries through intelligent route planning, efficient use of rolling stock and transparent control at every stage of transportation.',
    aboutParagraph2: 'Our mission is to make your logistics predictable, flexible and profitable. We consider ourselves your strategic partner and develop new directions with you, entering new markets and building logistics that work for the growth of your business.',
    advantagesTitle: 'Why Choose Us',
    advCorridors: 'International transport corridors',
    advContainers: 'Containers per month',
    advRates: 'Rates & personal manager',
    advClient: 'We think like your logistics department',
    factsTitle: 'Facts & Figures',
    factHubs: 'Partner hubs in China, CIS & Europe',
    factWagons: 'Own & leased wagons',
    factTariffs: 'Agreed tariffs with key stations',
    factPartners: 'Permanent partners in China',
    factDelivery: 'Average delivery from China border to Kazakhstan',
    factLanguages: 'Service languages (KZ, RU, EN, ZH, TR)',
    ceoTitle: 'Director General',
    ceoBio1: 'Founder and CEO of New Logistic Solutions with more than 17 years of experience in transport logistics, multimodal transportation and international railway routes.',
    ceoBio2: 'Thanks to his strategic thinking, discipline and deep expertise, the company has become a reliable operator working on key transit routes between China, the CIS countries and Europe.',
    ceoAchievementsTitle: 'Key achievements:',
    ceoAchievement1: 'Launched over 100 international routes across the railway corridors of Kazakhstan, Russia and China.',
    ceoAchievement2: 'Achieved four‑fold turnover growth in the last 3 years.',
    ceoAchievement3: 'Built a sustainable partner network in China, Russia, Kazakhstan and Uzbekistan.',
    ceoAchievement4: 'Implemented digital solutions for real‑time control of logistics operations.',
    contactTitle: 'Contact Us',
    contactPhoneLabel: 'Phone:',
    contactEmailLabel: 'Email:',
    contactAddressLabel: 'Address:',
    contactNamePlaceholder: 'Name',
    contactEmailPlaceholder: 'Email',
    contactMessagePlaceholder: 'Message',
    contactSubmit: 'Send Message',
    footerRights: 'All rights reserved.'
  },
  ru: {
    navServices: 'Услуги',
    navAbout: 'О компании',
    navWhy: 'Почему мы',
    navFacts: 'Факты',
    navContact: 'Контакты',
    heroTitle: 'Надежный партнёр в железнодорожной и мультимодальной логистике',
    heroSubtitle: 'Железнодорожные и мультимодальные решения для вашего бизнеса',
    heroCTA: 'Оставить заявку',
    statYearsNumber: '3+',
    statYearsLabel: 'Года на рынке',
    statContainersNumber: '1800+',
    statContainersLabel: 'Контейнеров в месяц',
    statRoutesNumber: '100+',
    statRoutesLabel: 'Маршрутов',
    statOnTimeNumber: '98%',
    statOnTimeLabel: 'Отправок без задержек',
    servicesTitle: 'Наши услуги',
    serviceRailTitle: 'Железнодорожные перевозки',
    serviceRailDesc: 'Железнодорожные перевозки по Казахстану, странам СНГ, Китаю и Европе.',
    serviceContainerTitle: 'Контейнерные и мультимодальные перевозки',
    serviceContainerDesc: 'Гибкие решения для контейнерных и мультимодальных перевозок, интегрирующие железнодорожный, автомобильный и морской транспорт.',
    serviceWagonTitle: 'Вагоны и фитинговые платформы',
    serviceWagonDesc: 'Предоставление вагонов и фитинговых платформ для ваших грузов.',
    serviceCustomsTitle: 'Таможня и терминалы',
    serviceCustomsDesc: 'Таможенное оформление и терминальные услуги для упрощения пересечения границ.',
    serviceConsultingTitle: 'Консалтинг и аутсорсинг',
    serviceConsultingDesc: 'Профессиональные консультации и аутсорсинг логистики для оптимизации вашей цепи поставок.',

    // Подробные пункты для раздела услуг
    serviceRailPoint1: 'Внутренние и международные перевозки по Казахстану, СНГ, Китаю и Европе',
    serviceRailPoint2: 'Стабильные графики и конкурентные тарифы',
    serviceRailPoint3: 'Безопасная и надёжная доставка',
    serviceContainerPoint1: 'Гибкая контейнерная и мультимодальная логистика (железная дорога, авто, море)',
    serviceContainerPoint2: 'Решения «от двери до двери» от отправителя до получателя',
    serviceContainerPoint3: 'Безопасное обращение и мониторинг в реальном времени',
    serviceWagonPoint1: 'Предоставление фитинговых платформ и вагонов для различных грузов',
    serviceWagonPoint2: 'Собственный и арендованный парк с регулярным обслуживанием',
    serviceWagonPoint3: 'Поддержка отслеживания и обслуживания на всём пути',
    serviceCustomsPoint1: 'Таможенное оформление и брокерские услуги',
    serviceCustomsPoint2: 'Терминальная обработка и хранение грузов',
    serviceCustomsPoint3: 'Эффективная помощь для беспрепятственного пересечения границы',
    serviceConsultingPoint1: 'Логистический консалтинг и оптимизация сети',
    serviceConsultingPoint2: 'Полный аутсорсинг и управление логистикой',
    serviceConsultingPoint3: 'Анализ маршрутов и стратегии сокращения затрат',
    aboutTitle: 'О компании',
    aboutParagraph1: 'Мы помогаем компаниям сокращать издержки и ускорять поставки за счёт грамотного построения маршрутов, эффективного использования подвижного состава и прозрачного контроля на всех этапах перевозки.',
    aboutParagraph2: 'Наша миссия — сделать вашу логистику предсказуемой, гибкой и прибыльной. Мы считаем себя вашим стратегическим партнёром и вместе с вами развиваем новые направления, выходим на новые рынки и строим логистику, которая работает на рост вашего бизнеса.',
    advantagesTitle: 'Почему выбирают нас',
    advCorridors: 'Международных транспортных коридоров',
    advContainers: 'Контейнеров в месяц',
    advRates: 'Прозрачные тарифы и личный менеджер',
    advClient: 'Мы думаем как ваш логистический отдел',
    factsTitle: 'Цифры и факты',
    factHubs: 'Партнёрских хабов в Китае, СНГ и Европе',
    factWagons: 'Собственных и арендованных вагонов',
    factTariffs: 'Согласованных тарифов с ключевыми станциями',
    factPartners: 'Постоянных партнёров в Китае',
    factDelivery: 'Средний срок доставки от границы Китая до Казахстана',
    factLanguages: 'Языков обслуживания (КЗ, РУ, EN, ZH, TR)',
    ceoTitle: 'Генеральный директор',
    ceoBio1: 'Основатель и генеральный директор компании New Logistic Solutions с более чем 17‑летним опытом работы в транспортной логистике, мультимодальных перевозках и международных железнодорожных маршрутах.',
    ceoBio2: 'Благодаря его стратегическому мышлению, дисциплине и глубокой экспертизе компания стала надёжным оператором, работающим на ключевых транзитных маршрутах между Китаем, странами СНГ и Европой.',
    ceoAchievementsTitle: 'Ключевые достижения:',
    ceoAchievement1: 'Запустил более 100 международных маршрутов по железнодорожным коридорам Казахстана, России и Китая.',
    ceoAchievement2: 'Обеспечил четырёхкратный рост оборота за последние 3 года.',
    ceoAchievement3: 'Построил устойчивую партнёрскую сеть в Китае, России, Казахстане и Узбекистане.',
    ceoAchievement4: 'Внедрил цифровые решения для контроля логистических операций в режиме реального времени.',
    contactTitle: 'Свяжитесь с нами',
    contactPhoneLabel: 'Телефон:',
    contactEmailLabel: 'Эл. почта:',
    contactAddressLabel: 'Адрес:',
    contactNamePlaceholder: 'Ваше имя',
    contactEmailPlaceholder: 'Ваш email',
    contactMessagePlaceholder: 'Сообщение',
    contactSubmit: 'Отправить',
    footerRights: 'Все права защищены.'
  },
  kz: {
    navServices: 'Қызметтер',
    navAbout: 'Компания туралы',
    navWhy: 'Неліктен біз',
    navFacts: 'Фактілер',
    navContact: 'Байланыс',
    heroTitle: 'Теміржол және мультимодальды логистикадағы сенімді серіктес',
    heroSubtitle: 'Сіздің бизнесіңіз үшін теміржол және мультимодальды шешімдер',
    heroCTA: 'Сұрау жіберу',
    statYearsNumber: '3+',
    statYearsLabel: 'Жыл нарықта',
    statContainersNumber: '1800+',
    statContainersLabel: 'Айына контейнер',
    statRoutesNumber: '100+',
    statRoutesLabel: 'Маршрут',
    statOnTimeNumber: '98%',
    statOnTimeLabel: 'Уақытында жөнелту',
    servicesTitle: 'Біздің қызметтер',
    serviceRailTitle: 'Теміржол тасымалы',
    serviceRailDesc: 'Қазақстан, ТМД елдері, Қытай және Еуропада теміржол тасымалы.',
    serviceContainerTitle: 'Контейнерлік және мультимодальды тасымал',
    serviceContainerDesc: 'Теміржол, автомобиль және теңіз тасымалдарын біріктіретін икемді контейнерлік және мультимодальды шешімдер.',
    serviceWagonTitle: 'Вагондар және платформалар',
    serviceWagonDesc: 'Жүктеріңізге вагондар мен платформаларды ұсыну.',
    serviceCustomsTitle: 'Кеден және терминалдар',
    serviceCustomsDesc: 'Шекарадан өтуіңізді жеңілдету үшін кедендік рәсімдеу және терминалдық қызметтер.',
    serviceConsultingTitle: 'Консалтинг және аутсорсинг',
    serviceConsultingDesc: 'Жеткізілім тізбегін оңтайландыру үшін сараптамалық кеңес пен аутсорсинг логистикасы.',

    // Қызметтер бөліміне арналған егжей‑тегжейлі тармақтар
    serviceRailPoint1: 'Қазақстан, ТМД, Қытай және Еуропа бойынша ішкі және халықаралық тасымалдар',
    serviceRailPoint2: 'Тұрақты кестелер және бәсекеге қабілетті тарифтер',
    serviceRailPoint3: 'Қауіпсіз және сенімді жеткізу',
    serviceContainerPoint1: 'Теміржол, автомобиль және теңізді біріктіретін икемді контейнер және мультимодальды логистика',
    serviceContainerPoint2: 'Жөнелтушіден алушыға дейінгі «есіктен есікке» шешімдер',
    serviceContainerPoint3: 'Қауіпсіз өңдеу және нақты уақытта мониторинг',
    serviceWagonPoint1: 'Әртүрлі жүкке фитингтік платформалар мен вагондар ұсыну',
    serviceWagonPoint2: 'Тұрақты күтімі бар өз және жалға алынған парк',
    serviceWagonPoint3: 'Сапар бойы бақылау және қызмет көрсету қолдауы',
    serviceCustomsPoint1: 'Кедендік рәсімдеу және брокерлік қызметтер',
    serviceCustomsPoint2: 'Терминалдық өңдеу және жүктеуді сақтау',
    serviceCustomsPoint3: 'Шекараны оңай кесіп өтуге тиімді көмек',
    serviceConsultingPoint1: 'Логистикалық консалтинг және желіні оңтайландыру',
    serviceConsultingPoint2: 'Логистиканы толық аутсорсинг және басқару',
    serviceConsultingPoint3: 'Маршруттарды талдау және шығындарды азайту стратегиялары',
    aboutTitle: 'Компания туралы',
    aboutParagraph1: 'Біз компанияларға маршрутты сауатты жоспарлау, жылжымалы құрамды тиімді пайдалану және тасымалдаудың барлық кезеңдерінде айқын бақылау арқылы шығындарды азайтып, жеткізу уақытын қысқартуға көмектесеміз.',
    aboutParagraph2: 'Біздің міндетіміз – сіздің логистикаңызды болжамды, икемді және табысты ету. Біз өзімізді сіздің стратегиялық серіктесіңіз деп санаймыз және сізбен бірге жаңа бағыттар дамытып, жаңа нарықтарға шығып, бизнесіңіздің өсуіне жұмыс істейтін логистиканы құрамыз.',
    advantagesTitle: 'Неліктен бізді таңдайды',
    advCorridors: 'Халықаралық көлік дәліздері',
    advContainers: 'Айына контейнер',
    advRates: 'Мөлдір тарифтер және жеке менеджер',
    advClient: 'Біз сіздің логистика бөліміңіз сияқты ойлаймыз',
    factsTitle: 'Фактілер мен сандар',
    factHubs: 'Қытай, ТМД және Еуропадағы серіктес хабтар',
    factWagons: 'Өз және жалға алынған вагондар',
    factTariffs: 'Негізгі станциялармен келісілген тарифтер',
    factPartners: 'Қытайдағы тұрақты серіктестер',
    factDelivery: 'Қытай шекарасынан Қазақстанға жеткізудің орташа уақыты',
    factLanguages: 'Қызмет көрсету тілдері (ҚЗ, РУ, EN, ZH, TR)',
    ceoTitle: 'Бас директор',
    ceoBio1: 'New Logistic Solutions компаниясының негізін қалаушы және бас директоры, көлік логистикасы, мультимодальдық тасымалдау және халықаралық теміржол маршруттары саласында 17 жылдан астам тәжірибесі бар.',
    ceoBio2: 'Оның стратегиялық ойлауы, тәртібі және терең тәжірибесінің арқасында компания Қытай, ТМД елдері және Еуропа арасындағы негізгі транзиттік бағыттар бойынша жұмыс істейтін сенімді операторға айналды.',
    ceoAchievementsTitle: 'Негізгі жетістіктер:',
    ceoAchievement1: 'Қазақстан, Ресей және Қытайдың теміржол дәліздері арқылы 100‑ден астам халықаралық бағыттарды іске қосты.',
    ceoAchievement2: 'Соңғы 3 жылда компания айналымын төрт есеге ұлғайтты.',
    ceoAchievement3: 'Қытай, Ресей, Қазақстан және Өзбекстанда тұрақты серіктестік желісін құрды.',
    ceoAchievement4: 'Логистикалық операцияларды нақты уақытта бақылау үшін цифрлық шешімдерді енгізді.',
    contactTitle: 'Байланыс',
    contactPhoneLabel: 'Телефон:',
    contactEmailLabel: 'Электрондық пошта:',
    contactAddressLabel: 'Мекенжай:',
    contactNamePlaceholder: 'Атыңыз',
    contactEmailPlaceholder: 'Электрондық поштаңыз',
    contactMessagePlaceholder: 'Хабарлама',
    contactSubmit: 'Жіберу',
    footerRights: 'Барлық құқықтар қорғалған.'
  },
  zh: {
    navServices: '服务',
    navAbout: '关于公司',
    navWhy: '为什么选择我们',
    navFacts: '数据',
    navContact: '联系方式',
    heroTitle: '铁路和多式联运物流的可靠伙伴',
    heroSubtitle: '为您的业务提供铁路与多式联运解决方案',
    heroCTA: '索取报价',
    statYearsNumber: '3+',
    statYearsLabel: '年市场经验',
    statContainersNumber: '1800+',
    statContainersLabel: '每月集装箱',
    statRoutesNumber: '100+',
    statRoutesLabel: '铁路线路',
    statOnTimeNumber: '98%',
    statOnTimeLabel: '准时发运',
    servicesTitle: '我们的服务',
    serviceRailTitle: '铁路运输',
    serviceRailDesc: '在哈萨克斯坦、独联体、中国和欧洲提供国内及国际铁路货运。',
    serviceContainerTitle: '集装箱及多式联运',
    serviceContainerDesc: '结合铁路、公路和海运的灵活集装箱与多式联运解决方案。',
    serviceWagonTitle: '车厢和平台',
    serviceWagonDesc: '为您的货物提供平车和铁路车厢。',
    serviceCustomsTitle: '报关及码头',
    serviceCustomsDesc: '报关和码头操作，简化跨境流程。',
    serviceConsultingTitle: '咨询与外包',
    serviceConsultingDesc: '提供专业建议并外包物流管理，优化您的供应链。',

    // 服务部分的详细条目
    serviceRailPoint1: '覆盖哈萨克斯坦、独联体、中国及欧洲的国内和国际铁路运输',
    serviceRailPoint2: '稳定的班列时刻表和有竞争力的费率',
    serviceRailPoint3: '安全可靠的货物交付',
    serviceContainerPoint1: '融合铁路、公路和海运的灵活集装箱及多式联运物流',
    serviceContainerPoint2: '从起点到终点的门到门解决方案',
    serviceContainerPoint3: '安全操作和实时监控',
    serviceWagonPoint1: '为各种货物提供平车和铁路车厢',
    serviceWagonPoint2: '自有和租赁车队并进行定期维护',
    serviceWagonPoint3: '全过程的跟踪和维护支持',
    serviceCustomsPoint1: '报关和报关代理服务',
    serviceCustomsPoint2: '码头操作和货物存储',
    serviceCustomsPoint3: '高效协助顺畅通关',
    serviceConsultingPoint1: '物流咨询和网络优化',
    serviceConsultingPoint2: '全面物流外包和管理',
    serviceConsultingPoint3: '路线分析和成本降低策略',
    aboutTitle: '关于我们',
    aboutParagraph1: '我们通过智能路线规划、高效利用车皮以及在运输的每个阶段透明控制，帮助企业降低成本并加快交付。',
    aboutParagraph2: '我们的使命是让您的物流可预测、灵活并有利可图。我们视自己为您的战略伙伴，与您一起开拓新方向，进入新市场，构建助力业务增长的物流。',
    advantagesTitle: '为什么选择我们',
    advCorridors: '国际运输通道',
    advContainers: '每月集装箱',
    advRates: '透明费率和专属经理',
    advClient: '像您的物流部门一样思考',
    factsTitle: '数据与事实',
    factHubs: '在中国、独联体和欧洲的合作枢纽',
    factWagons: '自有及租赁车厢',
    factTariffs: '与关键车站达成的费率',
    factPartners: '在中国的长期合作伙伴',
    factDelivery: '从中国边境到哈萨克斯坦平均运输时间',
    factLanguages: '服务语言（KZ, RU, EN, ZH, TR）',
    ceoTitle: '总经理',
    ceoBio1: 'New Logistic Solutions 的创始人兼首席执行官，在运输物流、多式联运和国际铁路线路方面拥有超过 17 年经验。',
    ceoBio2: '凭借他的战略思维、严谨和深厚专业知识，公司已成为在中国、独联体国家和欧洲关键过境路线运营的可靠承运人。',
    ceoAchievementsTitle: '主要成就：',
    ceoAchievement1: '在哈萨克斯坦、俄罗斯和中国的铁路走廊上开通了100多个国际线路。',
    ceoAchievement2: '在过去三年实现了公司营业额四倍增长。',
    ceoAchievement3: '建立了覆盖中国、俄罗斯、哈萨克斯坦和乌兹别克斯坦的稳定合作伙伴网络。',
    ceoAchievement4: '实施数字化解决方案，实现物流操作实时监控。',
    contactTitle: '联系我们',
    contactPhoneLabel: '电话:',
    contactEmailLabel: '邮箱:',
    contactAddressLabel: '地址:',
    contactNamePlaceholder: '姓名',
    contactEmailPlaceholder: '邮箱',
    contactMessagePlaceholder: '留言',
    contactSubmit: '发送',
    footerRights: '版权所有。'
  }
};

// Save currently selected language, default to English
let currentLang = 'en';

// Intersection observers for animations and number counting
let animatedObserver;
let numberObserver;

/**
 * Prepare numeric elements for count-up animation. Extract the numeric portion
 * of the text and store it along with any suffix on data attributes so that
 * animateValue can restore the suffix after counting. Elements without a
 * numeric portion are ignored. After preparation, each element is observed
 * by the numberObserver to trigger the animation when it enters the viewport.
 */
function prepareNumberData() {
  // Query for all elements that should be counted up: stats, facts and advantage counts
  const numberElems = document.querySelectorAll('.stat-number, .facts-grid .fact-item h3, .advantages-grid .adv-item h3');
  numberElems.forEach(el => {
    const text = el.textContent.trim();
    // Find a contiguous numeric part (digits, commas or dots)
    const match = text.match(/[0-9]+(?:[\d,]*)(?:\.[0-9]+)?/);
    if (match) {
      const numericPart = match[0];
      const value = parseFloat(numericPart.replace(/,/g, ''));
      const suffix = text.replace(numericPart, '');
      el.dataset.target = value;
      el.dataset.suffix = suffix;
      el.dataset.counted = 'false';
      // Reset displayed value to 0 while keeping suffix hidden until animation triggers
      // Do not set here to avoid visible flash before the observer triggers
      if (numberObserver) {
        numberObserver.observe(el);
      }
    }
  });
}

/**
 * Animate a number from a start value to an end value over a specified duration.
 * This function updates the element's textContent on each frame and appends
 * the provided suffix after counting completes.
 *
 * @param {HTMLElement} el The element to animate
 * @param {number} start The starting number (usually 0)
 * @param {number} end The final value to reach
 * @param {number} duration The duration of the animation in milliseconds
 * @param {string} suffix A suffix to append once the end value is reached
 */
function animateValue(el, start, end, duration, suffix) {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + (end - start) * progress);
    el.textContent = value + (progress === 1 ? suffix : '');
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

/**
 * Initialise the intersection observer for number elements. When a number
 * element becomes visible in the viewport, it triggers a count-up animation
 * from 0 to the element's data-target value. After animation, the element
 * is marked as counted to prevent repeat animations.
 */
function initNumberObserver() {
  if (numberObserver) return; // prevent reinitialisation
  numberObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el.dataset.counted === 'false') {
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          animateValue(el, 0, target, 2000, suffix);
          el.dataset.counted = 'true';
        }
        numberObserver.unobserve(el);
      }
    });
  }, { threshold: 0.6 });
}

/**
 * Set up intersection observer for all elements with the .animated class.
 * When an animated element enters the viewport, the 'visible' class is added
 * which triggers CSS transitions defined in style.css. Elements are
 * unobserved after they become visible to improve performance.
 */
function setupAnimations() {
  if (!animatedObserver) {
    animatedObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animatedObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  }
  document.querySelectorAll('.animated').forEach(el => {
    animatedObserver.observe(el);
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  // update nav links and other text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
  // update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = translations[lang][key];
    if (translation) {
      el.placeholder = translation;
    }
  });
  // update hero fields (IDs)
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroCTA = document.getElementById('heroCTA');
  if (heroTitle) heroTitle.textContent = translations[lang]['heroTitle'];
  if (heroSubtitle) heroSubtitle.textContent = translations[lang]['heroSubtitle'];
  if (heroCTA) heroCTA.textContent = translations[lang]['heroCTA'];
  // update submit button text if not included in data-i18n
  const contactSubmit = document.getElementById('contactSubmit');
  if (contactSubmit) contactSubmit.textContent = translations[lang]['contactSubmit'];
  // highlight active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  // update HTML language attribute for accessibility
  document.documentElement.setAttribute('lang', lang);

  // After updating all translatable text, refresh number data and observers
  // so that count-up animations run correctly for the new language.
  prepareNumberData();
  initNumberObserver();
}

// Initialize translations and attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  // set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  // attach click handlers for language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
  // initialise with default language
  setLanguage(currentLang);
  // Prepare numeric data and observers once the DOM is ready
  prepareNumberData();
  initNumberObserver();
  // Set up fade/slide animations on scroll
  setupAnimations();
});