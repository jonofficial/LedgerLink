useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/api/data");
            const data = await response.json();
            setDistances(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch data every 5 seconds
    const interval = setInterval(fetchData, 5000);
    fetchData(); // Initial fetch
    return () => clearInterval(interval); // Cleanup on component unmount
}, []);