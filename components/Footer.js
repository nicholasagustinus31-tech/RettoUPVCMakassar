import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
      <div>
        <div className="mb-4 flex items-center space-x-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold">
            R
          </span>
          <div>
            <p className="text-sm text-gray-300">PT. Retto Indonesia</p>
            <p className="text-lg font-semibold">uPVC Makassar</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-gray-400">
          Distributor kusen uPVC terpercaya dengan solusi inovatif untuk kebutuhan pintu dan jendela hunian
          maupun proyek komersial di seluruh Indonesia Timur.
        </p>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">Company</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">Contact</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li>Jl. Example No. 123, Makassar</li>
          <li>Email: hello@retto-upvc.com</li>
          <li className="flex items-center space-x-2">
            <FaPhone className="text-primary" />
            <span>+62 812-3456-7890</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">Follow Us</h4>
        <div className="flex items-center gap-3">
          <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-primary">
            <FaFacebookF />
          </Link>
          <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-primary">
            <FaInstagram />
          </Link>
          <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-primary">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Retto uPVC Makassar. All rights reserved.
    </div>
  </footer>
);

export default Footer;
