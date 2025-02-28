"use client";

import { Language, translations } from "@/lib/i18n";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const MAX_MONTHS = 1200; // 设置最大分期月数
const MAX_PRICE = 1000000000000; // 1万亿
const MAX_ANNUAL_RETURN = 10000; // 最大年化收益率10000%

export function CalculatorForm({ lang }: { lang: Language }) {
  const [totalPrice, setTotalPrice] = useState("");
  const [months, setMonths] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const t = translations[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const price = params.get("price");
    const month = params.get("month");
    const rate = params.get("rate");

    if (price) setTotalPrice(price);
    if (month) setMonths(month);
    if (rate) setAnnualReturn(rate);
  }, []);

  const updateURL = useCallback(
    (price: string, month: string, rate: string) => {
      const params = new URLSearchParams();
      if (price) params.set("price", price);
      if (month) params.set("month", month);
      if (rate) params.set("rate", rate);

      const newURL = `${window.location.pathname}${
        params.toString() ? `?${params.toString()}` : ""
      }`;
      window.history.replaceState({}, "", newURL);
    },
    []
  );

  const result = useMemo(() => {
    const price = parseFloat(totalPrice);
    const installments = parseInt(months);
    const rate = parseFloat(annualReturn) / 100 / 12;

    if (
      isNaN(price) ||
      isNaN(installments) ||
      isNaN(rate) ||
      price <= 0 ||
      installments <= 0 ||
      installments > MAX_MONTHS ||
      rate <= 0
    ) {
      return null;
    }

    let totalValue = 0;
    const monthlyPayment = price / installments;

    // 使用递增累加而不是循环计算，提高性能
    let futureValue = monthlyPayment;
    let powerTerm = 1;
    for (let i = 1; i <= installments; i++) {
      powerTerm *= (1 + rate);
      futureValue = monthlyPayment * powerTerm;
      totalValue += futureValue - monthlyPayment;
    }

    return parseFloat(totalValue.toFixed(2));
  }, [totalPrice, months, annualReturn]);

  const formattedResult = useMemo(() => {
    if (result === null) return "_?";
    const resultStr = result.toString();
    if (resultStr.length > 10) {
      return result.toExponential(2);
    }
    return resultStr;
  }, [result]);

  const resultFontSize = useMemo(() => {
    const length = formattedResult.length;
    if (length <= 6) return "text-7xl";
    if (length <= 8) return "text-6xl";
    return "text-5xl";
  }, [formattedResult]);

  return (
    <div className="lg:flex lg:gap-12">
      <div className="flex-1 space-y-6 border-b lg:border-b-0 lg:border-r border-border pb-8 lg:pb-0 lg:pr-12">
        <div className="space-y-2">
          <Label htmlFor="total-price">{t.totalPrice}</Label>
          <Input
            id="total-price"
            type="number"
            min="0"
            step="0.01"
            value={totalPrice}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
                const numValue = parseFloat(value);
                const finalValue = numValue > MAX_PRICE ? MAX_PRICE.toString() : value;
                setTotalPrice(finalValue);
                updateURL(finalValue, months, annualReturn);
              }
            }}
            placeholder={t.totalPricePlaceholder}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="months">{t.months}</Label>
          <Input
            id="months"
            type="number"
            min="1"
            max={MAX_MONTHS}
            step="1"
            value={months}
            onChange={(e) => {
              const value = e.target.value;
              const numValue = parseInt(value);
              if (value === "") {
                setMonths(value);
                updateURL(totalPrice, value, annualReturn);
              } else if (/^\d+$/.test(value)) {
                const finalValue = numValue > MAX_MONTHS ? MAX_MONTHS.toString() : value;
                setMonths(finalValue);
                updateURL(totalPrice, finalValue, annualReturn);
              }
            }}
            placeholder={t.monthsPlaceholder}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="annual-return">{t.annualReturn}</Label>
          <Input
            id="annual-return"
            type="number"
            min="0"
            step="0.01"
            value={annualReturn}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
                const numValue = parseFloat(value);
                const finalValue = numValue > MAX_ANNUAL_RETURN ? MAX_ANNUAL_RETURN.toString() : value;
                setAnnualReturn(finalValue);
                updateURL(totalPrice, months, finalValue);
              }
            }}
            placeholder={t.annualReturnPlaceholder}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </div>
      <div className="flex-1 mt-8 lg:mt-0 lg:flex lg:items-center">
        <div className="w-full text-center space-y-3">
          <div className="text-sm text-muted-foreground">
            {t.expectedReturn}
          </div>
          <div className={`font-bold ${resultFontSize} transition-all`}>
            {formattedResult}
          </div>
        </div>
      </div>
    </div>
  );
}