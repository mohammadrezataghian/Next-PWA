import React from 'react';
import { Divider, Container } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide mb-4">شرکت</h3>
            <div className="flex items-center space-x-2 gap-1">
              <FmdGoodIcon className="text-blue-400" />
              <p className="text-sm">تهران</p>
            </div>
            <div className="flex items-center space-x-2 gap-1">
              <LocalPhoneIcon className="text-blue-400" />
              <p className="text-sm">09216158XXX</p>
            </div>
            <div className="flex items-center space-x-2 gap-1">
              <MailOutlineIcon className="text-blue-400" />
              <p className="text-sm">sadenstiles@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-wide mb-4">لینک سریع</h3>
            
            <div className="flex items-center group">
                
                <Link href="/" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                خانه
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                
                <Link href="/pages/aboutUs" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                درباره ی ما
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                
                <Link href="/pages/services" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                خدمات
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                
                <Link href="/pages/products" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                محصولات
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                
                <Link href="/pages/contactUs" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                ارتباط با ما
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
          </div>

          {/* Resources */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-wide mb-4">منابع</h3>
            <div className="flex items-center group">
                <Link href="/pages/blog" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                بلاگ
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                <Link href="/pages/news" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                خبرنامه
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                <Link href="/pages/privacy" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                حریم شخصی
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                <Link href="/pages/termsOfService" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                شرایط خدمات
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                <Link href="/pages/faq" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                سوالات متداول
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            <div className="flex items-center group">
                <Link href="/pages/support" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                پشتیبانی
                </Link>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
          </div>
        </div>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', marginY: 4 }} />
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
          <p className='text-center'> تمامی حقوق این وبسایت متعلق به طراح محمدرضا تقیان است و استفاده از مطالب آن پیگرد قانونی دارد.  {new Date().getFullYear()} ©</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;