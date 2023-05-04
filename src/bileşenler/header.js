const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const div = document.createElement('div');
  const span1 = document.createElement('span');
  const h1 = document.createElement('h1');
  const span2 = document.createElement('span');

  div.classList.add('header');
  span1.classList.add('date');
  span2.classList.add('temp');

  span1.textContent = tarih;
  h1.textContent = baslik;
  span2.textContent = yazi;

  div.appendChild(span1);
  div.appendChild(h1);
  div.appendChild(span2);

  return div;
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const header = Header("Teknoloji Zamanı", "4 Mayıs 2023", "25°C");

  document.querySelector(secici).appendChild(header);
}

export { Header, headerEkleyici }
