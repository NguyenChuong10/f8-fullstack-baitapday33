import React from 'react';
import "../Footer/index.css"
import {  Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram , FaLinkedin , FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-cyan-400 text-xl font-bold mb-4">Website Của Chúng Tôi</h3>
            <p className="text-sm text-gray-400 mb-4">
              Khám phá những giải pháp sáng tạo và hiện đại cho doanh nghiệp của bạn.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-cyan-500 p-2 rounded-full transition-all duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-500 p-2 rounded-full transition-all duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-500 p-2 rounded-full transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-500 p-2 rounded-full transition-all duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Dịch Vụ</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Dự Án</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Liên Hệ</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-semibold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Phát Triển Web</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Ứng Dụng Di Động</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Thiết Kế UI/UX</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tư Vấn CNTT</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Services</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">k85/11a Nguyễn Lương Bằng</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-cyan-400 mr-2 flex-shrink-0" />
                <span className="text-sm">+84 917425622</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-cyan-400 mr-2 flex-shrink-0" />
                <span className="text-sm">nguyenchuong22062002@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 Website Của Chúng Tôi. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Chính Sách Bảo Mật</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Điều Khoản Dịch Vụ</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;