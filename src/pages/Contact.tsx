import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MessageCircle, Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Clock, MapPin } from 'lucide-react'
import SectionReveal, { StaggerContainer, StaggerItem } from '@/components/ui/SectionReveal'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE  as string
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE as string
const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

const contactLinks = [
  { icon: MessageCircle, label: 'WhatsApp',  value: '+234 808 650 6919',              href: 'https://wa.me/2348086506919',                  color: '#1DA851' },
  { icon: Mail,          label: 'Email',     value: 'abolajiabidemi2000@gmail.com',    href: 'mailto:abolajiabidemi2000@gmail.com',           color: '#D4AF37' },
  { icon: Linkedin,      label: 'LinkedIn',  value: 'linkedin.com/in/bidex',         href: 'https://www.linkedin.com/in/bidex/',            color: '#0A66C2' },
  { icon: Github,        label: 'GitHub',    value: 'github.com/bidex25',             href: 'https://github.com/bidex25',                    color: '#E0E0E0' },
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#1A1A1A',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12,
  padding: '13px 16px',
  color: '#FFFFFF',
  fontSize: 14,
  fontFamily: 'Inter',
  outline: 'none',
  transition: 'border-color 200ms',
}

export default function Contact() {
  const formRef   = useRef<HTMLFormElement>(null)
  const [state, setState]   = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(data: FormData) {
    const errs: Record<string, string> = {}
    const name    = (data.get('name')    as string)?.trim() ?? ''
    const email   = (data.get('email')   as string)?.trim() ?? ''
    const message = (data.get('message') as string)?.trim() ?? ''
    if (!name)                                    errs.name    = 'Name is required'
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errs.email   = 'Valid email required'
    if (!message || message.length < 20)          errs.message = 'Message must be at least 20 characters'
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return
    const data = new FormData(formRef.current)
    const errs = validate(data)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setState('sending')
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setState('success')
      formRef.current.reset()
    } catch {
      const name = data.get('name') as string, email = data.get('email') as string
      const service = data.get('service') as string, message = data.get('message') as string
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`)
      window.location.href = `mailto:abolajiabidemi2000@gmail.com?subject=Portfolio Enquiry&body=${body}`
      setState('error')
    }
  }

  return (
    <>
      {/* Page hero */}
      <section style={{ background: '#1A1A1A', paddingTop: 'calc(78px + 60px)', paddingBottom: 70 }}>
        <div className="section-inner">
          <SectionReveal>
            <span className="eyebrow">Get In Touch</span>
            <h1
              className="font-poppins font-black text-white mb-4"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              Contact
            </h1>
            <div className="flex flex-wrap items-center gap-3" style={{ color: '#A0A0A0', fontSize: 14, fontFamily: 'Inter' }}>
              <span className="flex items-center gap-1.5"><MapPin size={14} style={{ color: '#D4AF37' }} /> Lagos, Nigeria</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
              <span className="flex items-center gap-1.5"><Clock size={14} style={{ color: '#D4AF37' }} /> GMT+1 — reply within 24 hours</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padded bg-black">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Left */}
            <SectionReveal direction="left">
              <h2 className="font-poppins font-bold text-white mb-3" style={{ fontSize: 'clamp(20px,2.5vw,28px)' }}>Let's connect</h2>
              <p className="mb-8 leading-relaxed" style={{ color: '#A0A0A0', fontSize: 15, fontFamily: 'Inter' }}>
                Have a project in mind? Need a website, a marketing strategy, or both?
                Reach out — I'll get back to you within a business day.
              </p>

              <StaggerContainer className="space-y-3">
                {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                  <StaggerItem key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl px-4 py-3 group"
                      style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 250ms, transform 250ms' }}
                      onMouseEnter={e => { const d = e.currentTarget; d.style.borderColor = 'rgba(212,175,55,0.3)'; d.style.transform = 'translateX(4px)'; }}
                      onMouseLeave={e => { const d = e.currentTarget; d.style.borderColor = 'rgba(255,255,255,0.07)'; d.style.transform = 'none'; }}
                    >
                      <Icon size={18} style={{ color, flexShrink: 0 }} />
                      <div>
                        <p style={{ color: '#A0A0A0', fontSize: 11, fontFamily: 'Inter' }}>{label}</p>
                        <p className="font-inter text-white" style={{ fontSize: 13 }}>{value}</p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SectionReveal>

            {/* Right: form */}
            <SectionReveal direction="right">
              {state === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-20">
                  <CheckCircle size={52} style={{ color: '#22c55e', marginBottom: 16 }} />
                  <h3 className="font-poppins font-bold text-white mb-2" style={{ fontSize: 20 }}>Message sent!</h3>
                  <p style={{ color: '#A0A0A0', fontFamily: 'Inter', fontSize: 14 }}>I'll get back to you within 24 hours.</p>
                  <button onClick={() => setState('idle')} style={{ marginTop: 20, color: '#D4AF37', fontSize: 13, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', color: '#A0A0A0', fontSize: 13, fontFamily: 'Inter', marginBottom: 6 }}>Full Name</label>
                    <input name="name" type="text" placeholder="Your name" style={inputStyle}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    {errors.name && <p className="flex items-center gap-1 mt-1" style={{ color: '#f87171', fontSize: 11, fontFamily: 'Inter' }}><AlertCircle size={10} />{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', color: '#A0A0A0', fontSize: 13, fontFamily: 'Inter', marginBottom: 6 }}>Email Address</label>
                    <input name="email" type="email" placeholder="you@example.com" style={inputStyle}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    {errors.email && <p className="flex items-center gap-1 mt-1" style={{ color: '#f87171', fontSize: 11, fontFamily: 'Inter' }}><AlertCircle size={10} />{errors.email}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label style={{ display: 'block', color: '#A0A0A0', fontSize: 13, fontFamily: 'Inter', marginBottom: 6 }}>Service Needed</label>
                    <select name="service" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      <option value="">Select a service…</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Digital Marketing">Digital Marketing / Ads</option>
                      <option value="WordPress">WordPress Solutions</option>
                      <option value="Growth Strategy">Growth Strategy</option>
                      <option value="Other">Something else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', color: '#A0A0A0', fontSize: 13, fontFamily: 'Inter', marginBottom: 6 }}>Message</label>
                    <textarea name="message" rows={5} placeholder="Tell me about your project or goals…"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    {errors.message && <p className="flex items-center gap-1 mt-1" style={{ color: '#f87171', fontSize: 11, fontFamily: 'Inter' }}><AlertCircle size={10} />{errors.message}</p>}
                  </div>

                  {state === 'error' && (
                    <p className="flex items-center gap-1" style={{ color: '#f87171', fontSize: 12, fontFamily: 'Inter' }}>
                      <AlertCircle size={12} /> EmailJS unavailable — opening your email client.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="btn-gold-full w-full justify-center"
                    style={{ fontSize: 14, paddingBlock: 16 }}
                  >
                    {state === 'sending' ? (
                      <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  )
}
