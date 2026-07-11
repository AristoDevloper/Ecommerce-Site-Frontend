import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function MobileAccountPage({ profile, setProfile, addresses, setAddresses, paymentAccounts, setPaymentAccounts, setIsAuthenticated }) {
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

  const signout = async () => {
    try {
      const response = await fetch('http://localhost:8000/user_logout/', {
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
  };

  return (
    <div className="min-h-screen pb-32 bg-background">
      <main className="pt-24 px-6 max-w-md mx-auto">
        {/* User Profile Summary */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-surface-container-low p-1 border border-outline-variant/20">
                <img
                  className="w-full h-full rounded-full object-cover"
                  alt="User Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqId0ioyWYootHQYI3AM_sTWymDZBoA0Kn0_YD_DVnJ_ZoEDVv04hURKOB5sUXx-J0OirBL6WWbXxGq4ZtJx1G_qTV798wHDQmwRPhIuIFmFJiKVSD98PUGF78DNFvruUG1zg7mlNirMHcjlMMUxfQdXbClalL6TFePQSw68z7kVm2QjOjAd4Ru1jBfl2a2glLDSs8FQ4MlMHQ50QgCRIFPdfeU4-cTgE-gd4IcLsy1Ek38oHsTVlhNQ"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-primary-container text-on-primary p-1.5 rounded-full shadow-lg border-2 border-background">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <h1 className="text-3xl font-serif tracking-tight text-primary mb-1">{profile.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-tertiary">{profile.tier}</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-on-surface-variant">Since {profile.since}</span>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
          </div>
        </section>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10 flex flex-col items-center justify-center">
            <span className="text-2xl font-serif text-primary">12</span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-on-surface-variant mt-1">Total Orders</span>
          </div>
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10 flex flex-col items-center justify-center">
            <span className="text-2xl font-serif text-primary">08</span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-on-surface-variant mt-1">Wishlist Items</span>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1">
          <Link className="group flex items-center justify-between p-5 bg-white border border-outline-variant/10 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 active:scale-[0.98]" to="/orders">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-white">
                <span className="material-symbols-outlined">package_2</span>
              </div>
              <span className="text-lg font-serif tracking-tight text-primary">Orders</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </Link>

          <div
            onClick={() => {
              setTempAddresses(JSON.parse(JSON.stringify(addresses)));
              setIsAddressModalOpen(true);
            }}
            className="group flex items-center justify-between p-5 bg-white border border-outline-variant/10 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-white">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <span className="text-lg font-serif tracking-tight text-primary">Addresses</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
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
            className="group flex items-center justify-between p-5 bg-white border border-outline-variant/10 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-white">
                <span className="material-symbols-outlined">manage_accounts</span>
              </div>
              <span className="text-lg font-serif tracking-tight text-primary">Account Details</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </div>

          <div
            onClick={() => {
              setTempPaymentAccounts(JSON.parse(JSON.stringify(paymentAccounts || [])));
              setIsPaymentModalOpen(true);
            }}
            className="group flex items-center justify-between p-5 bg-white border border-outline-variant/10 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-white">
                <span className="material-symbols-outlined">credit_card</span>
              </div>
              <span className="text-lg font-serif tracking-tight text-primary">Payments</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </div>

          <Link className="group flex items-center justify-between p-5 bg-white border border-outline-variant/10 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 active:scale-[0.98]" to="/wishlist">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-white">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <span className="text-lg font-serif tracking-tight text-primary">Wishlist</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </Link>
        </nav>

        {/* Secondary Actions */}
        <div className="mt-12 flex flex-col gap-4 mb-10">
          <button className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-extrabold text-on-surface-variant hover:text-primary transition-colors">
            Contact Concierge
          </button>
          <button
            onClick={signout}
            className="w-full py-5 bg-primary text-on-primary text-[10px] uppercase tracking-[0.2em] font-extrabold rounded shadow-xl shadow-primary/20 active:scale-95 transition-transform"
          >
            Sign Out
          </button>
        </div>
      </main>

      {/* ───── Edit Profile Modal ───── */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 border border-outline-variant/10 relative">
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-xl font-headline text-primary mb-5">Edit Details</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Name</label>
                <input
                  type="text"
                  value={tempProfileName}
                  onChange={(e) => setTempProfileName(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Email</label>
                <input
                  type="email"
                  value={tempProfileEmail}
                  onChange={(e) => setTempProfileEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Default Mobile Number</label>
                <input
                  type="tel"
                  value={tempProfileMobile}
                  onChange={(e) => setTempProfileMobile(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Secondary Email</label>
                <input
                  type="email"
                  value={tempProfileSecondaryEmail}
                  onChange={(e) => setTempProfileSecondaryEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                />
              </div>
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1.5">Gender</label>
                <select
                  value={tempProfileGender}
                  onChange={(e) => setTempProfileGender(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="flex-1 py-2.5 text-[10px] font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-high hover:opacity-90 rounded transition-opacity"
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
                className="flex-1 py-2.5 text-[10px] font-label uppercase tracking-widest text-on-primary bg-primary rounded hover:opacity-90 transition-opacity"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───── Manage Addresses Modal ───── */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full sm:max-w-md p-6 border border-outline-variant/10 relative max-h-[85vh] overflow-y-auto no-scrollbar">
            <button
              onClick={() => setIsAddressModalOpen(false)}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-xl font-headline text-primary mb-5">Destinations</h3>

            <div className="space-y-6">
              {tempAddresses.map((addr, idx) => (
                <div key={idx} className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  {/* Address Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={addr.label}
                        onChange={(e) => handleAddressFieldChange(idx, 'label', e.target.value)}
                        placeholder="Label"
                        className="bg-transparent border-none focus:ring-0 text-base font-headline text-primary p-0 w-24"
                      />
                      {addr.isDefault && (
                        <span className="text-[8px] uppercase tracking-widest font-bold text-tertiary bg-tertiary-fixed/20 px-1.5 py-0.5 rounded">Default</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {!addr.isDefault && (
                        <button
                          onClick={() => handleSetDefault(idx)}
                          className="text-[9px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors"
                        >
                          Set Default
                        </button>
                      )}
                      {tempAddresses.length > 1 && (
                        <button
                          onClick={() => handleRemoveAddress(idx)}
                          className="text-on-surface-variant hover:text-error transition-colors ml-1"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Address Fields */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">Street</label>
                      <input
                        type="text"
                        value={addr.street}
                        onChange={(e) => handleAddressFieldChange(idx, 'street', e.target.value)}
                        placeholder="Street address"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">City</label>
                        <input
                          type="text"
                          value={addr.city}
                          onChange={(e) => handleAddressFieldChange(idx, 'city', e.target.value)}
                          placeholder="City"
                          className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">ZIP</label>
                        <input
                          type="text"
                          value={addr.zip}
                          onChange={(e) => handleAddressFieldChange(idx, 'zip', e.target.value)}
                          placeholder="Postal code"
                          className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">Country</label>
                        <input
                          type="text"
                          value={addr.country}
                          onChange={(e) => handleAddressFieldChange(idx, 'country', e.target.value)}
                          placeholder="Country"
                          className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">Phone</label>
                        <input
                          type="tel"
                          value={addr.phone}
                          onChange={(e) => handleAddressFieldChange(idx, 'phone', e.target.value)}
                          placeholder="+1 234 567 8901"
                          className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Address */}
            <button
              onClick={handleAddAddress}
              className="w-full mt-5 py-2.5 border border-dashed border-outline-variant/40 rounded-lg text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">add</span> Add New Address
            </button>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsAddressModalOpen(false)}
                className="flex-1 py-2.5 text-[10px] font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-high hover:opacity-90 rounded transition-opacity"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setAddresses(tempAddresses);
                  setIsAddressModalOpen(false);
                }}
                className="flex-1 py-2.5 text-[10px] font-label uppercase tracking-widest text-on-primary bg-primary rounded hover:opacity-90 transition-opacity"
              >
                Save All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───── Manage Payment Accounts Modal ───── */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full sm:max-w-md p-6 border border-outline-variant/10 relative max-h-[85vh] overflow-y-auto no-scrollbar">
            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="text-xl font-headline text-primary mb-5">Payment Accounts</h3>

            <div className="space-y-6">
              {tempPaymentAccounts.map((account, idx) => (
                <div key={idx} className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={account.label}
                        onChange={(e) => handlePaymentFieldChange(idx, 'label', e.target.value)}
                        placeholder="Label"
                        className="bg-transparent border-none focus:ring-0 text-base font-headline text-primary p-0 w-28"
                      />
                      {account.isDefault && (
                        <span className="text-[8px] uppercase tracking-widest font-bold text-tertiary bg-tertiary-fixed/20 px-1.5 py-0.5 rounded">Default</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {!account.isDefault && (
                        <button
                          onClick={() => handleSetDefaultPayment(idx)}
                          className="text-[9px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors"
                        >
                          Set Default
                        </button>
                      )}
                      {tempPaymentAccounts.length > 1 && (
                        <button
                          onClick={() => handleRemovePaymentAccount(idx)}
                          className="text-on-surface-variant hover:text-error transition-colors ml-1"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">Method</label>
                      <select
                        value={account.method}
                        onChange={(e) => handlePaymentFieldChange(idx, 'method', e.target.value)}
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                      >
                        <option value="eSewa">eSewa</option>
                        <option value="Khalti">Khalti</option>
                        <option value="Stripe Pay">Stripe Pay</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Visa">Visa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">Account / Reference</label>
                      <input
                        type="text"
                        value={account.accountId}
                        onChange={(e) => handlePaymentFieldChange(idx, 'accountId', e.target.value)}
                        placeholder="Wallet ID or card number"
                        className="w-full bg-white border border-outline-variant/20 focus:border-primary focus:ring-0 rounded px-3 py-2 text-sm text-primary font-body"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleAddPaymentAccount}
              className="w-full mt-5 py-2.5 border border-dashed border-outline-variant/40 rounded-lg text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">add</span> Add New Payment Account
            </button>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="flex-1 py-2.5 text-[10px] font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-high hover:opacity-90 rounded transition-opacity"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setPaymentAccounts(tempPaymentAccounts);
                  setIsPaymentModalOpen(false);
                }}
                className="flex-1 py-2.5 text-[10px] font-label uppercase tracking-widest text-on-primary bg-primary rounded hover:opacity-90 transition-opacity"
              >
                Save Payments
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
