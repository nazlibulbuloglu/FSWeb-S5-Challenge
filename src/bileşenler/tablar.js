import axios from "axios";
const Tablar = (konu) => {
  
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const div = document.createElement('div');
  div.classList.add('topics');

  konu.forEach(k => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = k;
    div.appendChild(tab);
  });

  return div;
}

const tabEkleyici = async (secici) => {
  // GÖREV 4  
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const response = await axios.get('http://localhost:5001/api/konular');
  const konular = response.data.konular;

  const tablar = Tablar(konular);
  document.querySelector(secici).appendChild(tablar);
}

export { Tablar, tabEkleyici }
