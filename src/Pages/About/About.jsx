import React from 'react';

import "../css/index.css";

function About() {
  return (
    <div className="min-h-screen bg-slate-900 px-4 py-12">
   
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-3">Về Chúng Tôi</h1>
        <p className="text-slate-400">
          Đội ngũ chuyên nghiệp với nhiều năm kinh nghiệm trong ngành công nghệ.
        </p>
        <p className="text-slate-400">
          Chúng tôi cam kết mang đến những giải pháp tốt nhất cho khách hàng.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
        {/* Mission Card */}
        <div className="bg-slate-800 rounded-lg p-8 border border-emerald-500/30 hover:border-emerald-500 transition-all">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Sứ Mệnh</h3>
          <p className="text-slate-400">
            Cung cấp các giải pháp công nghệ tiên tiến, giúp doanh nghiệp chuyển đổi số thành công và phát triển bền vững trong thời đại 4.0.
          </p>
        </div>


        <div className="bg-slate-800 rounded-lg p-8 border border-emerald-500/30 hover:border-emerald-500 transition-all">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Tầm Nhìn</h3>
          <p className="text-slate-400">
            Trở thành đối tác công nghệ hàng đầu tại Việt Nam, được tin tưởng và lựa chọn bởi các doanh nghiệp trong và ngoài nước.
          </p>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Giá Trị Cốt Lõi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-all">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sáng Tạo</h3>
            <p className="text-slate-400">Luôn đổi mới và tìm kiếm những giải pháp độc đáo cho mọi thách thức.</p>
          </div>

         
          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-all">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Đồng Hành</h3>
            <p className="text-slate-400">Đặt khách hàng làm trung tâm và đồng hành cùng họ trên mọi hành trình.</p>
          </div>

       
          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-all">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Chất Lượng</h3>
            <p className="text-slate-400">Cam kết về chất lượng dịch vụ và sản phẩm với tiêu chuẩn quốc tế.</p>
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Đội Ngũ Của Chúng Tôi</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">50+</div>
            <div className="text-slate-400">Chuyên Gia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">200+</div>
            <div className="text-slate-400">Dự Án</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">15+</div>
            <div className="text-slate-400">Năm Kinh Nghiệm</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">99%</div>
            <div className="text-slate-400">Hài Lòng</div>
          </div>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Công Nghệ Sử Dụng</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'].map((tech) => (
            <div key={tech} className="bg-slate-800 rounded-lg p-4 text-center hover:bg-slate-700 transition-all border border-slate-700 hover:border-emerald-500">
              <div className="text-emerald-500 font-semibold">{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;