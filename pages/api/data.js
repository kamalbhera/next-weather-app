// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=b058c6456fa72deb24a56780079b3143`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
