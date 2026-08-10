export async function checkAuthentication(setIsAuthenticated, setIsAuthLoading, setUserRole) {
    setIsAuthLoading(true);

    try {
        const response = await fetch('https://ecommercesitebackend02.vercel.app/auth-check/', {
            method: 'POST',
            credentials: 'include'
        });

        if (response.status === 200) {
            setIsAuthenticated(true);
            const data = await response.json();
            if (setUserRole) setUserRole(data.role);
        } else {
            setIsAuthenticated(false);
            if (setUserRole) setUserRole(null);
        }
    } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
        if (setUserRole) setUserRole(null);
    } finally {
        setIsAuthLoading(false);
    }
}