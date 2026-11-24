// Site-wide facts used by metadata, structured data, sitemap and the footer.
export const site = {
  url: 'https://pensphere.ng',
  name: 'PenSphere',
  formerName: 'PayThru',
  title: 'PenSphere – PenCom-Approved Pension Remittance in Nigeria',
  description:
    'PenCom-approved pension remittance for Nigerian employers. Upload schedules, validate employee PINs and remit to every PFA and custodian in one place.',
  // Branded 1200x630 share image served from public/og-image.jpg.
  ogImage: 'https://pensphere.ng/og-image.jpg',
  logo: 'https://res.cloudinary.com/dfvx7yxrc/image/upload/v1733925145/Logo_iezszq.png',
  company: {
    legalName: 'Pethahiah Rehoboth International Limited',
    streetAddress: 'All Seasons Plaza, 24 Lateef Jakande Road, Agidingbi',
    locality: 'Ikeja',
    region: 'Lagos',
    country: 'NG',
    phone: '+234-916-643-1626',
    phoneLink: 'tel:+2349166431626',
    email: 'support@pethahiah.com',
  },
  // PenCom's official list of approved Payment Solution Service Providers (PSSPs).
  pencomPsspList:
    'https://www.pencom.gov.ng/wp-content/uploads/2025/11/The-online-Pension-Contribution-Remittance-System-List-of-PSSPs-1-21-2.pdf',
} as const;

// Public routes, used for the sitemap.
export const publicRoutes = [
  '/',
  '/how-it-works',
  '/contact',
  '/faqs',
  '/privacy',
  '/terms',
  '/useragreement',
] as const;
