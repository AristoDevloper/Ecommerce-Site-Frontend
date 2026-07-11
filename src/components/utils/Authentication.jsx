export async function checkAuthentication(setIsAuthenticated, setIsAuthLoading) {
    setIsAuthLoading(true);

    try {
        const response = await fetch('http://localhost:8000/auth-check/', {
            method: 'POST',
            credentials: 'include'
        });

        setIsAuthenticated(response.status === 200);
    } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
    } finally {
        setIsAuthLoading(false);
    }
}