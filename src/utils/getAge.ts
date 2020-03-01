const getAge = (dateOfBirth: any) => {

  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const month = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default getAge;