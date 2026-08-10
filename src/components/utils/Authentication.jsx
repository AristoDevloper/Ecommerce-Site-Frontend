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

export async function logoutUser(setIsAuthenticated, setUserRole, navigate) {
    try {
        await fetch('https://ecommercesitebackend02.vercel.app/user_logout/', {
            method: 'POST',
            credentials: 'include'
        });
    } catch (error) {
        console.error('Logout error:', error);
    } finally {
        if (setIsAuthenticated) setIsAuthenticated(false);
        if (setUserRole) setUserRole(null);
        if (navigate) navigate('/login');
    }
}