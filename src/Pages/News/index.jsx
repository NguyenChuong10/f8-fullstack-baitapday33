import "../css/index.css"

function News() {
    return (
     <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Tin Tức</h1>
          <p className="text-slate-400">Cập nhật thông tin mới nhất</p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
     
          <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" 
                 alt="Công nghệ" 
                 className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Xu Hướng Công Nghệ 2024
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                Khám phá những xu hướng công nghệ mới nhất đang định hình tương lai.
              </p>
              <p className="text-emerald-400 text-sm">08 Nov 2025</p>
            </div>
          </div>

          
          <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" 
                 alt="Bảo mật" 
                 className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Bảo Mật Thông Tin
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                Tìm hiểu các phương pháp bảo mật để bảo vệ dữ liệu của bạn.
              </p>
              <p className="text-emerald-400 text-sm">07 Nov 2025</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" 
                 alt="Thiết kế" 
                 className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Thiết Kế UX/UI
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                Những nguyên tắc thiết kế tạo ra trải nghiệm người dùng tuyệt vời.
              </p>
              <p className="text-emerald-400 text-sm">06 Nov 2025</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                 alt="Doanh nghiệp" 
                 className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Phát Triển Doanh Nghiệp Số
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                Hướng dẫn xây dựng chiến lược chuyển đổi số cho doanh nghiệp.
              </p>
              <p className="text-emerald-400 text-sm">05 Nov 2025</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                 alt="Cloud" 
                 className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Cloud Computing
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                Tận dụng sức mạnh của điện toán đám mây cho doanh nghiệp.
              </p>
              <p className="text-emerald-400 text-sm">04 Nov 2025</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                 alt="Agile" 
                 className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Agile & Scrum
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                Phương pháp quản lý dự án hiện đại và hiệu quả.
              </p>
              <p className="text-emerald-400 text-sm">03 Nov 2025</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    );
}

export default News;