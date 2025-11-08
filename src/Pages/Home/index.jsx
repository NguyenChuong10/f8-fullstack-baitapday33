import '../css/index.css'
function Home(){
    return(
        <section className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-sm font-medium">Welcome to Our Platform</span>
          </div>

          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Chào Mừng Đến Với
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Website Của Chúng Tôi
            </span>
          </h1>

          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Khám phá những giải pháp sáng tạo và hiện đại cho doanh nghiệp của bạn. 
            Chúng tôi mang đến trải nghiệm tốt nhất với công nghệ tiên tiến.
          </p>

          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20">
              Bắt Đầu Ngay
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-700">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-all">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tốc Độ Nhanh</h3>
            <p className="text-gray-400">Hiệu suất vượt trội với công nghệ tối ưu hóa tiên tiến nhất.</p>
          </div>

          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-all">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bảo Mật Cao</h3>
            <p className="text-gray-400">Dữ liệu được mã hóa và bảo vệ với tiêu chuẩn quốc tế.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-all">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Thiết Kế Đẹp</h3>
            <p className="text-gray-400">Giao diện hiện đại, thân thiện và dễ sử dụng cho mọi người.</p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">10K+</div>
            <div className="text-gray-400">Người Dùng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-gray-400">Dự Án</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-gray-400">Hài Lòng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-400">Hỗ Trợ</div>
          </div>
        </div>
      </section>
    );
}

export default Home;