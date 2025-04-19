import React from 'react';
import { Divider, Container } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter form submitted');
  };

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
            {['خانه', 'درباره ی ما', 'خدمات', 'محصولات', 'ارتباط با ما'].map((item) => (
              <div key={item} className="flex items-center group">
                
                <a href="#" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                  {item}
                </a>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-wide mb-4">منابع</h3>
            {['بلاگ', 'خبرنامه', 'حریم شخصی', 'شرایط خدمات', 'سوالات متداول', 'پشتیبانی'].map((item) => (
              <div key={item} className="flex items-center group">
                <a href="#" className="text-sm py-1 hover:text-blue-400 transition-colors duration-300">
                  {item}
                </a>
                <ChevronLeftIcon className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
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