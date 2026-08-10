import './SearchPage.css'
import './MobileSearchPage.css'
import { MobileSearchPage } from './MobileSearchPage';
import { DesktopSearchPage } from './DesktopSearchPage';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function SearchResultPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    const query = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);
    
    const [results, setResults] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = new URL('https://ecommercesitebackend02.vercel.app/products-api/');
                if (query) {
                    url.searchParams.append('search', query);
                }
                url.searchParams.append('page', page);
                
                const response = await fetch(url.toString());
                if (!response.ok) {
                    throw new Error('Failed to fetch search results');
                }
                const data = await response.json();
                
                // If backend uses pagination, it returns { count, next, previous, results }
                if (data.results) {
                    setResults(data.results);
                    setCount(data.count);
                } else {
                    setResults(data);
                    setCount(data.length);
                }
            } catch (err) {
                console.error(err);
                setError('An error occurred while searching. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query, page]);

    const handlePageChange = (newPage) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', newPage.toString());
        navigate(`/search?${newParams.toString()}`);
    };

    const handleSearchSubmit = (newQuery) => {
        const newParams = new URLSearchParams();
        if (newQuery.trim()) {
            newParams.set('q', newQuery.trim());
        }
        newParams.set('page', '1');
        navigate(`/search?${newParams.toString()}`);
    };

    return (
        <>
            {isMobile ? (
                <MobileSearchPage 
                    query={query} 
                    results={results} 
                    count={count} 
                    page={page} 
                    loading={loading} 
                    error={error}
                    onPageChange={handlePageChange}
                    onSearchSubmit={handleSearchSubmit}
                />
            ) : (
                <DesktopSearchPage 
                    query={query} 
                    results={results} 
                    count={count} 
                    page={page} 
                    loading={loading} 
                    error={error}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    )
}