import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import products from '../data/products';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Layout>
      <SEOHead
        title="Produk uPVC | Retto uPVC Makassar"
        description="Temukan pilihan lengkap profil pintu dan jendela uPVC: swing door, sliding door, jungkit, lipat, dan pivot dengan spesifikasi teknis lengkap."
      />
      <section className="bg-light py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-semibold text-dark">Solusi Pintu & Jendela uPVC Premium</h1>
            <p className="mt-4 text-base text-gray-600">
              Pilih profil terbaik dengan kombinasi estetika modern, performa tinggi, dan durabilitas untuk proyek Anda.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="150">
            {products.map((product) => (
              <button
                type="button"
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  selectedProduct.id === product.id
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-white text-gray-600 hover:bg-primary/10'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]" data-aos="fade-up" data-aos-delay="200">
            <div className="card overflow-hidden">
              <div className="relative h-[440px] w-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-dark">{selectedProduct.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{selectedProduct.description}</p>
              </div>
            </div>

            <div className="card flex flex-col gap-8 p-8">
              <div>
                <h3 className="text-lg font-semibold text-dark">Spesifikasi Teknis</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  {selectedProduct.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark">Keunggulan</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  {selectedProduct.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto text-center"
              >
                {selectedProduct.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24" data-aos="fade-up">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: 'Kinerja Termal',
                description: 'Profil multi-chamber menjaga suhu ruangan tetap nyaman dan efisien energi.'
              },
              {
                title: 'Kedap Suara',
                description: 'Sistem rubber seal dan double glazing mengurangi kebisingan hingga 40 dB.'
              },
              {
                title: 'Keamanan Maksimal',
                description: 'Multi-point locking system memastikan keamanan terbaik untuk setiap pintu dan jendela.'
              }
            ].map((item) => (
              <div key={item.title} className="card p-8">
                <h3 className="text-xl font-semibold text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
