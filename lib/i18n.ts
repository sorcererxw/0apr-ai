export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'es' | 'de' | 'ru' | 'it' | 'pt' | 'ar' | 'hi' | 'tr' | 'vi' | 'id' | 'th' | 'pl' | 'he' | 'ms' | 'uk' | 'ro' | 'hu' | 'el';

export const translations = {
  zh: {
    notFound: "页面未找到",
    notFoundDesc: "抱歉，您访问的页面不存在。",
    backHome: "返回首页",
    title: '免息分期值多少钱',
    description: '帮助您计算分期付款可能带来的投资收益，请理性消费，量力而行',
    formula: '收益 = Σ(月供 × (1 + r)^i - 月供)',
    totalPrice: '商品总价',
    totalPricePlaceholder: '请输入商品总价',
    months: '分期月数',
    monthsPlaceholder: '请输入分期月数',
    annualReturn: '年化收益率（%）',
    annualReturnPlaceholder: '请输入年化收益率',
    expectedReturn: '预计收益',
    footer: 'created by sorcererxw'
  },
  en: {
    notFound: "Page Not Found",
    notFoundDesc: "Sorry, the page you are looking for does not exist.",
    backHome: "Back to Home",
    title: 'How Much is Interest-Free Installment Worth',
    description: 'Calculate potential investment returns from installment payments. Please consume responsibly.',
    formula: 'Return = Σ(Monthly Payment × (1 + r)^i - Monthly Payment)',
    totalPrice: 'Total Price',
    totalPricePlaceholder: 'Enter total price',
    months: 'Number of Installments',
    monthsPlaceholder: 'Enter number of months',
    annualReturn: 'Annual Return Rate (%)',
    annualReturnPlaceholder: 'Enter annual return rate',
    expectedReturn: 'Expected Return',
    footer: 'created by sorcererxw'
  },
  ja: {
    notFound: "ページが見つかりません",
    notFoundDesc: "申し訳ありませんが、お探しのページは存在しません。",
    backHome: "ホームに戻る",
    title: '無利子分割払いの価値はいくら',
    description: '分割払いによる投資収益を計算します。計画的な消費をお願いします。',
    formula: '収益 = Σ(月払い × (1 + r)^i - 月払い)',
    totalPrice: '商品価格',
    totalPricePlaceholder: '商品価格を入力',
    months: '分割回数',
    monthsPlaceholder: '分割回数を入力',
    annualReturn: '年間収益率（%）',
    annualReturnPlaceholder: '年間収益率を入力',
    expectedReturn: '予想収益',
    footer: 'created by sorcererxw'
  },
  ko: {
    notFound: "페이지를 찾을 수 없습니다",
    notFoundDesc: "죄송합니다. 요청하신 페이지를 찾을 수 없습니다.",
    backHome: "홈으로 돌아가기",
    title: '무이자 할부는 얼마의 가치가 있나',
    description: '할부 결제로 인한 투자 수익을 계산합니다. 합리적인 소비를 부탁드립니다.',
    formula: '수익 = Σ(월 납입금 × (1 + r)^i - 월 납입금)',
    totalPrice: '상품 가격',
    totalPricePlaceholder: '상품 가격 입력',
    months: '할부 개월 수',
    monthsPlaceholder: '할부 개월 수 입력',
    annualReturn: '연간 수익률 (%)',
    annualReturnPlaceholder: '연간 수익률 입력',
    expectedReturn: '예상 수익',
    footer: 'created by sorcererxw'
  },
  fr: {
    notFound: "Page Non Trouvée",
    notFoundDesc: "Désolé, la page que vous recherchez n'existe pas.",
    backHome: "Retour à l'Accueil",
    title: 'Quelle est la Valeur du Paiement Échelonné Sans Intérêt',
    description: 'Calculez les rendements potentiels des paiements échelonnés. Veuillez consommer de manière responsable.',
    formula: 'Rendement = Σ(Mensualité × (1 + r)^i - Mensualité)',
    totalPrice: 'Prix Total',
    totalPricePlaceholder: 'Entrez le prix total',
    months: 'Nombre de Mensualités',
    monthsPlaceholder: 'Entrez le nombre de mois',
    annualReturn: 'Taux de Rendement Annuel (%)',
    annualReturnPlaceholder: 'Entrez le taux de rendement annuel',
    expectedReturn: 'Rendement Attendu',
    footer: 'created by sorcererxw'
  },
  es: {
    notFound: "Página No Encontrada",
    notFoundDesc: "Lo sentimos, la página que busca no existe.",
    backHome: "Volver al Inicio",
    title: '¿Cuánto Vale el Pago a Plazos Sin Intereses?',
    description: 'Calcule los retornos potenciales de los pagos a plazos. Por favor, consuma responsablemente.',
    formula: 'Retorno = Σ(Pago Mensual × (1 + r)^i - Pago Mensual)',
    totalPrice: 'Precio Total',
    totalPricePlaceholder: 'Ingrese el precio total',
    months: 'Número de Plazos',
    monthsPlaceholder: 'Ingrese el número de meses',
    annualReturn: 'Tasa de Retorno Anual (%)',
    annualReturnPlaceholder: 'Ingrese la tasa de retorno anual',
    expectedReturn: 'Retorno Esperado',
    footer: 'created by sorcererxw'
  },
  de: {
    title: 'Wie Viel ist die Zinsfreie Ratenzahlung Wert',
    description: 'Berechnen Sie potenzielle Anlagerenditen aus Ratenzahlungen. Bitte konsumieren Sie verantwortungsvoll.',
    formula: 'Rendite = Σ(Monatliche Rate × (1 + r)^i - Monatliche Rate)',
    totalPrice: 'Gesamtpreis',
    totalPricePlaceholder: 'Gesamtpreis eingeben',
    months: 'Anzahl der Raten',
    monthsPlaceholder: 'Anzahl der Monate eingeben',
    annualReturn: 'Jährliche Rendite (%)',
    annualReturnPlaceholder: 'Jährliche Rendite eingeben',
    expectedReturn: 'Erwartete Rendite',
    footer: 'created by sorcererxw',
    notFound: 'Seite nicht gefunden',
    notFoundDesc: 'Die gesuchte Seite konnte nicht gefunden werden.',
    backHome: 'Zurück zur Startseite'
  },
  ru: {
    notFound: "Страница не найдена",
    notFoundDesc: "Извините, запрашиваемая страница не существует.",
    backHome: "Вернуться на главную",
    title: 'Сколько Стоит Беспроцентная Рассрочка',
    description: 'Рассчитайте потенциальный инвестиционный доход от платежей в рассрочку. Пожалуйста, потребляйте ответственно.',
    formula: 'Доход = Σ(Ежемесячный платеж × (1 + r)^i - Ежемесячный платеж)',
    totalPrice: 'Общая цена',
    totalPricePlaceholder: 'Введите общую цену',
    months: 'Количество платежей',
    monthsPlaceholder: 'Введите количество месяцев',
    annualReturn: 'Годовая доходность (%)',
    annualReturnPlaceholder: 'Введите годовую доходность',
    expectedReturn: 'Ожидаемый доход',
    footer: 'created by sorcererxw',
  },
  it: {
    notFound: "Pagina Non Trovata",
    notFoundDesc: "Spiacenti, la pagina che stai cercando non esiste.",
    backHome: "Torna alla Home",
    title: 'Quanto Vale il Pagamento Rateale Senza Interessi',
    description: 'Calcola i potenziali rendimenti degli investimenti dai pagamenti rateali. Si prega di consumare responsabilmente.',
    formula: 'Rendimento = Σ(Rata Mensile × (1 + r)^i - Rata Mensile)',
    totalPrice: 'Prezzo Totale',
    totalPricePlaceholder: 'Inserisci il prezzo totale',
    months: 'Numero di Rate',
    monthsPlaceholder: 'Inserisci il numero di mesi',
    annualReturn: 'Tasso di Rendimento Annuo (%)',
    annualReturnPlaceholder: 'Inserisci il tasso di rendimento annuo',
    expectedReturn: 'Rendimento Previsto',
    footer: 'created by sorcererxw'
  },
  pt: {
    notFound: "Página Não Encontrada",
    notFoundDesc: "Desculpe, a página que você está procurando não existe.",
    backHome: "Voltar para Início",
    title: 'Quanto Vale o Parcelamento Sem Juros',
    description: 'Calcule os retornos potenciais de investimento das parcelas. Por favor, consuma com responsabilidade.',
    formula: 'Retorno = Σ(Parcela Mensal × (1 + r)^i - Parcela Mensal)',
    totalPrice: 'Preço Total',
    totalPricePlaceholder: 'Digite o preço total',
    months: 'Número de Parcelas',
    monthsPlaceholder: 'Digite o número de meses',
    annualReturn: 'Taxa de Retorno Anual (%)',
    annualReturnPlaceholder: 'Digite a taxa de retorno anual',
    expectedReturn: 'Retorno Esperado',
    footer: 'created by sorcererxw'
  },
  ar: {
    notFound: "الصفحة غير موجودة",
    notFoundDesc: "عذراً، الصفحة التي تبحث عنها غير موجودة.",
    backHome: "العودة إلى الرئيسية",
    title: 'ما قيمة التقسيط بدون فوائد',
    description: 'احسب العوائد المحتملة للاستثمار من مدفوعات التقسيط. يرجى الاستهلاك بمسؤولية.',
    formula: 'العائد = Σ(القسط الشهري × (1 + r)^i - القسط الشهري)',
    totalPrice: 'السعر الإجمالي',
    totalPricePlaceholder: 'أدخل السعر الإجمالي',
    months: 'عدد الأقساط',
    monthsPlaceholder: 'أدخل عدد الأشهر',
    annualReturn: 'معدل العائد السنوي (%)',
    annualReturnPlaceholder: 'أدخل معدل العائد السنوي',
    expectedReturn: 'العائد المتوقع',
    footer: 'created by sorcererxw'
  },
  hi: {
    notFound: "पृष्ठ नहीं मिला",
    notFoundDesc: "क्षमा करें, आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है।",
    backHome: "होम पर वापस जाएं",
    title: 'ब्याज मुक्त किश्त का मूल्य कितना है',
    description: 'किश्त भुगतान से संभावित निवेश रिटर्न की गणना करें। कृपया जिम्मेदारी से खर्न करें।',
    formula: 'रिटर्न = Σ(मासिक भुगतान × (1 + r)^i - मासिक भुगतान)',
    totalPrice: 'कुल कीमत',
    totalPricePlaceholder: 'कुल कीमत दर्ज करें',
    months: 'किश्तों की संख्या',
    monthsPlaceholder: 'महीनों की संख्या दर्ज करें',
    annualReturn: 'वार्षिक रिटर्न दर (%)',
    annualReturnPlaceholder: 'वार्षिक रिटर्न दर दर्ज करें',
    expectedReturn: 'अपेक्षित रिटर्न',
    footer: 'created by sorcererxw'
  },
  tr: {
    notFound: "Sayfa Bulunamadı",
    notFoundDesc: "Üzgünüz, aradığınız sayfa mevcut değil.",
    backHome: "Ana Sayfaya Dön",
    title: 'Faizsiz Taksit Ne Kadar Değerli',
    description: 'Taksit ödemelerinden potansiyel yatırım getirilerini hesaplayın. Lütfen sorumlu tüketin.',
    formula: 'Getiri = Σ(Aylık Ödeme × (1 + r)^i - Aylık Ödeme)',
    totalPrice: 'Toplam Fiyat',
    totalPricePlaceholder: 'Toplam fiyatı girin',
    months: 'Taksit Sayısı',
    monthsPlaceholder: 'Ay sayısını girin',
    annualReturn: 'Yıllık Getiri Oranı (%)',
    annualReturnPlaceholder: 'Yıllık getiri oranını girin',
    expectedReturn: 'Beklenen Getiri',
    footer: 'created by sorcererxw'
  },
  vi: {
    notFound: "Không Tìm Thấy Trang",
    notFoundDesc: "Xin lỗi, trang bạn đang tìm kiếm không tồn tại.",
    backHome: "Trở Về Trang Chủ",
    title: 'Giá Trị Của Trả Góp Không Lãi Suất',
    description: 'Tính toán lợi nhuận đầu tư tiềm năng từ các khoản trả góp. Vui lòng tiêu dùng có trách nhiệm.',
    formula: 'Lợi nhuận = Σ(Khoản Trả Hàng Tháng × (1 + r)^i - Khoản Trả Hàng Tháng)',
    totalPrice: 'Tổng Giá',
    totalPricePlaceholder: 'Nhập tổng giá',
    months: 'Số Tháng Trả Góp',
    monthsPlaceholder: 'Nhập số tháng',
    annualReturn: 'Tỷ Suất Lợi Nhuận Hàng Năm (%)',
    annualReturnPlaceholder: 'Nhập tỷ suất lợi nhuận hàng năm',
    expectedReturn: 'Lợi Nhuận Dự Kiến',
    footer: 'created by sorcererxw'
  },
  id: {
    notFound: "Halaman Tidak Ditemukan",
    notFoundDesc: "Maaf, halaman yang Anda cari tidak ada.",
    backHome: "Kembali ke Beranda",
    title: 'Berapa Nilai Cicilan Tanpa Bunga',
    description: 'Hitung potensi pengembalian investasi dari pembayaran cicilan. Harap konsumsi secara bertanggung jawab.',
    formula: 'Pengembalian = Σ(Pembayaran Bulanan × (1 + r)^i - Pembayaran Bulanan)',
    totalPrice: 'Total Harga',
    totalPricePlaceholder: 'Masukkan total harga',
    months: 'Jumlah Cicilan',
    monthsPlaceholder: 'Masukkan jumlah bulan',
    annualReturn: 'Tingkat Pengembalian Tahunan (%)',
    annualReturnPlaceholder: 'Masukkan tingkat pengembalian tahunan',
    expectedReturn: 'Pengembalian yang Diharapkan',
    footer: 'created by sorcererxw'
  },
  th: {
    notFound: "ไม่พบหน้า",
    notFoundDesc: "ขออภัย ไม่พบหน้าที่คุณกำลังค้นหา",
    backHome: "กลับสู่หน้าแรก",
    title: 'ผ่อนชำระแบบไม่มีดอกเบี้ยมีมูลค่าเท่าไร',
    description: 'คำนวณผลตอบแทนจากการลงทุนที่อาจเกิดขึ้นจากการผ่อนชำระ โปรดบริโภคอย่างมีความรับผิดชอบ',
    formula: 'ผลตอบแทน = Σ(ค่างวดรายเดือน × (1 + r)^i - ค่างวดรายเดือน)',
    totalPrice: 'ราคารวม',
    totalPricePlaceholder: 'ใส่ราคารวม',
    months: 'จำนวนงวด',
    monthsPlaceholder: 'ใส่จำนวนเดือน',
    annualReturn: 'อัตราผลตอบแทนต่อปี (%)',
    annualReturnPlaceholder: 'ใส่อัตราผลตอบแทนต่อปี',
    expectedReturn: 'ผลตอบแทนที่คาดหวัง',
    footer: 'created by sorcererxw'
  },
  pl: {
    notFound: "Nie Znaleziono Strony",
    notFoundDesc: "Przepraszamy, strona której szukasz nie istnieje.",
    backHome: "Powrót do Strony Głównej",
    title: 'Ile Warte są Raty 0%',
    description: 'Oblicz potencjalne zyski z inwestycji z płatności ratalnych. Prosimy o odpowiedzialną konsumpcję.',
    formula: 'Zysk = Σ(Rata Miesięczna × (1 + r)^i - Rata Miesięczna)',
    totalPrice: 'Cena Całkowita',
    totalPricePlaceholder: 'Wprowadź cenę całkowitą',
    months: 'Liczba Rat',
    monthsPlaceholder: 'Wprowadź liczbę miesięcy',
    annualReturn: 'Roczna Stopa Zwrotu (%)',
    annualReturnPlaceholder: 'Wprowadź roczną stopę zwrotu',
    expectedReturn: 'Oczekiwany Zysk',
    footer: 'created by sorcererxw'
  },
  he: {
    notFound: "הדף לא נמצא",
    notFoundDesc: "מצטערים, הדף שאתה מחפש אינו קיים.",
    backHome: "חזרה לדף הבית",
    title: 'כמה שווה תשלום בתשלומים ללא ריבית',
    description: 'חשב תשואות השקעה פוטנציאליות מתשלומים בתשלומים. אנא צרוך באחריות.',
    formula: 'תשואה = Σ(תשלום חודשי × (1 + r)^i - תשלום חודשי)',
    totalPrice: 'מחיר כולל',
    totalPricePlaceholder: 'הכנס מחיר כולל',
    months: 'מספר תשלומים',
    monthsPlaceholder: 'הכנס מספר חודשים',
    annualReturn: 'שיעור תשואה שנתי (%)',
    annualReturnPlaceholder: 'הכנס שיעור תשואה שנתי',
    expectedReturn: 'תשואה צפויה',
    footer: 'created by sorcererxw'
  },
  ms: {
    notFound: "Halaman Tidak Dijumpai",
    notFoundDesc: "Maaf, halaman yang anda cari tidak wujud.",
    backHome: "Kembali ke Laman Utama",
    title: 'Berapakah Nilai Ansuran Tanpa Faedah',
    description: 'Kira potensi pulangan pelaburan daripada bayaran ansuran. Sila berbelanja dengan bertanggungjawab.',
    formula: 'Pulangan = Σ(Bayaran Bulanan × (1 + r)^i - Bayaran Bulanan)',
    totalPrice: 'Jumlah Harga',
    totalPricePlaceholder: 'Masukkan jumlah harga',
    months: 'Bilangan Ansuran',
    monthsPlaceholder: 'Masukkan bilangan bulan',
    annualReturn: 'Kadar Pulangan Tahunan (%)',
    annualReturnPlaceholder: 'Masukkan kadar pulangan tahunan',
    expectedReturn: 'Jangkaan Pulangan',
    footer: 'created by sorcererxw'
  },
  uk: {
    notFound: "Сторінку не знайдено",
    notFoundDesc: "Вибачте, сторінка, яку ви шукаєте, не існує.",
    backHome: "Повернутися на головну",
    title: 'Скільки коштує безвідсоткова розстрочка',
    description: 'Розрахуйте потенційний інвестиційний дохід від платежів у розстрочку. Будь ласка, споживайте відповідально.',
    formula: 'Дохід = Σ(Щомісячний платіж × (1 + r)^i - Щомісячний платіж)',
    totalPrice: 'Загальна ціна',
    totalPricePlaceholder: 'Введіть загальну ціну',
    months: 'Кількість платежів',
    monthsPlaceholder: 'Введіть кількість місяців',
    annualReturn: 'Річна дохідність (%)',
    annualReturnPlaceholder: 'Введіть річну дохідність',
    expectedReturn: 'Очікуваний дохід',
    footer: 'created by sorcererxw'
  },
  ro: {
    notFound: "Pagina nu a fost găsită",
    notFoundDesc: "Ne pare rău, pagina pe care o căutați nu există.",
    backHome: "Înapoi la pagina principală",
    title: 'Cât valorează plata în rate fără dobândă',
    description: 'Calculați potențialele câștiguri din investiții din plățile în rate. Vă rugăm să consumați responsabil.',
    formula: 'Câștig = Σ(Plata lunară × (1 + r)^i - Plata lunară)',
    totalPrice: 'Preț total',
    totalPricePlaceholder: 'Introduceți prețul total',
    months: 'Număr de rate',
    monthsPlaceholder: 'Introduceți numărul de luni',
    annualReturn: 'Rata anuală de rentabilitate (%)',
    annualReturnPlaceholder: 'Introduceți rata anuală de rentabilitate',
    expectedReturn: 'Câștig estimat',
    footer: 'created by sorcererxw'
  },
  hu: {
    notFound: "Az oldal nem található",
    notFoundDesc: "Sajnáljuk, a keresett oldal nem létezik.",
    backHome: "Vissza a főoldalra",
    title: 'Mennyit ér a kamatmentes részletfizetés',
    description: 'Számítsa ki a részletfizetésből származó potenciális befektetési hozamot. Kérjük, fogyasszon felelősséggel.',
    formula: 'Hozam = Σ(Havi részlet × (1 + r)^i - Havi részlet)',
    totalPrice: 'Teljes ár',
    totalPricePlaceholder: 'Adja meg a teljes árat',
    months: 'Részletek száma',
    monthsPlaceholder: 'Adja meg a hónapok számát',
    annualReturn: 'Éves hozamráta (%)',
    annualReturnPlaceholder: 'Adja meg az éves hozamrátát',
    expectedReturn: 'Várható hozam',
    footer: 'created by sorcererxw'
  },
  el: {
    notFound: "Η σελίδα δεν βρέθηκε",
    notFoundDesc: "Λυπούμαστε, η σελίδα που αναζητάτε δεν υπάρχει.",
    backHome: "Επιστροφή στην αρχική σελίδα",
    title: 'Πόσο αξίζει η άτοκη πληρωμή με δόσεις',
    description: 'Υπολογίστε τις πιθανές επενδυτικές αποδόσεις από τις πληρωμές με δόσεις. Παρακαλούμε καταναλώνετε υπεύθυνα.',
    formula: 'Απόδοση = Σ(Μηνιαία δόση × (1 + r)^i - Μηνιαία δόση)',
    totalPrice: 'Συνολική τιμή',
    totalPricePlaceholder: 'Εισάγετε συνολική τιμή',
    months: 'Αριθμός δόσεων',
    monthsPlaceholder: 'Εισάγετε αριθμό μηνών',
    annualReturn: 'Ετήσιο ποσοστό απόδοσης (%)',
    annualReturnPlaceholder: 'Εισάγετε ετήσιο ποσοστό απόδοσης',
    expectedReturn: 'Αναμενόμενη απόδοση',
    footer: 'created by sorcererxw'
  }
};

export const getLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  const pathname = window.location.pathname;
  const langMatch = pathname.match(/^\/([a-z]{2})/);
  if (langMatch) {
    const urlLang = langMatch[1] as Language;
    if (['zh', 'en', 'ja', 'ko', 'fr', 'es', 'de', 'ru', 'it', 'pt', 'ar', 'hi', 'tr', 'vi', 'id', 'th', 'pl', 'he'].includes(urlLang)) {
      return urlLang;
    }
  }

  const userLanguage = navigator.language.toLowerCase();
  if (userLanguage.startsWith('zh')) return 'zh';
  if (userLanguage.startsWith('ja')) return 'ja';
  if (userLanguage.startsWith('ko')) return 'ko';
  if (userLanguage.startsWith('fr')) return 'fr';
  if (userLanguage.startsWith('es')) return 'es';
  if (userLanguage.startsWith('de')) return 'de';
  if (userLanguage.startsWith('ru')) return 'ru';
  if (userLanguage.startsWith('it')) return 'it';
  if (userLanguage.startsWith('pt')) return 'pt';
  if (userLanguage.startsWith('ar')) return 'ar';
  if (userLanguage.startsWith('hi')) return 'hi';
  if (userLanguage.startsWith('tr')) return 'tr';
  if (userLanguage.startsWith('vi')) return 'vi';
  if (userLanguage.startsWith('id')) return 'id';
  if (userLanguage.startsWith('th')) return 'th';
  if (userLanguage.startsWith('pl')) return 'pl';
  if (userLanguage.startsWith('he')) return 'he';
  if (userLanguage.startsWith('ms')) return 'ms';
  if (userLanguage.startsWith('uk')) return 'uk';
  if (userLanguage.startsWith('ro')) return 'ro';
  if (userLanguage.startsWith('hu')) return 'hu';
  if (userLanguage.startsWith('el')) return 'el';
  return 'en';
};

export const languageList: { label: string; value: Language }[] = [
  { label: "简体中文", value: "zh" },
  { label: "English", value: "en" },
  { label: "日本語", value: "ja" },
  { label: "한국어", value: "ko" },
  { label: "Français", value: "fr" },
  { label: "Español", value: "es" },
  { label: "Deutsch", value: "de" },
  { label: "Русский", value: "ru" },
  { label: "Italiano", value: "it" },
  { label: "Português", value: "pt" },
  { label: "العربية", value: "ar" },
  { label: "हिन्दी", value: "hi" },
  { label: "Türkçe", value: "tr" },
  { label: "Tiếng Việt", value: "vi" },
  { label: "Bahasa Indonesia", value: "id" },
  { label: "ไทย", value: "th" },
  { label: "Polski", value: "pl" },
  { label: "עברית", value: "he" },
  { label: "Bahasa Melayu", value: "ms" },
  { label: "Українська", value: "uk" },
  { label: "Română", value: "ro" },
  { label: "Magyar", value: "hu" },
  { label: "Ελληνικά", value: "el" }
];