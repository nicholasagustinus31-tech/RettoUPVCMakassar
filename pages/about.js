import Image from 'next/image';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';

const milestones = [
  { year: '2008', title: 'Founding', description: 'Memulai perjalanan sebagai distributor solusi pintu dan jendela uPVC di Makassar.' },
  {
    year: '2012',
    title: 'Factory Upgrade',
    description: 'Investasi pada fasilitas produksi modern dengan mesin otomatis dari Jerman untuk menjaga konsistensi kualitas.'
  },
  {
    year: '2017',
    title: 'Regional Expansion',
    description: 'Memperluas layanan ke Sulawesi Utara, Maluku, dan Nusa Tenggara dengan tim proyek lokal.'
  },
  {
    year: '2023',
    title: 'Green Commitment',
    description: 'Mengimplementasikan proses ramah lingkungan dengan material dapat didaur ulang dan efisiensi energi optimal.'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'Menerapkan teknologi profil dan aksesoris terbaru untuk performa terbaik di setiap instalasi.'
  },
  {
    title: 'Integrity',
    description: 'Menjaga transparansi, komitmen, dan kepercayaan klien dari konsultasi hingga purna jual.'
  },
  {
    title: 'Sustainability',
    description: 'Mengutamakan material ramah lingkungan dan efisiensi energi untuk kenyamanan jangka panjang.'
  }
];

const AboutPage = () => (
  <Layout>
    <SEOHead
      title="Tentang Retto uPVC Makassar | Distributor uPVC Profesional"
      description="Kenali profil perusahaan Retto uPVC Makassar, visi misi, dan komitmen kami dalam menghadirkan solusi pintu dan jendela uPVC berkualitas."
    />
    <section className="bg-light py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row">
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">About Us</span>
          <h1 className="mt-4 text-4xl font-semibold text-dark">Membangun kenyamanan dan keamanan setiap ruang</h1>
          <p className="mt-6 text-base text-gray-600">
            Sejak 2008, Retto uPVC Makassar menjadi mitra terpercaya untuk solusi pintu dan jendela uPVC. Kami menghadirkan
            produk berkualitas tinggi yang memenuhi standar internasional, didukung layanan konsultasi teknis, desain
            kustom, hingga instalasi profesional.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card p-6" data-aos="zoom-in" data-aos-delay="150">
              <h3 className="text-lg font-semibold text-dark">Visi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Menjadi penyedia solusi uPVC terdepan yang menghadirkan keamanan, estetika, dan efisiensi energi untuk bangunan
                di Indonesia Timur.
              </p>
            </div>
            <div className="card p-6" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-lg font-semibold text-dark">Misi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Memberikan layanan menyeluruh melalui inovasi berkelanjutan, tim profesional, dan komitmen terhadap kualitas di
                setiap proyek.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <div className="relative h-[520px] w-full overflow-hidden rounded-[3rem] shadow-2xl shadow-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
              alt="Tim produksi Retto uPVC Makassar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-24" data-aos="fade-up">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="section-title">Perjalanan Kami</h2>
        <p className="section-subtitle">
          Setiap tahap pertumbuhan kami mencerminkan komitmen untuk menghadirkan solusi terbaik dan pengalaman pelanggan yang
          mengesankan.
        </p>
      </div>
      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>
        <div className="space-y-12 px-6">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`flex flex-col gap-6 lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="lg:w-1/2">
                <div className="card h-full border-primary/10 p-8">
                  <span className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">{milestone.year}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-dark">{milestone.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{milestone.description}</p>
                </div>
              </div>
              <div className="lg:w-1/2" data-aos="zoom-in" data-aos-delay={index * 150 + 100}>
                <div className="h-full rounded-3xl border border-dashed border-primary/30 bg-light/60 p-8 text-sm text-gray-600">
                  Kami memastikan setiap tahap pertumbuhan fokus pada inovasi produk, peningkatan layanan, dan kepuasan pelanggan.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-r from-primary via-primary/90 to-primary py-24" data-aos="fade-up">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 text-white md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg">
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-100">{value.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white py-24" data-aos="fade-up">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="section-title">Mengapa memilih kami?</h2>
            <p className="section-subtitle">
              Kami memastikan setiap proyek berjalan lancar dengan dukungan penuh mulai dari konsultasi desain, pengukuran,
              produksi, hingga instalasi dan purna jual.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                'Tim teknis bersertifikasi dan berpengalaman',
                'Quality control berlapis dengan standar internasional',
                'Lead time produksi terukur dan transparan',
                'Garansi produk dan layanan purna jual responsif'
              ].map((item) => (
                <div key={item} className="card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">✔</div>
                  <p className="mt-4 text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card self-start p-8" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-dark">Kapasitas Produksi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Dengan fasilitas manufaktur modern, kami mampu memproduksi hingga 200 unit pintu dan jendela per minggu dengan
              kualitas konsisten.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-500">
              <li className="flex items-center justify-between">
                <span>Area Pabrik</span>
                <span className="font-semibold text-dark">2.000 m²</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tim Produksi</span>
                <span className="font-semibold text-dark">80+ personel</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Mesin CNC</span>
                <span className="font-semibold text-dark">15 unit</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Lead Time</span>
                <span className="font-semibold text-dark">14-21 hari</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
