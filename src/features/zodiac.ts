class Zodiac {

  private date: string;
  private zodiacSign: any;
  private zodiacSigns = [
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

  constructor(date: string) {
    this.date = date;
  }

  getZodiacSign() {
    const stringToDate = new Date(this.date);
    stringToDate.setHours(12, 0, 0);

    const day = stringToDate.getDate();
    const month = stringToDate.getMonth();

    this.zodiacSign = day < this.zodiacSigns[month].day ?
      this.zodiacSigns[month].beforeDaySign :
      this.zodiacSigns[month].afterDaySign;
    return this.zodiacSign;
  }

}

export default Zodiac;