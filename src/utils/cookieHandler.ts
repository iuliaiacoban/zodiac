const setCookie = (req: any) => {
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

export default setCookie;

