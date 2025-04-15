document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  const whatsappLink = `62895806644752` +
    encodeURIComponent(`Halo, saya ingin bertanya tentang pembuatan website.\n\nNama: ${nama}\nEmail: ${email}\nPesan: ${pesan}`);

  window.open(whatsappLink, '_blank');
});
