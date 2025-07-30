import { useEffect, useLayoutEffect, useState } from "react";

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  JP = "ja-JP",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case "en-US":
      return Locale.US;
    case "ja-JP":
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const UseEffectSample = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   const savedLocale = localStorage.getItem(KEY_LOCALE);
  //   if (savedLocale !== null) {
  //     setLocale(getLocaleFromString(savedLocale));
  //   }
  // }, []);

  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <h1>UseEffectExample</h1>
      <span>Current Time: {timestamp.toLocaleTimeString(locale)}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
      >
        <option value="en-US">en-US</option>
        <option value="ja-JP">ja-JP</option>
      </select>
    </div>
  );
};
