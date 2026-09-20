const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        /**
         * تابع اصلی برای جابجایی بین فرم‌ها با افکت محو شدن
         * @param {string} formName - 'login' یا 'signup'
         */
        function toggleForm(formName) {
            // 1. غیرفعال کردن هر دو فرم و آماده‌سازی برای انیمیشن
            loginForm.classList.remove('active');
            signupForm.classList.remove('active');

            // استفاده از setTimeout برای اطمینان از اجرای انیمیشن خروج قبل از تغییر نمایش
            setTimeout(() => {
                if (formName === 'login') {
                    loginForm.classList.add('active');
                } else {
                    signupForm.classList.add('active');
                }
            }, 100); // 100ms برای فاصله زمانی کوتاه
        }

        /**
         * مدیریت ارسال فرم
         * @param {Event} event - رویداد ارسال
         * @param {string} type - نوع فرم ('login' یا 'signup')
         */
        function handleFormSubmit(event, type) {
            event.preventDefault(); // جلوگیری از رفرش صفحه
            
            // شبیه‌سازی فرایند ارسال
            const button = event.target.querySelector('button');
            button.textContent = 'در حال پردازش...';
            button.disabled = true;

            setTimeout(() => {
                alert(`فرم ${type === 'login' ? 'ورود' : 'ثبت‌نام'} با موفقیت انجام شد! (این یک شبیه‌سازی است)`);
                
                // بازگرداندن وضعیت دکمه
                button.textContent = type === 'login' ? 'ورود' : 'ثبت‌نام';
                button.disabled = false;

                // در صورت موفقیت در ثبت نام، معمولا به صفحه ورود هدایت می شود.
                if (type === 'signup') {
                    toggleForm('login');
                }
            }, 1500);
        }