
export interface NewsletterSubmitProps {
  email: string;
  source?: 'footer' | 'banner' | 'modal' | 'account';
}

export interface NewsletterState {
  isBannerDismissed: boolean;
  isModalShown: boolean;
}
