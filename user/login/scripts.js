document.getElementById('login-toggle').classList.add('active');
document.getElementById('login-form').style.display = 'block';

function toggleForm(form) {
    if (form === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-toggle').classList.add('active');
        document.getElementById('register-toggle').classList.remove('active');
    } else {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('login-toggle').classList.remove('active');
        document.getElementById('register-toggle').classList.add('active');
    }
}

function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email === '' || password === '') {
        alert('请输入邮箱和密码');
        return false;
    }
    return true;
}

function validateRegister() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (email === '' || password === '' || confirmPassword === '') {
        alert('请填写所有字段');
        return false;
    }

    if (password !== confirmPassword) {
        alert('密码不匹配');
        return false;
    }

    return true;
}
