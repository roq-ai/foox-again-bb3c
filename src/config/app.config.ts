interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelance profile', 'Apply to jobs', 'Update application status', 'View job details'],
  ownerAbilities: [
    'Manage country data',
    'Manage freelance profiles',
    'Manage job postings',
    'Manage applications',
    'Manage hirings',
    'Manage user data',
    'Manage company data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5f018d04-de53-49c1-aa35-a929ab59b505',
};
