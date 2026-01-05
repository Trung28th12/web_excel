document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. CƠ SỞ DỮ LIỆU BÀI VIẾT (DATABASE) ---
    // Bạn chỉ cần khai báo danh sách bài viết ở đây.
    // keywords: là những từ khóa phụ mà bạn nghĩ người dùng sẽ tìm.
    const database = [
        { 
            title: "Hàm VLOOKUP dò tìm dữ liệu", 
            url: "index.html", 
            keywords: ["vlookup", "dò tìm", "tra cứu", "cột", "bảng"] 
        },
        { 
            title: "Tuyệt chiêu Pivot Table báo cáo", 
            url: "pivot.html", 
            keywords: ["pivot", "báo cáo", "tổng hợp", "phân tích", "xoay bảng"] 
        },
        { 
            title: "Tải mẫu Bảng Chấm Công 2026", 
            url: "template.html", 
            keywords: ["chấm công", "tải file", "download", "lương", "mẫu", "excel"] 
        },
        { 
            title: "Hàm IF lồng nhau và xếp loại", 
            url: "if_nested.html", 
            keywords: ["if", "điều kiện", "xếp loại", "học sinh", "logic", "nếu"] 
        },
        { 
            title: "Tổng hợp hàm cơ bản (SUM, AVERAGE, COUNT)", 
            url: "basic_functions.html", 
            keywords: ["cơ bản", "tính tổng", "trung bình", "đếm", "max", "min", "count", "sum"] 
        },
        {
            title: "Thư viện Biểu mẫu Excel (Kho, Lương, TC)",
            url: "templates.html",
            keywords: ["biểu mẫu", "template", "mẫu file", "thư viện", "tải về"]
        },
        { 
            title: "File Quản lý Kho Nhập Xuất Tồn", 
            url: "inventory.html", 
            keywords: ["kho", "tồn kho", "nhập xuất", "hàng hóa", "kiểm kê"] 
        },
        { 
            title: "Hướng dẫn vẽ Biểu đồ (Chart) chuyên nghiệp", 
            url: "charts.html", 
            keywords: ["biểu đồ", "chart", "vẽ", "đồ thị", "combo chart", "báo cáo", "hình ảnh"] 
        },
        { 
            title: "Tổng hợp lỗi Excel thường gặp và cách sửa (#N/A, #REF)", 
            url: "troubleshoot.html", 
            keywords: ["lỗi", "bug", "error", "#n/a", "#value", "#ref", "#div/0", "không chạy", "công thức"] 
        },
        { 
            title: "Thư viện Hàm Excel (Tra cứu nhanh)", 
            url: "functions.html", 
            keywords: ["hàm", "function", "cú pháp", "công thức", "tra cứu", "left", "right", "mid", "date"] 
        },
        { 
            title: "Học Google Sheets: Hàm ImportRange và Query", 
            url: "sheets.html", 
            keywords: ["sheets", "google sheet", "online", "importrange", "query", "googlefinance", "đám mây", "chia sẻ"] 
        },
        { 
            title: "File Quản lý Thu Chi Cá Nhân (6 chiếc lọ)", 
            url: "budget.html", 
            keywords: ["thu chi", "tiền", "chi tiêu", "ví", "tiết kiệm", "kế toán", "ngân sách"] 
        },
        { 
            title: "Xóa dữ liệu trùng lặp (Remove Duplicates)", 
            url: "remove_duplicates.html", 
            keywords: ["trùng", "lặp", "duplicate", "xóa trùng", "unique", "lọc", "sạch"] 
        },
        { 
            title: "Hàm cắt chuỗi LEFT, RIGHT, MID", 
            url: "text_functions.html", 
            keywords: ["chuỗi", "text", "cắt", "tách", "họ tên", "left", "right", "mid", "len"] 
        }
        // Sau này có bài mới, bạn copy 1 dòng trên, dán xuống đây và sửa lại thông tin là xong.
    ];

    // --- 2. HÀM HỖ TRỢ: XÓA DẤU TIẾNG VIỆT ---
    // Giúp tìm kiếm "du lieu" vẫn ra "dữ liệu"
    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Một số ký tự đặc biệt
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); 
        return str.toLowerCase().trim();
    }

    // --- 3. CHỨC NĂNG TÌM KIẾM CHÍNH ---
    const searchBtn = document.querySelector('.search-box button'); // Nút tìm ở trang chủ
    const searchInput = document.querySelector('.search-box input'); // Ô nhập liệu ở trang chủ
    const sidebarInput = document.querySelector('.sidebar-widget input'); // Ô tìm ở sidebar (các trang con)

    // Hàm xử lý tìm kiếm chung cho cả 2 ô
    function performSearch(inputElement) {
        if (!inputElement) return; // Nếu không tìm thấy ô nhập thì thoát

        const rawKeyword = inputElement.value; // Lấy từ khóa người dùng nhập
        const keyword = removeVietnameseTones(rawKeyword); // Chuyển về không dấu, chữ thường

        if (keyword === "") {
            alert("Bạn chưa nhập nội dung tìm kiếm!");
            return;
        }

        // Lọc danh sách bài viết
        // Tìm xem từ khóa có nằm trong Tiêu đề hoặc Danh sách từ khóa (keywords) không
        const results = database.filter(post => {
            const postTitle = removeVietnameseTones(post.title);
            const postKeywords = post.keywords.map(k => removeVietnameseTones(k));
            
            // Kiểm tra: Từ khóa có trong Tiêu đề HOẶC có trong danh sách keywords không?
            return postTitle.includes(keyword) || postKeywords.some(k => k.includes(keyword));
        });

        // --- XỬ LÝ KẾT QUẢ ---
        if (results.length === 0) {
            alert(`Rất tiếc, không tìm thấy bài viết nào cho từ khóa: "${rawKeyword}"`);
        } 
        else if (results.length === 1) {
            // Nếu chỉ có 1 kết quả duy nhất -> Chuyển hướng luôn
            window.location.href = results[0].url;
        } 
        else {
            // Nếu có nhiều kết quả (VD: tìm "Hàm" ra cả VLOOKUP và IF)
            // Vì chúng ta chưa làm trang kết quả tìm kiếm riêng, nên tạm thời sẽ chuyển đến bài đầu tiên
            // Và thông báo cho người dùng biết.
            let message = `Tìm thấy ${results.length} bài viết liên quan:\n`;
            results.forEach(item => {
                message += `- ${item.title}\n`;
            });
            message += `\nĐang chuyển bạn đến bài viết phù hợp nhất: "${results[0].title}"`;
            
            alert(message);
            window.location.href = results[0].url;
        }
    }

    // Gán sự kiện cho Ô tìm kiếm lớn ở TRANG CHỦ
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput);
        });
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch(searchInput);
        });
    }

    // Gán sự kiện cho Ô tìm kiếm nhỏ ở SIDEBAR (các trang bài viết)
    if (sidebarInput) {
        sidebarInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch(sidebarInput);
        });
    }

    // --- 4. TƯƠNG TÁC THẺ BÀI VIẾT (Click vào card) ---
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('h3 a');
            if (link) window.location.href = link.getAttribute('href');
        });
        card.style.cursor = 'pointer';
    });

});