const DataTransaksi = [
  { id: 0, name: 'John Doe', noHp: '081394856987', tanggal: '2018/01/01', status: 'diproses', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 1, name: 'Samppa Nori', noHp: '081394856987', tanggal: '2018/01/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 2, name: 'Estavan Lykos', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 3, name: 'Chetan Mohamed', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 4, name: 'Derick Maximinus', noHp: '081394856987', tanggal: '2018/03/01', status: 'diproses', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 5, name: 'Friderik Dávid', noHp: '081394856987', tanggal: '2018/01/21', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 6, name: 'Yiorgos Avraamu', noHp: '081394856987', tanggal: '2018/01/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 7, name: 'Avram Tarasios', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 8, name: 'Quintin Ed', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 9, name: 'Enéas Kwadwo', noHp: '081394856987', tanggal: '2018/03/01', status: 'diproses', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 10, name: 'Agapetus Tadeáš', noHp: '081394856987', tanggal: '2018/01/21', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 11, name: 'Carwyn Fachtna', noHp: '081394856987', tanggal: '2018/01/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 12, name: 'Nehemiah Tatius', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 13, name: 'Ebbe Gemariah', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 14, name: 'Eustorgios Amulius', noHp: '081394856987', tanggal: '2018/03/01', status: 'diproses', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 15, name: 'Leopold Gáspár', noHp: '081394856987', tanggal: '2018/01/21', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 16, name: 'Pompeius René', noHp: '081394856987', tanggal: '2018/01/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 17, name: 'Paĉjo Jadon', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 18, name: 'Micheal Mercurius', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 19, name: 'Ganesha Dubhghall', noHp: '081394856987', tanggal: '2018/03/01', status: 'diproses', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 20, name: 'Hiroto Šimun', noHp: '081394856987', tanggal: '2018/01/21', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 21, name: 'Vishnu Serghei', noHp: '081394856987', tanggal: '2018/01/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 22, name: 'Zbyněk Phoibos', noHp: '081394856987', tanggal: '2018/02/01', status: 'selesai', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 23, name: 'Aulus Agmundr', noHp: '081394856987', tanggal: '2018/01/01', status: 'diproses', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' },
  { id: 42, name: 'Ford Prefect', noHp: '081394856987', tanggal: '2001/05/25', status: 'Don\'t panic!', kurir: 'J&T', berat: 1, bayar: 19000, resi: 'JP098938595' }
]

export default DataTransaksi
