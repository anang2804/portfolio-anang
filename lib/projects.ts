import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "orangehrm-cypress-automation",
    title: "OrangeHRM: Cypress Test Automation",
    category: "qa",
    summary:
      "Proyek pengujian otomatis pada aplikasi OrangeHRM untuk memvalidasi fungsionalitas dan alur pengguna menggunakan Cypress.",
    overview:
      "Proyek automation testing pada aplikasi OrangeHRM menggunakan Cypress untuk menguji fungsionalitas web dan memastikan fitur berjalan sesuai dengan skenario serta hasil yang diharapkan.",
    problem:
      "Pengujian manual perlu didukung dengan automation testing agar proses validasi fitur dapat dilakukan secara lebih konsisten, efisien, dan dapat diulang.",
    role:
      "Merancang test scenario, menyusun test case, mengembangkan script automation menggunakan Cypress, serta melakukan validasi hasil pengujian terhadap perilaku aplikasi.",
    process:
      "Menyusun skenario pengujian berdasarkan fungsionalitas aplikasi, mengimplementasikan automation script menggunakan Cypress, mengelola interaksi dan validasi elemen UI, serta melakukan assertion terhadap hasil pengujian.",
    result:
      "Menghasilkan automated test suite yang dapat menjalankan skenario pengujian secara berulang dan membantu memvalidasi fungsionalitas aplikasi OrangeHRM berdasarkan expected result.",
    tools: ["Cypress", "JavaScript", "E2E Testing", "Test Automation"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anang2804/cypress-orangeHRM-automation.git",
      },
    ],
    qa: {
      scope: "Cypress Automation Testing, JavaScript, End-to-End Testing, dan validasi UI.",
      approach:
        "Menyusun test scenario dan test case, mengembangkan script automation, mengelola interaksi elemen UI, dan melakukan assertion terhadap hasil.",
      cases: [
        "Fungsionalitas web dijalankan sesuai test scenario.",
        "Interaksi pengguna divalidasi melalui elemen UI.",
        "Expected result diperiksa melalui assertion Cypress.",
      ],
      findings: [
        "Automated test suite mendukung identifikasi perilaku aplikasi dan bug selama pengujian.",
      ],
    },
  },
  {
    slug: "codin-learning-media",
    title: "CODIN: Media Pembelajaran Interaktif",
    category: "frontend",
    thumbnail: "/codin.png",
    summary:
      "Website media pembelajaran Informatika untuk siswa kelas X SMK yang berfokus pada materi algoritma dan pemrograman.",
    overview:
      "CODIN merupakan platform media pembelajaran Informatika berbasis web yang dirancang untuk siswa kelas X SMK, khususnya pada materi algoritma dan pemrograman. Platform ini mengintegrasikan materi pembelajaran, kuis, simulasi interaktif, dan penilaian dalam satu sistem pembelajaran digital.",
    problem:
      "Pembelajaran algoritma dan pemrograman membutuhkan pemahaman logika serta praktik secara langsung. CODIN dikembangkan sebagai alternatif media pembelajaran yang lebih interaktif, sehingga siswa dapat memahami konsep pemrograman melalui materi, latihan, dan simulasi, bukan hanya pembelajaran teoritis.",
    role:
      "Merancang dan mengembangkan website media pembelajaran, mulai dari perancangan antarmuka, implementasi fitur pembelajaran, pengembangan simulasi interaktif, hingga integrasi sistem penilaian.",
    process:
      "Mengembangkan platform dengan alur pembelajaran terstruktur yang mengintegrasikan materi, kuis, simulasi algoritma dan pemrograman, serta pencatatan hasil belajar. Proses pengembangan juga mencakup perancangan antarmuka dan implementasi fungsionalitas website.",
    result:
      "Menghasilkan media pembelajaran berbasis web yang menggabungkan materi Informatika, kuis, simulasi interaktif, dan sistem penilaian dalam satu platform. CODIN dirancang untuk mendukung proses belajar yang lebih terstruktur, interaktif, dan mudah diakses.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    links: [
      { label: "Web", href: "https://codin-ypm.vercel.app/" },
      { label: "GitHub", href: "https://github.com/anang2804/Codin.git" },
    ],
    frontend: {
      features: [
        "Materi pembelajaran Informatika",
        "Kuis evaluasi pemahaman siswa",
        "Simulasi interaktif algoritma dan pemrograman",
        "Sistem penilaian dan rekap hasil belajar",
        "Antarmuka responsif untuk berbagai ukuran layar",
      ],
      responsive:
        "Tampilan dirancang agar tetap nyaman digunakan pada perangkat dengan ukuran layar yang berbeda.",
    },
  },
  {
    slug: "suzuki-sales-web",
    title: "Sales Web: Website Penjualan Suzuki",
    category: "frontend",
    thumbnail: "/salesweb.png",
    summary:
      "Website yang menyajikan informasi produk kendaraan Suzuki dan mempermudah calon pelanggan mengakses informasi penjualan.",
    overview:
      "Website sales yang dirancang untuk mendukung kebutuhan pemasaran dan penjualan kendaraan Suzuki melalui penyajian informasi produk secara digital.",
    problem:
      "Penyampaian informasi produk secara digital menjadi salah satu cara untuk memudahkan calon pelanggan mengenal kendaraan, mencari informasi spesifikasi, dan mendapatkan gambaran produk sebelum melakukan pembelian.",
    role:
      "Mengembangkan dan mengelola website sales sebagai media informasi dan pemasaran produk kendaraan, dengan fokus pada penyajian informasi produk serta kemudahan akses bagi calon pelanggan.",
    process:
      "Menyusun tampilan website yang informatif, mengatur penyajian informasi produk kendaraan, dan merancang antarmuka agar calon pelanggan dapat menjelajahi informasi produk dengan mudah.",
    result:
      "Website sales yang berfungsi sebagai media digital untuk menampilkan informasi kendaraan Suzuki, mendukung aktivitas pemasaran, dan memberikan akses informasi produk kepada calon pelanggan.",
    tools: ["React", "Next.js", "TypeScript"],
    links: [
      { label: "Web", href: "https://salesweb-blush.vercel.app/" },
      { label: "GitHub", href: "https://github.com/anang2804/salesweb.git" },
    ],
    frontend: {
      features: [
        "Informasi dan katalog kendaraan",
        "Detail produk dan spesifikasi kendaraan",
        "Tampilan promosi produk",
        "Navigasi informasi yang mudah diakses",
        "Desain responsif untuk berbagai perangkat",
      ],
      responsive:
        "Tampilan dirancang agar tetap nyaman digunakan pada perangkat dengan ukuran layar yang berbeda.",
    },
  },
  {
    slug: "address-resolution-protocol",
    title: "Address Resolution Protocol (ARP)",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/SnHRXb5j6mE/hqdefault.jpg",
    summary:
      "Memahami proses ARP dalam jaringan komputer, termasuk mekanisme pemetaan alamat IP ke MAC Address untuk mendukung komunikasi antarperangkat.",
    overview:
      "Pembelajaran mekanisme Address Resolution Protocol untuk memetakan alamat IP ke MAC Address dalam jaringan komputer.",
    problem:
      "Perangkat membutuhkan cara untuk mengetahui MAC Address tujuan sebelum dapat mengirimkan data pada jaringan lokal.",
    role: "Melakukan konfigurasi dan pengamatan proses komunikasi berbasis ARP.",
    process:
      "Memahami alur permintaan dan balasan ARP, lalu mengamati pemetaan IP Address ke MAC Address antarperangkat.",
    result:
      "Mekanisme pemetaan alamat IP ke MAC Address dipahami sebagai bagian dari komunikasi antarperangkat pada jaringan.",
    tools: ["Networking", "IP Address", "MAC Address"],
    links: [
      { label: "YouTube", href: "https://youtu.be/SnHRXb5j6mE" },
    ],
    networking: {
      goal: "Memahami proses resolusi alamat IP menjadi MAC Address.",
      devices: ["Komputer", "Switch", "Router"],
      outcome: "Proses ARP berhasil dipelajari dan diamati pada komunikasi jaringan.",
    },
  },
  {
    slug: "subnetting",
    title: "Subnetting",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/fUHeBOKW0nQ/hqdefault.jpg",
    summary:
      "Pembelajaran pembagian jaringan IP ke dalam subnet yang lebih kecil untuk memahami pengelolaan alamat IP, subnet mask, dan segmentasi jaringan.",
    overview:
      "Praktik pembagian jaringan IP menjadi beberapa subnet yang lebih kecil.",
    problem:
      "Jaringan perlu dibagi secara terstruktur agar penggunaan alamat IP lebih efisien dan segmentasi lebih terkelola.",
    role: "Menghitung subnet, menetapkan subnet mask, dan mengatur segmentasi jaringan.",
    process:
      "Menentukan kebutuhan host, menghitung rentang alamat, dan membagi jaringan menjadi subnet dengan prefix yang sesuai.",
    result:
      "Pembagian alamat IP, subnet mask, dan segmentasi jaringan dapat dipahami melalui perhitungan dan praktik.",
    tools: ["IP Addressing", "Subnet Mask", "Network Segmentation"],
    links: [
      { label: "YouTube", href: "https://youtu.be/fUHeBOKW0nQ" },
    ],
    networking: {
      goal: "Mengelompokkan jaringan IP ke dalam subnet yang efisien.",
      devices: ["Komputer", "Router", "Switch"],
      outcome: "Subnet dan rentang alamat IP berhasil dihitung untuk segmentasi jaringan.",
    },
  },
  {
    slug: "static-routing",
    title: "Static Routing",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/H5POpU37zSU/hqdefault.jpg",
    summary:
      "Praktik konfigurasi routing statis untuk menentukan jalur komunikasi antarjaringan melalui pengaturan rute secara manual pada router.",
    overview:
      "Konfigurasi jalur statis pada router untuk menghubungkan dua atau lebih jaringan.",
    problem:
      "Router memerlukan rute tujuan yang ditentukan secara manual agar dapat meneruskan paket antarjaringan.",
    role: "Mengatur rute statis dan memeriksa konektivitas antarjaringan.",
    process:
      "Menentukan subnet tujuan, mengonfigurasi gateway pada router, lalu menguji konektivitas menggunakan perangkat uji.",
    result:
      "Jalur komunikasi antarjaringan berhasil ditentukan melalui konfigurasi routing statis.",
    tools: ["Routing", "Router Configuration", "Network Connectivity"],
    links: [
      { label: "YouTube", href: "https://youtu.be/H5POpU37zSU" },
    ],
    networking: {
      goal: "Menghubungkan jaringan dengan rute yang dikonfigurasi secara manual.",
      devices: ["Router", "Switch", "Komputer"],
      outcome: "Komunikasi antarjaringan berhasil diuji melalui jalur statis.",
    },
  },
  {
    slug: "dynamic-routing",
    title: "Dynamic Routing",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/Zql3xgTidNc/hqdefault.jpg",
    summary:
      "Mempelajari mekanisme routing dinamis yang memungkinkan router bertukar informasi rute dan menyesuaikan jalur komunikasi antarjaringan.",
    overview:
      "Pembelajaran pertukaran informasi rute secara dinamis antarrouter.",
    problem:
      "Jaringan yang berubah membutuhkan mekanisme pembaruan jalur tanpa konfigurasi rute manual pada setiap router.",
    role: "Mengonfigurasi routing dinamis dan menguji pembaruan rute antarrouter.",
    process:
      "Mengaktifkan protokol routing, menghubungkan jaringan, lalu mengamati proses pertukaran dan penyesuaian rute.",
    result:
      "Router dapat bertukar informasi rute dan menentukan jalur komunikasi antarjaringan secara dinamis.",
    tools: ["Routing Protocol", "Network Routing", "Router"],
    links: [
      { label: "YouTube", href: "https://youtu.be/Zql3xgTidNc" },
    ],
    networking: {
      goal: "Memahami pertukaran rute otomatis antarrouter.",
      devices: ["Router", "Switch", "Komputer"],
      outcome: "Informasi rute berhasil dipertukarkan dan jalur jaringan dapat disesuaikan.",
    },
  },
  {
    slug: "ospf-routing",
    title: "OSPF Routing",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/vmZh1nZqcVM/hqdefault.jpg",
    summary:
      "Pembelajaran dan konfigurasi protokol OSPF untuk menentukan jalur terbaik dalam komunikasi antarrouter pada jaringan.",
    overview:
      "Konfigurasi OSPF untuk membangun rute dinamis pada topologi jaringan yang melibatkan banyak router.",
    problem:
      "Router memerlukan protokol yang dapat menghitung jalur terbaik dan menyesuaikan rute ketika topologi berubah.",
    role: "Mengonfigurasi area dan jaringan OSPF pada router.",
    process:
      "Mendaftarkan jaringan pada proses OSPF, mengamati pertukaran neighbor, lalu menguji jalur komunikasi antarrouter.",
    result:
      "OSPF dapat menentukan jalur terbaik dan memperbarui rute berdasarkan kondisi topologi.",
    tools: ["OSPF", "Dynamic Routing", "Network Topology"],
    links: [
      { label: "YouTube", href: "https://youtu.be/vmZh1nZqcVM" },
    ],
    networking: {
      goal: "Membangun routing dinamis dengan protokol OSPF.",
      devices: ["Router", "Switch", "Komputer"],
      outcome: "Koneksi antarrouter berhasil dibangun melalui jalur OSPF.",
    },
  },
  {
    slug: "web-dns-server",
    title: "Web Server & DNS Server",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/IL6cq0hGwI0/hqdefault.jpg",
    summary:
      "Praktik konfigurasi Web Server dan DNS Server untuk memahami penyediaan layanan website serta penerjemahan nama domain menjadi alamat IP.",
    overview:
      "Konfigurasi layanan Web Server dan DNS Server pada lingkungan jaringan.",
    problem:
      "Website memerlukan server yang dapat menyajikan konten dan sistem DNS yang menerjemahkan nama domain menjadi alamat IP.",
    role: "Mengatur layanan web, record DNS, dan pengujian akses domain.",
    process:
      "Mengonfigurasi Web Server, membuat record DNS yang diperlukan, lalu menguji akses website melalui nama domain.",
    result:
      "Layanan website dapat diakses, dan nama domain berhasil diterjemahkan menjadi alamat IP.",
    tools: ["Web Server", "DNS", "Server Administration"],
    links: [
      { label: "YouTube", href: "https://youtu.be/IL6cq0hGwI0" },
    ],
    networking: {
      goal: "Menyiapkan layanan web dan resolusi nama domain.",
      devices: ["Web Server", "DNS Server", "Client"],
      outcome: "Website dapat diakses melalui domain yang dikonfigurasi pada DNS.",
    },
  },
  {
    slug: "ftp-server",
    title: "FTP Server",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/SpCOjtzJyOE/hqdefault.jpg",
    summary:
      "Mempelajari konfigurasi FTP Server sebagai layanan transfer file dalam jaringan, serta memahami proses pertukaran file antara client dan server.",
    overview:
      "Konfigurasi FTP Server untuk menyediakan layanan transfer file pada jaringan.",
    problem:
      "Pengguna membutuhkan layanan terpusat untuk mengunggah dan mengunduh file dari server.",
    role: "Mengatur pengguna, direktori, dan layanan transfer file FTP.",
    process:
      "Mengaktifkan FTP Server, menetapkan kredensial dan hak akses, lalu menguji pengiriman serta penerimaan file.",
    result:
      "Pertukaran file antara client dan server dapat dilakukan melalui layanan FTP.",
    tools: ["FTP", "File Transfer", "Client-Server"],
    links: [
      { label: "YouTube", href: "https://youtu.be/SpCOjtzJyOE" },
    ],
    networking: {
      goal: "Menyiapkan layanan transfer file antarperangkat.",
      devices: ["FTP Server", "Client"],
      outcome: "File berhasil dikirim dan diterima melalui FTP.",
    },
  },
  {
    slug: "mail-server",
    title: "Mail Server",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/_U0Kq52wtBQ/hqdefault.jpg",
    summary:
      "Mempelajari layanan Mail Server dan mekanisme komunikasi email dalam jaringan, termasuk peran server dalam proses pengiriman dan penerimaan pesan.",
    overview:
      "Konfigurasi layanan Mail Server untuk pengiriman dan penerimaan email pada jaringan.",
    problem:
      "Komunikasi email membutuhkan server yang mengatur proses pengiriman, penerimaan, dan penyimpanan pesan.",
    role: "Mengonfigurasi layanan mail server dan menguji komunikasi email antarclient.",
    process:
      "Menyiapkan akun dan layanan email, mengatur protokol yang diperlukan, lalu menguji pengiriman serta penerimaan pesan.",
    result:
      "Pesan email dapat dikirim dan diterima melalui layanan Mail Server.",
    tools: ["Mail Server", "Email Protocol", "Client-Server"],
    links: [
      { label: "YouTube", href: "https://youtu.be/_U0Kq52wtBQ" },
    ],
    networking: {
      goal: "Memahami proses pengiriman dan penerimaan email.",
      devices: ["Mail Server", "Client"],
      outcome: "Pesan berhasil dikirim dan diterima melalui protokol email.",
    },
  },
  {
    slug: "wireless-dhcp-server",
    title: "Wireless & DHCP Server",
    category: "networking",
    thumbnail: "https://img.youtube.com/vi/MgD6bKHvRmk/hqdefault.jpg",
    summary:
      "Praktik jaringan wireless dan DHCP Server untuk memahami konektivitas nirkabel serta proses pemberian alamat IP secara otomatis kepada perangkat yang terhubung.",
    overview:
      "Konfigurasi jaringan nirkabel dan DHCP Server untuk pembagian alamat IP otomatis.",
    problem:
      "Perangkat wireless membutuhkan layanan autentikasi jaringan dan alamat IP agar dapat berkomunikasi dengan jaringan.",
    role: "Mengatur akses point, pool DHCP, dan memverifikasi alamat IP client.",
    process:
      "Mengonfigurasi konektivitas wireless, membuat pool DHCP, lalu menguji perangkat yang memperoleh alamat IP secara otomatis.",
    result:
      "Perangkat wireless dapat terhubung dan mendapatkan alamat IP dari DHCP Server.",
    tools: ["Wireless Network", "DHCP", "IP Configuration"],
    links: [
      { label: "YouTube", href: "https://youtu.be/MgD6bKHvRmk" },
    ],
    networking: {
      goal: "Menghubungkan perangkat secara nirkabel dengan alamat IP otomatis.",
      devices: ["Access Point", "DHCP Server", "Wireless Client"],
      outcome: "Client berhasil terhubung dan menerima alamat IP dari DHCP.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
