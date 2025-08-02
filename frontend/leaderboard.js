async function fetchLeaderboard() {
    try {
        const response = await fetch('/api/leaderboard');
        const data = await response.json();
        renderLeaderboard(data);
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
    }
}