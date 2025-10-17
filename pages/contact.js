import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

const ContactPage = () => {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const emailjs = await import('emailjs-com');
      const token = recaptchaRef.current?.getValue();

      if (!token) {
        setStatus({ type: 'error', message: 'Mohon verifikasi reCAPTCHA terlebih dahulu.' });
        setIsSubmitting(false);
        return;
      }

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );

      setStatus({ type: 'success', message: 'Terima kasih! Pesan Anda telah kami terima dan akan segera kami respon.' });
      formRef.current.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      setStatus({ type: 'error', message: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Kontak Retto uPVC Makassar"
        description="Hubungi Retto uPVC Makassar untuk konsultasi pintu dan jendela uPVC. Tersedia formulir kontak, informasi kantor, dan lokasi di Google Maps."
      />
      <section className="bg-light py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-semibold text-dark">Hubungi Kami</h1>
            <p className="mt-4 text-base text-gray-600">
              Kami siap membantu Anda menentukan solusi uPVC terbaik untuk proyek hunian maupun komersial.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card p-10" data-aos="fade-right">
              <h2 className="text-2xl font-semibold text-dark">Formulir Konsultasi</h2>
              <p className="mt-3 text-sm text-gray-600">
                Isi formulir berikut untuk mendapatkan penawaran atau konsultasi teknis dari tim kami.
              </p>
              <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Nama Anda"
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Nomor Telepon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Pesan / Kebutuhan Proyek
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Jelaskan kebutuhan Anda"
                  ></textarea>
                </div>
                <div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your_recaptcha_site_key'}
                    className="rounded-2xl"
                  />
                </div>
                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
                {status.type && (
                  <p
                    className={`text-sm ${
                      status.type === 'success' ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-8" data-aos="fade-left">
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-dark">Informasi Kontak</h3>
                <ul className="mt-4 space-y-4 text-sm text-gray-600">
                  <li>
                    <span className="font-semibold text-dark">Alamat:</span> Jl. Example No. 123, Makassar
                  </li>
                  <li>
                    <span className="font-semibold text-dark">Email:</span> hello@retto-upvc.com
                  </li>
                  <li>
                    <span className="font-semibold text-dark">Telepon:</span> +62 812-3456-7890
                  </li>
                  <li>
                    <span className="font-semibold text-dark">Jam Operasional:</span> Senin - Sabtu (08.00 - 17.00 WITA)
                  </li>
                </ul>
              </div>
              <div className="card overflow-hidden">
                <iframe
                  title="Lokasi Retto uPVC Makassar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.7106520132685!2d119.42094856357834!3d-5.147665799923296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf030116641e2f%3A0x9d382c5992bdba58!2sMakassar!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-dark">Terhubung Dengan Kami</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Ikuti kanal sosial media kami untuk mendapatkan update proyek terbaru, promosi, dan tips perawatan uPVC.
                </p>
                <div className="mt-6 flex gap-4">
                  {[
                    { label: 'Instagram', href: '#' },
                    { label: 'Facebook', href: '#' },
                    { label: 'LinkedIn', href: '#' }
                  ].map((social) => (
                    <a key={social.label} href={social.href} className="btn-outline">
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
