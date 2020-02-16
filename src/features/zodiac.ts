import getZodiacSign from '../utils/zodiacSigns';

// const validateDate = (date: string) => {
//   try {
//     Date.parse(date);
//     return true
//   } catch (error) {
//     return false;
//   }
// }

const parseCookies = (req: any) => {
  let cookies = {};

  if (req.headers && req.headers.hasOwnProperty('cookie')) {
    req.headers.cookie.split(';').forEach((cookie: any) => {
      const parts = cookie.match(/(.*?)=(.*)$/);
      cookies[parts[1].trim()] = (parts[2] || '').trim();
    });
    return cookies;
  } else {
    return false;
  }
}

const zodiac = (req: any, res: any, next: any) => {
  const cookies = parseCookies(req);

  if (req.query.hasOwnProperty('date')) {
    res.cookie('dob', req.query.date);
    res.status(200).send({ zodiacSign: getZodiacSign(req.query.date) });
    return;
  }

  if (!req.query.hasOwnProperty('date') && cookies && cookies.hasOwnProperty('dob')) {
    res.status(200).send({ zodiacSign: getZodiacSign(cookies['dob']) });
  } else {
    res.status(500).send({ error: 'date of birth is required' });
  }

}

export default zodiac;