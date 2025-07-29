import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Quote */}
        <div>
          <h1 className="text-3xl font-bold font-cursive text-black">Tastebite</h1>
          <p className="mt-4">
          &quot;On the other hand, we denounce with righteous indignation and dislike men
            who are so beguiled and demoralized by the charms of pleasure of the moment&quot;
          </p>
        </div>

        {/* Tastebite Links */}
        <div>
          <h3 className="text-black font-semibold mb-2">Tastebite</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-black font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Conditions</li>
            <li>Cookies</li>
            <li>Copyright</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-black font-semibold mb-2">Follow</h3>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-8 pt-4 pb-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2020 Tastebite – All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
}
