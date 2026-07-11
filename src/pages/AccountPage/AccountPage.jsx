import './AccountPage.css';
import { useState, useEffect } from 'react';
import { DesktopAccountPage } from './DesktopAccountPage';
import { MobileAccountPage } from './MobileAccountPage';
import './MobileAccountPage.css';

export function AccountPage({ isAuthenticated, setIsAuthenticated }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Shared user profile state
  const [profile, setProfile] = useState({
    name: 'Alexander Van Der Meer',
    email: 'alex.vdm@curated.ethos',
    defaultMobile: '+31 20 555 0142',
    secondaryEmail: 'alexander.vandermeer@studio.ethos',
    gender: 'Male',
    tier: 'Gold Tier Member',
    since: '2021'
  });

  // Shared addresses state — each address is a rich object
  const [addresses, setAddresses] = useState([
    {
      label: 'Home',
      street: 'Keizersgracht 482',
      city: 'Amsterdam',
      country: 'Netherlands',
      zip: '1017 EG',
      phone: '+31 20 555 0142',
      isDefault: true
    },
    {
      label: 'Studio',
      street: 'Nationalestraat 28',
      city: 'Antwerp',
      country: 'Belgium',
      zip: '2000',
      phone: '+32 3 222 0891',
      isDefault: false
    }
  ]);

  const [paymentAccounts, setPaymentAccounts] = useState([
    {
      label: 'Primary Wallet',
      method: 'eSewa',
      accountId: '9841-2233-8890',
      isDefault: true
    },
    {
      label: 'Backup Card',
      method: 'Stripe Pay',
      accountId: '4242 4242 4242 4242',
      isDefault: false
    }
  ]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileAccountPage
          profile={profile}
          setProfile={setProfile}
          addresses={addresses}
          setAddresses={setAddresses}
          paymentAccounts={paymentAccounts}
          setPaymentAccounts={setPaymentAccounts}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        <DesktopAccountPage
          profile={profile}
          setProfile={setProfile}
          addresses={addresses}
          setAddresses={setAddresses}
          paymentAccounts={paymentAccounts}
          setPaymentAccounts={setPaymentAccounts}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
    </>
  );
}

export default AccountPage;
