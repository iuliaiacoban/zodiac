const zodiacSigns = [
  { day: 20, beforeDaySign: 'capricorn', afterDaySign: 'aquarius' },
  { day: 19, beforeDaySign: 'aquarius', afterDaySign: 'pisces' },
  { day: 21, beforeDaySign: 'pisces', afterDaySign: 'aries' },
  { day: 20, beforeDaySign: 'aries', afterDaySign: 'taurus' },
  { day: 21, beforeDaySign: 'taurus', afterDaySign: 'gemini' },
  { day: 21, beforeDaySign: 'gemini', afterDaySign: 'cancer' },
  { day: 23, beforeDaySign: 'cancer', afterDaySign: 'leo' },
  { day: 23, beforeDaySign: 'leo', afterDaySign: 'virgo' },
  { day: 23, beforeDaySign: 'virgo', afterDaySign: 'libra' },
  { day: 23, beforeDaySign: 'libra', afterDaySign: 'scorpio' },
  { day: 22, beforeDaySign: 'scorpio', afterDaySign: 'sagittarius' },
  { day: 22, beforeDaySign: 'sagittarius', afterDaySign: 'capricorn' }
];

const getZodiacSign = (date: string) => {
  let zodiacSign: string;
  const stringToDate = new Date(date);
  const day = stringToDate.getDate();
  const month = stringToDate.getMonth();
  zodiacSign = day < zodiacSigns[month].day ?
    zodiacSigns[month].beforeDaySign :
    zodiacSigns[month].afterDaySign;
  return zodiacSign;
}

export default getZodiacSign;