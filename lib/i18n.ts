export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'es' | 'de' | 'ru';

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
    title: 'Interest-Free Installment Value Calculator',
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
    title: '無利子分割払いの価値計算',
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
    title: '무이자 할부 가치 계산기',
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
    title: 'Calculateur de Valeur de Paiement Échelonné Sans Intérêt',
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
    title: 'Calculadora de Valor de Pago a Plazos Sin Intereses',
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
    title: 'Zinsfreier Ratenzahlungs-Wertrechner',
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
    title: 'Калькулятор стоимости беспроцентной рассрочки',
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
  }
};

export const getLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  // 从 URL 路径中获取语言
  const pathname = window.location.pathname;
  const langMatch = pathname.match(/^\/([a-z]{2})/);  // 修复正则表达式语法
  if (langMatch) {
    const urlLang = langMatch[1] as Language;
    if (['zh', 'en', 'ja', 'ko', 'fr', 'es', 'de', 'ru'].includes(urlLang)) {
      return urlLang;
    }
  }

  // 如果 URL 中没有有效的语言标识，则使用浏览器语言
  const userLanguage = navigator.language.toLowerCase();
  if (userLanguage.startsWith('zh')) return 'zh';
  if (userLanguage.startsWith('ja')) return 'ja';
  if (userLanguage.startsWith('ko')) return 'ko';
  if (userLanguage.startsWith('fr')) return 'fr';
  if (userLanguage.startsWith('es')) return 'es';
  if (userLanguage.startsWith('de')) return 'de';
  if (userLanguage.startsWith('ru')) return 'ru';
  return 'en';
};