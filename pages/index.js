import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import products from '../data/products';
import projects from '../data/projects';
import testimonials from '../data/testimonials';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const strengths = [
  {
    title: 'Engineering Excellence',
    description: 'Menggunakan profil uPVC kelas dunia dengan standard EN untuk memastikan performa maksimal.',
    icon: '🛠️'
  },
  {
    title: 'Sertifikasi Lengkap',
    description: 'Produk tersertifikasi ISO, uji kebocoran, dan uji ketahanan untuk menjamin keamanan & kenyamanan.',
    icon: '📜'
  },
  {
    title: 'Tim Profesional',
    description: 'Tenaga ahli berpengalaman dalam desain, produksi, dan instalasi sesuai kebutuhan proyek.',
    icon: '👷'
  }
];

const featuredProducts = products.slice(0, 3);
const highlightedProjects = projects.slice(0, 3);

const HomePage = () => (
  <Layout>
    <SEOHead />
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-light to-white">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute right-10 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[140px]"></div>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center px-6 py-24 lg:flex-row lg:py-32">
        <motion.div
          className="max-w-2xl text-center lg:text-left"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={heroVariants}
            className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-gray-500 shadow"
          >
            Distributor Kusen uPVC
          </motion.span>
          <motion.h1 variants={heroVariants} className="mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Your Trusted Partner for uPVC Doors & Windows
          </motion.h1>
          <motion.p variants={heroVariants} className="mt-6 text-base text-gray-600 sm:text-lg">
            Hadir dengan teknologi terkini, desain modern, dan layanan profesional untuk solusi pintu dan jendela uPVC yang
            tahan lama, kedap suara, dan ramah lingkungan.
          </motion.p>
          <motion.div variants={heroVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-outline">
              Get a Quote
            </Link>
          </motion.div>
          <motion.div
            variants={heroVariants}
            className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3"
          >
            {[
              { label: 'Pengalaman', value: '15+ Tahun' },
              { label: 'Proyek Selesai', value: '450+' },
              { label: 'Kepuasan Klien', value: '98%' }
            ].map((stat) => (
              <div key={stat.label} className="card p-6">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-dark">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-center lg:mb-0 lg:ml-16"
        >
          <div className="relative h-[420px] w-[320px] sm:h-[480px] sm:w-[360px]">
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-3xl border border-primary/20"></div>
            <Image
              src="https://images.unsplash.com/photo-1529429617124-aee02c06437f?auto=format&fit=crop&w=900&q=80"
              alt="Modern uPVC doors installation"
              fill
              className="rounded-[2.5rem] object-cover shadow-2xl shadow-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20" data-aos="fade-up">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="section-title">Keunggulan Retto uPVC Makassar</h2>
        <p className="section-subtitle">
          Kami menghadirkan rangkaian produk uPVC yang dirancang untuk ketahanan tinggi, efisiensi energi, serta penampilan
          modern yang menambah nilai estetika bangunan Anda.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {strengths.map((item) => (
          <div key={item.title} className="card h-full p-8" data-aos="zoom-in" data-aos-delay="150">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-3xl">
              {item.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-dark">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white py-20" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="section-title">Produk Unggulan</h2>
            <p className="section-subtitle">
              Pilih profil uPVC yang sesuai dengan kebutuhan desain dan performa bangunan Anda.
            </p>
          </div>
          <Link href="/products" className="btn-outline self-start md:self-auto">
            Lihat Semua Produk
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id} className="card group overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-dark">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{product.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  {product.specs.slice(0, 3).map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  Explore Detail
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-dark via-dark/95 to-dark py-24" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="section-title text-white">Testimoni Klien</h2>
          <p className="section-subtitle text-gray-300">
            Kepercayaan klien kami dibangun melalui kualitas produk, detail instalasi, dan layanan purna jual yang sigap.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="card h-full bg-white/5 p-8 text-left shadow-none">
              <p className="text-sm leading-relaxed text-gray-200">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">{testimonial.role}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-light py-20" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="section-title">Proyek Terbaru</h2>
            <p className="section-subtitle">
              Referensi proyek hunian dan komersial yang memperlihatkan kualitas instalasi dan finishing produk kami.
            </p>
          </div>
          <Link href="/projects" className="btn-outline self-start md:self-auto">
            Jelajahi Semua Proyek
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {highlightedProjects.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-3xl bg-white shadow-lg" data-aos="fade-up">
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={`${project.name} - ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium uppercase tracking-widest text-primary">
                    {project.category === 'residential' ? 'Residential' : 'Commercial'}
                  </p>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-xs text-gray-200">{project.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden py-24" data-aos="fade-up">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529429617124-aee02c06437f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-fixed bg-center"></div>
      <div className="absolute inset-0 bg-dark/80"></div>
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <h2 className="text-3xl font-semibold sm:text-4xl">Siap meningkatkan kualitas bangunan Anda?</h2>
        <p className="mt-6 text-base text-gray-200 sm:text-lg">
          Hubungi kami untuk konsultasi gratis dan dapatkan rekomendasi sistem pintu dan jendela uPVC terbaik untuk proyek Anda.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Hubungi Tim Ahli
          </Link>
          <Link href="/projects" className="btn-outline border-white text-white hover:border-transparent">
            Lihat Portofolio
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
