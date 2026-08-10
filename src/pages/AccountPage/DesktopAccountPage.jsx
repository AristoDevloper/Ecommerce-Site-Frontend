import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function DesktopAccountPage({ profile, setProfile, addresses, setAddresses, paymentAccounts, setPaymentAccounts, setIsAuthenticated }) {
  // Profile modal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [tempProfileName, setTempProfileName] = useState(profile.name);
  const [tempProfileEmail, setTempProfileEmail] = useState(profile.email);
  const [tempProfileMobile, setTempProfileMobile] = useState(profile.defaultMobile || '');
  const [tempProfileSecondaryEmail, setTempProfileSecondaryEmail] = useState(profile.secondaryEmail || '');
  const [tempProfileGender, setTempProfileGender] = useState(profile.gender || '');
  const navigate = useNavigate();

  // Address modal
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [tempAddresses, setTempAddresses] = useState(JSON.parse(JSON.stringify(addresses)));

  // Payment modal
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [tempPaymentAccounts, setTempPaymentAccounts] = useState(JSON.parse(JSON.stringify(paymentAccounts || [])));

  const handleAddressFieldChange = (index, field, value) => {
    const updated = [...tempAddresses];
    updated[index] = { ...updated[index], [field]: value };
    setTempAddresses(updated);
  };

  const handleSetDefault = (index) => {
    const updated = tempAddresses.map((a, i) => ({ ...a, isDefault: i === index }));
    setTempAddresses(updated);
  };

  const handleAddAddress = () => {
    setTempAddresses([...tempAddresses, { label: '', street: '', city: '', country: '', zip: '', phone: '', isDefault: false }]);
  };

  const handleRemoveAddress = (index) => {
    if (tempAddresses.length <= 1) return;
    const updated = tempAddresses.filter((_, i) => i !== index);
    if (tempAddresses[index].isDefault && updated.length > 0) {
      updated[0].isDefault = true;
    }
    setTempAddresses(updated);
  };

  const handlePaymentFieldChange = (index, field, value) => {
    const updated = [...tempPaymentAccounts];
    updated[index] = { ...updated[index], [field]: value };
    setTempPaymentAccounts(updated);
  };

  const handleSetDefaultPayment = (index) => {
    const updated = tempPaymentAccounts.map((account, i) => ({ ...account, isDefault: i === index }));
    setTempPaymentAccounts(updated);
  };

  const handleAddPaymentAccount = () => {
    setTempPaymentAccounts([
      ...tempPaymentAccounts,
      { label: '', method: 'eSewa', accountId: '', isDefault: false }
    ]);
  };

  const handleRemovePaymentAccount = (index) => {
    if (tempPaymentAccounts.length <= 1) return;
    const updated = tempPaymentAccounts.filter((_, i) => i !== index);
    if (tempPaymentAccounts[index].isDefault && updated.length > 0) {
      updated[0].isDefault = true;
    }
    setTempPaymentAccounts(updated);
  };

  const defaultPaymentAccount = paymentAccounts.find((account) => account.isDefault) || paymentAccounts[0];

  const defaultAddress = addresses.find(a => a.isDefault) || addresses[0];

  const signout = async () => {
    try {
      const response = await fetch('https://ecommercesitebackend02.vercel.app/user_logout/', {
        method: 'POST',
        credentials: 'include'
      });
      if (response.ok) {
        setIsAuthenticated(false);
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-8 max-w-screen-2xl mx-auto w-full">
        {/* Hero Greeting Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-on-surface-variant font-label text-sm uppercase tracking-widest mb-4">Account Overview</h2>
              <h1 className="text-5xl md:text-6xl font-headline font-light tracking-tight text-primary">
                Welcome, <span className="italic">{profile.name.split(' ')[0]}.</span>
              </h1>
              <p className="mt-4 text-on-surface-variant font-body leading-relaxed max-w-lg">
                Manage your curated collection, track your latest acquisitions, and update your personal preferences for a tailored gallery experience.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="bg-surface-container-high px-6 py-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-tertiary-fixed text-on-tertiary-fixed shadow-inner">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Membership Status</p>
                  <p className="text-lg font-serif font-bold text-primary">{profile.tier}</p>
                </div>
              </div>
              <button className="text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors flex items-center gap-1.5 px-4 py-2 border border-outline-variant/20 rounded hover:border-error/30" onClick={signout}>
                <span className="material-symbols-outlined text-sm">logout</span> Sign Out
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Featured Card: Order History */}
          <Link className="group md:col-span-8 bg-surface-container-low hover:bg-white transition-all duration-500 rounded-xl overflow-hidden flex flex-col md:flex-row relative" to="/orders">
            <div className="p-10 flex flex-col justify-between flex-1 z-10">
              <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">package_2</span>
                <h3 className="text-3xl font-headline text-primary mb-2">Order History</h3>
                <p className="text-on-surface-variant text-sm max-w-xs">Track your active artifacts or review past purchases from the Ethos collection.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                VIEW ALL ORDERS <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-surface-variant relative grayscale group-hover:grayscale-0 transition-all duration-700">
              <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Minimalist shipping box packaging" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa76Hs4HmZLpwcxNDOtZaHmT1tk-ZGKFminCgw4O_PKo6nIVJo34qIfCReqjovaKylvSN1RY4orT2EbbZi79EQMg15u9ufDODv4pP_6oZzVI4aCTouYFxWYxAYFsMR-wUoWphMGkkI2TkVE_Ch6Nf04A_emVz-sZyd5Eqro0qnfVyRAug1XfGUJ3SEc3QMJd8dH7DsyMsUQUuZ7WW-r48ACR0g8buHdt5IRxocMKhX43aACCHQ5Pai3w" />
            </div>
          </Link>

          {/* Square Card: Wishlist */}
          <Link className="group md:col-span-4 bg-primary text-on-primary hover:bg-primary-container transition-all duration-500 rounded-xl p-10 flex flex-col justify-between overflow-hidden relative" to="/wishlist">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
              <span className="material-symbols-outlined text-[120px]">auto_awesome</span>
            </div>
            <div>
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <h3 className="text-3xl font-headline mb-2">Private Collection</h3>
              <p className="text-on-primary-container text-sm leading-relaxed">Your curated wishlist of artifacts waiting to be acquired.</p>
            </div>
            <div className="mt-8 flex items-center gap-2 font-bold text-sm tracking-wide">
              ACCESS WISHLIST <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </Link>

          {/* Medium Card: Personal Info */}
          <div className="group md:col-span-4 bg-white border border-outline-variant/10 hover:border-outline-variant transition-all duration-500 rounded-xl p-10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:rotate-12 transition-transform">person_edit</span>
              <h3 className="text-2xl font-headline text-primary mb-2">Identity</h3>
              <div className="space-y-1 mt-4">
                <p className="text-on-surface text-sm font-semibold">{profile.name}</p>
                <p className="text-on-surface-variant text-xs">{profile.email}</p>
              </div>
            </div>
            <div
              onClick={() => {
                setTempProfileName(profile.name);
                setTempProfileEmail(profile.email);
                setTempProfileMobile(profile.defaultMobile || '');
                setTempProfileSecondaryEmail(profile.secondaryEmail || '');
                setTempProfileGender(profile.gender || '');
                setIsProfileModalOpen(true);
              }}
              className="mt-8 flex items-center gap-2 text-primary font-bold text-sm cursor-pointer"
            >
              EDIT PROFILE <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          {/* Medium Card: Shipping */}
          <div className="group md:col-span-4 bg-surface-container-low hover:bg-white transition-all duration-500 rounded-xl p-10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:-translate-y-1 transition-transform">location_on</span>
              <h3 className="text-2xl font-headline text-primary mb-2">Destinations</h3>
              <p className="text-on-surface-variant text-sm mt-4">Manage {addresses.length} saved address{addresses.length !== 1 ? 'es' : ''}.</p>
              <p className="text-on-surface-variant text-xs italic mt-1">Default: {defaultAddress?.city}, {defaultAddress?.country}</p>
            </div>
            <div
              onClick={() => {
                setTempAddresses(JSON.parse(JSON.stringify(addresses)));
                setIsAddressModalOpen(true);
              }}
              className="mt-8 flex items-center gap-2 text-primary font-bold text-sm cursor-pointer"
            >
              MANAGE ADDRESSES <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          {/* Medium Card: Payment */}
          <div className="group md:col-span-4 bg-surface-container-low hover:bg-white transition-all duration-500 rounded-xl p-10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">account_balance_wallet</span>
              <h3 className="text-2xl font-headline text-primary mb-2">Financials</h3>
              <p className="text-on-surface-variant text-sm mt-4">{defaultPaymentAccount?.method || 'No payment method'} ending in {defaultPaymentAccount?.accountId || 'not set'}</p>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-tighter mt-1 opacity-60">{defaultPaymentAccount?.label || 'Add a payment account'}</p>
            </div>
            <div
              onClick={() => {
                setTempPaymentAccounts(JSON.parse(JSON.stringify(paymentAccounts || [])));
                setIsPaymentModalOpen(true);
              }}
              className="mt-8 flex items-center gap-2 text-primary font-bold text-sm cursor-pointer"
            >
              SECURE PAYMENTS <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Recent Acquisition Section */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-headline text-primary">Recent Acquisition</h3>
            <span className="text-sm font-label font-bold text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-primary cursor-pointer">VIEW ALL ACTIVITY</span>
          </div>
          <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-10 shadow-sm border border-outline-variant/5">
            <div className="w-32 h-40 bg-surface-container-low rounded flex-shrink-0">
              <img className="w-full h-full object-cover rounded shadow-md" alt="Obsidian Sculptural Vase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI_MkRLZmEQuxGq8zmYlaAmYh0mGUv9YAFvku2iGBC0fdDwDZMN53g-WDfvkZlsyivhtA69lvDTE5R5epzKm2DVmpNgmEPjmu1huyB1FnQZG63BYM9hHgRkdsfT1fso-m06NZb8lVKFIP-PIpeA20p6ukXPUU_v46Enp22Yq9RBRHEqXxQPvmhHJSBgN2lAicXxfU_KG2pKSz9l2METXYXO11Jf9hDLkYqxlBi61V2dwJAgekqaG0JtA" />
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Artifact</p>
                <p className="text-lg font-serif text-primary">Obsidian Sculptural Vase</p>
                <p className="text-sm text-on-surface-variant">Limited Edition / Series 04</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  <p className="text-lg font-serif text-primary">In Transit</p>
                </div>
                <p className="text-sm text-on-surface-variant">Estimated arrival: Oct 14</p>
              </div>
              <div className="flex items-center md:justify-end">
                <button className="px-8 py-3 premium-gradient text-on-primary text-xs font-bold tracking-widest uppercase rounded hover:opacity-90 transition-opacity">
                  TRACK SHIPMENT
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Upsell/Tier Info */}
        <section className="mt-24 rounded-2xl overflow-hidden relative">
          <div className="relative z-10 bg-primary/95 text-on-primary p-12 md:p-20 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-tertiary-fixed text-5xl mb-6">workspace_premium</span>
            <h3 className="text-4xl md:text-5xl font-headline mb-4">Elevate your Curated journey.</h3>
            <p className="text-primary-fixed-dim text-lg max-w-2xl mb-10 leading-relaxed">
              You are 1,200 points away from Platinum Tier. Platinum members receive early access to seasonal artifacts and complimentary courier delivery worldwide.
            </p>
            <button className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-4 font-bold tracking-widest text-sm uppercase hover:scale-105 transition-transform duration-300">
              EXPLORE BENEFITS
            </button>
          </div>
        </section>
      </main>

      {/* ───── Edit Profile Modal ───── */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 border border-outline-variant/10 relative">
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-2xl font-headline text-primary mb-6">Edit Identity</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={tempProfileName}
                  onChange={(e) => setTempProfileName(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-3 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  value={tempProfileEmail}
                  onChange={(e) => setTempProfileEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-3 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Default Mobile Number</label>
                <input
                  type="tel"
                  value={tempProfileMobile}
                  onChange={(e) => setTempProfileMobile(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-3 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Secondary Email</label>
                <input
                  type="email"
                  value={tempProfileSecondaryEmail}
                  onChange={(e) => setTempProfileSecondaryEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-3 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-2">Gender</label>
                <select
                  value={tempProfileGender}
                  onChange={(e) => setTempProfileGender(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-3 text-sm text-primary font-body"
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="flex-1 py-3 text-xs font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-high hover:opacity-90 rounded transition-opacity"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setProfile({
                    ...profile,
                    name: tempProfileName,
                    email: tempProfileEmail,
                    defaultMobile: tempProfileMobile,
                    secondaryEmail: tempProfileSecondaryEmail,
                    gender: tempProfileGender,
                  });
                  setIsProfileModalOpen(false);
                }}
                className="flex-1 py-3 text-xs font-label uppercase tracking-widest text-on-primary premium-gradient rounded hover:opacity-90 transition-opacity"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───── Manage Addresses Modal ───── */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 border border-outline-variant/10 relative max-h-[90vh] overflow-y-auto no-scrollbar">
            <button
              onClick={() => setIsAddressModalOpen(false)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-2xl font-headline text-primary mb-6">Manage Destinations</h3>

            <div className="space-y-8">
              {tempAddresses.map((addr, idx) => (
                <div key={idx} className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 relative">
                  {/* Address Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={addr.label}
                        onChange={(e) => handleAddressFieldChange(idx, 'label', e.target.value)}
                        placeholder="Label (e.g. Home)"
                        className="bg-transparent border-none focus:ring-0 text-lg font-headline text-primary p-0 w-40"
                      />
                      {addr.isDefault && (
                        <span className="text-[9px] uppercase tracking-widest font-bold text-tertiary bg-tertiary-fixed/20 px-2 py-0.5 rounded">Default</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {!addr.isDefault && (
                        <button
                          onClick={() => handleSetDefault(idx)}
                          className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors"
                        >
                          Set Default
                        </button>
                      )}
                      {tempAddresses.length > 1 && (
                        <button
                          onClick={() => handleRemoveAddress(idx)}
                          className="text-on-surface-variant hover:text-error transition-colors ml-2"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Address Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Street Address</label>
                      <input
                        type="text"
                        value={addr.street}
                        onChange={(e) => handleAddressFieldChange(idx, 'street', e.target.value)}
                        placeholder="Street address"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-2.5 text-sm text-primary font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">City</label>
                      <input
                        type="text"
                        value={addr.city}
                        onChange={(e) => handleAddressFieldChange(idx, 'city', e.target.value)}
                        placeholder="City"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-2.5 text-sm text-primary font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">ZIP / Postal Code</label>
                      <input
                        type="text"
                        value={addr.zip}
                        onChange={(e) => handleAddressFieldChange(idx, 'zip', e.target.value)}
                        placeholder="Postal code"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-2.5 text-sm text-primary font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Country</label>
                      <input
                        type="text"
                        value={addr.country}
                        onChange={(e) => handleAddressFieldChange(idx, 'country', e.target.value)}
                        placeholder="Country"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-2.5 text-sm text-primary font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={addr.phone}
                        onChange={(e) => handleAddressFieldChange(idx, 'phone', e.target.value)}
                        placeholder="+1 234 567 8901"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-2.5 text-sm text-primary font-body"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Address */}
            <button
              onClick={handleAddAddress}
              className="w-full mt-6 py-3 border border-dashed border-outline-variant/40 rounded-lg text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add</span> Add New Address
            </button>

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setIsAddressModalOpen(false)}
                className="flex-1 py-3 text-xs font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-high hover:opacity-90 rounded transition-opacity"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setAddresses(tempAddresses);
                  setIsAddressModalOpen(false);
                }}
                className="flex-1 py-3 text-xs font-label uppercase tracking-widest text-on-primary premium-gradient rounded hover:opacity-90 transition-opacity"
              >
                Save All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───── Manage Payment Accounts Modal ───── */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 border border-outline-variant/10 relative max-h-[90vh] overflow-y-auto no-scrollbar">
            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-2xl font-headline text-primary mb-6">Manage Payment Accounts</h3>

            <div className="space-y-8">
              {tempPaymentAccounts.map((account, idx) => (
                <div key={idx} className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={account.label}
                        onChange={(e) => handlePaymentFieldChange(idx, 'label', e.target.value)}
                        placeholder="Label (e.g. Primary Wallet)"
                        className="bg-transparent border-none focus:ring-0 text-lg font-headline text-primary p-0 w-56"
                      />
                      {account.isDefault && (
                        <span className="text-[9px] uppercase tracking-widest font-bold text-tertiary bg-tertiary-fixed/20 px-2 py-0.5 rounded">Default</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {!account.isDefault && (
                        <button
                          onClick={() => handleSetDefaultPayment(idx)}
                          className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors"
                        >
                          Set Default
                        </button>
                      )}
                      {tempPaymentAccounts.length > 1 && (
                        <button
                          onClick={() => handleRemovePaymentAccount(idx)}
                          className="text-on-surface-variant hover:text-error transition-colors ml-2"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Payment Method</label>
                      <select
                        value={account.method}
                        onChange={(e) => handlePaymentFieldChange(idx, 'method', e.target.value)}
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-2.5 text-sm text-primary font-body"
                      >
                        <option value="eSewa">eSewa</option>
                        <option value="Khalti">Khalti</option>
                        <option value="Stripe Pay">Stripe Pay</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Visa">Visa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Account / Reference</label>
                      <input
                        type="text"
                        value={account.accountId}
                        onChange={(e) => handlePaymentFieldChange(idx, 'accountId', e.target.value)}
                        placeholder="Wallet ID or card number"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-4 py-2.5 text-sm text-primary font-body"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleAddPaymentAccount}
              className="w-full mt-6 py-3 border border-dashed border-outline-variant/40 rounded-lg text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add</span> Add New Payment Account
            </button>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="flex-1 py-3 text-xs font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-high hover:opacity-90 rounded transition-opacity"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setPaymentAccounts(tempPaymentAccounts);
                  setIsPaymentModalOpen(false);
                }}
                className="flex-1 py-3 text-xs font-label uppercase tracking-widest text-on-primary premium-gradient rounded hover:opacity-90 transition-opacity"
              >
                Save Payments
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global-Style Page Footer */}
      <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-slate-50 dark:bg-slate-900 border-t border-slate-200/20 dark:border-slate-800/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-lg font-['Noto_Serif'] italic text-slate-400">Curated Gallery</div>
            <p className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500">© 2024 CURATED GALLERY. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end font-['Manrope'] text-xs tracking-widest uppercase">
            <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Sustainability</a>
            <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Shipping</a>
            <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Returns</a>
            <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Contact</a>
            <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
