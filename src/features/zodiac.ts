import getZodiacSign from '../utils/zodiacSigns';
import getAge from '../utils/getAge';
import getCookie from '../utils/cookieHandler';

// const validateDate = (date: string) => {
//   try {
//     Date.parse(date);
//     return true
//   } catch (error) {
//     return false;
//   }
// }


const zodiac = (req: any, res: any, next: any) => {
  const cookies = getCookie(req);

  if (req.query.hasOwnProperty('date')) {
    res.cookie('dob', req.query.date);
    res.status(200).send({
      zodiacSign: getZodiacSign(req.query.date),
      age: getAge(req.query.date)
    });
    return;
  }

  if (!req.query.hasOwnProperty('date') && cookies && cookies.hasOwnProperty('dob')) {
    res.status(200).send({ zodiacSign: getZodiacSign(cookies['dob']) });
  } else {
    res.status(500).send({ error: 'date of birth is required' });
  }

}

export default zodiac;