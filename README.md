# Socialala 
Aplikasi sosial media menggunakan React JS yang menampilkan data user dari JSONPlaceholder API. Fitur terbaik seperti Like, Follow, Search, dan Dark/Light Mode.
<img width="1913" height="873" alt="image" src="https://github.com/user-attachments/assets/0103b99f-e9d2-4e1e-9b96-88d7906dfafd" />

---
## Teknis Website
---
## Fetch API >>  membuat permintaan dan "mengambil" data dari server seperti file/gambar
Data user diambil dari `https://jsonplaceholder.typicode.com/users` menggunakan `fetch()` di dalam `useEffect`.

## Komponen
<img width="749" height="363" alt="image" src="https://github.com/user-attachments/assets/797f9ecf-13b2-4806-b2b4-fc9414da7cdb" />

App.jsx >> Komponen utama untuk menggabungkan navbar, card, footer, fitur lain 
App.css >> Styling 
main.jsx >> Entry point 
context/ 
  >> AppContext.jsx = menyimpan global state (useContext, useEffect, useState) yang dalam projek ini adalah daftar following & theme
components/
>  > Navbar.jsx = Sebagai navigasi + pencarian
>  > UserCard.jsx = Menampilkan profil user
>  > Footer.jsx = Menampilkan info aplikasi & statistik jumlah user & following

## Implementasi React Hook 
### 1. useState
Menyimpan data yang bisa berubah 
<img width="682" height="147" alt="image" src="https://github.com/user-attachments/assets/f79756a3-76d8-4441-8b53-7380a38cd438" />

note : menyimpan data user, merender/rerender theme 

### 2. useEffect
Menjalankan efek samping seperti fetch data 
<img width="1288" height="452" alt="image" src="https://github.com/user-attachments/assets/527f6ade-5335-4088-ae62-960678f95018" />

note : fetch API saat komponen pertama kali dimount

### 3. useContext 
Berbagi state global antar component
<img width="1067" height="242" alt="image" src="https://github.com/user-attachments/assets/c1f27b92-ebd9-4db2-beef-532169e9b931" />

### 4. useRef
Mengakses elemen DOM secara langsung tanpa memicu re-render
<img width="863" height="91" alt="image" src="https://github.com/user-attachments/assets/89a5cb83-cc49-4dd8-bb94-265b2e285f7a" />

# socialmediatask
