const lerFotos = async (callback) => {
  const fotosHTTP = await fetch("http://192.168.0.11:3030/feed");
  const fotosJson = await fotosHTTP.json();
  callback(fotosJson);
};

export default lerFotos;