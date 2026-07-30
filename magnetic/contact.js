/* ============================================
   contact.js — Form Validation & EmailJS Send
   ============================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    const form      = document.getElementById('contact-form');
    const submitBtn = document.getElementById('btn-submit');

    if (!form) return;

    /* ---- Validation rules ---- */
    const rules = {
      name:    v => v.trim().length >= 2    || 'Please enter your full name.',
      email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email.',
      subject: v => v.trim().length >= 2    || 'Please select a subject.',
      message: v => v.trim().length >= 20   || 'Message should be at least 20 characters.',
    };

    function showError(fieldId, msg) {
      const field   = document.getElementById(fieldId);
      let   errEl   = field.parentNode.querySelector('.form-error');
      if (!errEl) {
        errEl = document.createElement('span');
        errEl.className = 'form-error';
        Object.assign(errEl.style, {
          fontSize: '12px',
          color: '#F5931E',
          marginTop: '4px',
          display: 'block',
        });
        field.parentNode.appendChild(errEl);
      }
      errEl.textContent = msg;
      field.style.borderColor = 'rgba(245,147,30,0.6)';
    }

    function clearError(fieldId) {
      const field = document.getElementById(fieldId);
      const errEl = field.parentNode.querySelector('.form-error');
      if (errEl) errEl.textContent = '';
      field.style.borderColor = '';
    }

    function validateField(id) {
      if (!rules[id]) return true;
      const field  = document.getElementById(id);
      const result = rules[id](field.value);
      if (result !== true) { showError(id, result); return false; }
      clearError(id);
      return true;
    }

    // Validate on blur
    Object.keys(rules).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('blur', () => validateField(id));
    });

    /* ---- Set button state ---- */
    function setBtnState(state) {
      const states = {
        idle:    { text: 'Send Message',  disabled: false, opacity: 1   },
        loading: { text: 'Sending…',      disabled: true,  opacity: 0.7 },
        success: { text: '✓ Message Sent!', disabled: true, opacity: 1  },
        error:   { text: 'Try Again',     disabled: false, opacity: 1   },
      };
      const s = states[state] || states.idle;
      submitBtn.textContent = s.text;
      submitBtn.disabled    = s.disabled;
      submitBtn.style.opacity = s.opacity;

      if (state === 'success') {
        submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      } else if (state === 'error') {
        submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #b91c1c)';
      } else {
        submitBtn.style.background = '';
      }
    }

    /* ---- Form submission ---- */
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Validate all fields
      const valid = Object.keys(rules).map(id => validateField(id)).every(Boolean);
      if (!valid) return;

      setBtnState('loading');

      const data = {
        name:    document.getElementById('name').value.trim(),
        email:   document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim(),
      };

      try {
        /*
          EmailJS integration:
          1. Sign up at https://www.emailjs.com
          2. Create a service + template
          3. Replace these values:
             - 'YOUR_SERVICE_ID'
             - 'YOUR_TEMPLATE_ID'
             - 'YOUR_PUBLIC_KEY'
        */
        if (typeof emailjs !== 'undefined') {
          await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            {
              from_name:  data.name,
              from_email: data.email,
              subject:    data.subject,
              message:    data.message,
            },
            'YOUR_PUBLIC_KEY'
          );
        } else {
          // Fallback: mailto link (works without EmailJS setup)
          const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
          );
          window.open(
            `mailto:your@email.com?subject=${encodeURIComponent(data.subject)}&body=${body}`
          );
        }

        setBtnState('success');
        form.reset();

        setTimeout(() => setBtnState('idle'), 4000);

      } catch (err) {
        console.error('Send failed:', err);
        setBtnState('error');
        setTimeout(() => setBtnState('idle'), 3000);
      }
    });

  });

})();
